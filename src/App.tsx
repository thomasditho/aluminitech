import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import alloyImg from "@/assets/project-alloy.jpg";
import recycleImg from "@/assets/project-recycle.jpg";
import conductorImg from "@/assets/project-conductor.jpg";
import { LanguageType, translations } from "./translations";

// Inicializa a promessa de carregamento do Stripe com a chave de ambiente pública (caso exista)
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "";
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

interface Project {
  tag: string;
  title: string;
  description: string;
  progress: number;
  raised: string;
  goal: string;
  img: string;
}

// Configuração atualizada para valores em Euros (€)
const projects: Project[] = [
  {
    tag: "Liga Aero-X1",
    title: "Ligas de Ultra-Resistência",
    description:
      "Desenvolvimento de ligas ultraleves para redução drástica de consumo energético em transporte aeroespacial de alta performance.",
    progress: 64,
    raised: "€ 420.000",
    goal: "€ 650.000",
    img: alloyImg,
  },
  {
    tag: "Termo-Reciclagem",
    title: "Reciclagem Termoquímica",
    description:
      "Processo patenteado de purificação de sucata de alumínio com zero emissões atmosféricas de CO2 no ciclo térmico.",
    progress: 82,
    raised: "€ 820.000",
    goal: "€ 1.000.000",
    img: recycleImg,
  },
  {
    tag: "Condutores S-2",
    title: "Dissipação de Alta Performance",
    description:
      "Miniaturização de dissipadores térmicos de alumínio de alta pureza para nova geração de semicondutores.",
    progress: 21,
    raised: "€ 150.000",
    goal: "€ 700.000",
    img: conductorImg,
  },
];

const stats = [
  { value: "€ 2.4M", label: "Captado Global" },
  { value: "12", label: "Patentes Registradas" },
  { value: "142", label: "Pesquisadores Ativos" },
  { value: "85%", label: "Eficiência de Ciclo" },
];

const tiers = [
  {
    name: "Catalisador",
    price: "€ 15.000",
    value: 15000,
    desc: "Acesso direto aos relatórios mensais de progresso de tecnologia mineral.",
    benefits: ["Newsletter do laboratório", "Mural digital de fundadores (Opcional)", "Relatório anual formatado em PDF"],
  },
  {
    name: "Inovador",
    price: "€ 50.000",
    value: 50000,
    desc: "Relatórios avançados e convite para apresentação semestral técnica online.",
    benefits: ["Todos os benefícios de Catalisador", "Acesso a webinars privados", "Certificado digital de investidor científico"],
  },
  {
    name: "Visionário",
    price: "€ 250.000",
    value: 250000,
    desc: "Acesso VIP vitalício ao simpósio Aluminitech e visita guiada anual.",
    featured: true,
    benefits: ["Todos os benefícios de Inovador", "Assento VIP no simpósio presencial", "Visita técnica programada ao laboratório"],
  },
];

// Opções de estilização do Stripe CardElement para fundir perfeitamente com o tema claro e refinado de pagamento
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#0f172a",
      fontFamily: "Inter, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "14px",
      "::placeholder": {
        color: "#94a3b8",
      },
      iconColor: "#f97316",
    },
    invalid: {
      color: "#ef4444",
      iconColor: "#ef4444",
    },
  },
};

// Componente de Logotipo Premium da Visa (SVG)
const VisaLogo = () => (
  <svg viewBox="0 0 24 16" className="w-8 h-5 rounded border border-slate-200 shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" rx="2" fill="#1A1F71"/>
    <path d="M9.62 11.75l1.35-4.88h1.66l-1.35 4.88H9.62zm7.15-4.75c-.29-.11-.75-.22-1.32-.22-1.45 0-2.47.74-2.48 1.77 0 .77.72 1.2 1.28 1.46.57.26.76.43.76.67s-.36.53-.89.53c-.6 0-.92-.1-.1.2H14c.1-.01.99.2 1.45.2 1.54 0 2.54-.73 2.56-1.85 0-1.22-.88-1.43-1.46-1.69-.4-.19-.64-.31-.64-.5 0-.17.2-.35.64-.35.35 0 .61.07.81.15l.1.04.97-5.59zm2.29-.13h-1.21c-.37 0-.66.1-.82.49l-2.08 4.76h1.66l1.3-4.25h1.21L19.06 6.87zm-8.15.01L8.13 11.75H6.04L4.41 6.88h1.85c.39 0 .72.28.8.64l.5 2.61 1.15-3.18h1.74z" fill="#FFF"/>
    <path d="M6.04 6.88H4.41L4.41 8.5H6.04V6.88z" fill="#FFD700"/>
  </svg>
);

// Bandeiras individuais ultra nítidas e estilizadas com cores reais das marcas
const VisaLogoSvg = () => <VisaLogo />;

const MastercardLogoSvg = () => (
  <svg viewBox="0 0 24 16" className="w-8 h-5 rounded border border-slate-200 shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" rx="2" fill="#111111"/>
    <circle cx="9.5" cy="8" r="4.5" fill="#EB001B"/>
    <circle cx="14.5" cy="8" r="4.5" fill="#F79E1B" fillOpacity="0.85"/>
  </svg>
);

