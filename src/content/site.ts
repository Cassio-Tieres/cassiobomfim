/**
 * Conteúdo editável do site.
 * Altere textos, contatos, projetos e tecnologias aqui — os componentes
 * apenas leem estes dados.
 *
 * Contatos com valor `null` não são exibidos no site.
 */

export const profile = {
  name: "Cássio Bomfim",
  title: "Engenheiro de Software | Automação, Dados e Integração de Sistemas",
  shortDescription:
    "Automação de processos, integração de sistemas e engenharia de dados para empresas que precisam operar com mais eficiência e confiabilidade.",
};

export const contact = {
  /** Número com DDI + DDD, apenas dígitos. */
  whatsapp: "5579991726164",
  whatsappDisplay: "+55 (79) 99172-6164",
  whatsappMessage:
    "Olá! Conheci seu portfólio e gostaria de conversar sobre um projeto de automação ou desenvolvimento de software.",
  email: "tieresbomfim@gmail.com" as string | null,
  linkedin: "https://www.linkedin.com/in/cassio-tieres-bomfim/" as string | null,
  github: null as string | null,
};

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Como trabalho", href: "#como-trabalho" },
  { label: "Contato", href: "#contato" },
] as const;

export const hero = {
  title: "Transformo processos complexos em soluções de software eficientes.",
  subtitle:
    "Automação de processos, integração de sistemas e engenharia de dados para empresas que precisam operar com mais eficiência e confiabilidade.",
};

export type ServiceIcon = "workflow" | "database" | "migration" | "plug" | "sparkles" | "tool";

export const services: {
  icon: ServiceIcon;
  title: string;
  description: string;
  examples: string[];
}[] = [
  {
    icon: "workflow",
    title: "Automação de processos",
    description:
      "Automatização de atividades repetitivas, rotinas operacionais e fluxos de trabalho que dependem de execução manual.",
    examples: [
      "Processamento automático de e-mails e documentos",
      "Geração de tickets a partir de mensagens recebidas",
      "Execução programada de tarefas",
      "Consolidação e organização de informações",
      "Automatização de relatórios e rotinas administrativas",
    ],
  },
  {
    icon: "database",
    title: "Engenharia de dados e ETL/ELT",
    description:
      "Construção de pipelines para extrair, transformar, validar e carregar dados entre diferentes fontes e bancos de dados.",
    examples: [
      "Integração de dados provenientes de APIs",
      "Cargas batch programadas",
      "Atualizações incrementais de bases de dados",
      "Normalização e tratamento de dados",
      "Estruturação de fluxos para análise e acompanhamento operacional",
    ],
  },
  {
    icon: "migration",
    title: "Migração e processamento de grandes volumes de dados",
    description:
      "Estratégias e ferramentas para transferir dados entre sistemas com foco em consistência, integridade e rastreabilidade.",
    examples: [
      "Migração entre bancos de dados",
      "Transformação de estruturas e formatos",
      "Validação de registros durante a transferência",
      "Processamento em lotes",
      "Tratamento de inconsistências e prevenção de duplicidades",
    ],
  },
  {
    icon: "plug",
    title: "Integração de sistemas e APIs",
    description:
      "Conexão entre aplicações, serviços externos e bancos de dados para eliminar silos de informação e reduzir operações manuais.",
    examples: [
      "Integração entre sistemas internos e plataformas externas",
      "Consumo e processamento de APIs REST",
      "Sincronização de informações",
      "Orquestração de fluxos entre ferramentas",
      "Tratamento de erros e respostas de serviços externos",
    ],
  },
  {
    icon: "sparkles",
    title: "Inteligência artificial aplicada a processos",
    description:
      "Soluções com modelos de linguagem e IA quando existe um problema de negócio que justifica essa abordagem — a tecnologia é escolhida de acordo com a necessidade.",
    examples: [
      "Classificação e extração de informações de textos",
      "Apoio ao processamento de mensagens e documentos",
      "Integração de modelos de linguagem a fluxos automatizados",
      "Assistentes especializados para tarefas delimitadas",
    ],
  },
  {
    icon: "tool",
    title: "Ferramentas e aplicações personalizadas",
    description:
      "Criação de ferramentas internas, aplicações web e utilitários para atender necessidades específicas de uma operação.",
    examples: [
      "Ferramentas para equipes operacionais",
      "Interfaces para acompanhar processos automatizados",
      "Sistemas auxiliares para organização de informações",
      "Aplicações integradas a APIs e bancos de dados",
    ],
  },
];

