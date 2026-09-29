/**
 * ============================================================================
 * DADOS DO CANDIDATO E CONFIGURAÇÃO DA CAMPANHA
 * ============================================================================
 * Arquivo centralizado para alteração rápida de dados, propostas, links de redes
 * sociais e configurações visuais da campanha de Maycon Matos.
 */

export interface ProposalItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  iconName: 'HeartHandshake' | 'ShieldCheck' | 'FileSearch' | 'Users';
}

export interface QuickInfoItem {
  label: string;
  value: string;
}

export interface SocialLinkItem {
  id: string;
  platform: string;
  handle: string;
  description: string;
  icon: 'Instagram' | 'Facebook' | 'Youtube' | 'MessageCircle';
  url: string;
  actionText: string;
}

export interface NavLinkItem {
  name: string;
  href: string;
}

export interface CampaignBannerItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  position: 'left' | 'right';
}

export interface CandidateData {
  name: string;
  fullName: string;
  nickname: string;
  advogadoBPC: string;
  role: string;
  roleTitle: string;
  state: string;
  stateFull: string;
  party: string;
  ballotNumber: string;
  profession: string;
  birthplace: string;
  tagline: string;
  photoUrl: string;
  campaignBannerUrl: string;
  governorAlliance: string;
  followersCount: string;

  // Biografia
  about: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    signature: string;
    quickInfo: QuickInfoItem[];
    highlights: {
      number: string;
      label: string;
      desc: string;
    }[];
  };

  // Seção de Cartazes / Imagens da Campanha
  campaignPosters: {
    title: string;
    subtitle: string;
    items: CampaignBannerItem[];
  };

  // Propostas
  proposalsSection: {
    title: string;
    subtitle: string;
    ctaButtonText: string;
    items: ProposalItem[];
  };

  // Seção Compromisso
  commitmentSection: {
    title: string;
    text: string;
    ctaButtonText: string;
  };

  // Redes Sociais e Contato
  socialSection: {
    title: string;
    subtitle: string;
    items: SocialLinkItem[];
  };

  // CTA Final
  finalCta: {
    title: string;
    subtitle: string;
    quote: string;
    primaryBtnText: string;
    secondaryBtnText: string;
  };

  // Footer & Conformidade Legal Eleitoral
  footer: {
    legalPlaceholder: string;
    electoralInfo: string;
    copyrightText: string;
    navLinks: NavLinkItem[];
    legalLinks: { name: string; href: string }[];
  };

  // Paleta de Cores: Azul e Amarelo Claro Vibrante
  theme: {
    primaryBlue: string;
    primaryBlueLight: string;
    primaryDark: string;
    accentYellow: string;
    yellowHover: string;
    yellowLight: string;
    bgLight: string;
    cardBg: string;
  };
}

