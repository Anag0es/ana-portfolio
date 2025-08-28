import { PersonalInfo, Experience, Project, Skill, Language, Education } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Ana Luisa Goes Barbosa",
  title: "Backend | IA | Dados",
  location: "São Paulo, SP",
  email: "analuisa.tech@gmail.com",
  phone: "+55 (11) 96361-4513",
  github: "Anag0es",
  linkedin: "ana-luisa-goes-barbosa",
  age: 20,
  summary: "Futura Cientista da Computação, com experiência sólida em desenvolvimento back-end, inteligência artificial e governança de dados. Atuo com tecnologias como Java, Spring, AWS, Python e SQL, aplicando-as para criar soluções eficientes, escaláveis e de alto impacto.\nMinha trajetória inclui passagens por instituições financeiras como Banco PAN, Safra, BTG Pactual e Cia de Talentos, além de experiências em projetos acadêmicos e iniciativas tecnológicas."
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Estágio | Veículos T.I",
    company: "Banco PAN",
    period: "Fev 2025 - Presente",
    description: "Atuo como estagiário no Banco Pan, desenvolvendo soluções de Backend em Java Spring no modelo Backend for Frontend (BFF). Minhas atividades envolvem a criação e o aprimoramento da estrutura de informações enviadas ao Frontend, garantindo eficiência e clareza na comunicação entre sistemas.",
    technologies: ["Java", "Spring", "BFF", "Backend", "API"],
    type: "work"
  },
  {
    id: "2",
    title: "Desenvolvedora Fullstack",
    company: "Finest Solutions",
    period: "Mar 2025 - Set 2025",
    description: "Principal desenvolvedora do setor HealthTech da empresa. Auxiliando no desenvolvimento de soluções escalaveis e automatizações com o foco no uso em IA para clínicas médicas e empresas voltadas para a o setor da saúde.",
    technologies: ["TypeScript", "Next.js", "Supabase", "Agent OpenAI", "HealthTech"],
    type: "work"
  },
  {
    id: "3",
    title: "Estágio | Governança de dados",
    company: "Safra",
    period: "Jul 2024 - Ago 2024",
    description: "Atuei diretamente na organização e validação dos dicionários de dados, garantindo que a estrutura das tabelas fosse clara e eficiente. Fui responsável pelo levantamento e documentação de metadados, assegurando a correta definição de tabelas e campos.",
    technologies: ["CloudEra", "Governança de Dados", "Metadados", "SQL"],
    type: "work"
  },
  {
    id: "4",
    title: "Desenvolvedora Fullstack",
    company: "Dionísio",
    period: "Jun 2024 - Jan 2025",
    description: "Desenvolvimento de soluções escaláveis e automatizações com o foco no uso em IA para ticketeria e conversas por whatsapp.",
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "Agent OpenAI"],
    type: "work"
  },
  {
    id: "5",
    title: "Estágio | Ciência de dados",
    company: "Cia de Talentos",
    period: "Jan 2024 - Fev 2024",
    description: "Fui responsável por orientar a seleção de algoritmos e conduzir o treinamento de modelos otimizados, desempenhando um papel crucial no desenvolvimento de soluções inovadoras. Utilizando Python e a biblioteca PuLP.",
    technologies: ["Python", "PuLP", "Machine Learning", "Otimização"],
    type: "work"
  },
  {
    id: "6",
    title: "Estágio - Inside | Desenvolvedora Backend Java - AWS",
    company: "BTG Pactual",
    period: "Jul 2023 - Jul 2023",
    description: "Atuei como Desenvolvedora Backend, onde participei de projetos essenciais para o portal digital da empresa. Um dos principais projetos envolveu a criação de um CRUD para gerenciar o FAQ nas landing pages de eventos, facilitando a atualização e gestão de informações.",
    technologies: ["Java", "Spring", "AWS S3"],
    type: "work"
  },
  {
    id: "7",
    title: "Bacharelado em Ciência da Computação",
    company: "Inteli - Instituto de Tecnologia e Liderança",
    period: "Jan 2023 - Dez 2026",
    description: "Formação completa em ciência da computação com foco em desenvolvimento de software, algoritmos e inteligência artificial. Participação ativa em projetos acadêmicos e iniciativas de pesquisa.",
    type: "academic"
  },
  {
    id: "8",
    title: "Desenvolvimento de Sistemas",
    company: "ETEC - Escola Técnica Estadual de São Paulo",
    period: "Fev 2021 - Jul 2022",
    description: "Curso técnico em Desenvolvimento de Sistemas, com foco em programação, banco de dados e desenvolvimento web. Base sólida em lógica de programação e metodologias de desenvolvimento.",
    type: "academic"
  }
];