export type Project = {
  title: string;
  category: string[];
  /** "experiencia" = experiência técnica anonimizada; "capacidade" = descrição de capacidade técnica */
  kind: "experiencia" | "capacidade";
  context: string;
  solution: string[];
  approach: string[];
  benefit: string;
  /** Liste apenas tecnologias confirmadas. Vazio = não exibido. */
  technologies: string[];
  /** Diagrama genérico recriado para apresentação. */
  flow: string[];
};

export const projects: Project[] = [
  {
    title: "Pipeline diário de dados de utilização de produto",
    category: ["Engenharia de dados", "ETL/ELT", "Automação"],
    kind: "experiencia",
    context:
      "Uma operação precisava disponibilizar diariamente dados de utilização de funcionalidades e engajamento de usuários em uma base de dados estruturada para consumo interno.",
    solution: [
      "Desenvolvimento de um fluxo automatizado de extração, tratamento, normalização e carregamento dos dados de uma plataforma de analytics para um banco de dados PostgreSQL compatível com Supabase.",
    ],
    approach: [
      "Integração entre fonte de dados e banco de destino",
      "Orquestração de um processo batch diário",
      "Tratamento e normalização de dados",
      "Estratégia de extração incremental",
      "Organização do fluxo de atualização dos dados",
    ],
    benefit:
      "Estruturar a disponibilização recorrente de dados de utilização do produto, reduzindo a dependência de extrações manuais e preparando as informações para análises internas.",
    technologies: ["n8n", "PostgreSQL", "Supabase", "Plataforma de analytics"],
    flow: ["Fonte de dados", "Extração", "Tratamento e normalização", "Banco de dados", "Consumo interno"],
  },
  {
    title: "Atualização automatizada de dados transacionais",
    category: ["Engenharia de dados", "Integração de APIs", "ETL"],
    kind: "experiencia",
    context:
      "Uma empresa do setor de pagamentos precisava manter uma base de dados atualizada com informações transacionais disponibilizadas por uma API externa.",
    solution: [
      "Implementação de um processo batch para consumir os dados da API, tratar os registros recebidos e atualizar uma base de dados estruturada.",
      "A frequência da atualização foi definida de acordo com as regras de negócio e com a necessidade de consolidação diária das informações.",
    ],
    approach: [
      "Consumo de API",
      "Extração de dados transacionais",
      "Tratamento e normalização de registros",
      "Processamento em lotes",
      "Atualização de banco de dados",
      "Organização de uma rotina recorrente de integração",
    ],
    benefit:
      "Padronizar e automatizar a atualização das informações transacionais, criando uma base estruturada para consultas e processos operacionais posteriores.",
    technologies: ["API", "Supabase", "ETL", "Processamento batch"],
    flow: ["API transacional", "Extração", "Tratamento dos registros", "Carga batch", "Banco de dados"],
  },
  {
    title: "Automação de geração de tickets a partir de e-mails",
    category: ["Automação de processos", "Integração de sistemas"],
    kind: "capacidade",
    context:
      "O recebimento de solicitações por e-mail pode exigir triagem e registro manual em uma ferramenta de atendimento ou gestão de tarefas.",
    solution: [
      "Automação voltada à transformação de e-mails recebidos em tickets estruturados, utilizando as informações disponíveis na mensagem para apoiar o registro da solicitação.",
    ],
    approach: [
      "Identificação e processamento de e-mails",
      "Extração das informações necessárias",
      "Transformação dos dados para um formato estruturado",
      "Integração com um sistema de tickets",
      "Automatização das etapas repetitivas do fluxo",
    ],
    benefit:
      "Reduzir etapas manuais no registro de solicitações e tornar o fluxo de recebimento e encaminhamento mais organizado.",
    technologies: [],
    flow: ["E-mail recebido", "Identificação", "Extração de informações", "Estruturação", "Sistema de tickets"],
  },
  {
    title: "Migração de grandes volumes de dados",
    category: ["Engenharia de dados", "Migração", "Integridade de dados"],
    kind: "experiencia",
    context:
      "Migrações de dados exigem planejamento para transferir registros entre sistemas ou bancos de dados, preservando a consistência e a estrutura das informações.",
    solution: [
      "Rotinas e estratégias para migração e processamento de grandes conjuntos de dados, com atenção à transformação, validação e integridade dos registros.",
    ],
    approach: [
      "Leitura e processamento de dados de origem",
      "Transformação e adequação de estruturas",
      "Transferência entre sistemas ou bancos",
      "Processamento em lotes quando apropriado",
      "Validação da consistência dos registros",
      "Tratamento de erros e identificação de inconsistências",
    ],
    benefit:
      "Viabilizar a transferência estruturada de dados entre ambientes e reduzir os riscos associados a processos de migração.",
    technologies: [],
    flow: ["Origem", "Leitura", "Transformação", "Validação", "Destino"],
  },
];

