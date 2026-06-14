import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import Stripe from "stripe";

// Inicialização tardia (lazy load) do cliente Stripe para evitar erros caso a chave ainda não esteja configurada
let stripeClient: Stripe | null = null;

function getStripe(): Stripe {
  if (!stripeClient) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("A variável de ambiente STRIPE_SECRET_KEY é obrigatória.");
    }
    // Inicialização da SDK oficial com a versão de API mais recente
    stripeClient = new Stripe(key, {
      apiVersion: "2025-02-18-preview" as any,
    });
  }
  return stripeClient;
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  // Habilitar processamento de conteúdo em formato JSON nas APIs
  app.use(express.json());

  // --- ARÁ DE ROTAS DE API DO SERVIDOR ---

  // Endpoint de status e verificação de chaves configuradas
  app.get("/api/config", (req, res) => {
    res.json({
      stripeConfigured: !!process.env.STRIPE_SECRET_KEY,
      publishableKeyProvided: !!process.env.VITE_STRIPE_PUBLISHABLE_KEY,
    });
  });

  // Proxy Endpoint: Cria uma intenção de pagamento Stripe de forma segura (escondendo todas as chaves)
  app.post("/api/create-payment-intent", async (req, res) => {
    try {
      const { amount, currency = "eur", donorName, donorEmail } = req.body;

      if (!amount || amount <= 0) {
        res.status(400).json({ error: "O valor informado é inválido." });
        return;
      }

      // Garante a existência da chave secreta
      const stripe = getStripe();

      // Criação da intenção no Stripe (Em Eur)
      // Customizado com metadados detalhados do doador para monitoramento e auditoria no painel do cliente
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convertido para centavos (ex: 50.00 EUR vira 5000 centavos)
        currency: currency.toLowerCase(),
        metadata: {
          donorName: donorName || "Apoiador Anônimo",
          donorEmail: donorEmail || "Sem email informado",
          sourcePlatform: "Aluminitech White-Label Donation Portal",
        },
      });

      // Retorna apenas os tokens necessários para o frontend confirmar o pagamento sem expor nada de Stripe
      res.json({
        clientSecret: paymentIntent.client_secret,
        id: paymentIntent.id,
      });
    } catch (error: any) {
      console.error("Erro ao criar PaymentIntent:", error.message);
      res.status(500).json({ error: error.message || "Erro interno no processamento do pagamento." });
    }
  });

  // --- CONFIGURAÇÃO DO MIDDLEWARE VITE ---
  
  if (process.env.NODE_ENV !== "production") {
    // Modo Desenvolvimento: Uso do Vite como middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Modo Produção: Servindo os arquivos estáticos compilados pela build do Vite
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    // Roteamento SPA Fallback (Padrão /:any* compatível com Express v5 / path-to-regexp v8)
    app.get("/:any*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Aluminitech Server] Porta ativa em: http://0.0.0.0:${PORT}`);
  });
}

// Inicia as operações
startServer().catch((err) => {
  console.error("Erro fatal na inicialização do servidor:", err);
});
