function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-gray-800 px-4 sm:px-6 md:px-10 py-10">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-indigo-400">
            Wasim
          </h2>

          <p className="text-gray-400 text-sm mt-2 max-w-xs">
            UI/UX Designer • Frontend Developer • Digital Marketer
          </p>
        </div>

        {/* MIDDLE LINKS */}
        <div className="flex flex-wrap gap-4 text-gray-400 text-sm justify-center">
          <a className="hover:text-white transition" href="#home">Home</a>
          <a className="hover:text-white transition" href="#about">About</a>
          <a className="hover:text-white transition" href="#projects">Projects</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-2 text-sm text-gray-400 text-center md:text-right">

          <a
            href="https://github.com/Wasim-tech161-collab"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/wasim-akhtar-78b754400/"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://vercel.com/akhtarwasim0122-1790s-projects"
            target="_blank"
            className="hover:text-white transition"
          >
            Vercel
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-xs text-gray-600 px-2">
        © {new Date().getFullYear()} Wasim. Built with React + Tailwind ⚡
      </div>

    </footer>
  );
}

export default Footer;