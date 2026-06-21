function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-20 border-t border-gray-800"
    >
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">
          Let's <span className="text-indigo-400">Work Together</span>
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to new opportunities and creative ideas.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-14 grid lg:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* Contact Info */}
          {/* Contact Info */}
          <div className="bg-[#161E36] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 text-gray-300">
              {/* Email */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <a
                  href="mailto:akhtarwasim0122@gmail.com"
                  className="hover:text-indigo-400 transition"
                >
                  akhtarwasim0122@gmail.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <a
                  href="https://wa.me/9779869141130"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-400 transition"
                >
                  +977 9869141130
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-500">
                UI/UX Designer • Frontend Developer • Digital Marketer
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-2xl border border-gray-800">
            <iframe
              title="Kathmandu Location"
              src="https://maps.google.com/maps?q=Kathmandu,Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#161E36] border border-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Send Message
          </h3>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 bg-[#0F172A] border border-gray-700 rounded-lg outline-none focus:border-indigo-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 bg-[#0F172A] border border-gray-700 rounded-lg outline-none focus:border-indigo-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="px-4 py-3 bg-[#0F172A] border border-gray-700 rounded-lg outline-none focus:border-indigo-500"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="px-4 py-3 bg-[#0F172A] border border-gray-700 rounded-lg outline-none focus:border-indigo-500"
            ></textarea>

            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 rounded-lg font-medium"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
