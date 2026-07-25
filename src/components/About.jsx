"use client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function About() {
  return (
    <section id="about" className="w-full px-6 md:px-10 py-24 mt-10 flex justify-center items-center relative">
      <div className="relative text-center w-full max-w-4xl px-4">
        {/* Floating Visual Badges */}
        <img className="absolute -right-4 -top-12 w-14 h-14 md:w-16 md:h-16 animate-float hidden sm:block" src={`${basePath}/image1.png`} alt="Icon" />
        <img className="absolute right-12 -bottom-10 w-16 h-16 md:w-20 md:h-20 animate-float-delayed hidden sm:block" src={`${basePath}/image.png`} alt="Icon" />
        <img className="absolute -bottom-16 left-12 w-16 h-16 md:w-20 md:h-20 animate-float hidden sm:block" src={`${basePath}/js.png`} alt="JS Icon" />
        <img className="absolute -left-6 top-8 w-16 h-16 md:w-20 md:h-20 animate-float-delayed hidden sm:block" src={`${basePath}/vs.png`} alt="VS Icon" />

        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-400 block mb-3">[ Professional Summary ]</span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-8 font-heading text-black leading-tight">
          [ Architecting Production-Grade B2B SaaS & AI Experiences ]
        </h2>
        
        <p className="text-base sm:text-xl font-medium tracking-tight text-zinc-700 leading-relaxed mb-8">
          &ldquo;I am an IT undergraduate (Final Year) with hands-on full-stack development experience via the <strong className="text-black font-bold">EY GDS – AICTE Next-Gen Employability Internship</strong>. I specialize in building production-ready B2B platforms like <strong className="text-black font-bold">GarageNET</strong> and AI devotional platforms like <strong className="text-black font-bold">GitaKosh</strong> using Next.js, React, Node.js, and Django. Equipped with a strong foundation in Data Structures, System Design, REST APIs, and DevOps.&rdquo;
        </p>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 text-left">
          <div className="glass-card p-5 rounded-xl">
            <h4 className="text-3xl md:text-4xl font-extrabold font-heading text-black">4+</h4>
            <p className="text-xs md:text-sm font-medium text-zinc-600 mt-1">Full-Stack Core Projects</p>
          </div>
          <div className="glass-card p-5 rounded-xl">
            <h4 className="text-3xl md:text-4xl font-extrabold font-heading text-black">60%</h4>
            <p className="text-xs md:text-sm font-medium text-zinc-600 mt-1">Efficiency Boost (GSearch AI)</p>
          </div>
          <div className="glass-card p-5 rounded-xl">
            <h4 className="text-3xl md:text-4xl font-extrabold font-heading text-black">3+</h4>
            <p className="text-xs md:text-sm font-medium text-zinc-600 mt-1">Professional Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
}
