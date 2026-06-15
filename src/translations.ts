export type LanguageType = "PT" | "EN" | "ES" | "FR" | "DE" | "IT";

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
      badge: "Fundo Internacional de Fomento",
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
      disclaimer: "* Este aporte voluntário tem liberação nominal de apoio emitido pela Aluminitech Labs S.A. no Parque Tecnológico BH-TEC em até 10 dias pós-quitação via e-mail corporativo.",
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
      badge: "International Development Fund",
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
      disclaimer: "* This voluntary contribution includes a nominal support certificate issued by Aluminitech Labs S.A. at the BH-TEC Tech Park within up to 10 days after completion via corporate email.",
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
  ES: {
    navbar: {
      projects: "Proyectos",
      impact: "Impacto",
      tiers: "Niveles",
      contributeBtn: "Contribuir",
    },
    hero: {
      badge: "Fondo Internacional de Fomento",
      titleFirstPart: "Modelando el mañana con ",
      titleHighlight: "precisión industrial",
      titleSecondPart: ".",
      description: "Transformamos el potencial de la metalurgia del aluminio en innovación aeroespacial, semiconductores y ciclos ecológicos. Apoye la ingeniería con fondos seguros en Euros (€).",
      ctaPrimary: "Realizar Aporte Científico",
      ctaSecondary: "Conocer Proyectos",
    },
    stats: {
      raised: "Captado Global",
      patents: "Patentes Registradas",
      researchers: "Investigadores Activos",
      efficiency: "Eficiencia de Ciclo",
    },
    projectsSection: {
      title: "Proyectos en Captación Activa",
      description: "Todos los recursos recaudados en euros se convierten en el pago directo de patentes internacionales, insumos críticos y maquinaria importada para fomento.",
      progressPrefix: "Progreso",
      progressOf: "de",
      raisedPrefix: "Captado",
      projectsList: [
        {
          tag: "Aleación Aero-X1",
          title: "Aleaciones de Ultra-Resistencia",
          description: "Desarrollo de aleaciones ultraligeras para una reducción drástica del consumo de energía en el transporte aeroespacial de alto rendimiento.",
        },
        {
          tag: "Termo-Reciclaje",
          title: "Reciclaje Termoquímico",
          description: "Proceso patentado para la purificación de chatarra de aluminio con cero emisiones de CO2 atmosférico durante el ciclo térmico.",
        },
        {
          tag: "Conductores S-2",
          title: "Disipación de Alto Rendimiento",
          description: "Miniaturización de disipadores de calor de aluminio de alta pureza para una nueva generación de semiconductores.",
        },
      ],
    },
    tiersSection: {
      title: "Niveles de Contribución",
      description: "Elija un perfil de liderazgo oficial o ingrese un valor personalizado en monedas internacionales.",
      mostRelevant: "Más Relevante",
      customTitle: "Personalizado",
      customDesc: "Aporte libremente según sus metas de inversión en ciencia.",
      customInputLabel: "Monto del Aporte",
      customInputPlaceholder: "Otro Monto",
      selectBtn: "Seleccionar",
      customSelectBtn: "Contribuir",
      tiersList: [
        {
          name: "Catalizador",
          desc: "Acceso directo a los informes mensuales de progreso de tecnología mineral.",
          benefits: [
            "Boletín informativo del laboratorio",
            "Muro digital de fundadores (Opcional)",
            "Informe anual en formato PDF",
          ],
        },
        {
          name: "Inovador",
          desc: "Informes avanzados e invitación a la presentación técnica semestral online.",
          benefits: [
            "Todos los beneficios de Catalizador",
            "Acceso a seminarios web privados",
            "Certificado digital de inversor científico",
          ],
        },
        {
          name: "Visionario",
          desc: "Acceso VIP vitalicio al simposio Aluminitech y visita guiada anual.",
          benefits: [
            "Todos los beneficios de Inovador",
            "Asiento VIP en el simposio presencial",
            "Visita técnica programada al laboratorio",
          ],
        },
      ],
    },
    checkout: {
      backBtn: "Voltar ao Portal",
      portalName: "Aluminitech",
      selectedBadge: "SELECCIONADO",
      scientificFunding: "Fomento Científico",
      allocatedProgram: "PROGRAMA ASIGNADO",
      totalAmount: "MONTO TOTAL",
      rewardsTitle: "RECOMPENSAS DEL PLAN",
      customRewardDesc: "Acceso completo a los boletines de tecnología mineral de Aluminitech.",
      disclaimer: "* Este aporte voluntario incluye una certificación de apoyo nominal emitida por Aluminitech Labs S.A. en el Tech Park BH-TEC dentro de un plazo de hasta 10 días posteriores a la finalización por correo electrónico corporativo.",
      billingInfoTitle: "Información de Facturación",
      billingInfoSub: "Simplemente complete el formulario de abajo y pague de forma segura con tarjeta de crédito.",
      nameLabel: "Nombre Completo del Titular",
      emailLabel: "Correo Electrónico de Contacto",
      cardNumberLabel: "Número de Tarjeta de Crédito",
      expiryLabel: "Vencimiento (MM/AA)",
      cvcLabel: "CVC / Código",
      confirmPaymentPrefix: "Confirmar Pago",
      processing: "Procesando...",
      synchronizing: "Sincronizando...",
      acceptedBrands: "TARJETAS ACEPTADAS",
      realSecureDisclaimer: "Encriptación de extremo a extremo procesada a través de una Pasarela de Alta Seguridad.",
      mockSecureDisclaimer: "Transacciones procesadas de forma segura y protegidas por estándares de cumplimiento internacional.",
      successBadge: "APORTE CONFIRMADO // PORTAL SEGURO",
      successTitle: "¡Contribución Completada con Éxito!",
      successDesc: "Operación completada. Su fomento nominal de desarrollo mineral ha sido registrado en nuestro portal.",
      receiptHeader: "RECIBO OFICIAL",
      receiptDonor: "DONANTE",
      receiptEmail: "CORREO",
      receiptProgram: "PROGRAMA",
      receiptMethod: "MÉTODO",
      receiptNet: "NETO APORTADO",
      printBtn: "Imprimir Recibo",
      backToPortalBtn: "Volver al Portal",
      termsText: "© 2026 ALUMINITECH. Términos científicos y outorgas vigentes.",
      certifiedText: "PASARELA CERTIFICADA DE ALTA SEGURIDAD",
    },
  },
  FR: {
    navbar: {
      projects: "Projets",
      impact: "Impact",
      tiers: "Niveaux",
      contributeBtn: "Contribuer",
    },
    hero: {
      badge: "Fonds de Développement International",
      titleFirstPart: "Façonner l'avenir avec ",
      titleHighlight: "précision industrielle",
      titleSecondPart: ".",
      description: "Nous transformons le potentiel de la métallurgie de l'aluminium en innovations aérospatiales, semi-conducteurs et cycles écologiques. Soutenez l'ingénierie avec des fonds sécurisés en Euros (€).",
      ctaPrimary: "Faire une Contribution Scientifique",
      ctaSecondary: "Découvrir les Projets",
    },
    stats: {
      raised: "Collecté Global",
      patents: "Brevets Déposés",
      researchers: "Chercheurs Actifs",
      efficiency: "Efficacité du Cycle",
    },
    projectsSection: {
      title: "Projets en Financement Actif",
      description: "Toutes les ressources levées en euros sont converties en paiements directs pour les brevets internationaux, les intrants critiques et les machines importées.",
      progressPrefix: "Progression",
      progressOf: "sur",
      raisedPrefix: "Collecté",
      projectsList: [
        {
          tag: "Alliage Aero-X1",
          title: "Alliages Ultra-Résitants",
          description: "Développement d'alliages ultra-légers pour une réduction drastique de la consommation d'énergie dans le transport aérospatial de haute performance.",
        },
        {
          tag: "Thermo-Recyclage",
          title: "Recyclage Thermochimique",
          description: "Procédé breveté de purification des déchets d'aluminium avec zéro émission de CO2 atmosphérique pendant le cycle thermique.",
        },
        {
          tag: "Conducteurs S-2",
          title: "Dissipation Haute Performance",
          description: "Miniaturisation de dissipateurs thermiques en aluminium de haute pureté pour une nouvelle génération de semi-conducteurs.",
        },
      ],
    },
    tiersSection: {
      title: "Niveaux de Contribution",
      description: "Choisissez un profil de leadership officiel ou entrez une valeur personnalisée dans les devises internationales.",
      mostRelevant: "Le Plus Pertinent",
      customTitle: "Personnalisé",
      customDesc: "Contribuez librement en fonction de vos objectifs d'investissement dans la science.",
      customInputLabel: "Montant de la Contribution",
      customInputPlaceholder: "Autre Montant",
      selectBtn: "Sélectionner",
      customSelectBtn: "Contribuer",
      tiersList: [
        {
          name: "Catalyseur",
          desc: "Accès direct aux rapports mensuels sur l'état d'avancement des technologies minérales.",
          benefits: [
            "Newsletter du laboratoire",
            "Mur numérique des fondateurs (Optionnel)",
            "Rapport annuel au format PDF",
          ],
        },
        {
          name: "Innovateur",
          desc: "Rapports avancés et invitation à la présentation technique semestrielle en ligne.",
          benefits: [
            "Tous les avantages de Catalyseur",
            "Accès à des webinaires privés",
            "Certificat numérique d'investisseur scientifique",
          ],
        },
        {
          name: "Visionnaire",
          desc: "Accès VIP à vie au symposium Aluminitech et visite guidée annuelle.",
          benefits: [
            "Tous les avantages d'Innovateur",
            "Siège VIP au symposium en direct",
            "Visite technique programmée du laboratoire",
          ],
        },
      ],
    },
    checkout: {
      backBtn: "Retour au Portail",
      portalName: "Aluminitech",
      selectedBadge: "SÉLECTIONNÉ",
      scientificFunding: "Financement Scientifique",
      allocatedProgram: "PROGRAMME ALLOUÉ",
      totalAmount: "MONTANT TOTAL",
      rewardsTitle: "RÉCOMPENSES DU PLAN",
      customRewardDesc: "Accès complet aux newsletters de technologie minérale d'Aluminitech.",
      disclaimer: "* Cette contribution volontaire comprend un certificat de soutien nominal délivré par Aluminitech Labs S.A. au parc technologique BH-TEC dans un délai allant jusqu'à 10 jours après finalisation par e-mail professionnel.",
      billingInfoTitle: "Informations de Facturation",
      billingInfoSub: "Remplissez simplement le formulaire ci-dessous et finalisez votre paiement sécurisé par carte bancaire.",
      nameLabel: "Nom Complet du Titulaire",
      emailLabel: "E-mail de Contact",
      cardNumberLabel: "Numéro de Carte Bancaire",
      expiryLabel: "Expiration (MM/AA)",
      cvcLabel: "CVC / Code",
      confirmPaymentPrefix: "Confirmer le Paiement",
      processing: "Traitement...",
      synchronizing: "Sichronisation...",
      acceptedBrands: "CARTES ACCEPTÉES",
      realSecureDisclaimer: "Chiffrement de bout en bout traité via une passerelle haute sécurité.",
      mockSecureDisclaimer: "Transactions traitées en toute sécurité et protégées par les normes de conformité internationales.",
      successBadge: "CONTRIBUTION CONFIRMÉE // PORTAIL SÉCURISÉ",
      successTitle: "Contribution Réussie !",
      successDesc: "Opération terminée. Votre soutien nominal pour le développement minéral a bien été enregistré sur le portail.",
      receiptHeader: "REÇU OFFICIEL",
      receiptDonor: "DONATEUR",
      receiptEmail: "E-MAIL",
      receiptProgram: "PROGRAMME",
      receiptMethod: "METHODE",
      receiptNet: "MONTANT NET",
      printBtn: "Imprimer le Reçu",
      backToPortalBtn: "Retour au Portail",
      termsText: "© 2026 ALUMINITECH. Conditions scientifiques et outorgas actives.",
      certifiedText: "PASSERELLE CERTIFIÉE HAUTE SÉCURITÉ",
    },
  },
  DE: {
    navbar: {
      projects: "Projekte",
      impact: "Einfluss",
      tiers: "Stufen",
      contributeBtn: "Beitragen",
    },
    hero: {
      badge: "Internationaler Entwicklungsfonds",
      titleFirstPart: "Die Zukunft gestalten mit ",
      titleHighlight: "industrieller Präzision",
      titleSecondPart: ".",
      description: "Wir verwandeln das Potenzial der Aluminiummetallurgie in Luft- und Raumfahrtinnovationen, Halbleiter und ökologische Kreisläufe. Unterstützen Sie die Wissenschaft mit sicheren Mitteln in Euro (€).",
      ctaPrimary: "Wissenschaftlichen Beitrag leisten",
      ctaSecondary: "Projekte erkunden",
    },
    stats: {
      raised: "Gesammelt Global",
      patents: "Eingetragene Patente",
      researchers: "Aktive Forscher",
      efficiency: "Kreislaufeffizienz",
    },
    projectsSection: {
      title: "Projekte mit aktiver Finanzierung",
      description: "Alle in Euro eingeworbenen Mittel werden direkt in internationale Patente, kritische Rohstoffe und importierte Maschinen für die Entwicklung umgewandelt.",
      progressPrefix: "Fortschritt",
      progressOf: "von",
      raisedPrefix: "Gesammelt",
      projectsList: [
        {
          tag: "Aero-X1 Legierung",
          title: "Ultrahochfeste Legierungen",
          description: "Entwicklung von Ultraleichtlegierungen zur drastischen Senkung des Energieverbrauchs in der Hochleistungs-Luft- und Raumfahrt.",
        },
        {
          tag: "Thermo-Recycling",
          title: "Thermochemisches Recycling",
          description: "Patentiertes Verfahren zur Reinigung von Aluminiumschrott mit null CO2-Emissionen während des gesamten thermischen Zyklus.",
        },
        {
          tag: "S-2 Leiter",
          title: "Hochleistungs-Wärmeableitung",
          description: "Miniaturisierung von hochreinen Aluminium-Kühlkörpern für eine neue Generation von Halbleitern.",
        },
      ],
    },
    tiersSection: {
      title: "Beitragsklassen",
      description: "Wählen Sie ein offizielles Führungsprofil oder geben Sie einen individuellen Wert in internationalen Währungen ein.",
      mostRelevant: "Am relevantesten",
      customTitle: "Benutzerdefiniert",
      customDesc: "Tragen Sie ganz frei entsprechend Ihren wissenschaftlichen Investitionszielen bei.",
      customInputLabel: "Beitragshöhe",
      customInputPlaceholder: "Anderer Betrag",
      selectBtn: "Auswählen",
      customSelectBtn: "Beitragen",
      tiersList: [
        {
          name: "Katalysator",
          desc: "Direkter Zugang zu den monatlichen Fortschrittsberichten der Mineraltechnologie.",
          benefits: [
            "Labor-Newsletter",
            "Digitale Gründerwand (Optional)",
            "Jahresbericht im PDF-Format",
          ],
        },
        {
          name: "Innovator",
          desc: "Erweiterte Berichte und Einladung zur halbjährlichen technischen Online-Präsentation.",
          benefits: [
            "Alle Vorteile des Katalysators",
            "Zugang zu privaten Webinaren",
            "Digitales Zertifikat als wissenschaftlicher Investor",
          ],
        },
        {
          name: "Visionär",
          desc: "Lebenslanger VIP-Zugang zum Aluminitech-Symposium und jährliche geführte Laborbesichtigung.",
          benefits: [
            "Alle Vorteile des Innovators",
            "VIP-Sitzplatz beim Live-Symposium",
            "Geplanter technischer Laborbesuch",
          ],
        },
      ],
    },
    checkout: {
      backBtn: "Zurück zum Portal",
      portalName: "Aluminitech",
      selectedBadge: "AUSGEWÄHLT",
      scientificFunding: "Wissenschaftliche Förderung",
      allocatedProgram: "ZUGEWIESENES PROGRAMM",
      totalAmount: "GESAMTBETRAG",
      rewardsTitle: "STUFEN-BELOHNUNGEN",
      customRewardDesc: "Voller Zugang zu den Technologie-Newslettern von Aluminitech.",
      disclaimer: "* Dieser freiwillige Beitrag beinhaltet ein nominales Unterstützungszertifikat, das von Aluminitech Labs S.A. im Tech-Park BH-TEC innerhalb von bis zu 10 Tagen nach Abschluss per Firmen-E-Mail ausgestellt wird.",
      billingInfoTitle: "Rechnungsinformationen",
      billingInfoSub: "Füllen Sie einfach das folgende Formular aus und schließen Sie die Zahlung sicher mit Ihrer Kreditkarte ab.",
      nameLabel: "Vollständiger Name des Karteninhabers",
      emailLabel: "Kontakt-E-Mail",
      cardNumberLabel: "Kreditkartennummer",
      expiryLabel: "Gültig bis (MM/JJ)",
      cvcLabel: "CVC / Code",
      confirmPaymentPrefix: "Zahlung bestätigen",
      processing: "Wird verarbeitet...",
      synchronizing: "Synchronisierung...",
      acceptedBrands: "AKZEPTIERTE KARTEN",
      realSecureDisclaimer: "Ende-zu-Ende-Verschlüsselung verarbeitet über ein Hochsicherheits-Gateway.",
      mockSecureDisclaimer: "Transaktionen werden sicher verarbeitet und sind durch internationale Compliance-Standards geschützt.",
      successBadge: "BESTÄTIGTER BEITRAG // SICHERES PORTAL",
      successTitle: "Beitrag erfolgreich abgeschlossen!",
      successDesc: "Vorgang abgeschlossen. Ihre nominale Förderung der Mineralenentwicklung wurde in unserem Portal registriert.",
      receiptHeader: "OFFIZIELLER BELEG",
      receiptDonor: "FÖRDERER",
      receiptEmail: "E-MAIL",
      receiptProgram: "PROGRAMM",
      receiptMethod: "METHODE",
      receiptNet: "NETTO-BEITRAG",
      printBtn: "Beleg drucken",
      backToPortalBtn: "Zurück zum Portal",
      termsText: "© 2026 ALUMINITECH. Aktive wissenschaftliche Bedingungen und Outorgas.",
      certifiedText: "ZERTIFIZIERTES HOCHSICHERHEITS-GATEWAY",
    },
  },
  IT: {
    navbar: {
      projects: "Progetti",
      impact: "Impatto",
      tiers: "Livelli",
      contributeBtn: "Contribuire",
    },
    hero: {
      badge: "Fondo di Sviluppo Internazionale",
      titleFirstPart: "Plasmare il domani con ",
      titleHighlight: "precisione industriale",
      titleSecondPart: ".",
      description: "Trasformiamo il potenziale della metallurgia dell'alluminio in innovazioni aerospaziali, semiconduttori e cicli ecologici. Sostieni la ricerca scientifica con fondi sicuri in Euro (€).",
      ctaPrimary: "Fai un Aporte Scientifico",
      ctaSecondary: "Scopri i Progetti",
    },
    stats: {
      raised: "Raccolto Globale",
      patents: "Brevetti Registrati",
      researchers: "Ricercatori Attivi",
      efficiency: "Efficienza del Ciclo",
    },
    projectsSection: {
      title: "Progetti in Raccolta Attiva",
      description: "Tutte le risorse raccolte in euro sono convertite nel pagamento diretto di brevetti internazionali, materie prime critiche e macchinari importati.",
      progressPrefix: "Progresso",
      progressOf: "di",
      raisedPrefix: "Raccolto",
      projectsList: [
        {
          tag: "Lega Aero-X1",
          title: "Leghe ad Altissima Resistenza",
          description: "Sviluppo di leghe ultraleggere per una drastica riduzione del consumo di energia nei trasporti aerospaziali ad alte prestazioni.",
        },
        {
          tag: "Termo-Riciclo",
          title: "Riciclo Termochimico",
          description: "Processo brevettato per la purificazione di rottami di alluminio con zero emissioni atmosferiche di CO2 nel ciclo termico.",
        },
        {
          tag: "Conduttori S-2",
          title: "Dissipazione ad Alte Prestazioni",
          description: "Miniaturizzazione di dissipatori di calore in alluminio ad alta purezza per una nuova generazione di semiconduttori.",
        },
      ],
    },
    tiersSection: {
      title: "Livelli di Contribuzione",
      description: "Scegli un profilo di leadership ufficiale o inserisci un valore personalizzato in valute internazionali.",
      mostRelevant: "Più Rilevante",
      customTitle: "Personalizzato",
      customDesc: "Contribuisci liberamente in base ai tuoi obiettivi di investimento nella scienza.",
      customInputLabel: "Importo del Contributo",
      customInputPlaceholder: "Altro Importo",
      selectBtn: "Selezionare",
      customSelectBtn: "Contribuire",
      tiersList: [
        {
          name: "Catalizzatore",
          desc: "Accesso diretto ai rapporti mensili sui progressi della tecnologia mineraria.",
          benefits: [
            "Newsletter del laboratorio",
            "Muro digitale dei fondatori (Opzionale)",
            "Rapporto annuale in formato PDF",
          ],
        },
        {
          name: "Innovatore",
          desc: "Rapporti avanzati e invito alla presentazione tecnica semestrale online.",
          benefits: [
            "Tutti i benefici del Catalizzatore",
            "Accesso a webinar privati",
            "Certificato digitale di investitore scientifico",
          ],
        },
        {
          name: "Visionario",
          desc: "Accesso VIP a vita al simposio Aluminitech e visita guidata annuale.",
          benefits: [
            "Tutti i benefici di Innovatore",
            "Posto VIP al simposio dal vivo",
            "Visita tecnica programmata al laboratorio",
          ],
        },
      ],
    },
    checkout: {
      backBtn: "Torna al Portale",
      portalName: "Aluminitech",
      selectedBadge: "SELEZIONATO",
      scientificFunding: "Finanziamento Scientifico",
      allocatedProgram: "PROGRAMMA ALLOCATO",
      totalAmount: "IMPORTO TOTALE",
      rewardsTitle: "PREMI DEL PIANO",
      customRewardDesc: "Accesso completo alle newsletter tecnologiche di Aluminitech.",
      disclaimer: "* Questo contributo volontario include una certificazione di supporto nominale emessa da Aluminitech Labs S.A. presso il Tech Park BH-TEC entro un massimo di 10 giorni dal completamento via e-mail aziendale.",
      billingInfoTitle: "Informazioni di Fatturazione",
      billingInfoSub: "Basta compilare il modulo sottostante e completare in modo sicuro con carta di credito.",
      nameLabel: "Nome Completo del Titolare",
      emailLabel: "E-mail di Contatto",
      cardNumberLabel: "Numero di Carta di Credito",
      expiryLabel: "Scadenza (MM/AA)",
      cvcLabel: "CVC / Codice",
      confirmPaymentPrefix: "Conferma Pagamento",
      processing: "Elaborazione...",
      synchronizing: "Sincronizzazione...",
      acceptedBrands: "CARTE ACCETTATE",
      realSecureDisclaimer: "Crittografia end-to-end elaborata tramite un gateway ad alta sicurezza.",
      mockSecureDisclaimer: "Transazioni elaborate in modo sicuro e protette da standard di conformità internazionali.",
      successBadge: "CONTRIBUTO CONFERMATO // PORTALE SICURO",
      successTitle: "Contributo Completato con Successo!",
      successDesc: "Operazione completata. Il tuo sostegno nominale per lo sviluppo minerario è stato registrato nel portale.",
      receiptHeader: "RICEVUTA UFFICIALE",
      receiptDonor: "DONATORE",
      receiptEmail: "E-MAIL",
      receiptProgram: "PROGRAMMA",
      receiptMethod: "METODO",
      receiptNet: "NETTO APORTATO",
      printBtn: "Stampa Ricevuta",
      backToPortalBtn: "Torna al Portale",
      termsText: "© 2026 ALUMINITECH. Termini e outorgas scientifiche attive.",
      certifiedText: "GATEWAY DI ALTA SICUREZZA CERTIFICATO",
    },
  },
};
