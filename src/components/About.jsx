function About() {
  return (
    <section id="about" className="px-4 sm:px-6 md:px-16 py-16 sm:py-20 border-t border-gray-800">

      {/* TITLE */}
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 text-center md:text-left">
        About Me
      </h2>

      {/* LAYOUT */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">

          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">

            <img
              src="/assets/about.png"
              alt="About Wasim"
              className="
                w-full h-full 
                object-cover 
                rounded-3xl 
                border border-gray-700 
                shadow-[0_0_40px_rgba(99,102,241,0.3)]
                hover:scale-105 
                transition duration-300
              "
            />

          </div>

        </div>

        {/* RIGHT TEXT */}
        <div className="text-center md:text-left">

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            I am a passionate UI/UX designer, frontend developer, and digital marketing enthusiast.
            I specialize in creating modern, user-friendly, and visually appealing digital experiences.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
            I enjoy transforming ideas into real products using clean design systems and modern frontend technologies like React and Tailwind CSS.
            I am constantly learning and improving my skills to deliver better user experiences.
          </p>

          {/* HIGHLIGHT BOX */}
          <div className="mt-6 p-4 bg-[#161E36] border border-gray-800 rounded-xl">

            <p className="text-xs sm:text-sm text-gray-300">
              🚀 Focus: UI/UX Design • Frontend Development • Responsive Web Apps • Digital Growth
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;