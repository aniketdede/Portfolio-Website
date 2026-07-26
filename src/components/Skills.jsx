"use client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Skills({ activeSkillFilter, onSelectSkill }) {
  const skillCategories = [
    {
      title: "Languages",
      icon: "</>",
      items: ["JavaScript (ES6+)", "Python", "SQL", "Java", "HTML5 / CSS3"],
    },
    {
      title: "Frontend",
      icon: "🎨",
      items: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design", "DOM Manipulation"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      items: ["Node.js", "Express.js", "Django", "REST APIs", "JWT Authentication", "Session Management"],
    },
    {
      title: "Databases",
      icon: "🗄️",
      items: ["MongoDB", "MySQL", "Database Design", "MongoDB Atlas"],
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      items: ["Git", "GitHub", "Docker", "Kubernetes", "VS Code"],
    },
    {
      title: "CS Fundamentals",
      icon: "🧠",
      items: ["Data Structures & Algorithms", "OOP", "System Design", "Computer Networks", "OS"],
    },
  ];

  return (
    <section id="skills" className="w-full relative px-6 md:px-[4rem] py-20 mt-10">
      <div className="w-full relative rounded-3xl overflow-hidden bg-black text-white p-8 md:p-16 shadow-2xl border border-zinc-800">
        <img className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" src={`${basePath}/bgdots.png`} alt="" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-white/20 pb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">[ Technical Competencies ]</span>
              <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter font-heading text-white">
                I Am Great At
              </h2>
              <p className="text-xs text-zinc-400 mt-2">
                Click any skill tag below to dynamically filter matching projects & experience milestones.
              </p>
            </div>
            {activeSkillFilter && (
              <button
                onClick={() => onSelectSkill(null)}
                className="px-4 py-2 bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-emerald-400 transition-colors cursor-pointer shadow-lg"
              >
                Clear Filter: {activeSkillFilter} &times;
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="dark-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">{cat.icon}</span>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-emerald-400 transition-colors">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => {
                    const isSelected = activeSkillFilter === item;
                    return (
                      <button
                        key={item}
                        onClick={() => onSelectSkill(isSelected ? null : item)}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all cursor-pointer border ${
                          isSelected
                            ? "bg-emerald-400 text-black font-bold border-emerald-300 scale-105 shadow-[0_0_12px_rgba(52,211,153,0.5)]"
                            : "bg-zinc-800/80 text-zinc-200 border-zinc-700/60 hover:bg-emerald-500 hover:text-black hover:border-emerald-400 hover:scale-105"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
