import { PenTool, Code, TrendingUp } from "lucide-react";

/*
  Same type system as Navbar.jsx / Hero.jsx / About.jsx / Skills.jsx / Projects.jsx / CaseStudy.jsx:
  Fraunces (display) / Inter (body) / JetBrains Mono (tags, labels)
*/

const services = [
  {
    tag: "SRV.01",
    title: "UI/UX design",
    icon: PenTool,
    quote: "Design is intelligence made visible.",
    description:
      "Creating modern, intuitive, and user-friendly interfaces using Figma and Canva with a focus on user experience.",
  },
  {
    tag: "SRV.02",
    title: "Frontend development",
    icon: Code,
    quote: "Turning ideas into responsive experiences.",
    description:
      "Building fast, responsive, and interactive websites using HTML, CSS, JavaScript, React.js, and modern web technologies.",
  },
  {
    tag: "SRV.03",
    title: "Digital marketing & SEO",
    icon: TrendingUp,
    quote: "Growing brands through smart digital strategies.",
    description:
      "Helping businesses improve their online presence through social media marketing, content creation, and SEO optimization.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#0B1120] py-16 sm:py-24 px-4 sm:px-6 md:px-16 border-t border-[#22304C]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-mono text-xs tracking-[0.25em] text-[#E3A857]">
            WHAT I DO — 03 SERVICES
          </span>

          <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#F2EFE9] mt-5 leading-[1.05]">
            My services
          </h2>

          <p className="font-sans text-[#93A0B7] mt-6 leading-8 text-sm sm:text-base">
            I combine design, development, and digital marketing to create
            beautiful digital experiences and help brands grow online.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.tag}
                className="group bg-[#0F1830] border border-[#22304C] rounded-sm p-6 sm:p-8 hover:border-[#E3A857]/50 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm border border-[#22304C] bg-[#0B1120] flex items-center justify-center group-hover:border-[#E3A857]/50 transition-colors duration-300">
                    <Icon size={22} className="text-[#E3A857]" />
                  </div>

                  <span className="font-mono text-[10px] tracking-widest text-[#93A0B7] mt-1">
                    {service.tag}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-medium text-[#F2EFE9]">
                  {service.title}
                </h3>

                <div className="border-l-2 border-[#E3A857]/50 pl-3 mt-4">
                  <p className="font-display italic text-[#F2EFE9]/80 text-sm sm:text-base leading-relaxed">
                    {service.quote}
                  </p>
                </div>

                <p className="font-sans text-[#93A0B7] mt-5 leading-6 sm:leading-7 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Services;