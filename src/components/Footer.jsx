import { Triangle } from "lucide-react";

/*
  Same type system as every other section in this site:
  Fraunces (display) / Inter (body) / JetBrains Mono (tags, labels)

  Note: lucide-react no longer ships brand/logo icons (Github, Linkedin,
  Twitter, etc. were removed, not just deprecated), so GitHub and LinkedIn
  are plain inline SVGs below instead of lucide imports.
*/

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const navLinks = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/Wasim-tech161-collab", icon: GithubIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/wasim-akhtar-78b754400/", icon: LinkedinIcon },
  { name: "Vercel", href: "https://vercel.com/akhtarwasim0122-1790s-projects", icon: Triangle },
];

function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-[#22304C] px-4 sm:px-6 md:px-16 py-14">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-baseline gap-1.5">
              <span className="font-display text-xl font-medium text-[#F2EFE9]">Wasim</span>
              <span className="text-[#E3A857] font-display text-xl leading-none">.</span>
            </a>

            <p className="font-sans text-[#93A0B7] text-sm mt-3 max-w-xs leading-6">
              UI/UX and product designer crafting clean, considered
              digital experiences.
            </p>
          </div>

          {/* MIDDLE LINKS */}
          <div className="text-center md:text-left">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#E3A857] mb-4">
              NAVIGATE
            </p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-[#93A0B7] hover:text-[#F2EFE9] text-sm transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SOCIAL */}
          <div className="text-center md:text-left">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#E3A857] mb-4">
              CONNECT
            </p>
            <div className="flex flex-col gap-2.5">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-center md:justify-start gap-2 text-[#93A0B7] hover:text-[#F2EFE9] text-sm transition-colors duration-200"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#93A0B7] group-hover:text-[#E3A857] transition-colors duration-200" />
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-[#22304C] pt-6 text-center">
          <p className="font-mono text-[11px] text-[#5C6B85]">
            © {new Date().getFullYear()} Wasim Akhtar — built with React and Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
