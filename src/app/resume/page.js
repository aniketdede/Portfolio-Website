import Link from "next/link";
import ResumeActions from "@/components/ResumeActions";
import { siteConfig, siteUrl } from "@/lib/site";

export const metadata = {
  title: "Resume",
  description:
    "Professional resume of Aniket Vikas Dede – Full Stack Web Developer. Experience, education, projects, and certifications. Print or save as PDF.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume – Aniket Vikas Dede",
    url: `${siteUrl}/resume`,
    images: ["/og-image.jpg"],
  },
};

const skills = [
  { label: "Languages", value: "JavaScript (ES6+), Python, SQL, Java" },
  { label: "Frontend", value: "React.js, Next.js, Tailwind CSS, Responsive Design" },
  { label: "Backend", value: "Node.js, Express.js, Django, REST APIs, JWT Authentication" },
  { label: "Databases", value: "MongoDB, MongoDB Atlas, MySQL, Database Design" },
  { label: "DevOps & Tools", value: "Git, GitHub, Docker, Kubernetes, VS Code" },
  { label: "CS Fundamentals", value: "DSA, OOP, DBMS, Operating Systems, Computer Networks, System Design" },
];

const projects = [
  {
    name: "GarageNET – B2B SaaS Platform",
    stack: "Django · Python · Tailwind CSS · PostgreSQL/SQLite · JWT",
    points: [
      "Architected a full-stack B2B platform with 4 integrated modules for garage operations.",
      "Built an automated billing engine with real-time inventory deduction, audit trails and Excel bulk import.",
      "Developed GSearch, an AI-assisted cross-garage parts finder, improving sourcing efficiency by 60%.",
    ],
  },
  {
    name: "GitaKosh – AI-Powered Devotional Learning Platform",
    stack: "React · Node.js · MongoDB Atlas · Google Gemini AI · OAuth 2.0",
    points: [
      "Built a full-stack learning platform with a Gemini-powered contextual Q&A chatbot over 700+ verses.",
      "Designed the data ingestion pipeline structuring verses, translations and semantic tags.",
      "Added gamification (streaks, quizzes, leaderboards) and JWT + Google OAuth authentication.",
    ],
  },
  {
    name: "RoadRescue – Emergency Mechanic Finder (Prototype)",
    stack: "React.js · Node.js · Express.js · Geolocation API",
    points: [
      "Built a location-based platform pairing stranded drivers with nearby verified mechanics in real time.",
      "Implemented geospatial matching within a 10 km radius and a mobile-first low-latency emergency UI.",
    ],
  },
];

const certifications = [
  "Job Ready Cohort – Full Stack & DevOps, Sheryians Coding School (Nov 2025) — Cert ID: 90198abf",
  "Full Stack Web Development with AI Tools, EY GDS · Edunet & AICTE (2025-26) — Cert ID: NG26_55729",
  "AI Skills Passport, EY & Microsoft (2025) — Cert ID: 188973",
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-zinc-100 py-8 md:py-12 px-4">
      <ResumeActions />

      <article className="print-page mx-auto max-w-[820px] bg-white shadow-xl rounded-2xl border border-zinc-200 p-8 md:p-14 text-zinc-900">
        {/* Header */}
        <header className="border-b-2 border-black pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight">
            ANIKET VIKAS DEDE
          </h1>
          <p className="text-sm md:text-base font-semibold text-zinc-700 mt-2">
            Full Stack Web Developer & Software Engineer
          </p>
          <p className="text-xs md:text-sm text-zinc-600 mt-2 flex flex-wrap gap-x-4 gap-y-1">
            <span>{siteConfig.location}</span>
            <a href={`tel:${siteConfig.phoneHref}`} className="hover:underline">{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`} className="hover:underline">{siteConfig.email}</a>
          </p>
          <p className="text-xs md:text-sm text-zinc-600 mt-1 flex flex-wrap gap-x-4">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/aniketdede</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <Link href="/" className="hover:underline">Portfolio</Link>
          </p>
        </header>

        {/* Summary */}
        <section className="print-section mb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">Professional Summary</h2>
          <p className="text-sm leading-relaxed">
            IT undergraduate (Final Year) with hands-on full-stack development experience via the
            {" "}<strong>EY GDS – AICTE Next-Gen Employability Internship</strong>. Built production-grade B2B
            platforms using Next.js, React, and Node.js. Strong foundation in DSA, REST APIs, System Design,
            and DevOps. Seeking Software Developer / Full-Stack Developer roles to deliver impactful,
            scalable solutions.
          </p>
        </section>

        {/* Experience */}
        <section className="print-section mb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">Internship Experience</h2>
          <div>
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h3 className="text-base font-bold">Full Stack Web Development Intern</h3>
              <span className="text-xs font-semibold text-zinc-500">2025 – 2026 · Remote</span>
            </div>
            <p className="text-sm font-semibold text-zinc-700 mb-2">
              EY GDS · Edunet Foundation & AICTE — Next Gen Employability Program
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm leading-relaxed">
              <li>Developed <strong>GarageNET</strong>, a production-ready B2B SaaS platform for automotive service providers using Django and Python.</li>
              <li>Built 4 core modules: Job Cards, Automated Billing (real-time inventory deduction), Inventory Management (Excel bulk import), and AI-powered GSearch.</li>
              <li>Implemented secure JWT authentication, role-based access control (RBAC), and server-side form validation.</li>
              <li>Collaborated in an Agile environment with sprint reviews, peer code reviews, and comprehensive documentation.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="print-section mb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">Projects</h2>
          <div className="space-y-5">
            {projects.map((p) => (
              <div key={p.name}>
                <h3 className="text-sm font-bold">{p.name}</h3>
                <p className="text-xs font-semibold text-zinc-500 mb-1.5">{p.stack}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
                  {p.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="print-section mb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">Technical Skills</h2>
          <dl className="text-sm space-y-1.5">
            {skills.map((s) => (
              <div key={s.label} className="grid grid-cols-[150px_1fr] gap-2">
                <dt className="font-bold">{s.label}</dt>
                <dd className="text-zinc-700">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Education */}
        <section className="print-section mb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">Education</h2>
          <div className="space-y-2 text-sm">
            <div className="flex flex-wrap justify-between gap-2">
              <span><strong>B.E. Information Technology</strong> (2023 – 2027) — Trinity College of Engineering & Research, Pune (SPPU)</span>
              <span className="font-semibold">Final Year</span>
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <span>Class XII (Science), Maharashtra State Board (2022)</span>
              <span className="font-semibold">65%</span>
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <span>Class X (SSC), Maharashtra State Board (2020)</span>
              <span className="font-semibold">96.40%</span>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="print-section">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">Certifications</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm leading-relaxed">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