export const problems = {
  title: "Seu processo ainda depende de trabalho manual?",
  items: [
    "Sua equipe precisa copiar informações de um sistema para outro?",
    "Os dados precisam ser consolidados manualmente em planilhas?",
    "Relatórios dependem de rotinas executadas por alguém?",
    "Sistemas diferentes não compartilham informações automaticamente?",
    "Sua empresa precisa migrar dados com segurança?",
    "Solicitações recebidas por e-mail precisam ser registradas manualmente?",
    "Sua operação depende de integrações frágeis ou processos difíceis de manter?",
  ],
  closing:
    "Podemos avaliar seu processo e identificar onde a automação ou uma solução de software pode gerar valor.",
  cta: "Descrever meu problema",
};

export const processSteps = [
  {
    title: "Entendimento do problema",
    description:
      "Conversa inicial para compreender o processo atual, as ferramentas envolvidas e o resultado desejado.",
  },
  {
    title: "Análise e proposta",
    description:
      "Avaliação das alternativas técnicas, definição do escopo e alinhamento das entregas.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Implementação da solução com atenção à confiabilidade, legibilidade, manutenção e tratamento de erros.",
  },
  {
    title: "Validação e entrega",
    description:
      "Testes, validação com o cliente, documentação pertinente e orientações para utilização ou continuidade da solução, conforme o escopo contratado.",
  },
];

/** Adicione novas tecnologias apenas quando confirmadas. */
export const skillGroups = [
  {
    title: "Programação e engenharia de software",
    items: ["Python", "Arquitetura de soluções", "Desenvolvimento de integrações"],
  },
  {
    title: "Dados",
    items: ["ETL/ELT", "PostgreSQL", "Supabase", "Processamento batch", "Normalização e migração de dados"],
  },
  {
    title: "Integração e automação",
    items: ["APIs", "n8n", "Orquestração de processos", "Sincronização de dados"],
  },
  {
    title: "Inteligência artificial",
    items: ["LLMs", "Integração de modelos de linguagem", "Automação inteligente"],
  },
];

export const about = {
  title: "Engenharia de software orientada a problemas reais.",
  paragraphs: [
    "Sou desenvolvedor de software com mais de quatro anos de experiência na construção de soluções que conectam sistemas, automatizam processos e organizam dados.",
    "Minha atuação envolve arquitetura de soluções, integração de APIs, engenharia de dados e automação. Busco compreender o contexto operacional de cada desafio para desenvolver soluções adequadas à necessidade, com atenção à confiabilidade, à manutenção e à qualidade técnica.",
    "Tenho interesse especial em projetos nos quais software e automação podem simplificar operações, melhorar a consistência das informações e eliminar etapas repetitivas.",
  ],
  facts: [
    { label: "Experiência", value: "4+ anos" },
    { label: "Foco", value: "Automação · Dados · Integração" },
    { label: "Também atua com", value: "Arquitetura de soluções e IA aplicada" },
  ],
};

export const contactSection = {
  title: "Tem um processo que precisa ser automatizado?",
  text: "Descreva brevemente o desafio da sua empresa. Vamos avaliar as possibilidades técnicas e identificar um caminho viável para a solução.",
};
