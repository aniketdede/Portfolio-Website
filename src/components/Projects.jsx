"use client";

import { useState, useCallback } from "react";
import ProjectModal from "./ProjectModal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const projectData = {
  garagenet: {
    title: "GarageNET",
    subtitle: "Automotive B2B Operations Suite & SaaS Platform",
    badge: "B2B SaaS • Production Ready",
    category: "b2b",
    image: "/GarageNet.png",
    githubUrl: "https://github.com/aniketdede/GarageNET_Project",
    tech: ["Django", "Python", "Tailwind CSS", "SQLite/PostgreSQL", "JWT Auth", "REST APIs"],
    description: "GarageNET is a comprehensive B2B SaaS platform engineered for automotive repair garages and service centers. Built with Django and Python, it digitizes workshop workflows, inventory tracking, customer billing, and cross-garage parts discovery.",
    architecture: [
      "Job Card Engine: Dynamic creation, technician assignment, status tracking, and service estimates.",
      "Automated Billing Engine: Real-time inventory auto-deduction, audit logging, tax calculation, and bulk Excel data import.",
      "GSearch (AI Parts Finder): Intelligent cross-garage inventory search engine that boosted parts sourcing efficiency by 60%.",
      "Security: Full JWT authentication, Role-Based Access Control (RBAC), CSRF protection, and server validation."
    ],
    workflowSteps: [
      { stage: "Client Request", detail: "Garage manager creates digital job card & selects required auto parts." },
      { stage: "Automated Billing & Inventory Engine", detail: "Django backend calculates totals, checks stock levels, and auto-deducts inventory items with audit logging." },
      { stage: "GSearch AI Sourcing", detail: "If stock is missing locally, GSearch queries cross-garage network APIs to locate nearest available parts instantly." }
    ],
    metrics: "+60% Sourcing Efficiency | 4 Core B2B Modules | Production Ready"
  },
  gitakosh: {
    title: "GitaKosh",
    subtitle: "AI-Powered Devotional Learning & Q&A Platform",
    badge: "AI Web App • Gemini API",
    category: "ai",
    image: "/Gita.png",
    githubUrl: "https://github.com/aniketdede/Gita_Kosh",
    tech: ["React.js", "Node.js", "MongoDB Atlas", "Google Gemini AI", "Google OAuth", "JWT"],
    description: "GitaKosh is an interactive full-stack learning platform designed for studying the Bhagavad Gita. Powered by Google's Gemini AI API, it features a contextual AI assistant capable of answering complex philosophical queries grounded in verse context.",
    architecture: [
      "Data Processing Pipeline: Structured and ingested 700+ verses with translations, commentary, and semantic tags into MongoDB Atlas.",
      "AI Chatbot Integration: Direct integration with Google Gemini API using customized prompt engineering for accurate verse retrieval.",
      "Gamification Module: Daily learning streaks, chapter quizzes, interactive flashcards, and global leaderboards to maximize retention.",
      "Authentication: JWT token management combined with Google OAuth 2.0 single sign-on."
    ],
    workflowSteps: [
      { stage: "User Prompt Ingestion", detail: "User asks a philosophical or practical life question in natural language." },
      { stage: "Contextual RAG & Gemini API", detail: "Node.js service retrieves relevant verses from 700+ MongoDB records and feeds context to Google Gemini AI." },
      { stage: "Response & Gamification Update", detail: "App streams AI response with verse citations and increments user's daily streak counter." }
    ],
    metrics: "700+ Verses Structured | Contextual AI Q&A | Gamified Retention Loops"
  },
  roadrescue: {
    title: "RoadRescue",
    subtitle: "Emergency Mechanic Locator Prototype",
    badge: "Web App • Geolocation",
    category: "web",
    image: "/RoadRescue.png",
    tech: ["React.js", "Node.js", "Express.js", "Geolocation API", "REST APIs"],
    description: "RoadRescue is a location-aware web prototype designed for vehicle breakdown emergencies. It bridges stranded drivers with verified nearby mechanics in real-time based on live GPS location matching.",
    architecture: [
      "Real-Time Location Matching: Uses browser Geolocation API and spatial distance algorithms to pair stranded drivers with nearby repair units.",
      "Emergency Portal: Streamlined, low-latency UI optimized for emergency mobile browser access.",
      "Mechanic Verification: Role-based status toggles for mechanics to accept service calls dynamically."
    ],
    workflowSteps: [
      { stage: "Geolocation Ping", detail: "Stranded user clicks emergency button; browser captures lat/long coordinates." },
      { stage: "Mechanic Dispatch Algorithm", detail: "Express backend computes nearest mechanics within 10km radius and sends alert pings." },
      { stage: "Real-time Acceptance", detail: "Mechanic accepts request; driver receives estimated arrival time and mechanic phone number." }
    ],
    metrics: "Real-Time Location Pairing | Sub-Second Dispatch Interface | Responsive Mobile UI"
  }
};

