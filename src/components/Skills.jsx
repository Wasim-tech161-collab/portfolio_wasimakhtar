import {
  Code,
  FileCode,
  Braces,
  Smartphone,
  Megaphone,
  PenTool,
} from "lucide-react";

const skills = [
  { name: "UI/UX Design (Figma, Canva)", level: 90, icon: PenTool },
  { name: "Frontend Development (HTML, CSS)", level: 85, icon: Code },
  { name: "JavaScript", level: 80, icon: Braces },
  { name: "React.js", level: 75, icon: FileCode },
  { name: "Responsive Design", level: 90, icon: Smartphone },
  { name: "Digital Marketing", level: 70, icon: Megaphone },
];

function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-20 border-t border-gray-800">

      {/* HEADER */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400">
          My Skills
        </h2>

        <p className="text-gray-400 mt-2 text-sm md:text-base max-w-xl mx-auto md:mx-0">
          My technical skills and expertise level in different technologies.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="bg-[#161E36] p-4 md:p-5 rounded-xl border border-gray-800 hover:border-indigo-500 transition"
            >

              {/* TOP ROW */}
              <div className="flex items-center justify-between text-gray-300 mb-3">

                <div className="flex items-center gap-2">
                  <Icon size={18} className="text-indigo-400" />
                  <span className="text-sm md:text-base">
                    {skill.name}
                  </span>
                </div>

                <span className="text-xs md:text-sm text-gray-400">
                  {skill.level}%
                </span>

              </div>

              {/* PROGRESS BAR */}
              <div className="w-full h-2 bg-[#0F172A] rounded-full overflow-hidden">

                <div
                  className="h-2 bg-indigo-500 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Skills;