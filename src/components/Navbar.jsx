import { useState } from "react";
import { Menu, X } from "lucide-react";

/*
  Same type system as Hero.jsx / About.jsx / Skills.jsx / Projects.jsx / CaseStudy.jsx:
  Fraunces (display) / Inter (body) / JetBrains Mono (tags, labels)
*/

function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0B1120]/90 backdrop-blur border-b border-[#22304C] px-6 md:px-10 py-4">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-baseline gap-1.5">
          <span className="font-display text-xl font-medium text-[#F2EFE9]">
            Wasim
          </span>
          <span className="text-[#E3A857] font-display text-xl leading-none">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menu.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="group flex items-center gap-1.5 text-sm text-[#93A0B7] hover:text-[#F2EFE9] transition-colors duration-200"
              >
                <span className="font-mono text-[10px] text-[#E3A857] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Hire Me */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 bg-[#E3A857] text-[#3A2A0E] text-sm font-medium rounded-sm hover:bg-[#F0BC72] transition-colors duration-200"
        >
          Hire me
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-[#F2EFE9]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-1 bg-[#0F1830] p-3 rounded-sm border border-[#22304C]">

          {menu.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-2 py-2.5 text-[#93A0B7] hover:text-[#F2EFE9] transition-colors duration-200"
            >
              <span className="font-mono text-[10px] text-[#E3A857]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.name}
            </a>
          ))}

          {/* Hire Me Button */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2.5 bg-[#E3A857] text-[#3A2A0E] font-medium rounded-sm text-center"
          >
            Hire me
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;