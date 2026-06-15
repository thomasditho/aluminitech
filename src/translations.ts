export type LanguageType = "PT" | "EN";

export interface ProjectTranslation {
  tag: string;
  title: string;
  description: string;
}

export interface TierTranslation {
  name: string;
  desc: string;
  benefits: string[];
}

export interface Translations {
  navbar: {
    projects: string;
    impact: string;
    tiers: string;
    contributeBtn: string;
  };
  hero: {
    badge: string;
    titleFirstPart: string;
    titleHighlight: string;
    titleSecondPart: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: {
    raised: string;
    patents: string;
    researchers: string;
    efficiency: string;
  };
  projectsSection: {
    title: string;
    description: string;
    progressPrefix: string;
    progressOf: string;
    raisedPrefix: string;
    projectsList: ProjectTranslation[];
  };
  tiersSection: {
    title: string;
    description: string;
    mostRelevant: string;
    customTitle: string;
    customDesc: string;
    customInputLabel: string;
    customInputPlaceholder: string;
    selectBtn: string;
    customSelectBtn: string;
    tiersList: TierTranslation[];
  };
  checkout: {
    backBtn: string;
    portalName: string;
    selectedBadge: string;
    scientificFunding: string;
    allocatedProgram: string;
    totalAmount: string;
    rewardsTitle: string;
    customRewardDesc: string;
    disclaimer: string;
    billingInfoTitle: string;
    billingInfoSub: string;
    nameLabel: string;
    emailLabel: string;
    cardNumberLabel: string;
    expiryLabel: string;
    cvcLabel: string;
    confirmPaymentPrefix: string;
    processing: string;
    synchronizing: string;
    acceptedBrands: string;
    realSecureDisclaimer: string;
    mockSecureDisclaimer: string;
    successBadge: string;
    successTitle: string;
    successDesc: string;
    receiptHeader: string;
    receiptDonor: string;
    receiptEmail: string;
    receiptProgram: string;
    receiptMethod: string;
    receiptNet: string;
    printBtn: string;
    backToPortalBtn: string;
    termsText: string;
    certifiedText: string;
  };
}

export const translations: Record<LanguageType, Translations> = {
  PT: {
    navbar: {
      projects: "Projetos",
      impact: "Impacto",
      tiers: "Níveis",
      contributeBtn: "Contribuir",
    },
    hero: {
      badge: "Fundo Internacional de Fomento - União Europeia",
      titleFirstPart: "Moldando o amanhã com ",
      titleHighlight: "precisão industrial",
      titleSecondPart: ".",
      description: "Transformamos o potencial da metalurgia do alumínio em inovação aeroespacial, semicondutores e ciclos ecológicos. Apoie a engenharia com fundos seguros em Euros (€).",
      ctaPrimary: "Fazer Aporte Científico",
      ctaSecondary: "Conhecer Projetos",
    },
    stats: {
      raised: "Captado Global",
      patents: "Patentes Registradas",
      researchers: "Pesquisadores Ativos",
      efficiency: "Eficiência de Ciclo",
    },
    projectsSection: {
      title: "Projetos em Captação Ativa",
      description: "Todos os recursos arrecadados em euros são convertidos para o pagamento direto de patentes internacionais, insumos críticos e maquinários importados para fomento.",
      progressPrefix: "Progresso",
      progressOf: "de",
      raisedPrefix: "Captado",
      projectsList: [
        {
          tag: "Liga Aero-X1",
          title: "Ligas de Ultra-Resistência",
          description: "Desenvolvimento de ligas ultraleves para redução drástica de consumo energético em transporte aeroespacial de alta performance.",
        },
        {
          tag: "Termo-Reciclagem",
          title: "Reciclagem Termoquímica",
          description: "Processo patenteado de purificação de sucata de alumínio com zero emissões atmosféricas de CO2 no ciclo térmico.",
        },
        {
          tag: "Condutores S-2",
          title: "Dissipação de Alta Performance",
          description: "Miniaturização de dissipadores térmicos de alumínio de alta pureza para nova geração de semicondutores.",
        },
      ],
    },
    tiersSection: {
      title: "Níveis de Contribuição",
      description: "Escolha um perfil oficial de liderança ou informe um valor adaptado em moedas internacionais.",
      mostRelevant: "Mais Relevante",
      customTitle: "Personalizado",
      customDesc: "Aporte livremente de acordo com suas metas de investimento em ciência.",
      customInputLabel: "Valor do Aporte",
      customInputPlaceholder: "Outro Valor",
      selectBtn: "Selecionar",
      customSelectBtn: "Contribuir",
      tiersList: [
        {
          name: "Catalisador",
          desc: "Acesso direto aos relatórios mensais de progresso de tecnologia mineral.",
          benefits: [
            "Newsletter do laboratório",
            "Mural digital de fundadores (Opcional)",
            "Relatório anual formatado em PDF",
          ],
        },
        {
          name: "Inovador",
          desc: "Relatórios avançados e convite para apresentação semestral técnica online.",
          benefits: [
            "Todos os benefícios de Catalisador",
            "Acesso a webinars privados",
            "Certificado digital de investidor científico",
          ],
        },
        {
          name: "Visionário",
          desc: "Acesso VIP vitalício ao simpósio Aluminitech e visita guiada anual.",
          benefits: [
            "Todos os benefícios de Inovador",
            "Assento VIP no simpósio presencial",
            "Visita técnica programada ao laboratório",
          ],
        },
      ],
    },
    checkout: {
      backBtn: "Voltar ao Portal",
      portalName: "Aluminitech",
      selectedBadge: "SELECIONADO",
      scientificFunding: "Fomento Científico",
      allocatedProgram: "PROGRAMA ALOCADO",
      totalAmount: "VALOR INTEGRAL",
      rewardsTitle: "RECOMPENSAS DO PLANO",
      customRewardDesc: "Acesso completo aos boletins de tecnologia mineral da Aluminitech.",
      disclaimer: "* Este aporte voluntário tem liberação nominal de apoio emitido pela Aluminitech Labs S.A. no Parque Tecnológico BH-TEC em até 24 horas pós-quitação via e-mail corporativo.",
      billingInfoTitle: "Informações de Cobrança",
      billingInfoSub: "Preencha os campos abaixo de maneira simples e conclua com seu cartão de crédito.",
      nameLabel: "Nome Completo do Titular",
      emailLabel: "E-mail de Contato",
      cardNumberLabel: "Número do Cartão de Crédito",
      expiryLabel: "Validade (MM/AA)",
      cvcLabel: "CVC / Código",
      confirmPaymentPrefix: "Confirmar Pagamento",
      processing: "Processando...",
      synchronizing: "Sincronizando...",
      acceptedBrands: "BANDEIRAS ACEITAS",
      realSecureDisclaimer: "Criptografia de ponta a ponta processada via Gateway de Alta Segurança.",
      mockSecureDisclaimer: "Transações processadas de forma segura e protegidas por conformidades internacionais.",
      successBadge: "APORTE CONFIRMADO // PORTAL SEGURO",
      successTitle: "Doação Concluída com Sucesso!",
      successDesc: "Operação concluída. Seu fomento nominal para o desenvolvimento mineral já foi registrado no portal.",
      receiptHeader: "COMPROVANTE FISCAL",
      receiptDonor: "DOADOR",
      receiptEmail: "E-MAIL",
      receiptProgram: "PROGRAMA",
      receiptMethod: "MÉTODO",
      receiptNet: "LÍQUIDO APORTADO",
      printBtn: "Imprimir Comprovante",
      backToPortalBtn: "Voltar ao Portal",
      termsText: "© 2026 ALUMINITECH. Termos e outorgas científicas vigentes.",
      certifiedText: "GATEWAY DE ALTA SEGURANÇA CERTIFICADO",
    },
  },
  EN: {
    navbar: {
      projects: "Projects",
      impact: "Impact",
      tiers: "Tiers",
      contributeBtn: "Contribute",
    },
    hero: {
      badge: "International Development Fund - European Union",
      titleFirstPart: "Shaping tomorrow with ",
      titleHighlight: "industrial precision",
      titleSecondPart: ".",
      description: "We transform the potential of aluminum metallurgy into aerospace innovation, semiconductors, and ecological cycles. Support engineering with secure funds in Euros (€).",
      ctaPrimary: "Make Scientific Contribution",
      ctaSecondary: "Explore Projects",
    },
    stats: {
      raised: "Global Raised",
      patents: "Registered Patents",
      researchers: "Active Researchers",
      efficiency: "Cycle Efficiency",
    },
    projectsSection: {
      title: "Projects with Active Funding",
      description: "All resources raised in euros are converted into direct payments for international patents, critical inputs, and imported machinery for development.",
      progressPrefix: "Progress",
      progressOf: "of",
      raisedPrefix: "Raised",
      projectsList: [
        {
          tag: "Aero-X1 Alloy",
          title: "Ultra-Strength Alloys",
          description: "Development of ultralight alloys for drastic reduction of energy consumption in high-performance aerospace transport.",
        },
        {
          tag: "Thermo-Recycling",
          title: "Thermochemical Recycling",
          description: "Patented process for purification of aluminum scrap with zero atmospheric CO2 emissions during the thermal cycle.",
        },
        {
          tag: "S-2 Conductors",
          title: "High Performance Dissipation",
          description: "Miniaturization of ultra-pure aluminum heat sinks for a new generation of semiconductors.",
        },
      ],
    },
    tiersSection: {
      title: "Contribution Tiers",
      description: "Choose an official leadership profile or enter a customized value in international currencies.",
      mostRelevant: "Most Relevant",
      customTitle: "Custom",
      customDesc: "Contribute freely according to your scientific investment goals.",
      customInputLabel: "Contribution Amount",
      customInputPlaceholder: "Other Amount",
      selectBtn: "Select",
      customSelectBtn: "Contribute",
      tiersList: [
        {
          name: "Catalyst",
          desc: "Direct access to monthly mineral technology progress reports.",
          benefits: [
            "Laboratory newsletter",
            "Digital founders wall (Optional)",
            "Annual report formatted in PDF",
          ],
        },
        {
          name: "Innovator",
          desc: "Advanced reports and invitation to the semi-annual online technical presentation.",
          benefits: [
            "All Catalyst benefits",
            "Access to private webinars",
            "Digital scientific investor certificate",
          ],
        },
        {
          name: "Visionary",
          desc: "Lifetime VIP access to the Aluminitech symposium and annual guided tour.",
          benefits: [
            "All Innovator benefits",
            "VIP seat in the live symposium",
            "Scheduled technical visit to the laboratory",
          ],
        },
      ],
    },
    checkout: {
      backBtn: "Back to Portal",
      portalName: "Aluminitech",
      selectedBadge: "SELECTED",
      scientificFunding: "Scientific Funding",
      allocatedProgram: "ALLOCATED PROGRAM",
      totalAmount: "TOTAL AMOUNT",
      rewardsTitle: "PLAN REWARDS",
      customRewardDesc: "Full access to Aluminitech's mineral technology newsletters.",
      disclaimer: "* This voluntary contribution includes a nominal support certificate issued by Aluminitech Labs S.A. at the BH-TEC Tech Park within 24 hours after completion via corporate email.",
      billingInfoTitle: "Billing Information",
      billingInfoSub: "Simply fill out the form below and complete securely using credit card.",
      nameLabel: "Cardholder Full Name",
      emailLabel: "Contact Email",
      cardNumberLabel: "Credit Card Number",
      expiryLabel: "Expiration (MM/YY)",
      cvcLabel: "CVC / Code",
      confirmPaymentPrefix: "Confirm Payment",
      processing: "Processing...",
      synchronizing: "Synchronizing...",
      acceptedBrands: "ACCEPTED BRANDS",
      realSecureDisclaimer: "End-to-end encryption processed via High Security Gateway.",
      mockSecureDisclaimer: "Transactions processed securely and protected by international compliance standards.",
      successBadge: "CONFIRMED CONTRIBUTION // SECURE PORTAL",
      successTitle: "Contribution Completed Successfully!",
      successDesc: "Operation completed. Your nominal fomento for mineral development has been registered in our portal.",
      receiptHeader: "OFFICIAL RECEIPT",
      receiptDonor: "DONOR",
      receiptEmail: "EMAIL",
      receiptProgram: "PROGRAM",
      receiptMethod: "METHOD",
      receiptNet: "NET CONTRIBUTED",
      printBtn: "Print Receipt",
      backToPortalBtn: "Return to Portal",
      termsText: "© 2026 ALUMINITECH. Active scientific terms and outorgas.",
      certifiedText: "HIGH SECURITY CERTIFIED GATEWAY",
    },
  },
};