export const candidateData: CandidateData = {
  name: "MAYCON MATOS",
  fullName: "Maycon Pereira de Matos",
  nickname: "Advogado Terror do INSS",
  advogadoBPC: "Advogado do BPC",
  role: "Deputado Federal",
  roleTitle: "Candidato a Deputado Federal",
  state: "MG",
  stateFull: "Minas Gerais",
  party: "REPUBLICANOS",
  ballotNumber: "1078",
  profession: "Advogado Especialista em INSS e BPC/LOAS",
  birthplace: "Teófilo Otoni — MG",
  tagline: "Advogado Terror do INSS • Em defesa do BPC/LOAS, aposentados e da criação do Auxílio-Cuidador de 1 salário mínimo.",
  photoUrl: "/images/maycon-profile.jpg",
  campaignBannerUrl: "/images/maycon-banner.jpg",
  governorAlliance: "Com Cleitinho Governador 10",
  followersCount: "+1 Milhão de Seguidores",

  // SEÇÃO SOBRE (QUEM É MAYCON MATOS?)
  about: {
    title: "QUEM É MAYCON MATOS?",
    subtitle: "Advogado Terror do INSS • Mais de 1 milhão de pessoas acompanhando a luta por direitos",
    paragraphs: [
      "Meu nome é Maycon Matos. Sou advogado e fiquei conhecido nas redes sociais como Advogado Terror do INSS.",
      "Há anos, meu trabalho é voltado ao BPC/LOAS, aposentadorias e outros benefícios do INSS. Nas redes sociais, mais de 1 milhão de pessoas acompanham meus conteúdos sobre os direitos de quem depende do INSS e do BPC.",
      "No meu trabalho, vi de perto a realidade de famílias em que alguém deixa o emprego para cuidar de um filho com deficiência ou de um idoso doente.",
      "Por isso, defendo o Auxílio-Cuidador: um salário mínimo por mês para mães e pais atípicos e para quem cuida de pessoa com deficiência ou de idoso doente.",
      "Sou candidato a Deputado Federal por Minas Gerais."
    ],
    signature: "Maycon Matos — Deputado Federal — 1078",
    highlights: [
      {
        number: "+1 Milhão",
        label: "Seguidores nas Redes",
        desc: "Pessoas acompanhando diariamente orientações sobre BPC e direitos do INSS"
      },
      {
        number: "1 Salário Mínimo",
        label: "Auxílio-Cuidador",
        desc: "Proposta para mães e pais atípicos, cuidadores de PCD e idosos doentes"
      },
      {
        number: "1078",
        label: "Deputado Federal",
        desc: "Maycon Matos por Minas Gerais — REPUBLICANOS (com Cleitinho 10)"
      }
    ],
    quickInfo: [
      { label: "NOME", value: "Maycon Matos" },
      { label: "RECONHECIDO COMO", value: "Advogado Terror do INSS" },
      { label: "ATUAÇÃO", value: "Advogado do BPC / LOAS e Previdência" },
      { label: "AUDIÊNCIA", value: "+1 Milhão nas Redes Sociais" },
      { label: "BANDEIRA PRINCIPAL", value: "Auxílio-Cuidador (1 Salário Mínimo/mês)" },
      { label: "CARGO E NÚMERO", value: "Deputado Federal — 1078" },
      { label: "ESTADO E PARTIDO", value: "Minas Gerais • REPUBLICANOS" },
      { label: "APOIO ESTADUAL", value: "Com Cleitinho Governador 10" }
    ]
  },

  // SEÇÃO CARTAZES DA CAMPANHA
  campaignPosters: {
    title: "MATERIAIS OFICIAIS DE CAMPANHA",
    subtitle: "Confira os cartazes oficiais de divulgação e compartilhe com quem precisa conhecer essas propostas.",
    items: [
      {
        id: "poster-candidato",
        title: "Maycon Matos — Advogado Terror do INSS",
        subtitle: "Advogado do BPC • Deputado Federal 1078 (Com Cleitinho Governador 10)",
        badge: "Cartaz Oficial 1078",
        description: "Apresentação oficial do candidato a Deputado Federal Maycon Matos, conhecido em todo o Brasil pela defesa incansável dos direitos previdenciários e assistenciais.",
        position: "left"
      },
      {
        id: "poster-auxilio",
        title: "Defendo a Criação do Auxílio-Cuidador",
        subtitle: "1 Salário Mínimo por Mês para quem cuida de quem precisa",
        badge: "Pauta Prioritária",
        description: "Benefício mensal de 1 salário mínimo destinado a mães e pais atípicos, cuidadores de pessoa com deficiência e cuidadores de idoso doente.",
        position: "right"
      }
    ]
  },

  // SEÇÃO PROPOSTAS
  proposalsSection: {
    title: "PRINCIPAIS PROPOSTAS",
    subtitle: "Conheça as bandeiras e compromissos firmados por Maycon Matos para representar Minas Gerais na Câmara dos Deputados.",
    ctaButtonText: "VER TODAS AS PROPOSTAS",
    items: [
      {
        id: "auxilio-cuidador",
        number: "01",
        title: "CRIAÇÃO DO AUXÍLIO-CUIDADOR",
        category: "Mães Atípicas e Cuidadores",
        description: "Defesa de 1 salário mínimo por mês para mães e pais atípicos e para quem cuida de pessoa com deficiência ou idoso doente, que muitas vezes precisam abrir mão do trabalho.",
        iconName: "HeartHandshake"
      },
      {
        id: "defesa-bpc",
        number: "02",
        title: "DEFESA INCONDICIONAL DO BPC/LOAS",
        category: "Proteção Social",
        description: "Atuação jurídica e legislativa direta para impedir cortes arbitrários e garantir agilidade na concessão do Benefício de Prestação Continuada.",
        iconName: "ShieldCheck"
      },
      {
        id: "defesa-previdenciaria",
        number: "03",
        title: "TERROR DAS FRAUDES NO INSS",
        category: "Fiscalização e Direitos",
        description: "Combate severo a descontos indevidos em folhas de pagamento de aposentados e fiscalização rigorosa de irregularidades nas agências e sistemas do INSS.",
        iconName: "FileSearch"
      },
      {
        id: "direitos-beneficiarios",
        number: "04",
        title: "DIREITOS DOS BENEFICIÁRIOS E IDOSOS",
        category: "Cidadania e Acesso",
        description: "Acesso simplificado à informação, assessoria de direitos e ampliação da assistência para aposentados, pensionistas e pessoas em vulnerabilidade.",
        iconName: "Users"
      }
    ]
  },

  // SEÇÃO COMPROMISSO
  commitmentSection: {
    title: "MEU COMPROMISSO É DEFENDER VOCÊ EM BRASÍLIA",
    text: "Quem acompanha meu trabalho nas redes sabe: não tenho medo de combater injustiças do INSS. Na Câmara Federal, levarei a voz de quem mais precisa de acolhimento e respeito.",
    ctaButtonText: "CONHEÇA AS PROPOSTAS"
  },

  // SEÇÃO ACOMPANHE / REDES OFICIAIS
  socialSection: {
    title: "ACOMPANHE O TERROR DO INSS NAS REDES",
    subtitle: "Mais de 1 milhão de pessoas já acompanham meus conteúdos diários sobre BPC, INSS e aposentadorias. Junte-se a nós!",
    items: [
      {
        id: "instagram",
        platform: "INSTAGRAM",
        handle: "@mayconmatos.adv",
        description: "Mais de 1 milhão de seguidores acompanhando vídeos diários, esclarecimento de dúvidas e bastidores.",
        icon: "Instagram",
        url: "https://www.instagram.com/mayconmatos.adv?stkn=MXV5ejRpd3Fra2pzNQ==",
        actionText: "Seguir no Instagram"
      },
      {
        id: "facebook",
        platform: "FACEBOOK",
        handle: "Maycon Matos",
        description: "Participe das discussões e acompanhe transmissões ao vivo e notícias de direitos.",
        icon: "Facebook",
        url: "https://www.facebook.com/mayconmatos.adv/",
        actionText: "Acessar Facebook"
      },
      {
        id: "youtube",
        platform: "YOUTUBE",
        handle: "@mayconmatosadv",
        description: "Vídeos completos com orientações passo a passo sobre BPC/LOAS e direitos do segurado.",
        icon: "Youtube",
        url: "https://www.youtube.com/@mayconmatosadv",
        actionText: "Inscrever-se no YouTube"
      },
      {
        id: "whatsapp",
        platform: "WHATSAPP",
        handle: "Canal da Campanha 1078",
        description: "Receba materiais oficiais, propostas e envie suas sugestões para Minas Gerais.",
        icon: "MessageCircle",
        url: "#",
        actionText: "Falar no WhatsApp"
      }
    ]
  },

  // CTA FINAL
  finalCta: {
    title: "MAYCON MATOS",
    subtitle: "Advogado Terror do INSS • Candidato a Deputado Federal por Minas Gerais",
    quote: "Mães atípicas, cuidadores, beneficiários do BPC e aposentados terão uma voz firme e atuante no Congresso Nacional.",
    primaryBtnText: "CONHEÇA AS PROPOSTAS",
    secondaryBtnText: "ME SIGA NO INSTAGRAM"
  },

  // FOOTER E IDENTIFICAÇÃO ELEITORAL
  footer: {
    legalPlaceholder: "PROPAGANDA ELEITORAL | PARTIDO: REPUBLICANOS (10) • COLIGAÇÃO COM CLEITINHO GOVERNADOR",
    electoralInfo: "Propaganda Eleitoral na Internet • Candidato a Deputado Federal Maycon Matos - Nº 1078 • Resoluções vigentes do TSE",
    copyrightText: "Maycon Matos — Deputado Federal — 1078 • Minas Gerais. Todos os direitos reservados.",
    navLinks: [
      { name: "Início", href: "#inicio" },
      { name: "Quem é Maycon Matos", href: "#sobre" },
      { name: "Materiais de Campanha", href: "#cartazes" },
      { name: "Propostas", href: "#propostas" },
      { name: "Redes Sociais", href: "#contato" }
    ],
    legalLinks: [
      { name: "Política de Privacidade", href: "#privacidade" },
      { name: "Política de Cookies", href: "#cookies" }
    ]
  },

  // PALETA AZUL E AMARELO CLARO LUMINOSO
  theme: {
    primaryBlue: "#0B2B60",
    primaryBlueLight: "#164A96",
    primaryDark: "#061A3B",
    accentYellow: "#FACC15",
    yellowHover: "#EAB308",
    yellowLight: "#FEF9C3",
    bgLight: "#F8FAFC",
    cardBg: "#FFFFFF"
  }
};
