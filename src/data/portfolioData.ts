export interface Project {
  id: string;
  title: string;
  category: 'fintech' | 'bumn' | 'web' | 'mobile';
  categoryLabel: string;
  description: string;
  architectureDetails: string[];
  impact: string;
  techStack: string[];
  featured: boolean;
  badge?: string;
  link?: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // 'Advanced' | 'Expert' | 'Proficient'
    icon: string;
    featured?: boolean;
  }[];
}

export const PERSONAL_INFO = {
  name: "Alfin Faiz Febrianto",
  role: "Fullstack & Fintech Systems Engineer",
  tagline: "Building High-Concurrency Biller Switching, Resilient Microservices, and Scalable Enterprise Platforms.",
  bio: "Software Engineer with extensive experience in mission-critical financial switching systems, host-to-host (H2H) biller architectures, and enterprise web & mobile development. Proven track record in processing millions of transactions, building fraud detection pipelines, and delivering BUMN & government solutions.",
  status: "Available for Projects & Tech Roles",
  location: "Surabaya, Indonesia",
  email: "alvinf889@gmail.com",
  phone: "6281234567890", // Ganti dengan nomor WA aslimu (format: 628xxx)
  social: {
    github: "https://github.com/alfinff",
    linkedin: "https://linkedin.com/in/alfinff",
    whatsapp: "https://wa.me/6281234567890",
  },
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Enterprise Systems", value: "25+" },
    { label: "Monthly Transactions", value: "10M+" },
    { label: "System Availability", value: "99.98%" },
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Microservices",
    description: "Core systems, high-throughput APIs, and distributed event architectures.",
    skills: [
      { name: "Golang", level: "Advanced", icon: "golang", featured: true },
      { name: "Node.js / Express", level: "Advanced", icon: "nodejs", featured: true },
      { name: "PHP / Laravel", level: "Expert", icon: "laravel", featured: true },
      { name: "Java / Spring", level: "Proficient", icon: "java" },
      { name: "BullMQ & Redis", level: "Advanced", icon: "redis", featured: true },
      { name: "REST & H2H Protocols", level: "Expert", icon: "api", featured: true },
    ]
  },
  {
    title: "Frontend & Mobile",
    description: "Interactive, accessible, and high-performance client experiences.",
    skills: [
      { name: "React.js", level: "Advanced", icon: "react", featured: true },
      { name: "TypeScript", level: "Advanced", icon: "typescript", featured: true },
      { name: "Vue.js", level: "Proficient", icon: "vue" },
      { name: "Flutter (Dart)", level: "Advanced", icon: "flutter", featured: true },
      { name: "Tailwind CSS", level: "Expert", icon: "tailwind" },
      { name: "Next.js", level: "Proficient", icon: "nextjs" },
    ]
  },
  {
    title: "Database & Message Queues",
    description: "Relational, document, and in-memory transactional storage.",
    skills: [
      { name: "MySQL / MariaDB", level: "Expert", icon: "mysql" },
      { name: "PostgreSQL", level: "Advanced", icon: "postgresql" },
      { name: "MongoDB", level: "Proficient", icon: "mongodb" },
      { name: "Redis Caching", level: "Advanced", icon: "redis" },
      { name: "SQL Server", level: "Proficient", icon: "sqlserver" },
    ]
  },
  {
    title: "DevOps & Engineering Tools",
    description: "Containerization, automated deployment pipelines, and observability.",
    skills: [
      { name: "Docker", level: "Proficient", icon: "docker" },
      { name: "Git & GitHub Actions", level: "Advanced", icon: "git" },
      { name: "Postman & API Testing", level: "Expert", icon: "postman" },
      { name: "Linux Administration", level: "Advanced", icon: "linux" },
      { name: "Cloudflare & Vercel", level: "Advanced", icon: "cloud" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "h2h-core-biller",
    title: "H2H Core Financial Switching & Biller Engine",
    category: "fintech",
    categoryLabel: "Fintech & Switching",
    description: "High-throughput transactional biller engine bridging nationwide biller services (BPJS Ketenagakerjaan, Kemenkeu RI, PDAM, PLN, Telco) with thousands of outlet merchants and banking partners.",
    architectureDetails: [
      "Microservice architecture with asynchronous transaction queueing via Redis & BullMQ.",
      "Custom JSON/XML & ISO-8583 protocol parsers for seamless upstream bank connectivity.",
      "Idempotent transaction locks ensuring zero double-charging under high concurrent spikes.",
      "Real-time balance settlement listener for automated deposit sync from cloud banking."
    ],
    impact: "Processes millions of transactions monthly with sub-300ms latency and 99.98% uptime.",
    techStack: ["Golang", "Node.js", "Redis", "BullMQ", "MySQL", "Docker", "H2H API"],
    featured: true,
    badge: "National Scale",
  },
  {
    id: "fraud-detection-system",
    title: "Real-Time Fraud Detection System (FDS) Worker",
    category: "fintech",
    categoryLabel: "Security & FinTech",
    description: "Automated anomaly-detection background engine that continuously monitors deposit flows, high-velocity transactions, and suspicious account patterns.",
    architectureDetails: [
      "Real-time event processing worker consuming event streams via Redis pub/sub.",
      "Rule-based threshold scoring engine analyzing geo-IP, rapid account draining, and repeat payment anomalies.",
      "Automated account quarantine triggers and webhook alerts to SOC (Security Operations Center).",
      "Historical audit trail logging for anti-money laundering (AML) compliance."
    ],
    impact: "Prevented fraudulent chargebacks and reduced suspicious unauthorized transactions by over 80%.",
    techStack: ["Node.js", "BullMQ", "Redis", "MongoDB", "Cron Services"],
    featured: true,
    badge: "Mission Critical",
  },
  {
    id: "pelindo-operations",
    title: "Pelindo Maritime & Port Operations Platform",
    category: "bumn",
    categoryLabel: "BUMN & Enterprise",
    description: "Comprehensive enterprise web platform for PT Pelabuhan Indonesia (Persero) managing port operations, vessel scheduling, and container logistics tracking.",
    architectureDetails: [
      "Modern Single Page Application built with React and TypeScript for maximum UI responsiveness.",
      "Modular dashboard with live data tables, role-based access control (RBAC), and export utilities.",
      "State management optimized for real-time berth allocation and cargo status updates."
    ],
    impact: "Streamlined operational turnaround time across harbor terminals and digitized paper workflows.",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "RESTful API", "Vite"],
    featured: true,
    badge: "BUMN Flagship",
  },
  {
    id: "fmss-reconciliation",
    title: "FMSS - Automated Multi-Bank Reconciliation Engine",
    category: "fintech",
    categoryLabel: "Fintech Core",
    description: "Automated financial reconciliation system resolving multi-party transaction logs between partner billers, banks, and merchant balance ledgers.",
    architectureDetails: [
      "Automated daily reconciliation parser comparing multi-gigabyte statement files against internal ledger records.",
      "Discrepancy detection engine identifying pending, failed, or asymmetric financial entries.",
      "Automated dispute settlement queue and detailed exportable PDF/Excel audit reports."
    ],
    impact: "Reduced finance team reconciliation duration from 6 hours daily to under 15 minutes of automated execution.",
    techStack: ["PHP / Laravel", "Go", "SQL Server", "Redis", "Export Service"],
    featured: false,
  },
  {
    id: "kemenhub-pusbang",
    title: "Kemenhub Pusbang SDM Laut & Udara Portals",
    category: "bumn",
    categoryLabel: "Government & Education",
    description: "Official human resource development portal for Ministry of Transportation (Kementerian Perhubungan RI) covering maritime and civil aviation education academies.",
    architectureDetails: [
      "Scalable multi-tenant architecture serving nationwide public service users and student registration.",
      "Secure document verification pipeline with digital signature validation.",
      "High-availability caching layer for handling peak annual admission registration surges."
    ],
    impact: "Serving tens of thousands of cadets and prospective transportation professionals across Indonesia.",
    techStack: ["Laravel", "Vue.js", "MySQL", "Bootstrap", "REST API"],
    featured: false,
    badge: "Government",
  },
  {
    id: "mandiri-kopra-extractor",
    title: "Corporate Banking OCR & Statement Robotic Engine",
    category: "fintech",
    categoryLabel: "Automation & FinTech",
    description: "Automated robotic crawler and OCR engine for real-time balance retrieval and statement ingestion from Bank Mandiri Kopra corporate portals.",
    architectureDetails: [
      "Automated headless browser pipeline with intelligent session refresh and security handling.",
      "Google Vision API integration for real-time Captcha solving and OCR extraction.",
      "Failover retry mechanism with fallback notification hooks."
    ],
    impact: "Eliminated manual bank statement downloads and enabled near-instant balance synchronization.",
    techStack: ["Node.js", "Puppeteer", "Google Vision API", "Redis", "AES Encryption"],
    featured: false,
  },
  {
    id: "flutter-field-apps",
    title: "Cross-Platform Merchant & Field Agent Apps",
    category: "mobile",
    categoryLabel: "Mobile Applications",
    description: "High-performance Flutter mobile application for merchant outlets, facilitating cash-in/cash-out, PPOB biller payments, and daily revenue reporting on Android devices.",
    architectureDetails: [
      "Clean Architecture with BLoC state management for predictable offline-to-online sync.",
      "Bluetooth thermal printer integration for automated customer receipts.",
      "Biometric authentication and encrypted local storage for sensitive credentials."
    ],
    impact: "Empowered thousands of small-to-medium enterprise (UMKM) merchants with instant digital point-of-sale capabilities.",
    techStack: ["Flutter", "Dart", "BLoC Pattern", "REST API", "SQLite"],
    featured: true,
  },
  {
    id: "dinsos-jurnal-web",
    title: "Jurnal Digital Dinas Sosial Platform",
    category: "web",
    categoryLabel: "Public Sector Web",
    description: "Government case reporting and digital social journal management application for monitoring public assistance programs and social service verifications.",
    architectureDetails: [
      "Fullstack web app with multi-tier approval hierarchy.",
      "Geographic tagging of social program beneficiaries with image attachment verification.",
      "Role-based reporting dashboards for regional department supervisors."
    ],
    impact: "Enhanced transparency and auditability in social assistance disbursement records.",
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript", "Leaflet Maps"],
    featured: false,
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Backend & Fintech Systems Engineer",
    company: "PT Bimasakti Multi Sinergi (Fastpay / Rajabiller)",
    period: "2023 - Present",
    location: "Sidoarjo / Surabaya, Indonesia",
    type: "Full-time",
    description: "Core engineer responsible for high-throughput biller integration, Host-to-Host (H2H) financial switching gateways, automated reconciliation engines, and real-time fraud mitigation services.",
    achievements: [
      "Architected and maintained H2H core API connections processing millions of transactions for national billers (BPJS Ketenagakerjaan, Kemenkeu, PLN, PDAM).",
      "Built asynchronous fraud detection worker pipelines using BullMQ and Redis to detect and mitigate malicious financial anomalies.",
      "Developed automated corporate banking statement scrapers with OCR captcha bypass, cutting manual balance verification time by 90%.",
      "Engineered automated multi-bank reconciliation services (FMSS) handling millions in daily volume with zero balance discrepancy."
    ],
    tech: ["Golang", "Node.js", "PHP / Laravel", "Redis", "BullMQ", "MySQL", "Docker", "H2H APIs"]
  },
  {
    role: "Fullstack Developer (Enterprise & BUMN Solutions)",
    company: "PT Primakom Integrasi Solusi",
    period: "2021 - 2023",
    location: "Surabaya, Indonesia",
    type: "Full-time",
    description: "Delivered enterprise web applications, government digital transformation portals, and operations platforms for key state-owned enterprises (BUMN) and ministries.",
    achievements: [
      "Developed frontend architecture for PT Pelabuhan Indonesia (Pelindo) port operations and management platform using modern React.",
      "Engineered official educational portals for Ministry of Transportation (Pusbang Laut & Pusbang Udara Kemenhub RI).",
      "Created digital public welfare tracking application for Dinas Sosial with geographic tagging and multi-level approval workflows.",
      "Designed resilient relational database schemas and optimized complex SQL queries for high-volume public portals."
    ],
    tech: ["React.js", "Vue.js", "PHP / Laravel", "TypeScript", "MySQL", "Tailwind CSS", "REST APIs"]
  },
  {
    role: "Fullstack & Mobile Software Consultant",
    company: "Independent / Freelance",
    period: "2020 - Present",
    location: "Remote",
    type: "Contract / Project-based",
    description: "Partnering with startups, SMEs, and digital businesses to engineer custom web and mobile solutions from initial system design to cloud production deployment.",
    achievements: [
      "Delivered end-to-end POS and merchant field applications built with Flutter and Firebase/REST backends.",
      "Constructed custom e-commerce and ticket booking reservation systems with payment gateway integration.",
      "Consulted on API performance optimizations, server setups, and automated deployment pipelines."
    ],
    tech: ["Flutter", "React", "Node.js", "Laravel", "PostgreSQL", "Docker", "Vercel"]
  }
];
