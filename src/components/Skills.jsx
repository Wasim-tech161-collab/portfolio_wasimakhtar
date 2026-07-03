import { useEffect, useRef, useState } from "react";
import {
  Code,
  FileCode,
  Braces,
  Smartphone,
  Megaphone,
  PenTool,
  Play,
} from "lucide-react";

/*
  Same type system as CaseStudy.jsx / Projects.jsx:
  Fraunces (display) / Inter (body) / JetBrains Mono (tags, numbers)
*/

const skills = [
  { name: "UI/UX design", detail: "Figma, Canva", level: 90, icon: PenTool },
  { name: "Frontend development", detail: "HTML, CSS", level: 85, icon: Code },
  { name: "JavaScript", detail: "ES6+", level: 80, icon: Braces },
  { name: "React.js", detail: "Component architecture", level: 75, icon: FileCode },
  { name: "Responsive design", detail: "Mobile-first", level: 90, icon: Smartphone },
  { name: "Digital marketing", detail: "SEO, campaigns", level: 70, icon: Megaphone },
];

const TICKS = 10;

function SkillMeter({ skill, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = skill.icon;
  const filledTicks = Math.round((skill.level / 100) * TICKS);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-[#0F1830] border border-[#22304C] rounded-sm p-5 hover:border-[#E3A857]/50 transition-colors duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-sm border border-[#22304C] bg-[#0B1120] flex items-center justify-center shrink-0">
            <Icon size={16} className="text-[#E3A857]" />
          </div>
          <div>
            <p className="text-[#F2EFE9] text-sm md:text-base font-medium leading-tight">
              {skill.name}
            </p>
            <p className="font-mono text-[10px] tracking-wide text-[#93A0B7] mt-0.5">
              {skill.detail.toUpperCase()}
            </p>
          </div>
        </div>

        <span className="font-mono text-sm text-[#E3A857] tabular-nums">
          {String(skill.level).padStart(2, "0")}%
        </span>
      </div>

      <div className="flex gap-1">
        {Array.from({ length: TICKS }).map((_, i) => (
          <div
            key={i}
            className="h-2 flex-1 rounded-[1px] bg-[#0B1120] border border-[#22304C] overflow-hidden"
          >
            <div
              className="h-full bg-[#E3A857] transition-all ease-out"
              style={{
                width: visible && i < filledTicks ? "100%" : "0%",
                transitionDuration: "500ms",
                transitionDelay: `${i * 40}ms`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function DesignProcessVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <div className="group relative mt-14 mb-14">
      <div className="absolute -top-3 left-5 z-10 bg-[#0F1830] border border-[#2A3B5C] px-3 py-1 rounded-sm">
        <span className="font-mono text-[11px] tracking-widest text-[#E3A857]">
          FIG.00 — LIVE DESIGN PROCESS
        </span>
      </div>

      <div className="relative overflow-hidden rounded-sm border border-[#22304C] bg-[#0F1830]">
        <video
          ref={videoRef}
          src="/assets/figma-design-process.mp4"
          poster="/assets/figma-design-process-poster.png"
          controls={playing}
          className="w-full aspect-video"
          onPause={() => setPlaying(false)}
        />

        {!playing && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-[#0B1120]/40 hover:bg-[#0B1120]/25 transition-colors duration-300"
            aria-label="Play design process recording"
          >
            <span className="w-16 h-16 rounded-full bg-[#E3A857] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Play size={22} className="text-[#3A2A0E] ml-0.5" fill="#3A2A0E" />
            </span>
          </button>
        )}
      </div>

      <p className="font-mono text-[10px] tracking-wide text-[#93A0B7] mt-3">
        SCREEN RECORDING — FIGMA WALKTHROUGH, UNCUT
      </p>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-[#0B1120] px-6 md:px-16 py-24 border-t border-[#22304C]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.25em] text-[#E3A857]">
            CAPABILITIES — {String(skills.length).padStart(2, "0")} AREAS
          </span>

          <h2 className="font-display text-4xl md:text-6xl font-medium text-[#F2EFE9] mt-5 leading-[1.05]">
            My skills
          </h2>

          <p className="font-sans text-[#93A0B7] mt-6 leading-8">
            Technical range and proficiency across the tools and disciplines
            I use to take a product from idea to interface.
          </p>
        </div>

        <DesignProcessVideo />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((skill, index) => (
            <SkillMeter key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;