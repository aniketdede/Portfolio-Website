"use client";

import { useState, useEffect } from "react";

export default function Footer({ onOpenContact }) {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const dt = new Date();
      const day = dt.getDate();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = monthNames[dt.getMonth()];
      const year = dt.getFullYear();

      let hours = dt.getHours();
      let minutes = dt.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;

      setDateStr(`${day} ${month} ${year} [${hours}:${minutes} ${ampm}]`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="w-full bg-black text-white px-6 md:px-[5rem] py-20 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 pb-16 border-b border-white/20">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">[ Let&apos;s Build Together ]</span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter font-heading text-white mb-4">
            Get In Touch.
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-lg">
            Open for Software Developer & Full-Stack Developer opportunities, collaborations, or tech discussions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <button
            onClick={onOpenContact}
            className="px-8 py-4 bg-white text-black font-bold text-base rounded-full hover:bg-zinc-200 transition-colors text-center shadow-lg cursor-pointer"
          >
            Send Direct Message &rarr;
          </button>
          <a
            href="mailto:aniketdede12@gmail.com"
            className="px-8 py-4 bg-white/10 text-white font-bold text-base rounded-full hover:bg-white/20 transition-colors text-center border border-white/20"
          >
            aniketdede12@gmail.com
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-lg tracking-tight font-bold">
            <span className="text-emerald-400">Aniket</span> Vikas Dede
          </h3>
          <p className="text-xs text-zinc-500">Full Stack Web Developer • Pune, India</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="https://github.com/aniketdede" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aniket-dede-a642b0295/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#home" className="hover:text-white transition-colors">
            Back to Top &uarr;
          </a>
        </div>

        <h4 className="font-mono text-xs text-zinc-400 dt">{dateStr || "Loading Date & Time..."}</h4>
      </div>
    </section>
  );
}