const AmexLogoSvg = () => (
  <svg viewBox="0 0 24 16" className="w-8 h-5 rounded border border-slate-200 shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" rx="2" fill="#0185FF"/>
    <text x="12" y="10.5" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="middle" letterSpacing="-0.2">AMEX</text>
  </svg>
);

const EloLogoSvg = () => (
  <svg viewBox="0 0 24 16" className="w-8 h-5 rounded border border-slate-200 shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" rx="2" fill="#1F2937"/>
    <text x="12" y="10.5" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="system-ui, sans-serif" textAnchor="middle" fontStyle="italic">elo</text>
    <circle cx="5" cy="8" r="1.5" fill="#E61C24"/>
    <circle cx="19" cy="8" r="1.5" fill="#009BD8"/>
  </svg>
);

const DinersLogoSvg = () => (
  <svg viewBox="0 0 24 16" className="w-8 h-5 rounded border border-slate-200 shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" rx="2" fill="#004A97"/>
    <circle cx="12" cy="8" r="4" stroke="#FFF" strokeWidth="1" strokeDasharray="2 1"/>
    <text x="12" y="10" fill="#FFFFFF" fontSize="5" fontWeight="bold" fontFamily="system-ui, sans-serif" textAnchor="middle">D</text>
  </svg>
);

const currencies = {
  EUR: { symbol: "€", code: "eur", rate: 1.0, label: "Euro (EUR)", locale: "de-DE" },
  BRL: { symbol: "R$", code: "brl", rate: 6.0, label: "Real (BRL)", locale: "pt-BR" },
  USD: { symbol: "$", code: "usd", rate: 1.08, label: "Dólar (USD)", locale: "en-US" },
};
type CurrencyType = "EUR" | "BRL" | "USD";

interface CheckoutFormProps {
  amount: number;
  currency: CurrencyType;
  currencySymbol: string;
  tierName: string;
  lang: LanguageType;
  onSuccess: (amount: number, donorName: string, donorEmail: string) => void;
}

