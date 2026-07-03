import { useMemo, useState } from "react";

/*
  Same type system as CaseStudy.jsx:
  Fraunces (display) / Inter (body) / JetBrains Mono (tags, labels)
  https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@500&display=swap
*/

const projects = [
  {
    title: "Stock & Crypto Investment App",
    description:
      "A modern investment dashboard that helps users track stocks and crypto assets with real-time insights, portfolio analytics, and clean financial UI.",
    type: "Mobile App",
    tools: ["Figma", "UI Design"],
    image: "/assets/Stock & Crypto Investment App.svg",
    live: "#",
    code: "#",
  },
  {
    title: "Grocery Mobile App UI",
    description:
      "A seamless grocery shopping experience with intuitive product browsing, smart categorization, and a smooth checkout flow designed for daily users.",
    type: "Mobile App",
    tools: ["Figma", "UI Design"],
    image: "/assets/grocery.png",
    live: "#",
    code: "#",
  },
  {
    title: "Doctor Appointment App UI",
    description:
      "A healthcare booking interface that allows users to easily find doctors, schedule appointments, and manage consultations with a simple and accessible UX.",
    type: "Mobile App",
    tools: ["Figma", "UX Design"],
    image: "/assets/Doctor appointment app.svg",
    live: "#",
    code: "#",
  },
  {
    title: "Real Estate Mobile App UI",
    description:
      "A property discovery platform with advanced filters, map-based search, and a clean browsing experience for buying and renting homes.",
    type: "Mobile App",
    tools: ["Figma", "UX Design"],
    image: "/assets/Real Estate App.svg",
    live: "#",
    code: "#",
  },
  {
    title: "Food Delivery App UI",
    description:
      "A fast and user-friendly food ordering experience featuring restaurant listings, cart management, and real-time order tracking.",
    type: "Mobile App",
    tools: ["Figma", "UI Design"],
    image: "/assets/food.png",
    live: "#",
    code: "#",
  },
  {
    title: "Barbershop Booking App UI",
    description:
      "A premium booking system UI that allows users to schedule appointments, explore services, and manage grooming sessions easily.",
    type: "Mobile App",
    tools: ["Figma", "UI/UX"],
    image: "/assets/barber.png",
    live: "#",
    code: "#",
  },
  {
    title: "CRC Dashboard",
    description:
      "An analytics dashboard designed to visualize key business metrics with charts, insights, and responsive UI components for better decision-making.",
    type: "Web Dashboard",
    tools: ["Figma", "UI Design"],
    image: "/assets/CRC Dashboard.svg",
    live: "#",
    code: "#",
  },
  {
    title: "WebDashboard",
    description:
      "A general-purpose admin dashboard template with modular widgets, data tables, and a flexible layout for tracking day-to-day operations.",
    type: "Web Dashboard",
    tools: ["Figma", "UI Design"],
    image: "/assets/WebDashboard.svg",
    live: "#",
    code: "#",
  },
  {
    title: "Data Analytics Website",
    description:
      "A data-driven analytics platform with interactive charts, filterable reports, and dashboards built to surface trends at a glance.",
    type: "Web Dashboard",
    tools: ["Figma", "UI Design"],
    image: "/assets/Data Analytics Website.svg",
    live: "#",
    code: "#",
  },
  {
    title: "Landing Page Collection",
    description:
      "A set of modern, responsive landing pages designed for startups and products focusing on conversion and visual storytelling.",
    type: "Website",
    tools: ["Figma", "UI Design"],
    image: "/assets/landingpages.png",
    live: "#",
    code: "#",
  },
  {
    title: "TechVerse Electronics E-Store",
    description:
      "A premium desktop, tablet, and mobile responsive UI design for a high-end electronics retailer, optimized for high checkout conversion rates.",
    type: "Website",
    tools: ["Figma", "UI Design"],
    image: "/assets/Tech.png",
    live: "#",
    code: "#",
  },
  {
    title: "Cosmetic Website",
    description:
      "An elegant e-commerce UI for a beauty and skincare brand, featuring product storytelling, soft visuals, and a smooth shop-to-checkout journey.",
    type: "Website",
    tools: ["Figma", "UI Design"],
    image: "/assets/Cosmetic Website.svg",
    live: "#",
    code: "#",
  },
  {
    title: " Payment Processing Website",
    description:
      "A trust-focused fintech UI for a payment processing platform, highlighting security features, transaction flows, and merchant onboarding.",
    type: "Website",
    tools: ["Figma", "UI Design"],
    image: "/assets/Payment Processing Website.svg",
    live: "#",
    code: "#",
  },
  {
    title: " Glowaz Cosmetics E-Store",
    description:
      "A vibrant cosmetics storefront UI with rich product galleries, category filtering, and an inviting layout built to drive online sales.",
    type: "Website",
    tools: ["Figma", "UI Design"],
    image: "/assets/Glowaz Cosmetics E-Store.png",
    live: "#",
    code: "#",
  },
  {
    title: "Veloura Ecommerce",
    description:
      "A full-featured fashion e-commerce experience with dynamic product pages, cart and checkout flow, and smooth micro-interactions shown live in the demo video.",
    type: "Mobile App",
    tools: ["Figma", "UI Design"],
    video: "/assets/Veloura Ecommerce.mp4",
    poster: "/assets/Veloura Ecommerce.png",
    live: "#",
    code: "#",
  },
  {
    title: "E-Commerce Website (Full Responsive)",
    description:
      "A full-featured e-commerce platform with product listings, cart system, authentication flow, and API-driven dynamic content.",
    type: "Website",
    tools: ["Figma", "HTML", "Tailwind", "JavaScript", "React", "API"],
    image: "/assets/ecommerce.png",
    live: "#",
    code: "#",
  },
  {
    title: "NovaNest - Modern Digital Agency Website",
    description:
      "A creative agency landing page with modern animations, service highlights, and conversion-focused UI designed for branding impact.",
    type: "Website",
    tools: ["Figma", "HTML", "Tailwind", "JavaScript", "React", "API"],
    image: "/assets/novanest.png",
    live: "#",
    code: "#",
  },
  {
    title: "Travel Blog Website",
    description:
      "A responsive travel blog platform showcasing destinations, stories, and visual content with SEO-friendly structure and clean layout.",
    type: "Blog",
    tools: ["Figma", "HTML", "Tailwind", "JavaScript", "React", "API"],
    image: "/assets/traveling.png",
    live: "#",
    code: "#",
  },
  {
    title: "  Personal Website",
    description:
      "A personal portfolio site showcasing projects, skills, and background with a clean, minimal layout and smooth navigation.",
    type: "Blog",
    tools: ["Figma", "HTML", "Tailwind", "JavaScript", "React", "API"],
    image: "/assets/Personal Website.svg",
    live: "#",
    code: "#",
  },
];

