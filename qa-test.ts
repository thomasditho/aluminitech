import Stripe from "stripe";
import fs from "fs";
import path from "path";

// Carregar variáveis do .env manualmente para o teste local
try {
  const envPath = path.join(process.cwd(), ".env");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf8");
    envContent.split("\n").forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;
      const index = trimmed.indexOf("=");
      if (index !== -1) {
        const key = trimmed.substring(0, index).trim();
        const value = trimmed.substring(index + 1).trim();
        process.env[key] = value;
      }
    });
  }
} catch (err: any) {
  console.log("⚠️ Não foi possível carregar o arquivo .env:", err.message);
}

async function runQA() {
  console.log("==================================================================");
  console.log("🔍 [QA TEST] INICIANDO CONTROLE DE QUALIDADE - PORTAL ALUMINITECH");
  console.log("==================================================================");

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const publishableKey = process.env.VITE_STRIPE_PUBLISHABLE_KEY;

  console.log(`📡 VITE_STRIPE_PUBLISHABLE_KEY: ${publishableKey ? "Configurada (" + publishableKey.substring(0, 15) + "...)" : "❌ Ausente"}`);
  console.log(`🔒 STRIPE_SECRET_KEY:          ${stripeKey ? "Configurada (" + stripeKey.substring(0, 15) + "...)" : "❌ Ausente"}`);

  if (!stripeKey) {
    console.error("\n❌ ERRO FATAL: A variável STRIPE_SECRET_KEY não foi encontrada.");
    console.log("Configure a chave em seu arquivo .env ou no painel da Railway.");
    console.log("==================================================================");
    return;
  }

  try {
    console.log("\n⚡ Entrando em contato direto com a API Oficial do Stripe...");
    
    const stripe = new Stripe(stripeKey);

    console.log("💸 Solicitando a criação de uma cobrança de teste de € 1,50...");
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 150, // € 1.50
      currency: "eur",
      metadata: {
        purpose: "Aluminitech QA Verification Test",
        timestamp: new Date().toISOString(),
      },
    });

    console.log("\n🥇 SUCESSO ABSOLUTO! TUDO FUNCIONANDO PERFEITAMENTE!");
    console.log("------------------------------------------------------------------");
    console.log(`✅ Conexão estabelecida com os servidores da Stripe.`);
    console.log(`✅ Credenciais secretadas são válidas e aceitas.`);
    console.log(`✅ PaymentIntent gerado com sucesso.`);
    console.log(`🆔 ID do Pagamento:       ${paymentIntent.id}`);
    console.log(`🔑 Client Secret Token:  ${paymentIntent.client_secret ? "Válido e recebido" : "❌ Falhou"}`);
    console.log(`📈 Estado da Transação:  ${paymentIntent.status.toUpperCase()}`);
    console.log("------------------------------------------------------------------");

    // Cancelando a intenção de teste para deixar o painel do cliente limpo
    try {
      console.log("🧹 Limpando o ambiente: cancelando pagamento temporário de teste...");
      await stripe.paymentIntents.cancel(paymentIntent.id);
      console.log("✅ Cobrança de teste cancelada para evitar duplicações no painel.");
    } catch (cancelErr: any) {
      console.log("ℹ️ Nota: Não foi possível cancelar automaticamente a cobrança, mas a criação funcionou perfeitamente.");
    }

  } catch (error: any) {
    console.error("\n❌ FALHA NA INTEGRAÇÃO DO STRIPE:");
    console.error(`Mensagem de erro: ${error.message}`);
    console.error("\n💡 SOLUÇÃO SUGERIDA:");
    if (error.message.includes("Invalid API Key")) {
      console.error("- Sua chave STRIPE_SECRET_KEY é inválida. Verifique por espaços extras ou digitação errada.");
    } else {
      console.error("- Verifique suas credenciais do Stripe ou certifique-se de que a conta não esteja suspensa.");
    }
  }
  console.log("==================================================================");
}

runQA().catch((err) => {
  console.error("Erro inesperado no roteiro de testes:", err);
});