// 1. FORMULÁRIO DE PRODUÇÃO SECRETO E PRIVADO (USANDO STRIPE REAL EM CANAL SEGURO)
function RealCheckoutForm({ amount, currency, currencySymbol, tierName, lang, onSuccess }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const t = translations[lang].checkout;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!donorName || !donorEmail) {
      setErrorMessage(lang === "PT" ? "Por favor, preencha seu nome e e-mail." : "Please fill in your name and email.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    const cardNumberElement = elements?.getElement(CardNumberElement);
    if (!cardNumberElement || !stripe) {
      setErrorMessage(lang === "PT" ? "Problema interno ao carregar o módulo de pagamento seguro." : "Internal issue loading the secure payment module.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          currency: currencies[currency].code,
          donorName,
          donorEmail,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || (lang === "PT" ? "Erro ao gerar canal seguro de pagamento." : "Error generating secure payment channel."));
      }

      const clientSecret = data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumberElement,
          billing_details: {
            name: donorName,
            email: donorEmail,
          },
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      if (result.paymentIntent?.status === "succeeded") {
        onSuccess(amount, donorName, donorEmail);
      } else {
        throw new Error(lang === "PT" ? "O pagamento não pôde ser completado." : "Payment could not be completed.");
      }
    } catch (err: any) {
      console.error("Falha no pagamento:", err);
      setErrorMessage(err.message || (lang === "PT" ? "Ocorreu um erro ao processar o seu pagamento." : "An error occurred while processing your payment."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="donor-name-real" className="text-xs font-semibold text-slate-700 tracking-wide block mb-1">
          {t.nameLabel}
        </label>
        <input
          id="donor-name-real"
          type="text"
          required
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          placeholder="Ex: Gabriel Santos"
          className="w-full bg-white border border-slate-200 text-sm text-slate-900 px-3 py-2.5 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-all placeholder:text-slate-400 font-medium"
        />
      </div>

      <div>
        <label htmlFor="donor-email-real" className="text-xs font-semibold text-slate-700 tracking-wide block mb-1">
          {t.emailLabel}
        </label>
        <input
          id="donor-email-real"
          type="email"
          required
          value={donorEmail}
          onChange={(e) => setDonorEmail(e.target.value)}
          placeholder="seu@email.com"
          className="w-full bg-white border border-slate-200 text-sm text-slate-900 px-3 py-2.5 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-all placeholder:text-slate-400 font-medium"
        />
      </div>

      <div>
        <label className="text-xs font-semibold text-slate-700 tracking-wide block mb-1">
          {t.cardNumberLabel}
        </label>
        <div className="w-full bg-white border border-slate-200 px-3 py-3 rounded-lg focus-within:border-[#f97316] focus-within:ring-1 focus-within:ring-[#f97316] transition-all">
          <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-slate-700 tracking-wide block mb-1">
            {t.expiryLabel}
          </label>
          <div className="w-full bg-white border border-slate-200 px-3 py-3 rounded-lg focus-within:border-[#f97316] focus-within:ring-1 focus-within:ring-[#f97316] transition-all">
            <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-700 tracking-wide block mb-1">
            {t.cvcLabel}
          </label>
          <div className="w-full bg-white border border-slate-200 px-3 py-3 rounded-lg focus-within:border-[#f97316] focus-within:ring-1 focus-within:ring-[#f97316] transition-all">
            <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-100 text-[#bf1d27] text-xs rounded-lg font-medium">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 px-4 rounded-lg text-xs uppercase tracking-widest active:scale-[0.98] transition-all shadow-md shadow-orange-500/10 disabled:opacity-50"
      >
        {loading ? t.processing : `${t.confirmPaymentPrefix} • ${currencySymbol} ${amount}`}
      </button>

      {/* Trust icons underneath */}
      <div className="pt-4 border-t border-slate-100 flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold tracking-wider font-mono text-slate-400 uppercase">
          {t.acceptedBrands}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          <VisaLogoSvg />
          <MastercardLogoSvg />
          <AmexLogoSvg />
          <EloLogoSvg />
          <DinersLogoSvg />
        </div>
        <p className="text-[9px] text-slate-400 text-center font-sans">
          {t.realSecureDisclaimer}
        </p>
      </div>
    </form>
  );
}

// 2. SIMULADOR HÍBRIDO E INTERATIVO DE ALTA FIDELIDADE (VIRTUAL CREDIT CARD & VISA NET)
function MockCheckoutForm({ amount, currency, currencySymbol, tierName, lang, onSuccess }: CheckoutFormProps) {
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [stepText, setStepText] = useState("");

  const t = translations[lang].checkout;

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    const formatted = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    setCardExpiry(value);
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 3) value = value.slice(0, 3);
    setCardCvc(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!donorName || !donorEmail || !cardNumber || !cardExpiry || !cardCvc) {
      setErrorMessage(lang === "PT" ? "Por favor, preencha todos os dados de cobrança." : "Please fill in all billing information.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    const traceSteps = lang === "PT" ? [
      "Iniciando handshake seguro...",
      "Criptografando payload de dados pelo canal VISA Net...",
      `Processando equivalência líquida em ${currencies[currency].label}...`,
      "Doação autorizada com sucesso!"
    ] : [
      "Starting secure handshake...",
      "Encrypting data payload over VISA Net channel...",
      `Processing net equivalence in ${currencies[currency].label}...`,
      "Contribution authorized successfully!"
    ];

    let currentStep = 0;
    setStepText(traceSteps[0]);

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < traceSteps.length) {
        setStepText(traceSteps[currentStep]);
      } else {
        clearInterval(interval);
        setLoading(false);
        onSuccess(amount, donorName, donorEmail);
      }
    }, 700);
  };

  return (
    <div className="space-y-6 text-left">
      {/* COMPACT & IMMACULATELY SIZED CREDIT CARD MOUNT */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-[280px] aspect-[1.586/1] rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-neutral-900 border border-zinc-800 text-white p-4 flex flex-col justify-between overflow-shadow select-none shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-[8px] font-extrabold tracking-widest text-[#f97316] uppercase">ALUMINITECH</span>
              <span className="text-[5px] text-zinc-500 uppercase tracking-widest font-semibold font-mono">{lang === "PT" ? "LABS GLOBAL APORTE" : "LABS GLOBAL CONTRIBUTION"}</span>
            </div>
            <VisaLogoSvg />
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-5.5 rounded bg-gradient-to-br from-yellow-300/40 via-yellow-400/20 to-amber-600/10 border border-yellow-500/20 flex p-0.5" />
            <svg className="w-3 h-3 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" d="M12 18a6 6 0 000-12m3.5 14.5a10 10 0 000-17" />
            </svg>
          </div>

          <div>
            <div className="font-mono text-white text-xs tracking-widest">
              {cardNumber || "•••• •••• •••• ••••"}
            </div>
            <div className="flex justify-between items-end mt-2">
              <div className="flex flex-col">
                <span className="text-[5px] uppercase font-bold text-zinc-500 tracking-widest">{lang === "PT" ? "Titular" : "Cardholder"}</span>
                <span className="font-mono text-[8px] text-zinc-300 uppercase truncate max-w-[130px]">
                  {donorName || (lang === "PT" ? "NOME DO APOIADOR" : "CONTRIBUTOR NAME")}
                </span>
              </div>
              <div className="flex gap-2.5">
                <div className="flex flex-col items-center">
                  <span className="text-[5px] uppercase font-bold text-zinc-500 tracking-widest">VALID</span>
                  <span className="font-mono text-[8px] text-zinc-300">
                    {cardExpiry || "MM/AA"}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[5px] uppercase font-bold text-zinc-500 tracking-widest">CVC</span>
                  <span className="font-mono text-[8px] text-zinc-300">
                    {cardCvc || "•••"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FORM FIELDS */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="donor-name-mock" className="text-xs font-semibold text-slate-700 tracking-wide block mb-1">
            {t.nameLabel}
          </label>
          <input
            id="donor-name-mock"
            type="text"
            required
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            placeholder="Ex: Gabriel Santos"
            className="w-full bg-white border border-slate-200 text-sm text-slate-900 px-3 py-2.5 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-all placeholder:text-slate-400 font-medium"
          />
        </div>

        <div>
          <label htmlFor="donor-email-mock" className="text-xs font-semibold text-slate-700 tracking-wide block mb-1">
            {lang === "PT" ? "E-mail para Recibo e Boletins" : "Email for Receipt and Bulletins"}
          </label>
          <input
            id="donor-email-mock"
            type="email"
            required
            value={donorEmail}
            onChange={(e) => setDonorEmail(e.target.value)}
            placeholder="seu@email.com"
            className="w-full bg-white border border-slate-200 text-sm text-slate-900 px-3 py-2.5 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-all placeholder:text-slate-400 font-medium"
          />
        </div>

        <div>
          <label htmlFor="card-number-mock" className="text-xs font-semibold text-slate-700 tracking-wide block mb-1">
            {t.cardNumberLabel}
          </label>
          <input
            id="card-number-mock"
            type="text"
            required
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="4000 1234 5678 9010"
            className="w-full bg-white border border-slate-200 text-sm text-slate-900 px-3 py-2.5 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-all placeholder:text-slate-400 font-mono tracking-widest font-medium"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="card-expiry-mock" className="text-xs font-semibold text-slate-700 tracking-wide block mb-1">
              {t.expiryLabel}
            </label>
            <input
              id="card-expiry-mock"
              type="text"
              required
              value={cardExpiry}
              onChange={handleExpiryChange}
              placeholder="12/28"
              className="w-full bg-white border border-slate-200 text-sm text-slate-900 px-3 py-2.5 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-all placeholder:text-slate-400 font-mono text-center font-medium"
            />
          </div>
          <div>
            <label htmlFor="card-cvc-mock" className="text-xs font-semibold text-slate-700 tracking-wide block mb-1">
              {t.cvcLabel}
            </label>
            <input
              id="card-cvc-mock"
              type="text"
              required
              value={cardCvc}
              onChange={handleCvcChange}
              placeholder="123"
              className="w-full bg-white border border-slate-200 text-sm text-slate-900 px-3 py-2.5 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-all placeholder:text-slate-400 font-mono text-center font-medium"
            />
          </div>
        </div>

        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-100 text-[#bf1d27] text-xs rounded-lg font-medium">
            {errorMessage}
          </div>
        )}

        {loading ? (
          <div className="flex flex-col gap-2 items-center justify-center py-3 bg-[#f97316]/5 border border-[#f97316]/10 rounded-lg text-xs font-semibold text-[#f97316] text-center px-3">
            <span className="size-4 rounded-full border-2 border-[#f97316] border-t-transparent animate-spin shrink-0 block" />
            <span className="font-mono text-[9px] uppercase tracking-wide">{stepText}</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-1.5 py-1 text-slate-400 text-[10px] uppercase font-mono tracking-wider">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{lang === "PT" ? "Processamento Direct VISA/Mastercard Ativo" : "Active Direct VISA/Mastercard Processing"}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 px-4 rounded-lg text-xs uppercase tracking-widest active:scale-[0.98] transition-all shadow-md shadow-orange-500/10 disabled:opacity-50"
        >
          {loading ? t.synchronizing : `${t.confirmPaymentPrefix} • ${currencySymbol} ${amount}`}
        </button>

        {/* Brand logos in a beautiful row below */}
        <div className="pt-4 border-t border-slate-100 flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold tracking-wider font-mono text-slate-400 uppercase">
            {t.acceptedBrands}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <VisaLogoSvg />
            <MastercardLogoSvg />
            <AmexLogoSvg />
            <EloLogoSvg />
            <DinersLogoSvg />
          </div>
          <p className="text-[9px] text-slate-400 text-center font-sans">
            {t.mockSecureDisclaimer}
          </p>
        </div>
      </form>
    </div>
  );
}

// Componente de Seleção de Moeda Premium com visual refinado
const CurrencySelector = ({ current, onChange, theme = "dark" }: { current: CurrencyType; onChange: (c: CurrencyType) => void; theme?: "dark" | "light" }) => {
  return (
    <div className={`inline-flex rounded-lg p-0.5 border ${
      theme === "dark" 
        ? "bg-zinc-950 border-zinc-800" 
        : "bg-slate-100 border-slate-200"
    }`}>
      {(Object.keys(currencies) as CurrencyType[]).map((c) => {
        const isActive = current === c;
        return (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            className={`px-2 py-1 text-[10px] sm:text-xs font-bold font-mono rounded transition-all ${
              isActive
                ? "bg-[#f97316] text-white shadow-sm"
                : theme === "dark"
                  ? "text-zinc-500 hover:text-zinc-300"
                  : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
};

// Componente de Seleção de Idioma Premium
const LanguageSelector = ({ current, onChange, theme = "dark" }: { current: LanguageType; onChange: (l: LanguageType) => void; theme?: "dark" | "light" }) => {
  return (
    <div className={`inline-flex rounded-lg p-0.5 border ${
      theme === "dark" 
        ? "bg-zinc-950 border-zinc-800" 
        : "bg-slate-100 border-slate-200"
    }`}>
      {(["PT", "EN"] as LanguageType[]).map((l) => {
        const isActive = current === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => onChange(l)}
            className={`px-2 py-1 text-[10px] sm:text-xs font-bold font-mono rounded transition-all ${
              isActive
                ? "bg-[#f97316] text-white shadow-sm"
                : theme === "dark"
                  ? "text-zinc-500 hover:text-zinc-300"
                  : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<"landing" | "checkout">("landing");
  const [currency, setCurrency] = useState<CurrencyType>("BRL");
  const [lang, setLang] = useState<LanguageType>("PT");
  const [selectedTier, setSelectedTier] = useState<typeof tiers[0] | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("150");
  const [isSuccess, setIsSuccess] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalPrice, setModalPrice] = useState(0);
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");

  const t = translations[lang];

  const statsKeys = ["raised", "patents", "researchers", "efficiency"] as const;
  const translatedStats = stats.map((s, idx) => ({
    value: s.value,
    label: t.stats[statsKeys[idx]]
  }));

  const translatedProjects = projects.map((p, idx) => {
    const translation = t.projectsSection.projectsList[idx];
    return {
      ...p,
      tag: translation?.tag || p.tag,
      title: translation?.title || p.title,
      description: translation?.description || p.description,
    };
  });

  const translatedTiers = tiers.map((tier, idx) => {
    const translation = t.tiersSection.tiersList[idx];
    return {
      ...tier,
      name: translation?.name || tier.name,
      desc: translation?.desc || tier.desc,
      benefits: translation?.benefits || tier.benefits,
    };
  });

  const [backendConfig, setBackendConfig] = useState({ stripeConfigured: false, publishableKeyProvided: false });

  useEffect(() => {
    fetch("/api/config")
      .then((res) => res.json())
      .then((data) => setBackendConfig(data))
      .catch(() => {});
  }, [view]);

  const handleOpenDonation = (tier: typeof tiers[0] | null) => {
    setIsSuccess(false);
    if (tier) {
      setSelectedTier(tier);
      setModalTitle(tier.name);
      setModalPrice(Math.round(tier.value * currencies[currency].rate));
    } else {
      setSelectedTier(null);
      setModalTitle(lang === "PT" ? "Contribuição Personalizada" : "Custom Contribution");
      setModalPrice(Number(customAmount) || (currency === "BRL" ? 150 : 25));
    }
    setView("checkout");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      setCustomAmount(val);
    }
  };

  const handlePaymentSuccess = (amount: number, name: string, email: string) => {
    setModalPrice(amount);
    setDonorName(name);
    setDonorEmail(email);
    setIsSuccess(true);
  };

  // RENDERIZAÇÃO DA PÁGINA COMPLETA DE CHECKOUT (SAAS LIGHT STYLE - ULTRA CONVENIENT)
  if (view === "checkout") {
    const tc = translations[lang].checkout;
    return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-[#f97316]/20 selection:text-slate-900 flex flex-col justify-between font-sans">
        {/* Navigation Bar for Checkout (Light Minimalist) */}
        <header className="border-b border-slate-200 bg-white/95 backdrop-blur-md py-4 sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setView("landing")}
                className="group flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-950 transition-colors"
                title={lang === "PT" ? "Voltar" : "Back"}
              >
                <svg className="size-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span>{tc.backBtn}</span>
              </button>
              <div className="h-4 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <div className="size-4.5 bg-[#f97316] rounded flex items-center justify-center font-bold text-white text-[9px] shadow-sm">
                  AL
                </div>
                <span className="font-bold tracking-wider text-slate-900 text-xs uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {tc.portalName}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 font-sans">
              <LanguageSelector current={lang} onChange={setLang} theme="light" />
              <CurrencySelector current={currency} onChange={(c) => {
                setCurrency(c);
                if (selectedTier) {
                  setModalPrice(Math.round(selectedTier.value * currencies[c].rate));
                } else {
                  setModalPrice(Math.round(Number(customAmount) * currencies[c].rate) || (c === "BRL" ? 150 : 25));
                }
              }} theme="light" />
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-slate-50 border border-slate-200 rounded text-[9px] font-mono font-semibold tracking-wider text-slate-500 uppercase">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>SSL 256-Bit</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-10 md:py-14">
          {!isSuccess ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Direct Transaction Summary */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#f97316] font-mono">{tc.selectedBadge}</span>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                    {tc.scientificFunding}
                  </h2>
                </div>

                {/* Compact Order Receipt Style Badge */}
                <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-mono uppercase tracking-widest font-bold text-slate-400">{tc.allocatedProgram}</span>
                    <h4 className="text-lg font-bold text-slate-950">
                      {selectedTier ? (lang === "PT" ? selectedTier.name : (selectedTier.name === "Catalisador" ? "Catalyst" : selectedTier.name === "Inovador" ? "Innovator" : "Visionary")) : modalTitle}
                    </h4>
                  </div>

                  <div className="border-t border-slate-200 pt-3">
                    <span className="text-[9px] font-mono uppercase tracking-widest font-bold text-slate-400 block mb-1.5">{tc.totalAmount}</span>
                    <div className="text-4xl font-black text-[#f97316] font-mono tracking-tight leading-none animate-fade-in">
                      {currencies[currency].symbol} {modalPrice.toLocaleString(currencies[currency].locale, { minimumFractionDigits: 2 })}
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-3">
                    <span className="text-[9px] font-mono uppercase tracking-widest font-bold text-slate-400 block mb-1.5">{tc.rewardsTitle}:</span>
                    <ul className="space-y-1.5">
                      {selectedTier ? (lang === "PT" ? selectedTier.benefits : translations.EN.tiersSection.tiersList[selectedTier.name === "Catalisador" ? 0 : selectedTier.name === "Inovador" ? 1 : 2].benefits).map((b, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5 leading-relaxed">
                          <span className="text-[#f97316] font-extrabold text-[10px]">✓</span>
                          <span>{b}</span>
                        </li>
                      )) : (
                        <li className="text-xs text-slate-100 flex items-start gap-1.5 leading-relaxed">
                          <span className="text-[#f97316] font-extrabold text-[10px]">✓</span>
                          <span className="text-slate-600">{tc.customRewardDesc}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                  {tc.disclaimer}
                </p>
              </div>

              {/* Right Column: Premium Form Element */}
              <div className="lg:col-span-7">
                <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 md:p-8">
                  <div className="mb-6 space-y-1 text-left">
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {tc.billingInfoTitle}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {tc.billingInfoSub}
                    </p>
                  </div>

                  <div className="w-full">
                    {stripePromise ? (
                      <Elements stripe={stripePromise}>
                        <RealCheckoutForm
                          amount={modalPrice}
                          currency={currency}
                          currencySymbol={currencies[currency].symbol}
                          tierName={modalTitle}
                          lang={lang}
                          onSuccess={handlePaymentSuccess}
                        />
                      </Elements>
                    ) : (
                      <MockCheckoutForm
                        amount={modalPrice}
                        currency={currency}
                        currencySymbol={currencies[currency].symbol}
                        tierName={modalTitle}
                        lang={lang}
                        onSuccess={handlePaymentSuccess}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Super Detailed Success Screen */
            <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-3xl p-8 text-center space-y-6 shadow-sm">
              <div className="mx-auto size-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 text-2xl font-bold shadow-sm">
                ✓
              </div>

              <div className="space-y-1.5">
                <span className="text-[9px] font-mono uppercase tracking-widest font-bold text-emerald-600 block">{tc.successBadge}</span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight font-display">
                  {tc.successTitle}
                </h3>
                <p className="text-xs text-slate-500 max-w-[34ch] mx-auto leading-relaxed">
                  {tc.successDesc}
                </p>
              </div>

              {/* Official Receipt */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-left space-y-3 font-mono text-[11px] text-slate-600">
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-200 text-[10px] text-slate-400 font-bold">
                  <span>{tc.receiptHeader}</span>
                  <span>Trace: #ALM-{9148}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between gap-2">
                    <span className="text-slate-400 text-[10px]">{tc.receiptDonor}</span>
                    <span className="text-slate-800 font-bold uppercase truncate max-w-[180px]">{donorName || "Gabriel Santos"}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-slate-400 text-[10px]">{tc.receiptEmail}</span>
                    <span className="text-slate-800 truncate max-w-[180px]">{donorEmail || "seu@email.com"}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-slate-400 text-[10px]">{tc.receiptProgram}</span>
                    <span className="text-slate-800 font-semibold">
                      {selectedTier ? (lang === "PT" ? selectedTier.name : (selectedTier.name === "Catalisador" ? "Catalyst" : selectedTier.name === "Inovador" ? "Innovator" : "Visionary")) : modalTitle}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-slate-400 text-[10px]">{tc.receiptMethod}</span>
                    <span className="text-slate-800 font-semibold">VISA NET DIRECT</span>
                  </div>
                  <div className="flex justify-between pt-2.5 border-t border-slate-200 font-bold text-xs text-slate-800">
                    <span>{tc.receiptNet}</span>
                    <span className="text-[#f97316]">{currencies[currency].symbol} {modalPrice.toLocaleString(currencies[currency].locale, { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-200 text-center text-[8px] text-slate-400 space-y-0.5">
                  <p>ALUMINITECH LABS S.A. | PARQUE TECNOLÓGICO BH-TEC</p>
                  <p className="text-[7.5px]">SHA256//d94cf288eb9fe25aeaa74</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-lg text-xs transition-all active:scale-[0.98]"
                >
                  {tc.printBtn}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setView("landing");
                  }}
                  className="w-full bg-[#f97316] text-white font-extrabold py-2.5 px-4 rounded-lg text-xs transition-all hover:bg-[#ea580c] active:scale-[0.98]"
                >
                  {tc.backToPortalBtn}
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Short footer for checkout */}
        <footer className="py-6 border-t border-slate-200 bg-white text-center font-mono text-[9px] text-slate-400">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-4 justify-between items-center">
            <p>{tc.termsText}</p>
            <div className="flex gap-4 items-center">
              <VisaLogoSvg />
              <span className="font-semibold tracking-wider font-mono text-[8px]">{tc.certifiedText}</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // PORTAL PRINCIPAL (LANDING PAGE)
  return (
    <div className="min-h-screen bg-[#09090b] text-[#e4e4e7] selection:bg-[#f97316]/30 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-zinc-800/60 bg-[#09090b]/80 backdrop-blur-md py-4 transition-all">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="size-6 bg-[#f97316] rounded flex items-center justify-center font-bold text-zinc-950 text-xs shadow-lg shadow-[#f97316]/20">
              AL
            </div>
            <span 
              className="font-bold tracking-wider text-white text-base" 
              style={{ fontFamily: "var(--font-display)" }}
            >
              ALUMINITECH
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 text-sm font-medium text-zinc-400">
            <a href="#projetos" className="hover:text-[#f97316] transition-colors hidden md:inline">{t.navbar.projects}</a>
            <a href="#impacto" className="hover:text-[#f97316] transition-colors hidden md:inline">{t.navbar.impact}</a>
            <a href="#doar" className="hover:text-[#f97316] transition-colors hidden md:inline">{t.navbar.tiers}</a>
            <LanguageSelector current={lang} onChange={setLang} theme="dark" />
            <CurrencySelector current={currency} onChange={(c) => {
              setCurrency(c);
              if (customAmount === "25" || customAmount === "150") {
                setCustomAmount(c === "BRL" ? "150" : "25");
              }
            }} theme="dark" />
            <a
              href="#doar"
              className="bg-[#f97316] text-zinc-950 px-4 py-2 rounded font-semibold text-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-[#f97316]/20 shadow-md"
            >
              {t.navbar.contributeBtn}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        {/* Glow ambient decorations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[300px] bg-[#f97316]/5 rounded-full blur-[120px]" />
        <div className="absolute right-0 top-1/4 -z-10 w-[200px] h-[200px] bg-blue-500/5 rounded-full blur-[90px]" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full w-fit">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-zinc-400 font-medium tracking-wide">{t.hero.badge}</span>
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.hero.titleFirstPart}<span className="text-[#f97316]">{t.hero.titleHighlight}</span>{t.hero.titleSecondPart}
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 text-pretty max-w-[55ch] leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex gap-4 flex-wrap pt-4">
              <a
                href="#doar"
                className="bg-[#f97316] text-zinc-950 py-3 px-6 rounded font-semibold text-base inline-flex items-center gap-2 transition-all active:scale-[0.98] hover:brightness-110 shadow-lg shadow-[#f97316]/10"
              >
                <svg className="size-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#projetos"
                className="ring-1 ring-zinc-700 text-zinc-300 py-3 px-6 rounded font-semibold text-base inline-flex items-center gap-2 transition-all hover:bg-zinc-800/50"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="impacto" className="bg-zinc-950/40 border-y border-zinc-900 py-16 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {translatedStats.map((s, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div
                  className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projetos" className="py-28 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-4 mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.projectsSection.title}
            </h2>
            <p className="text-zinc-500 max-w-[55ch]">
              {t.projectsSection.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {translatedProjects.map((p, idx) => (
              <article
                key={idx}
                className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-1.5 overflow-hidden flex flex-col group hover:border-[#f97316]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#f97316]/5"
              >
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-zinc-950/60">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-200 bg-zinc-950/80 backdrop-blur px-2.5 py-1 rounded border border-zinc-800">
                    {p.tag}
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-5 flex-1">
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-xl font-bold text-white tracking-wide"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm text-zinc-400 text-pretty leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-auto space-y-3 py-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-zinc-500">{t.projectsSection.progressPrefix}</span>
                      <span className="text-zinc-300">{p.progress}% {t.projectsSection.progressOf} {p.goal}</span>
                    </div>
                    <div className="h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                      <div className="h-full bg-gradient-to-r from-orange-600 to-[#f97316] rounded-full" style={{ width: `${p.progress}%` }} />
                    </div>
                    <div className="flex justify-between items-center text-xs pt-1">
                      <span className="text-zinc-500">{t.projectsSection.raisedPrefix}</span>
                      <span className="text-semibold text-white bg-zinc-950 px-2 py-1 rounded text-right">{p.raised}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Tiers */}
      <section id="doar" className="py-28 bg-zinc-950 border-t border-zinc-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#1b1b1f_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center flex flex-col gap-4 mb-20">
            <h2
              className="text-3xl md:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.tiersSection.title}
            </h2>
            <p className="text-zinc-400 max-w-[55ch] mx-auto text-pretty">
              {t.tiersSection.description} {currencies[currency].label}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
            {translatedTiers.map((tItem, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl flex flex-col justify-between text-left transition-all duration-300 ${
                  tItem.featured
                    ? "border-2 border-[#f97316] bg-zinc-900/40 relative shadow-lg shadow-[#f97316]/5 scale-102"
                    : "border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/30 hover:scale-[1.01]"
                }`}
              >
                {tItem.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f97316] text-zinc-950 font-bold text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                    {t.tiersSection.mostRelevant}
                  </span>
                )}
                <div className="space-y-4">
                  {tItem.name && (
                    <div>
                      <div className="text-xs text-[#f97316] font-bold uppercase tracking-wider mb-1">
                        {tItem.name}
                      </div>
                      <div
                        className="text-3xl font-extrabold text-white mb-2 animate-fade-in"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {currencies[currency].symbol} {Math.round(tItem.value * currencies[currency].rate).toLocaleString(currencies[currency].locale)}
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed max-w-[24ch]">{tItem.desc}</p>
                    </div>
                  )}
                  
                  <div className="border-t border-zinc-800/80 pt-4">
                    <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-2">
                      {lang === "PT" ? "Recompensas ativas:" : "Active rewards:"}
                    </div>
                    <ul className="space-y-1.5">
                      {tItem.benefits.map((b, bIdx) => (
                        <li key={bIdx} className="text-xs text-zinc-300 flex items-start gap-1.5">
                          <span className="text-[#f97316] font-bold text-xs">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenDonation(tiers[idx])}
                  className={`mt-8 w-full py-2.5 px-4 rounded text-xs font-semibold text-center transition-all ${
                    tItem.featured
                      ? "bg-[#f97316] text-zinc-950 hover:brightness-110 active:scale-[0.98]"
                      : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 active:scale-[0.98]"
                  }`}
                >
                  {lang === "PT" ? `Selecionar ${tItem.name}` : `Select ${tItem.name}`}
                </button>
              </div>
            ))}

            {/* Custom Amount Tier */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/30 flex flex-col justify-between text-left transition-all duration-300 hover:scale-[1.01]">
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-[#f97316] font-bold uppercase tracking-wider mb-1">
                    {t.tiersSection.customTitle}
                  </div>
                  <div
                    className="text-2xl font-extrabold text-white mb-2 animate-fade-in"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {currencies[currency].symbol} {lang === "PT" ? "Outro Valor" : "Other Amount"}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                    {t.tiersSection.customDesc}
                  </p>
                </div>

                <div className="border-t border-zinc-800/80 pt-4 flex flex-col gap-2">
                  <label htmlFor="custom-input" className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-semibold">
                    {t.tiersSection.customInputLabel} ({currencies[currency].symbol})
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 font-semibold text-sm">{currencies[currency].symbol}</span>
                    <input
                      id="custom-input"
                      type="text"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder={t.tiersSection.customInputPlaceholder}
                      className="w-full bg-zinc-950 border border-zinc-800 pl-9 pr-3 py-2 rounded text-sm text-white focus:outline-none focus:border-[#f97316]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleOpenDonation(null)}
                className="mt-8 w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 py-2.5 px-4 rounded text-xs font-semibold text-center transition-all active:scale-[0.98]"
              >
                {t.tiersSection.customSelectBtn}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-zinc-900 bg-zinc-950/60 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
            <div className="flex flex-col gap-4 md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="size-5 bg-[#f97316] rounded flex items-center justify-center font-bold text-zinc-950 text-[10px]">AL</div>
                <span
                  className="font-bold tracking-wider text-white text-md"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  ALUMINITECH
                </span>
              </div>
              <p className="text-xs text-zinc-400 max-w-[40ch] leading-relaxed">
                {lang === "PT" 
                  ? "Liderando a transformação da indústria de ligas e conformação de alumínio através de tecnologia de ponta, processos ecológicos e capital puramente inovador de apoio científico." 
                  : "Leading the transformation of the aluminum alloys industry through cutting-edge technology, eco-friendly processes, and secure scientific funding."}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-1">
                {lang === "PT" ? "Portais Oficiais" : "Official Portals"}
              </h4>
              <p className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">pesquisa@aluminitech.com.br</p>
              <p className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">www.aluminitech.com.br</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-1">
                {lang === "PT" ? "Laboratório QG" : "HQ Laboratory"}
              </h4>
              <p className="text-xs text-zinc-500">Parque Tecnológico BH-TEC</p>
              <p className="text-xs text-zinc-500">Belo Horizonte — MG, Brasil</p>
            </div>
          </div>

          {/* Secure Trust Seals in Landing Page Footer */}
          <div className="mt-12 pt-6 border-t border-zinc-900/40 flex flex-wrap gap-6 items-center justify-between text-zinc-500">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 border border-zinc-800/80 bg-zinc-950 px-3 py-1 rounded text-[10px] font-mono tracking-wider font-semibold uppercase text-zinc-400">
                <span>{lang === "PT" ? "REDE DE PAGAMENTO AUTORIZADA:" : "AUTHORIZED PAYMENT NETWORK:"}</span>
                <VisaLogo />
                <span className="text-[#f97316]">VISA NET DIRECT</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-emerald-500">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{lang === "PT" ? "CRIPTOGRAFIA SSL 256-BIT ATIVA" : "SSL 256-BIT ENCRYPTION ACTIVE"}</span>
              </div>
            </div>
            <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-600">
              {lang === "PT" ? "Gateway de Alta Segurança Ativo" : "High Security Gateway Active"}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-900/40 flex flex-wrap gap-4 justify-between items-center text-zinc-600">
            <p className="text-[10px] uppercase tracking-widest font-mono">
              {lang === "PT" 
                ? "© 2026 ALUMINITECH. Todos os direitos reservados." 
                : "© 2026 ALUMINITECH. All rights reserved."}
            </p>
            <div className="flex gap-6 text-xs">
              <span className="hover:text-zinc-400 cursor-pointer">{lang === "PT" ? "Privacidade" : "Privacy"}</span>
              <span className="hover:text-zinc-400 cursor-pointer">{lang === "PT" ? "Termos de Uso" : "Terms of Use"}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
