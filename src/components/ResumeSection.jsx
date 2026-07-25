"use client";

export default function ResumeSection() {
  return (
    <section id="docs" className="w-full px-6 md:px-[4rem] py-16">
      <div className="mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">[ Official Documentation ]</span>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter font-heading text-black">
          Resume & Profile Document
        </h2>
      </div>

      <div className="glass-card p-8 md:p-12 rounded-3xl border border-black/10 max-w-5xl mx-auto bg-white shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 border-b border-zinc-200 gap-4">
          <div>
            <h3 className="text-3xl font-extrabold font-heading text-black">ANIKET VIKAS DEDE</h3>
            <p className="text-sm font-semibold text-zinc-600">Pune, India • +91 9404502631 • aniketdede12@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/Aniket_Vikas_Dede_Resume.md"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors inline-block"
            >
              View Full Resume Spec ↗
            </a>
            <button
              onClick={() => window.print()}
              className="px-5 py-2.5 bg-zinc-200 text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-300 transition-colors cursor-pointer"
            >
              Print / Save PDF
            </button>
          </div>
        </div>

        <div className="py-8 space-y-8 text-zinc-800">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Professional Summary</h4>
            <p className="text-sm leading-relaxed">
              IT undergraduate (Final Year) with hands-on full-stack development experience via EY GDS – AICTE Next-Gen Employability Internship. Built production-grade B2B platforms using Next.js, React, and Node.js. Strong foundation in DSA, REST APIs, System Design, and DevOps. Seeking Software Developer / Full-Stack Developer roles to deliver impactful, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Education</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-black block">B.E. Information Technology (2023 – 2027)</strong>
                  <span className="text-zinc-600">Trinity College of Engineering and Research, Pune (SPPU) • Final Year (BE)</span>
                </div>
                <div>
                  <strong className="text-black block">Class XII (Science) – 65% (2022)</strong>
                  <span className="text-zinc-600">Maharashtra State Board</span>
                </div>
                <div>
                  <strong className="text-black block">Class X – 96.40% (2020)</strong>
                  <span className="text-zinc-600">Maharashtra State Board</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Core Technical Skills</h4>
              <ul className="text-sm space-y-1.5 text-zinc-700">
                <li><strong className="text-black">Languages:</strong> JavaScript (ES6+), Python, SQL, Java</li>
                <li><strong className="text-black">Frontend:</strong> React.js, Next.js, Tailwind CSS, Responsive Design</li>
                <li><strong className="text-black">Backend:</strong> Node.js, Express.js, Django, REST APIs, JWT Auth</li>
                <li><strong className="text-black">Databases:</strong> MongoDB, MySQL, Database Design</li>
                <li><strong className="text-black">DevOps & CS:</strong> Git, Docker, Kubernetes, DSA, OOP, System Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
