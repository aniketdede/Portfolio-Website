"use client";

import { useState, useEffect } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero({ onOpenContact }) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const dt = new Date();
      let hours = dt.getHours();
      let minutes = dt.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      setTimeStr(`${hours}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="w-full mt-28 pt-8 px-6 md:px-[4rem] flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6">
        <div className="Leftheadings">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-dot" />
            <h6 className="text-lg md:text-xl font-bold tracking-tight text-zinc-600">Hello, I Am</h6>
          </div>
          <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[11rem] leading-none font-extrabold tracking-tighter font-heading text-black">
            Aniket<span className="text-zinc-400">.</span>
          </h1>
        </div>

        <div className="Rightheadings flex flex-col gap-3 py-2 border-l-2 border-black pl-5 md:pl-6">
          <div className="flex items-center gap-3">
            <h4 className="tracking-tight font-bold text-sm md:text-base">
              [ <span className="timing text-emerald-600">{timeStr || "06:11 PM"}</span> ]
            </h4>
            <div className="w-16 md:w-24 h-[2px] bg-black" />
            <span className="text-xs uppercase font-bold tracking-wider px-2 py-0.5 bg-zinc-200 rounded">Pune, India</span>
          </div>
          <h3 className="tracking-tight font-bold text-xl md:text-2xl font-heading text-zinc-900">
            Full Stack Web Developer & Software Engineer
          </h3>
          <p className="text-zinc-600 text-sm max-w-md">
            Specialized in building scalable B2B SaaS platforms, AI-integrated web apps, and high-performance APIs with Next.js, React, Node.js & Django.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-black text-white text-xs md:text-sm font-bold tracking-wider uppercase rounded-full hover:bg-zinc-800 transition-colors"
            >
              Explore Projects &rarr;
            </a>
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 bg-zinc-200 text-zinc-900 text-xs md:text-sm font-bold tracking-wider uppercase rounded-full hover:bg-zinc-300 transition-colors cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* HERO FEATURED IMAGE */}
      <div className="picture w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] mt-6 rounded-3xl overflow-hidden shadow-2xl relative group bg-[#0e0e11] border border-black/10">
        <img
          className="w-full h-full object-cover object-[65%_25%] sm:object-[68%_20%] filter brightness-[1.02] contrast-[1.04] saturate-[1.04] group-hover:scale-103 transition-all duration-700 ease-out"
          src={`${basePath}/newimg.png`}
          alt="Aniket Vikas Dede"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
        
        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pointer-events-none z-10">
          <div className="bg-black/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 text-white max-w-md pointer-events-auto shadow-lg">
            <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block mb-1">Current Focus</span>
            <p className="text-sm font-medium">Final Year B.E. IT Student at Trinity College of Engineering, Pune (SPPU).</p>
          </div>
          <div className="flex flex-wrap gap-2 pointer-events-auto">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-xs font-bold uppercase tracking-wider text-black shadow-md">Next.js</span>
            <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-xs font-bold uppercase tracking-wider text-black shadow-md">React</span>
            <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider text-black shadow-md">Django</span>
            <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider text-black shadow-md">Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