const filters = ["All", "Mobile App", "Web Dashboard", "Website", "Blog"];

function ProjectMedia({ project }) {
  if (project.video) {
    return (
      <video
        className="h-48 w-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-500 ease-out"
        src={project.video}
        poster={project.poster}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      className="h-48 w-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-500 ease-out"
    />
  );
}

function ProjectCard({ project, index }) {
  return (
    <div className="group bg-[#0F1830] border border-[#22304C] rounded-sm overflow-hidden hover:border-[#E3A857]/50 hover:-translate-y-1.5 transition-all duration-300">
      <div className="relative overflow-hidden">
        <div className="absolute top-3 left-3 z-10 bg-[#0B1120]/90 border border-[#2A3B5C] px-2.5 py-1 rounded-sm">
          <span className="font-mono text-[10px] tracking-widest text-[#E3A857]">
            N.{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {project.video && (
          <div className="absolute top-3 right-3 z-10 bg-[#0B1120]/90 border border-[#2A3B5C] px-2.5 py-1 rounded-sm">
            <span className="font-mono text-[10px] tracking-widest text-[#E3A857]">
              LIVE DEMO
            </span>
          </div>
        )}

        <ProjectMedia project={project} />

        <div className="absolute inset-0 bg-[#0B1120]/0 group-hover:bg-[#0B1120]/70 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <a
            href={project.live}
            className="px-4 py-2 bg-[#E3A857] text-[#3A2A0E] text-sm font-medium rounded-sm hover:bg-[#F0BC72] transition -translate-y-2 group-hover:translate-y-0 duration-300"
          >
            Live demo
          </a>
          <a
            href={project.code}
            className="px-4 py-2 border border-[#F2EFE9]/40 text-[#F2EFE9] text-sm rounded-sm hover:border-[#F2EFE9] transition -translate-y-2 group-hover:translate-y-0 duration-300 delay-75"
          >
            Code
          </a>
        </div>
      </div>

      <div className="p-5">
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#93A0B7]">
          {project.type.toUpperCase()}
        </span>

        <h3 className="font-display text-lg font-medium text-[#F2EFE9] mt-2 leading-snug">
          {project.title}
        </h3>

        <p className="font-sans text-[#93A0B7] text-sm mt-2 leading-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="font-mono text-[10px] tracking-wide px-2 py-1 bg-[#0B1120] border border-[#22304C] text-[#93A0B7] rounded-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () =>
      active === "All" ? projects : projects.filter((p) => p.type === active),
    [active]
  );

  return (
    <section id="projects" className="bg-[#0B1120] px-6 md:px-16 py-24 border-t border-[#22304C]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-[0.25em] text-[#E3A857]">
              SELECTED WORK — {String(projects.length).padStart(2, "0")} PROJECTS
            </span>

            <h2 className="font-display text-4xl md:text-6xl font-medium text-[#F2EFE9] mt-5 leading-[1.05]">
              My projects
            </h2>

            <p className="font-sans text-[#93A0B7] mt-6 leading-8">
              A collection of UI/UX designs, mobile apps, and fully responsive
              web applications built end to end.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-mono text-xs tracking-wide px-3.5 py-2 rounded-sm border transition ${
                  active === f
                    ? "bg-[#E3A857] text-[#3A2A0E] border-[#E3A857]"
                    : "border-[#22304C] text-[#93A0B7] hover:border-[#E3A857]/50 hover:text-[#F2EFE9]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {visible.map((project) => {
            const originalIndex = projects.indexOf(project);
            return (
              <ProjectCard key={project.title} project={project} index={originalIndex} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;