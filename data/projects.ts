export type Project = {
  title: string;
  role?: string;
  date?: string;
  description: string[];
  tech: string[];
  link?: string;
  highlight?: string;
  teamSize?: number;
  status?: string;
};

const projects: Project[] = [
  {
    title: "RANKFORGE - GATE Rank Estimator",
    role: "AI/ML Engineer",
    date: "2025",
    description: [
      "Engineered the AI core of a full-stack GATE exam simulation platform — built the rank prediction model using historical cutoff data with exponential/interpolation mapping.",
      "Developed a topic-level weakness detection engine that analyzes per-topic accuracy to generate actionable performance insights for students.",
      "Built a RAG-based recommendation pipeline with vector embeddings to deliver personalized study improvement suggestions.",
      "Designed and deployed the ML microservice as a FastAPI application with endpoints for rank prediction, percentile calculation, and confidence scoring.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "RAG Pipeline",
      "Vector DB",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    highlight: "AI-Powered Exam Intelligence",
    teamSize: 4,
    link: "https://rankforge-gate.vercel.app",
    status: "Completed",
  },
  {
    title: "UNIFIED APIs - Universal API Proxy",
    role: "Backend Engineer",
    date: "2025",
    description: [
      "Architected a universal API proxy that abstracts multiple SaaS CRM providers (Salesforce, HubSpot) behind a single unified interface using a Provider Abstraction Layer with Python base classes.",
      "Built secure OAuth token management with encrypted storage in PostgreSQL and a background worker that auto-refreshes tokens 5 minutes before expiration.",
      "Designed request normalization using Pydantic models — mapping divergent field names (e.g., FirstName vs first_name) into a standardized Unified Contact schema.",
      "Implemented a webhook proxying system with a single listener endpoint that identifies users, normalizes incoming payloads, and forwards real-time events to registered webhook URLs.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Pydantic",
      "OAuth 2.0",
      "Webhooks",
      "Docker",
    ],
    highlight: "SaaS Integration Architecture",
    status: "In Development",
  },
  {
    title: "SOLVITER - Smart Digital Services Platform",
    role: "Frontend Architect",
    date: "2024",
    description: [
      "Developed a responsive, modular smart-city web platform integrating multiple service interfaces into a unified UI.",
      "Emphasized clean UI/UX design, responsive layouts, and scalable frontend architecture.",
      "Ensured readiness for future backend and real-time integration.",
    ],
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/SwayamsucheePradhan09/Solviter",
    status: "Completed",
  },
  {
    title: "SMARTBUY - Online Price Comparator Platform",
    role: "Full Stack Developer",
    date: "Group Project",
    description: [
      "Developed a responsive web app to search products via text or image and compare real-time prices across e-commerce platforms.",
      "Added price sorting, availability tracking, and redirection to official product pages.",
    ],
    tech: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "Python (Flask)",
      "Web Scraping",
      "REST APIs",
      "AWS Cloud",
      "MongoDB",
    ],
    link: "https://github.com/SwayamsucheePradhan09/SMARTBUY",
    status: "Completed",
  },
];

export default projects;