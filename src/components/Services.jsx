import { PenTool, Code, TrendingUp } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    icon: PenTool,
    quote: "Design is intelligence made visible.",
    description:
      "Creating modern, intuitive, and user-friendly interfaces using Figma and Canva with a focus on user experience.",
  },
  {
    title: "Frontend Development",
    icon: Code,
    quote: "Turning ideas into responsive experiences.",
    description:
      "Building fast, responsive, and interactive websites using HTML, CSS, JavaScript, React.js, and modern web technologies.",
  },
  {
    title: "Digital Marketing & SEO",
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
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 border-t border-gray-800"
    >
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          My <span className="text-indigo-400">Services</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          I combine design, development, and digital marketing to create
          beautiful digital experiences and help brands grow online.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="
                bg-[#161E36]
                border border-gray-800
                rounded-2xl
                p-6 sm:p-8
                hover:border-indigo-500
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-5 sm:mb-6">
                <Icon size={28} className="text-indigo-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {service.title}
              </h3>

              {/* Quote */}
              <p className="text-indigo-300 italic mt-3 text-sm sm:text-base">
                "{service.quote}"
              </p>

              {/* Description */}
              <p className="text-gray-400 mt-4 sm:mt-5 leading-6 sm:leading-7 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Services;