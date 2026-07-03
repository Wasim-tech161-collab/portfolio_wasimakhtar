import Typewriter from "typewriter-effect";
import { ArrowRight, Mail } from "lucide-react";

/*
  Same type system as About.jsx / Skills.jsx / Projects.jsx / CaseStudy.jsx:
  Fraunces (display) / Inter (body) / JetBrains Mono (tags, labels)
*/

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0B1120] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10 overflow-hidden"
    >
      {/* AMBIENT GUIDE LINES */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#93A0B7]" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-[#93A0B7]" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#93A0B7]" />
      </div>

      {/* LEFT SIDE */}
      <div className="relative flex-1 text-center md:text-left">

        <div className="inline-flex items-center gap-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E3A857] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E3A857]" />
          </span>
          <span className="font-mono text-xs tracking-[0.2em] text-[#93A0B7]">
            OPEN TO NEW PROJECTS
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-[#F2EFE9]">
          Hi, I'm Wasim Akhtar
        </h1>

        {/* Typewriter */}
        <h2 className="font-mono text-base md:text-xl mt-5 text-[#E3A857]">
          <span className="text-[#93A0B7]">{">"} </span>
          <Typewriter
            options={{
              strings: [
                "UI/UX Designer",
                "Product Designer"
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </h2>

        <p className="mt-6 font-sans text-[#93A0B7] leading-8 max-w-xl mx-auto md:mx-0 text-sm md:text-base">
          I design intuitive, user-centered digital products — from
          research and wireframes to polished, developer-ready interfaces.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

          <a
            href="#projects"
            className="group px-6 py-3 bg-[#E3A857] text-[#3A2A0E] font-medium rounded-sm hover:bg-[#F0BC72] transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            View my projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-[#22304C] text-[#F2EFE9] rounded-sm hover:border-[#E3A857]/60 transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            <Mail size={16} className="text-[#93A0B7]" />
            Contact me
          </a>

        </div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative flex-1 flex justify-center items-center">

        <div className="group relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96">

          <div
            className="absolute inset-0 rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            style={{ boxShadow: "0 0 60px rgba(227,168,87,0.25)" }}
          />

          <img
            src="/assets/about.png"
            alt="Wasim Akhtar"
            className="relative w-full h-full object-cover rounded-full border border-[#22304C] grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out"
          />

          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-transparent group-hover:ring-[#E3A857]/50 transition-all duration-500" />

        </div>

      </div>

    </section>
  );
}

export default Hero;