import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";

gsap.registerPlugin(ScrollTrigger);

function Form() {
  const formContainerRef = useRef(null);
  const formRef = useRef();

  useEffect(() => {
    const formEl = formContainerRef.current;

    const anim = gsap.fromTo(
      formEl,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formEl,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  // === Fungsi Kirim Email ===
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9c383jm",   // 🔁 Ganti dengan Service ID dari EmailJS
        "template_ocftirp",  // 🔁 Ganti dengan Template ID
        formRef.current,
        "BnuJQ3eYDzHqwub7u"    // 🔁 Ganti dengan Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("✅ Pesan berhasil dikirim!");
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("❌ Gagal mengirim pesan, coba lagi nanti.");
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen md:ml-40 px-6 md:px-16">
      <div
        ref={formContainerRef}
        id="contact"
        className="px-6 py-10 flex flex-col gap-6 text-center bg-gray-100/60 backdrop-blur-md shadow-xl rounded-2xl w-[90%] md:w-96 justify-center items-center border border-gray-300"
      >
        <h1 className="text-2xl font-bold text-gray-800 cursor-default">
          Do you have any questions?
        </h1>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 w-full"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none text-gray-800 bg-white/80 placeholder-gray-500"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none text-gray-800 bg-white/80 placeholder-gray-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none text-gray-800 bg-white/80 placeholder-gray-500 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="text-white py-2 rounded-lg font-medium bg-[linear-gradient(90deg,#B86ADF_0%,#F76D71_50%,#FFB347_100%)] transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
