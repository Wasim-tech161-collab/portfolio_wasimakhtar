import { useState } from "react";

/*
  Testimonials carousel — matches the reference layout:
  white card, thick orange border, overlapping orange circles behind
  the avatar, italic quote, bold name + role, prev/next arrows, dots.

  Swap the `photo` paths below for real headshots once you have them:
  /assets/anik-k-panta.jpg
  /assets/nitesh-dhimal.jpg
*/

const testimonials = [
  {
    quote:
      "Through collaboration with this agency I have been able to take my business to the next level and maximize the ROI!",
    name: "Anil K Panta",
    role: "Senior Product Designer, Cloudsathi",
    photo: "/assets/Anil panta.png",
  },
  {
    quote:
      "Working with this team gave our product real momentum — clean execution, fast turnaround, and a genuine understanding of what we needed.",
    name: "Nitesh Dhimal",
    role: "Full Stack Developer, Mindrisers",
    photo: "/assets/nitesh-dhimal.jpg",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const goPrev = () =>
    setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const goNext = () => setActive((i) => (i + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section className="bg-[#F5A25D] px-6 py-20 flex items-center justify-center">
      <div className="relative w-full max-w-3xl">
        {/* Prev / Next arrows */}
        <button
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="absolute left-[-22px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#F0904C] hover:bg-[#e9813a] text-white flex items-center justify-center shadow-md transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={goNext}
          aria-label="Next testimonial"
          className="absolute right-[-22px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#F0904C] hover:bg-[#e9813a] text-white flex items-center justify-center shadow-md transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Card */}
        <div className="bg-white rounded-[28px] border-[10px] border-[#F0904C] px-8 py-14 md:px-16 md:py-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Testimonials
            </h2>
            <p className="text-[#8A8A8A] mt-2 text-sm md:text-base">
              See what people are saying.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            {/* Avatar with overlapping circles */}
            <div className="relative shrink-0 w-32 h-32 md:w-36 md:h-36">
              <div className="absolute -left-5 -top-2 w-24 h-24 rounded-full bg-[#F4B183]/70" />
              <div className="absolute -left-2 top-3 w-24 h-24 rounded-full bg-[#F0904C]/70" />
              <img
                key={current.photo}
                src={current.photo}
                alt={current.name}
                className="relative z-10 w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>

            {/* Quote + attribution */}
            <div className="text-center md:text-left">
              <p className="italic text-[#2E2E2E] text-lg md:text-xl leading-relaxed">
                "{current.quote}"
              </p>
              <p className="mt-5 font-bold text-[#F0904C] text-lg">
                {current.name}
              </p>
              <p className="text-[#8A8A8A] text-sm">{current.role}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === active
                    ? "w-6 bg-[#F0904C]"
                    : "w-2 bg-[#E8D9CC] hover:bg-[#F0904C]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;