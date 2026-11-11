import {
  Bot,
  BrainCircuit,
  FileCode2,
  Hand,
  Radio,
  Scale,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { TechId } from "./tech";

export const profile = {
  firstName: "Poonam",
  name: "Poonam Mehan",
  role: "Full Stack AI Engineer",
  location: "New Delhi, India",
  status: "Open to opportunities",
  email: "poonammehan655@gmail.com",
  github: "https://github.com/PoonamMehan",
  // Leave a link empty to hide its button on the home page.
  linkedin: "https://www.linkedin.com/in/poonammehan/",
  x: "https://x.com/ThriveMindspace",
  // A Cal.com booking link turns the main button into "Book a Call"; empty keeps "Say hello" by email.
  cal: "https://cal.com/poonam-mehan",
  resume: "/resume.pdf",
};

/** The amber callout under the intro. Set it to show an award or hackathon win. */
export const highlight: {
  title: string;
  href: string;
  badge: string;
  detail: string;
  date: string;
} | null = {
  title: "Won the OpenAI DevDay Exchange Hackathon, New Delhi",
  href: "https://luma.com/6t5uk4lo",
  badge: "OpenAI × IIIT Delhi",
  detail:
    "**OpenAI**'s community Codex hackathon, held at **IIIT Delhi**. Our team of five shipped SignStream in just **5 hours**: a Chrome extension and website that add a sign-language avatar to any YouTube video, using **Cerebras** to translate captions into ASL and **Exa** for video context.",
  date: "November 2026",
};

export type Project = {
  name: string;
  tagline: string;
  summary: string;
  points: string[];
  stack: string[];
  tech: TechId[];
  icon: LucideIcon;
  links?: { label: string; href: string }[];
};

const newralProjects: Project[] = [
  {
    name: "Real-Time Examination Platform",
    tagline: "50K–80K concurrent users",
    summary:
      "High-concurrency exam system where a Redis write-buffer and BullMQ workers keep database load a function of server count, not exam size.",
    points: [
      "Built a full-stack exam system sustaining **50K–80K concurrent users** on a **NestJS/TypeScript** backend with a **GraphQL** API and **PostgreSQL/TypeORM**.",
      "Engineered a **Redis** answer write-buffer and **BullMQ** worker pipeline (grading, checkpointing, delayed auto-submit) to decouple DB writes from concurrent-user count.",
      "Secured with **JWT** auth and **SSE** real-time delivery; built student and admin **React** frontends (Apollo Client, Ant Design) on a shared GraphQL API.",
    ],
    stack: ["NestJS", "GraphQL", "PostgreSQL", "Redis", "BullMQ", "SSE", "React"],
    tech: ["nestjs", "typescript", "graphql", "postgresql", "typeorm", "redis", "react", "apollo", "antdesign", "jwt"],
    icon: Radio,
  },
  {
    name: "Document-to-Quiz Engine",
    tagline: "Word question banks → graded tests",
    summary:
      "Turns uploaded Word question banks into structured, auto-graded assessments, with equations rendered and answer keys kept server-side.",
    points: [
      "Built an automated engine (**NestJS/GraphQL**) that converts uploaded Word question banks into structured, auto-graded assessments.",
      "Implemented presigned **direct-to-S3** uploads (stateless backend, no local file storage), **Pandoc** DOCX→HTML conversion, **MathJax** MathML/LaTeX→SVG rendering and **Cheerio** table parsing.",
      "Enforced **multi-tenant RBAC** and a security-by-design answer-key split that keeps correct answers server-side.",
    ],
    stack: ["NestJS", "GraphQL", "AWS S3", "Pandoc", "MathJax", "Cheerio"],
    tech: ["nestjs", "graphql", "aws", "pandoc"],
    icon: FileCode2,
  },
  {
    name: "AI Page-Builder",
    tagline: "Prompt → course landing page",
    summary:
      "Microservice that generates course landing pages from a prompt, runs them in isolated sandboxes with live preview, and wires CTAs into payments.",
    points: [
      "Architected an AI page-builder microservice (**Node/Express**, **Bull + Redis**, **Socket.IO**) generating course landing pages from prompts via **Gemini/Claude** (Vercel AI SDK).",
      "Ran AI-generated HTML in isolated **E2B sandboxes** with live preview and real-time **WebSocket** progress.",
      "Integrated with a NestJS/GraphQL backend (S3 publishing, multi-tenant AI-credit metering) plus **React/Redux** admin and public frontends, bridging generated CTAs into a **Cashfree** payment flow.",
    ],
    stack: ["Node.js", "Express", "Bull", "Socket.IO", "Vercel AI SDK", "E2B"],
    tech: ["nodejs", "express", "redis", "socketio", "claude", "gemini", "vercel", "react", "redux"],
    icon: Wand2,
  },
];

const [examPlatform, documentToQuiz, pageBuilder] = newralProjects;

export type Product = {
  name: string;
  href: string;
  logo: string;
  badge: string;
  summary: string;
  projects: Project[];
};

/** Newral products the projects above belong to; their scale is what makes the work matter. */
export const newralProducts: Product[] = [
  {
    name: "Competishun",
    href: "https://i.competishun.com/",
    logo: "/logos/competishun.svg",
    badge: "Managed end to end",
    summary:
      "Newral's EdTech client, which I manage end to end: **14+ microservices** serving **100K+ users**, from the live exam engine to the question-bank pipeline.",
    projects: [examPlatform, documentToQuiz],
  },
  {
    name: "Synappses",
    href: "https://synappses.in/",
    logo: "/logos/synappses.png",
    badge: "Newral's flagship LMS",
    summary:
      "White-label enterprise LMS at **$6K MRR**, powering IIT School, College Kaka and creator-led education businesses globally. I built its AI page-builder.",
    projects: [pageBuilder],
  },
];

export const ownProjects: Project[] = [
  {
    name: "SignStream",
    tagline: "OpenAI hackathon winner",
    summary:
      "Chrome extension and website that add a sign-language avatar to any YouTube video. I built the Manifest V3 extension, with signing that stays in sync through seeks, ads and navigation.",
    points: [
      "A Chrome extension and website that add a **sign-language avatar** to any YouTube video, using **Cerebras** to translate captions into **ASL** and **Exa** for video context.",
      "I built the **Manifest V3** extension (**TypeScript**, **React**): video-synced signing that stays in time through seeks, speed changes, ads and SPA navigation.",
      "Also built its **Chrome side panel**.",
      "Won the **OpenAI DevDay Exchange Hackathon** at **IIIT Delhi** as a team of five, built in just **5 hours**.",
    ],
    stack: ["TypeScript", "React", "Chrome MV3", "Cerebras", "Exa"],
    tech: ["typescript", "react", "chrome"],
    icon: Hand,
    links: [{ label: "Source", href: "https://github.com/rshdhere/avatar-sign" }],
  },
  {
    name: "OpenLoop",
    tagline: "Screen-context AI memory",
    summary:
      "Mac menu bar app that reads your apps through the accessibility tree and gives Claude a searchable memory over MCP.",
    points: [
      "Mac menu bar app that reads apps via the **macOS accessibility tree** and exposes memory to Claude over **MCP**.",
      "**Gemini** extraction with PII redaction and **Zod**-validated JSON, stored in encrypted **SQLite** with FTS5 search.",
      "Building a real-time **LiveKit** voice agent that answers from memory and confirms before acting on loops.",
      "Designed an **LLM eval suite** scoring commitment and fact extraction, memory updates and search accuracy.",
    ],
    stack: ["Swift", "Electron", "MCP", "LiveKit", "Gemini"],
    tech: ["swift", "electron", "mcp", "livekit", "gemini", "sqlite", "zod"],
    icon: BrainCircuit,
    links: [{ label: "Source", href: "https://github.com/PoonamMehan/OpenLoop" }],
  },
  {
    name: "My Legal Assistant",
    tagline: "RAG application",
    summary:
      "Retrieval-augmented Q&A for Indian law: Pinecone retrieval, Mistral AI answers, and saved chat history.",
    points: [
      "Full-stack **RAG** application for Indian legal Q&A.",
      "Uses **Pinecone** for vector retrieval and **Mistral AI** for response generation.",
      "**JWT**-based authentication and **MongoDB**-backed chat history.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Pinecone", "Mistral AI"],
    tech: ["mongodb", "express", "react", "nodejs", "pinecone", "mistral", "jwt"],
    icon: Scale,
    links: [{ label: "Live", href: "https://ragmylegalassistant.onrender.com/" }],
  },
  {
    name: "FlowBolt",
    tagline: "Visual workflow automation",
    summary:
      "Connects apps, services and databases into automated workflows with zero code, executing in real time.",
    points: [
      "Visual workflow automation platform connecting apps, services and databases.",
      "Automates repetitive tasks with **zero lines of code**.",
      "Built with **Next.js**, **Express**, **Kafka** and **WebSockets** for real-time execution.",
    ],
    stack: ["Next.js", "Express", "Kafka", "WebSockets"],
    tech: ["nextjs", "express", "kafka"],
    icon: Workflow,
    links: [{ label: "Source", href: "https://github.com/PoonamMehan/n8n" }],
  },
  {
    name: "Asimo",
    tagline: "AI-powered app builder",
    summary:
      "Builds full web apps from a single prompt, like Bolt or Lovable, and runs them in the browser with a real terminal.",
    points: [
      "Builds full web apps from a **single prompt**, like Bolt or Lovable.",
      "Generates code with an LLM and runs projects in-browser via **WebContainer**.",
      "Deployed on **AWS** with a CI/CD pipeline, Dockerfile and an integrated **xterm.js** terminal.",
    ],
    stack: ["React", "Docker", "AWS", "xterm.js", "WebContainer"],
    tech: ["react", "docker", "aws", "webcontainer"],
    icon: Bot,
    links: [{ label: "Live", href: "https://asimo.onrender.com" }],
  },
];

export type Role = {
  company: string;
  href: string;
  role: string;
  period: string;
  current?: boolean;
  tech: TechId[];
  groups: {
    title?: string;
    href?: string;
    intro?: string;
    points?: string[];
    sections?: { title: string; points: string[] }[];
  }[];
};

export const experience: Role[] = [
  {
    company: "Newral Softwares",
    href: "https://www.newral.in/",
    role: "Full Stack AI Engineer",
    period: "April 2026 – Present",
    current: true,
    tech: ["nestjs", "typescript", "graphql", "postgresql", "typeorm", "redis", "react", "apollo", "antdesign", "nodejs", "express", "socketio", "claude", "gemini", "vercel", "aws"],
    groups: newralProducts.map((product) => ({
      title: product.name,
      href: product.href,
      intro: product.summary,
      sections: product.projects.map((p) => ({ title: p.name, points: p.points })),
    })),
  },
  {
    company: "100xDevs",
    href: "https://100xdevs.com/",
    role: "Full Stack Engineer (Internship)",
    period: "July 2025 – December 2025",
    tech: [],
    groups: [{ points: ["Built and shipped a **centralized exchange** trading platform."] }],
  },
  {
    company: "Headstarter AI",
    href: "https://www.headstarter.co/",
    role: "SWE Fellow",
    period: "July 2024 – September 2024",
    tech: ["mongodb", "express", "react", "nodejs"],
    groups: [
      {
        points: [
          "Built and shipped multiple **AI-powered RAG** and **MERN** full-stack projects over an intensive software engineering fellowship.",
          "Completed the program under mentorship from engineers at various **YC-backed** companies.",
        ],
      },
    ],
  },
];

export const education = {
  degree: "B.Tech, Computer Science",
  school: "Guru Nanak Dev University, Amritsar",
  href: "https://digital.gndu.ac.in/",
  period: "2022–2026",
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "Swift", "Node.js", "NestJS", "Express.js", "React", "Next.js", "Electron"],
  },
  {
    group: "APIs & Real-time",
    items: ["GraphQL", "Apollo Client", "WebSockets", "Socket.IO", "SSE", "Kafka", "LiveKit"],
  },
  {
    group: "Data & Queues",
    items: ["PostgreSQL", "TypeORM", "Prisma", "MongoDB", "Redis", "BullMQ", "SQLite FTS5", "Pinecone"],
  },
  {
    group: "AI Engineering",
    items: ["Vercel AI SDK", "Claude", "Gemini", "Mistral AI", "MCP", "RAG", "E2B Sandboxes", "LLM Evals"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "Docker", "CI/CD", "Turborepo", "Git"],
  },
  {
    group: "Frontend & Design",
    items: ["Tailwind CSS", "Redux", "Ant Design", "Zod", "Chrome Extensions (MV3)", "Figma", "Wireframing"],
  },
];
