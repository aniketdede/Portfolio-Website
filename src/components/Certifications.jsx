export default function Certifications() {
  return (
    <section id="certifications" className="w-full px-6 md:px-[4rem] py-16">
      <div className="mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">[ Verified Credentials ]</span>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter font-heading text-black">
          Certifications & Achievements
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cert 1 */}
        <div className="glass-card p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-xl mb-6">01</div>
            <h3 className="text-2xl font-bold font-heading text-black mb-2">Job Ready Cohort – Full Stack & DevOps</h3>
            <p className="text-sm font-semibold text-zinc-600 mb-4">Sheryians Coding School (Nov 2025)</p>
            <p className="text-xs text-zinc-500 font-mono bg-zinc-100 p-2 rounded-lg inline-block">Cert ID: 90198abf</p>
          </div>
          <div className="mt-6 pt-4 border-t border-black/10">
            <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Verified Credential</span>
          </div>
        </div>

        {/* Cert 2 */}
        <div className="glass-card p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-xl mb-6">02</div>
            <h3 className="text-2xl font-bold font-heading text-black mb-2">Full Stack Web Development with AI Tools</h3>
            <p className="text-sm font-semibold text-zinc-600 mb-4">EY GDS • Edunet & AICTE (2025-26)</p>
            <p className="text-xs text-zinc-500 font-mono bg-zinc-100 p-2 rounded-lg inline-block">Cert ID: NG26_55729</p>
          </div>
          <div className="mt-6 pt-4 border-t border-black/10">
            <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider">AICTE Authorized</span>
          </div>
        </div>

        {/* Cert 3 */}
        <div className="glass-card p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-xl mb-6">03</div>
            <h3 className="text-2xl font-bold font-heading text-black mb-2">AI Skills Passport</h3>
            <p className="text-sm font-semibold text-zinc-600 mb-4">EY & Microsoft (2025)</p>
            <p className="text-xs text-zinc-500 font-mono bg-zinc-100 p-2 rounded-lg inline-block">Cert ID: 188973</p>
          </div>
          <div className="mt-6 pt-4 border-t border-black/10">
            <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Microsoft Certified</span>
          </div>
        </div>
      </div>

      {/* Key Achievements List */}
      <div className="mt-12 glass-card p-8 md:p-10 rounded-3xl">
        <h3 className="text-2xl font-bold font-heading text-black mb-6">Key Achievements Highlights:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-700">
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">✓</span>
            <div>
              <h4 className="font-bold text-black text-base">Top Academic Performer (96.40%)</h4>
              <p className="text-sm">Scored 96.40% in Class X demonstrating foundational excellence and discipline.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">✓</span>
            <div>
              <h4 className="font-bold text-black text-base">Competitive EY GDS Selection</h4>
              <p className="text-sm">Selected for the competitive AICTE-authorized EY GDS Next-Gen Employability Program.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">✓</span>
            <div>
              <h4 className="font-bold text-black text-base">2 Production-Ready Products</h4>
              <p className="text-sm">Architected and delivered GarageNET & GitaKosh to solve real-world problems with modern tech stacks.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">✓</span>
            <div>
              <h4 className="font-bold text-black text-base">Active GitHub Contributor</h4>
              <p className="text-sm">Consistently writing clean, documented full-stack code and open source contributions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
