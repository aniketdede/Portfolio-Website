export default function Experience() {
  return (
    <section id="experience" className="w-full relative px-6 md:px-[4rem] py-16 mt-10">
      <div className="mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">[ Timeline & Journey ]</span>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter font-heading text-black">
          Experience & Education
        </h2>
      </div>

      {/* INTERNSHIP ITEM */}
      <div className="mb-16">
        <div className="w-full flex sticky bg-[#fbfbfb]/90 backdrop-blur-md z-10 top-20 items-center justify-between gap-6 px-4 py-6 border-b-2 border-black">
          <div className="flex items-center gap-6">
            <h3 className="text-3xl md:text-6xl font-extrabold tracking-tighter font-heading">2025 – 2026</h3>
            <div className="hidden sm:block w-32 h-[2px] bg-black" />
            <h4 className="text-xl md:text-3xl font-bold text-zinc-800 tracking-tight">Full Stack Web Development Intern</h4>
          </div>
          <span className="px-4 py-1.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full">EY GDS Program</span>
        </div>

        <div className="w-full px-4 md:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-xl font-bold font-heading text-black mb-1">EY GDS • Edunet Foundation & AICTE</h4>
              <p className="text-sm font-semibold text-zinc-500 mb-4">Next Gen Employability Program • Remote</p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-pill">Django</span>
                <span className="badge-pill">Python</span>
                <span className="badge-pill">Tailwind CSS</span>
                <span className="badge-pill">JWT Auth</span>
                <span className="badge-pill">Agile / Scrum</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="glass-card p-6 rounded-2xl">
              <h5 className="text-lg font-bold text-black mb-3">Key Highlights & Accomplishments:</h5>
              <ul className="space-y-3 text-zinc-700 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-black mt-2 shrink-0" />
                  <span>Developed <strong className="text-black">GarageNET</strong>, a production-ready B2B SaaS platform for automotive service providers using Django and Python.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-black mt-2 shrink-0" />
                  <span>Engineered 4 core business modules: <strong className="text-black">Job Cards Management, Automated Billing</strong> (with real-time inventory deduction), <strong className="text-black">Inventory Management</strong> (Excel bulk import), and <strong className="text-black">AI-powered GSearch</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-black mt-2 shrink-0" />
                  <span>Implemented secure <strong className="text-black">JWT authentication</strong>, role-based access control (RBAC), and robust server-side form validation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-black mt-2 shrink-0" />
                  <span>Collaborated in an Agile environment with regular sprint reviews, peer code reviews, and comprehensive system documentation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* EDUCATION ITEM */}
      <div className="mb-16">
        <div className="w-full flex sticky bg-[#fbfbfb]/90 backdrop-blur-md z-10 top-20 items-center justify-between gap-6 px-4 py-6 border-b-2 border-black">
          <div className="flex items-center gap-6">
            <h3 className="text-3xl md:text-6xl font-extrabold tracking-tighter font-heading">2023 – 2027</h3>
            <div className="hidden sm:block w-32 h-[2px] bg-black" />
            <h4 className="text-xl md:text-3xl font-bold text-zinc-800 tracking-tight">B.E. Information Technology</h4>
          </div>
          <span className="px-4 py-1.5 bg-zinc-200 text-zinc-900 text-xs font-bold uppercase tracking-wider rounded-full">Degree Program</span>
        </div>

        <div className="w-full px-4 md:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-xl font-bold font-heading text-black mb-1">Trinity College of Engineering & Research</h4>
              <p className="text-sm font-semibold text-zinc-500 mb-2">Pune (SPPU - Savitribai Phule Pune University)</p>
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">Final Year (B.E.)</span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="glass-card p-6 rounded-2xl">
              <h5 className="text-lg font-bold text-black mb-3">Academic Focus & Coursework:</h5>
              <p className="text-zinc-700 text-sm md:text-base leading-relaxed">
                Deep dive into Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Software Engineering principles. Hands-on capstone development and system architecture design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ACADEMIC MILESTONES */}
      <div>
        <div className="w-full flex sticky bg-[#fbfbfb]/90 backdrop-blur-md z-10 top-20 items-center justify-between gap-6 px-4 py-6 border-b-2 border-black">
          <div className="flex items-center gap-6">
            <h3 className="text-3xl md:text-6xl font-extrabold tracking-tighter font-heading">2020 – 2022</h3>
            <div className="hidden sm:block w-32 h-[2px] bg-black" />
            <h4 className="text-xl md:text-3xl font-bold text-zinc-800 tracking-tight">Secondary & Higher Secondary Education</h4>
          </div>
          <span className="px-4 py-1.5 bg-zinc-200 text-zinc-900 text-xs font-bold uppercase tracking-wider rounded-full">Schooling</span>
        </div>

        <div className="w-full px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-bold text-black font-heading">Class XII (Science)</h4>
              <span className="text-xl font-extrabold font-heading text-black">65.00%</span>
            </div>
            <p className="text-sm text-zinc-600">Maharashtra State Board (2022)</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-bold text-black font-heading">Class X (SSC)</h4>
              <span className="text-xl font-extrabold font-heading text-emerald-600">96.40%</span>
            </div>
            <p className="text-sm text-zinc-600">Maharashtra State Board (2020) • Top Academic Distinction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
