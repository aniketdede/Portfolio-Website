"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar({ onOpenContact }) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // If user clicked a nav link, suppress auto scroll-spy during smooth scroll animation
      if (isClickScrolling.current) return;

      const sections = ["home", "about", "experience", "projects", "skills", "certifications", "docs"];
      let bestSection = "home";
      let minDistance = Infinity;

      sections.forEach((sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if section is visible in viewport window
          if (rect.top <= 350 && rect.bottom >= 120) {
            const distance = Math.abs(rect.top - 100);
            if (distance < minDistance) {
              minDistance = distance;
              bestSection = sectionId;
            }
          }
        }
      });

      setActiveSection(bestSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    // Immediately set active section on click
    setActiveSection(sectionId);
    isClickScrolling.current = true;

    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Resume", href: "#docs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-[4rem] py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm"
          : "bg-white/75 backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="text-2xl font-bold tracking-tighter font-heading hover:opacity-75 transition-opacity text-black"
        >
          Aniket<span className="text-zinc-400">.</span>
        </Link>

        {/* DESKTOP LINKS WITH INSTANT CLICK ACTIVATION & ANIMATED HOVER UNDERLINE */}
        <div className="links hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, sectionId)}
                className={`group font-medium text-base transition-colors relative py-1 ${
                  isActive ? "text-black font-bold" : "text-zinc-500 hover:text-black"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-black rounded-full transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full opacity-70 group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-sm cursor-pointer"
          >
            Work Together
          </button>
          <a
            href="https://github.com/aniketdede"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-700 hover:text-black transition-colors"
            title="GitHub Profile"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-dede-a642b0295/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-700 hover:text-black transition-colors"
            title="LinkedIn Profile"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* MOBILE HAMBURGER TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-800 hover:text-black transition-colors cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden pt-4 pb-3 border-t border-zinc-200 mt-3 flex flex-col gap-3">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, sectionId);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-base font-semibold py-1.5 px-2 rounded-lg transition-colors ${
                  isActive ? "bg-black text-white" : "text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full mt-2 py-3 bg-black text-white text-sm font-bold rounded-xl shadow-sm text-center"
          >
            Work Together
          </button>
        </div>
      )}
    </nav>
  );
}
