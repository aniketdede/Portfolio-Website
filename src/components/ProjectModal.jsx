"use client";

import { useState, useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("architecture");

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay active p-4 sm:p-6"
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) onClose();
      }}
    >
      <div className="modal-content p-6 sm:p-8 relative flex flex-col h-[85vh] max-h-[85vh] overflow-hidden shadow-2xl rounded-3xl bg-white border border-zinc-200 w-full max-w-3xl">
        
        {/* ACCESSIBLE STICKY HEADER WITH CLOSE BUTTON */}
        <div className="flex justify-between items-start pb-4 border-b border-zinc-100 bg-white shrink-0">
          <div className="pr-6">
            <span className="px-3 py-1 bg-black text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-2">
              {project.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-black leading-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-zinc-500">{project.subtitle}</p>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-100 text-zinc-600 hover:bg-black hover:text-white transition-colors font-bold text-xl flex items-center justify-center cursor-pointer shrink-0 shadow-sm"
            aria-label="Close Modal"
            title="Close Modal (Esc)"
          >
            &times;
          </button>
        </div>

        {/* ACCESSIBLE STICKY NAVIGATION TABS */}
        <div className="flex border-b border-zinc-200 my-4 gap-4 sm:gap-6 overflow-x-auto pb-1 shrink-0 scrollbar-none">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`pb-2.5 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === "architecture"
                ? "text-black border-b-2 border-black"
                : "text-zinc-500 hover:text-black"
            }`}
          >
            Overview & Features
          </button>
          <button
            onClick={() => setActiveTab("workflow")}
            className={`pb-2.5 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === "workflow"
                ? "text-black border-b-2 border-black"
                : "text-zinc-500 hover:text-black"
            }`}
          >
            System Data Workflow &rarr;
          </button>
        </div>

        {/* SMOOTH SCROLLABLE MODAL BODY - FULL SCROLL ACCESS FOR ALL PROJECTS */}
        <div
          tabIndex={0}
          className="flex-1 overflow-y-auto pr-2 space-y-6 my-2 scrollbar-thin outline-none focus:outline-none"
        >
          {/* DASHBOARD PREVIEW BANNER */}
          {project.image && (
            <div className="w-full h-44 sm:h-60 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-6">
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="glass-card p-5 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black mb-3">
                  Key Modules & Features
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
                  {project.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-emerald-500 font-bold text-base leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "workflow" && (
            <div className="space-y-4">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black mb-2">
                End-to-End System Workflow
              </h4>
              {project.workflowSteps ? (
                <div className="space-y-3">
                  {project.workflowSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 flex items-start gap-3.5"
                    >
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <h5 className="font-bold text-xs sm:text-sm text-black">{step.stage}</h5>
                        <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-zinc-500">System workflow specs loading...</p>
              )}
            </div>
          )}

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Key Performance Metrics</h4>
            <p className="text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              {project.metrics}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2 pb-2">
              {project.tech.map((t) => (
                <span key={t} className="badge-pill text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ACCESSIBLE STICKY FOOTER ACTIONS */}
        <div className="pt-4 border-t border-zinc-100 bg-white flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Close Specs
          </button>
          <a
            href="https://github.com/aniketdede"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-zinc-200 text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-300 transition-colors inline-block"
          >
            View Repository &rarr;
          </a>
        </div>

      </div>
    </div>
  );
}