export const projects: Project[] = [
  {
    id: "1",
    name: "Nsync - Chatbot Inteligente",
    description: "Desenvolver uma solução de chatbot inteligente, baseada em algoritmos de Processamento de Linguagem Natural (PLN) e recomendações personalizadas, para responder dúvidas frequentes, sugerir produtos e guiar o processo de compra.",
    technologies: ["Python", "PLN", "Machine Learning", "API", "Chatbot"],
    highlights: ["PLN avançado", "Recomendações personalizadas", "Tom de voz humanizado"]
  },
  {
    id: "2",
    name: "Nsync - Visão Computacional",
    description: "Desenvolvimento de um modelo de visão computacional para o auxilio de identificação de plantas daninhas nas plantações de canaviais por meio de imagens de drones.",
    technologies: ["Python", "Computer Vision", "Deep Learning", "OpenCV", "TensorFlow"],
    highlights: ["Identificação automática", "Processamento de imagens de drone", "Modelo otimizado"]
  },
  {
    id: "3",
    name: "DeepMind - Modelo Preditivo para a Mobly",
    description: "Criação de um modelo preditivo para a empresa de móveis e decoração, Mobly, para ajudar a prever a quantidade de produtos que devem ou não estar em estoque e assim, agilizar todo o projeto de compra e recebimento dos produtos.",
    technologies: ["Python", "Machine Learning", "Data Science", "Pandas", "Scikit-learn"],
    highlights: ["Otimização de estoque", "Modelo preditivo", "Análise de demanda"]
  },
  {
    id: "4",
    name: "PanPedia: Project Athena",
    description: "Criação de uma aplicação web para organização do catálogo geral do banco de dados do Banco Pan, disponibilizando consultas mais eficientes para áreas estratégicas da empresa.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "REST API", "Web Application"],
    highlights: ["Catálogo de dados", "Consultas eficientes", "Interface web"]
  },
  {
    id: "5",
    name: "Agregador de Investimento",
    description: "Agregador de Investimento, uma aplicação que combina o poder do Java Spring com testes utilizando Mockito e JUnit, integrando-se à API da Brapi para facilitar as decisões de investimento!",
    technologies: ["Java", "Spring Boot", "Mockito", "JUnit", "Brapi API"],
    highlights: ["Integração com API Brapi", "Testes automatizados", "Decisões de investimento"]
  },
  {
    id: "6",
    name: "E-commerce Hexagonal",
    description: "Sistema de Gerenciamento de Pedidos, um projeto desenvolvido para explorar e consolidar conhecimentos sobre arquitetura hexagonal e boas práticas de design de software em Java com Spring Boot.",
    technologies: ["Java", "Spring Boot", "Arquitetura Hexagonal", "Design Patterns"],
    highlights: ["Arquitetura hexagonal", "Boas práticas", "Design de software"]
  }
];

export const skills: Skill[] = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "Python", "FastAPI", "REST APIs", "Microservices", "BFF"]
  },
  {
    category: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "HTML5", "CSS3", "Vite"]
  },
  {
    category: "Banco de Dados",
    items: ["PostgreSQL", "MySQL", "SQL", "Prisma", "CloudEra"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "AWS S3", "Git", "GitHub Actions", "Docker"]
  },
  {
    category: "IA & Data Science",
    items: ["Machine Learning", "Python", "PuLP", "Computer Vision", "PLN", "OpenAI", "TensorFlow", "OpenCV"]
  },
  {
    category: "Ferramentas & Testes",
    items: ["Jest", "JUnit", "Mockito", "VS Code", "Postman", "Supabase", "BunJs"]
  },
  {
    category: "Soft Skills",
    items: ["Trabalho em equipe", "Comunicação", "Metodologia Ágil", "Metodologia Cascata", "Pensamento crítico", "Resolução de problemas"]
  }
];

export const languages: Language[] = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário (B2)" },
  { name: "Espanhol", level: "Iniciante (A1)" }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Inteli - Instituto de Tecnologia e Liderança",
    degree: "Bacharelado em Ciência da Computação",
    period: "Jan 2023 - Dez 2026",
    description: "Formação completa em ciência da computação com foco em desenvolvimento de software, algoritmos e inteligência artificial. Participação ativa em projetos acadêmicos e iniciativas de pesquisa."
  },
  {
    id: "2",
    institution: "ETEC - Escola Técnica Estadual de São Paulo",
    degree: "Desenvolvimento de Sistemas",
    period: "Fev 2021 - Jul 2022",
    description: "Curso técnico em Desenvolvimento de Sistemas, com foco em programação, banco de dados e desenvolvimento web. Base sólida em lógica de programação e metodologias de desenvolvimento."
  },
  {
    id: "3",
    institution: "Google Cloud Skills Boost",
    degree: "Inteligência Artificial - Google Cloud",
    period: "Nov 2024",
    description: "Certificação em Inteligência Artificial pela Google Cloud, cobrindo machine learning, processamento de linguagem natural e soluções de IA na nuvem."
  },
  {
    id: "4",
    institution: "Cisco Networking Academy",
    degree: "PCAP - Programming Essentials in Python",
    period: "Mar 2023",
    description: "Certificação em programação Python, cobrindo fundamentos da linguagem, estruturas de dados, programação orientada a objetos e boas práticas de desenvolvimento."
  }
];
