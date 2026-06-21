import { useState } from "react";

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
    <nav className="sticky top-0 z-50 bg-[#0F172A]/90 backdrop-blur border-b border-gray-800 px-6 md:px-10 py-4">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-400">
          Wasim
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          {menu.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="hover:text-white transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Hire Me */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
        >
          Hire Me
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-300 bg-[#161E36] p-4 rounded-xl border border-gray-800">

          {menu.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              {item.name}
            </a>
          ))}

          {/* Hire Me Button */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2 bg-indigo-500 rounded-lg text-center"
          >
            Hire Me
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;