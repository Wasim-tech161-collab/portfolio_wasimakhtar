/*
  Same type system as CaseStudy.jsx / Projects.jsx / Skills.jsx:
  Fraunces (display) / Inter (body) / JetBrains Mono (tags, labels)
*/

const focusAreas = ["UI/UX design", "Product design", "Design systems", "User research"];

function About() {
  return (
    <section id="about" className="bg-[#0B1120] px-4 sm:px-6 md:px-16 py-16 sm:py-24 border-t border-[#22304C]">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs tracking-[0.25em] text-[#E3A857] block text-center md:text-left">
          ABOUT — 01
        </span>

        <h2 className="font-display text-4xl md:text-6xl font-medium text-[#F2EFE9] mt-4 leading-[1.05] text-center md:text-left">
          About me
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="group relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">

              <div className="absolute -top-3 -left-3 z-10 bg-[#0F1830] border border-[#2A3B5C] px-3 py-1 rounded-sm">
                <span className="font-mono text-[11px] tracking-widest text-[#E3A857]">
                  FIG.00 — WASIM
                </span>
              </div>

              <div className="w-full h-full overflow-hidden rounded-sm border border-[#22304C] bg-[#0F1830]">
                <img
                  src="/assets/about.png"
                  alt="Portrait of Wasim"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-500 ease-out"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-transparent group-hover:ring-[#E3A857]/40 transition-all duration-500" />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="text-center md:text-left">
            <p className="font-sans text-[#F2EFE9] leading-8 text-sm sm:text-base">
              I'm a UI/UX and product designer focused on creating modern,
              user-friendly, and visually considered digital experiences.
            </p>

            <p className="font-sans text-[#93A0B7] mt-5 leading-8 text-sm sm:text-base">
              I enjoy turning ideas into real products through research,
              wireframes, and clean design systems, and I'm constantly
              refining how I work to deliver better user experiences.
            </p>

            <div className="w-10 h-px bg-[#E3A857] my-7 mx-auto md:mx-0" />

            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#93A0B7]">
                CURRENT FOCUS
              </span>

              <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="font-mono text-xs tracking-wide px-3 py-1.5 bg-[#0F1830] border border-[#22304C] text-[#F2EFE9] rounded-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;