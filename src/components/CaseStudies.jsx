import { useEffect, useRef, useState } from "react";

/*
  Fonts used: Fraunces (display), Inter (body), JetBrains Mono (tags/ticks).
  Add these to your <head> (or _document.js / index.html):

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">

  Then extend tailwind.config.js:
  fontFamily: {
    display: ["Fraunces", "serif"],
    sans: ["Inter", "sans-serif"],
    mono: ["JetBrains Mono", "monospace"],
  }
*/

const process = [
  {
    tag: "FIG.01",
    title: "Research",
    image: "/assets/research.png",
    description:
      "Conducted competitor analysis, explored similar products, and identified user needs through research."
  },
  {
    tag: "FIG.02",
    title: "Problem Definition",
    image: "/assets/problem.png",
    description:
      "Defined the core user problems and business goals to build the right solution."
  },
  {
    tag: "FIG.03",
    title: "User Persona",
    image: "/assets/persona.png",
    description:
      "Created personas representing target users, their goals, frustrations, and behaviors."
  },
  {
    tag: "FIG.04",
    title: "User Flow",
    image: "/assets/User Flow.png",
    description:
      "Designed a complete user journey from the first screen to task completion."
  },
  {
    tag: "FIG.05",
    title: "Wireframes",
    image: "/assets/wireframe.png",
    description:
      "Created low-fidelity wireframes to validate layouts before visual design."
  },
  {
    tag: "FIG.06",
    title: "UI Design",
    image: "/assets/ui.png",
    description:
      "Designed clean, modern high-fidelity interfaces with consistent spacing, typography, and colors."
  },
  {
    tag: "FIG.07",
    title: "Prototype",
    image: "/assets/Prototype.png",
    description:
      "Built interactive prototypes in Figma to simulate real user interactions."
  },
  {
    tag: "FIG.08",
    title: "Usability Testing",
    image: "/assets/Usability Testing.png",
    description:
      "Collected feedback, improved usability, and refined the interface before delivery."
  },
  {
    tag: "FIG.09",
    title: "Final Product",
    image: "/assets/Final Product.png",
    description:
      "Delivered a polished, responsive, and developer-ready design system."
  }
];

function Step({ step, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const reversed = index % 2 !== 0;

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
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      {/* ruler tick + number, centered on the spine (desktop only) */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-[#0B1120] border border-[#2A3B5C] flex items-center justify-center">
          <span className="font-mono text-xs tracking-widest text-[#E3A857]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div
        className={`transition-all duration-700 ease-out ${
          reversed ? "md:order-2" : ""
        } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="group relative">
          <div className="absolute -top-3 left-5 z-10 bg-[#0F1830] border border-[#2A3B5C] px-3 py-1 rounded-sm">
            <span className="font-mono text-[11px] tracking-widest text-[#E3A857]">
              {step.tag} — {step.title.toUpperCase()}
            </span>
          </div>

          <div className="overflow-hidden rounded-sm border border-[#22304C] bg-[#0F1830]">
            <img
              src={step.image}
              alt={step.title}
              className="w-full grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-transparent group-hover:ring-[#E3A857]/40 transition-all duration-500" />
        </div>
      </div>

      <div
        className={`transition-all duration-700 ease-out delay-100 ${
          reversed ? "md:order-1" : ""
        } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <span className="font-mono text-xs tracking-[0.2em] text-[#93A0B7]">
          STEP {String(index + 1).padStart(2, "0")} / 09
        </span>

        <h3 className="font-display text-3xl md:text-4xl font-medium text-[#F2EFE9] mt-3 leading-tight">
          {step.title}
        </h3>

        <div className="w-10 h-px bg-[#E3A857] my-5" />

        <p className="font-sans text-[#93A0B7] leading-8">{step.description}</p>
      </div>
    </div>
  );
}

export default function CaseStudy() {
  return (
    <section id="case-study" className="bg-[#0B1120] py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-24">
          <span className="font-mono text-xs tracking-[0.25em] text-[#E3A857]">
            PROCESS — 09 STAGES
          </span>

          <h2 className="font-display text-4xl md:text-6xl font-medium text-[#F2EFE9] mt-5 leading-[1.05]">
            My design process
          </h2>

          <p className="font-sans text-[#93A0B7] mt-6 leading-8">
            Every product I ship moves through the same nine stages, from
            first research question to final handoff. It keeps the work
            honest and the decisions traceable.
          </p>
        </div>

        <div className="relative space-y-24 md:space-y-32">
          {/* ruler spine */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#22304C] -translate-x-1/2" />

          {process.map((step, index) => (
            <Step key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}