const projects = [
  {
    title: "E-Commerce Website (Full Responsive)",
    description:
      "React-based e-commerce with cart, authentication, product listing, and API integration.",
    type: "Web App",
    tools: ["React", "API", "Tailwind"],
    image: "/assets/ecommerce.png",
    live: "#",
    code: "#",
  },
  {
     title: "NovaNest - Modern Digital Agency Website",
    description:
       "Creative agency landing page with modern UI, animations, and service showcase.",
    type: "Website",
    tools: ["React", "Tailwind", "UI/UX"],
    image: "/assets/novanest.png",
    live: "#",
    code: "#",
  },
  {
    title: "Travel Blog Website",
    description:
      "Responsive travel blog with beautiful UI, blog cards, and SEO-friendly layout.",
    type: "Website",
    tools: ["HTML", "CSS", "JavaScript"],
    image: "/assets/traveling.png",
    live: "#",
    code: "#",
  },
  {
    title: "Grocery Mobile App UI",
    description:
      "Figma design for grocery shopping app with clean UI and smooth user flow.",
    type: "Mobile App (Figma)",
    tools: ["Figma", "UI Design"],
    image: "/assets/grocery.png",
    live: "#",
    code: "#",
  },
  {
    title: "Real Estate Mobile App UI",
    description:
      "Modern property listing app with search filters and clean UI design.",
    type: "Mobile App (Figma)",
    tools: ["Figma", "UX Design"],
    image: "/assets/realestate.png",
    live: "#",
    code: "#",
  },
  {
    title: "Barbershop Booking App UI",
    description:
      "Luxury booking system UI with schedule, services, and appointment flow.",
    type: "Mobile App (Figma)",
    tools: ["Figma", "UI/UX"],
    image: "/assets/barber.png",
    live: "#",
    code: "#",
  },
  {
    title: "Food Delivery App UI",
    description:
      "Clean food ordering app UI with cart, tracking, and categories.",
    type: "Mobile App (Figma)",
    tools: ["Figma", "UI Design"],
    image: "/assets/food.png",
    live: "#",
    code: "#",
  },
  {
    title: "Portfolio Website (Personal)",
    description:
      "My personal portfolio built with React and Tailwind CSS.",
    type: "Website",
    tools: ["React", "Tailwind"],
    image: "/assets/portfolio_1.png",
    live: "#",
    code: "#",
  },
  {
    title: "Admin Dashboard UI",
    description:
      "Responsive dashboard with charts, analytics, and UI components.",
    type: "Web App",
    tools: ["React", "Charts", "Tailwind"],
    image: "/assets/dashboard.png",
    live: "#",
    code: "#",
  },
  {
    title: "Landing Page Collection",
    description:
      "Multiple responsive landing pages for products and startups.",
    type: "Website",
    tools: ["HTML", "CSS", "React"],
    image: "/assets/landingpages.png",
    live: "#",
    code: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 md:px-10 py-20 border-t border-gray-800">
      {/* Title */}
      <h2 className="text-4xl font-bold text-indigo-400">
        My Projects
      </h2>

      <p className="text-gray-400 mt-2 max-w-2xl">
        A collection of my UI/UX designs, mobile apps, and fully responsive web applications.
      </p>

      {/* Grid */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#161E36] border border-gray-800 rounded-xl overflow-hidden hover:border-indigo-500 transition hover:scale-[1.02]"
          >
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="h-44 w-full object-cover"
            />

            {/* CONTENT */}
            <div className="p-5">
              {/* Type */}
              <span className="text-xs px-2 py-1 bg-[#0F172A] border border-gray-700 rounded">
                {project.type}
              </span>

              {/* Title */}
              <h3 className="text-white font-semibold mt-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mt-2">
                {project.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-[#0F172A] border border-gray-700 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <a
                  href={project.live}
                  className="px-3 py-2 bg-indigo-500 text-sm rounded-lg hover:bg-indigo-600 transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.code}
                  className="px-3 py-2 border border-gray-600 text-sm rounded-lg hover:border-indigo-500 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;