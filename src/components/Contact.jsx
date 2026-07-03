import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";

const inputClass =
  "px-4 py-3 bg-[#0B1120] border border-[#22304C] rounded-sm text-[#F2EFE9] placeholder:text-[#5C6B85] focus:outline-none focus:border-[#E3A857]/60 transition-colors duration-200";

function Contact() {
  const form = useRef();

  // ✅ FIXED EMAIL FUNCTION (ONLY ONE FUNCTION)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l6gxx9r",
        "template_udcpyoq",
        form.current,
        "5u4YEjaCQQesZenxD"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log("EmailJS Error:", error);
        alert(error.text || "Failed to send message");
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#0B1120] px-6 md:px-16 py-24 border-t border-[#22304C]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs tracking-[0.25em] text-[#E3A857]">
            GET IN TOUCH — 01
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-medium text-[#F2EFE9] mt-5">
            Let's work together
          </h2>

          <p className="font-sans text-[#93A0B7] mt-6 leading-8">
            Have a project in mind or want to collaborate?
            Feel free to contact me.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <div className="bg-[#0F1830] border border-[#22304C] rounded-sm p-6">

              <h3 className="text-xl text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">

                <a
                  href="mailto:akhtarwasim0122@gmail.com"
                  className="flex items-center gap-4"
                >
                  <Mail className="text-[#E3A857]" />
                  <span className="text-white">
                    akhtarwasim0122@gmail.com
                  </span>
                </a>

                <a
                  href="https://wa.me/9779869141130"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4"
                >
                  <MessageCircle className="text-[#E3A857]" />
                  <span className="text-white">
                    +977 9869141130
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <MapPin className="text-[#E3A857]" />
                  <span className="text-white">
                    Kathmandu, Nepal
                  </span>
                </div>

              </div>

            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-sm border border-[#22304C]">
              <iframe
                title="Kathmandu"
                src="https://maps.google.com/maps?q=Kathmandu,Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#0F1830] border border-[#22304C] rounded-sm p-8">

            <h3 className="text-white text-xl mb-6">
              Send Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >

              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className={inputClass}
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className={inputClass}
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className={inputClass}
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                required
                className={inputClass}
              />

              {/* FILE UPLOAD (UI ONLY) */}
              <div>
                <label className="text-sm text-gray-400">
                  Attach File (Optional)
                </label>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx,image/*"
                  className="mt-2 w-full text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="mt-3 bg-[#E3A857] hover:bg-[#F0BC72] text-black py-3 rounded-sm flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;