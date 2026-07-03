import { useState } from "react";

/*
  Certifications section — matches the theme used in Projects.jsx / CaseStudy.jsx:
  Fraunces (display) / Inter (body) / JetBrains Mono (labels)
  Dark navy background, gold accent (#E3A857)

  Add more entries to the array as you earn more certifications.
  Swap `image` for your actual certificate scan/screenshot, and
  `credentialUrl` for a real verification link if you have one.
*/

const certifications = [
  {
    title: "Figma Certification",
    issuer: "CODE IT",
    date: "2026",
    image: "/assets/certificate.jpg",
    credentialUrl: "#",
  },
];

function CertificationCard({ cert, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="group bg-[#0F1830] border border-[#22304C] rounded-sm overflow-hidden hover:border-[#E3A857]/50 hover:-translate-y-1.5 transition-all duration-300">
        <div className="relative overflow-hidden cursor-pointer" onClick={() => setExpanded(true)}>
          <div className="absolute top-3 left-3 z-10 bg-[#0B1120]/90 border border-[#2A3B5C] px-2.5 py-1 rounded-sm">
            <span className="font-mono text-[10px] tracking-widest text-[#E3A857]">
              N.{String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <img
            src={cert.image}
            alt={`${cert.title} certificate`}
            className="h-56 w-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-500 ease-out"
          />

          <div className="absolute inset-0 bg-[#0B1120]/0 group-hover:bg-[#0B1120]/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="px-4 py-2 bg-[#E3A857] text-[#3A2A0E] text-sm font-medium rounded-sm -translate-y-2 group-hover:translate-y-0 transition duration-300">
              View certificate
            </span>
          </div>
        </div>

        <div className="p-5">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#93A0B7]">
            {cert.date}
          </span>

          <h3 className="font-display text-lg font-medium text-[#F2EFE9] mt-2 leading-snug">
            {cert.title}
          </h3>

          <p className="font-sans text-[#93A0B7] text-sm mt-1">{cert.issuer}</p>

          {cert.credentialUrl && cert.credentialUrl !== "#" && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 font-mono text-[11px] tracking-wide text-[#E3A857] hover:text-[#F0BC72] transition"
            >
              Verify credential →
            </a>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 bg-[#0B1120]/90 flex items-center justify-center p-6"
          onClick={() => setExpanded(false)}
        >
          <img
            src={cert.image}
            alt={`${cert.title} certificate full view`}
            className="max-h-[85vh] max-w-full rounded-sm border border-[#22304C]"
          />
        </div>
      )}
    </>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="bg-[#0B1120] px-6 md:px-16 py-24 border-t border-[#22304C]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.25em] text-[#E3A857]">
            CREDENTIALS — {String(certifications.length).padStart(2, "0")} CERTIFICATION
            {certifications.length !== 1 ? "S" : ""}
          </span>

          <h2 className="font-display text-4xl md:text-6xl font-medium text-[#F2EFE9] mt-5 leading-[1.05]">
            Certifications
          </h2>

          <p className="font-sans text-[#93A0B7] mt-6 leading-8">
            Formal training and certifications that back up the skills shown
            in my work.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;