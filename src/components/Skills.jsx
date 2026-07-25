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
      <div className="w-full relative rounded-3xl overflow-hidden bg-black text-white p-8 md:p-16 shadow-2xl">
        <img className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" src={`${basePath}/bgdots.png`} alt="" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-white/20 pb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">[ Technical Competencies ]</span>
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
                className="px-4 py-2 bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-emerald-400 transition-colors cursor-pointer"
              >
                Clear Filter: {activeSkillFilter} &times;
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl px-2.5 py-1 bg-white/10 rounded-lg">{cat.icon}</span>
                  <h3 className="text-xl font-bold font-heading text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => {
                    const isSelected = activeSkillFilter === item;
                    return (
                      <button
                        key={item}
                        onClick={() => onSelectSkill(isSelected ? null : item)}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                          isSelected
                            ? "bg-emerald-400 text-black font-bold scale-105"
                            : "bg-white/10 text-zinc-300 hover:bg-white/20 hover:text-white"
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
