export type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
  tech: string[];
};

const certifications: Certification[] = [
  {
    title: "Smart India Hackathon 2025 - SOA Ideathon",
    issuer: "Ministry of Education's Innovation Cell (Govt. of India) & ITER, SOA University",
    date: "September 2025",
    description: "Actively participated in SOA Ideathon 2025, an Online Hackathon conducted as part of the nomination process for the national Smart India Hackathon (SIH 2025).",
    link: "/SWAYAMSUCHEE_PRADHAN.png.pdf",
    tech: ["Hackathon", "Problem Solving", "Team Collaboration", "Innovation"],
  },
  {
    title: "Modernizing Python Applications: Migrating to Python 3.x",
    issuer: "Infosys Wingspan",
    date: "November 2025",
    description: "Successfully completed the course on modernizing Python applications, focusing on codebase migration to Python 3.x, code compatibility, and syntax modernization.",
    link: "/modernizing_python_applications.pdf",
    tech: ["Python 3.x", "Code Migration", "Software Maintenance", "Backward Compatibility"],
  },
  {
    title: "Python for Data Science: Data Visualization Using Seaborn",
    issuer: "Infosys Wingspan",
    date: "November 2025",
    description: "Completed the Python for Data Science course, specializing in basic data visualization techniques, statistical plot generation, and data representation using Seaborn.",
    link: "/python_for_datascience.pdf",
    tech: ["Python", "Data Science", "Seaborn", "Data Visualization"],
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "May 2025",
    description: "Completed practical developer simulation tasks involving data analysis and forensic technology, designing workflows, and extracting patterns for corporate audit scenarios.",
    link: "/deloitte1.pdf",
    tech: ["Data Analysis", "Forensic Technology", "Business Intelligence", "Analytical Reporting"],
  },
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "May 2025",
    description: "Completed cybersecurity job simulation tasks, focusing on network security, threat analysis, incident response preparation, and understanding enterprise defense systems.",
    link: "/deloitte2.pdf",
    tech: ["Cybersecurity", "Threat Analysis", "Network Security", "Risk Mitigation"],
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "May 2025",
    description: "Successfully completed software development and technology simulation tasks, focusing on modern coding standards, developer best practices, and agile delivery frameworks.",
    link: "/deloitte3.pdf",
    tech: ["Software Development", "Coding Standards", "Agile Methodologies", "System Design"],
  },
];

export default certifications;
