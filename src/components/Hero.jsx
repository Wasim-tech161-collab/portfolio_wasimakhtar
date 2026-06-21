import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10"
    >

      {/* LEFT SIDE */}
      <div className="flex-1 text-center md:text-left">

        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Hi, I'm Wasim Akhtar 👋
        </h1>

        {/* Typewriter */}
        <h2 className="text-lg md:text-2xl mt-4 text-indigo-400 font-semibold">
          <Typewriter
            options={{
              strings: [
                "UI/UX Designer",
                "Frontend Developer",
                "Digital Marketer"
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </h2>

        <p className="mt-5 text-gray-300 max-w-xl mx-auto md:mx-0 text-sm md:text-base">
          I create beautiful user experiences, build responsive websites,
          and help brands grow through digital strategies.
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

          {/* VIEW PROJECTS */}
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition text-center"
          >
            🚀 View My Projects
          </a>

          {/* CONTACT */}
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 rounded-lg hover:border-indigo-500 transition text-center"
          >
            📩 Contact Me
          </a>

        </div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex-1 flex justify-center items-center">

        <img
          src="/assets/about.png"
          alt="Wasim Akhtar"
          className="
            w-40 h-40 
            sm:w-56 sm:h-56 
            md:w-80 md:h-80 
            lg:w-96 lg:h-96 
            object-cover 
            rounded-full 
            border-4 border-indigo-500 
            shadow-[0_0_40px_rgba(99,102,241,0.6)]
            hover:scale-105 transition duration-300
          "
        />

      </div>

    </section>
  );
}

export default Hero;