export default function Projects({ activeSkillFilter }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseProjectModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const filteredProjects = Object.entries(projectData).filter(([_, proj]) => {
    if (activeSkillFilter) {
      const matchSkill = proj.tech.some(
        (t) => t.toLowerCase().includes(activeSkillFilter.toLowerCase()) || activeSkillFilter.toLowerCase().includes(t.toLowerCase())
      );
      if (!matchSkill) return false;
    }
    if (activeFilter === "all") return true;
    return proj.category === activeFilter;
  });

  return (
    <section id="projects" className="testimonials px-6 md:px-[5rem] py-16">
      <div className="mb-8">
        <h3 className="text-3xl md:text-5xl -mb-2 md:-mb-4 font-medium tracking-tight text-zinc-500 font-heading">
          Featured Works
        </h3>
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          <h1 className="text-5xl sm:text-7xl md:text-[7rem] tracking-tight font-extrabold font-heading text-black">
            Projects
          </h1>
          <img className="w-16 md:w-28 object-contain" src={`${basePath}/arrow.png`} alt="Arrow" />
          <h1 className="text-5xl sm:text-7xl md:text-[7rem] tracking-tight font-extrabold font-heading text-zinc-400">
            Showcase
          </h1>
        </div>
      </div>

      {activeSkillFilter && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex justify-between items-center">
          <span>Filtering projects utilizing skill: <strong>{activeSkillFilter}</strong></span>
        </div>
      )}

      {/* CATEGORY FILTER TABS */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        <button
          onClick={() => setActiveFilter("all")}
          className={`filter-btn ${activeFilter === "all" ? "active-filter" : ""}`}
        >
          All Projects
        </button>
        <button
          onClick={() => setActiveFilter("b2b")}
          className={`filter-btn ${activeFilter === "b2b" ? "active-filter" : ""}`}
        >
          B2B & SaaS
        </button>
        <button
          onClick={() => setActiveFilter("ai")}
          className={`filter-btn ${activeFilter === "ai" ? "active-filter" : ""}`}
        >
          AI & ML
        </button>
        <button
          onClick={() => setActiveFilter("web")}
          className={`filter-btn ${activeFilter === "web" ? "active-filter" : ""}`}
        >
          Web Apps
        </button>
      </div>

      {/* PROJECTS LIST */}
      <div className="space-y-16">
        {filteredProjects.map(([key, project]) => (
          <div
            key={key}
            className="project-card magnetic-card glass-card p-8 md:p-12 rounded-3xl border border-black/10 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    {project.badge}
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                    {project.metrics.split("|")[0]}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-extrabold font-heading text-black tracking-tight">
                  {project.title}
                </h3>

                <p className="text-base md:text-lg text-zinc-700 leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="space-y-3 pt-2">
                  {project.architecture.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <p className="text-sm text-zinc-700">{item}</p>
                    </div>
                  ))}
                </div>

                {/* TECH TAGS */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`badge-pill ${
                        activeSkillFilter && (t.toLowerCase().includes(activeSkillFilter.toLowerCase()) || activeSkillFilter.toLowerCase().includes(t.toLowerCase()))
                          ? "highlighted-pill"
                          : ""
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* DUAL ACTION BUTTONS: VIEW SPECS + CONDITIONAL GITHUB CODE */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200/80">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-6 py-3 bg-black text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors cursor-pointer shadow-sm"
                  >
                    View Architecture & Specs &rarr;
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-zinc-200 text-black text-xs md:text-sm font-bold uppercase tracking-wider rounded-full hover:bg-zinc-300 transition-colors inline-block"
                    >
                      GitHub Code ↗
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div
                  onClick={() => setSelectedProject(project)}
                  className="w-full h-80 md:h-96 rounded-2xl overflow-hidden border border-black/10 shadow-lg relative group cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={`${basePath}${project.image}`}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-lg font-bold">{project.title} System Dashboard</h4>
                      <p className="text-xs text-zinc-300">Click to explore interactive workflow & specs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PROJECT MODAL */}
      <ProjectModal project={selectedProject} onClose={handleCloseProjectModal} />
    </section>
  );
}
