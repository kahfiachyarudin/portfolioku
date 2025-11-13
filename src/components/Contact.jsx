import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
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
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_9c383jm",
      "template_ocftirp",
      formRef.current,
      "BnuJQ3eYDzHqwub7u"
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
        Swal.fire({
          title: "Pesan Terkirim!",
          text: "✅ Terima kasih, kami akan menghubungi Anda secepatnya.",
          icon: "success",
          confirmButtonColor: "#6A67CE", // bisa disesuaikan
          confirmButtonText: "Oke"
        });
        e.target.reset();
      },
      (error) => {
        console.error("FAILED...", error.text);
        Swal.fire({
          title: "Gagal Mengirim",
          text: "❌ Terjadi kesalahan. Silakan coba lagi nanti.",
          icon: "error",
          confirmButtonColor: "#F87171",
          confirmButtonText: "Tutup"
        });
      }
    );
};

  return (
  <div className="flex flex-col md:flex-row justify-center items-center min-h-screen md:ml-40 gap-10 px-6 md:px-12 py-10"
  ref={formContainerRef}>

    {/* Bagian Contact Details */}
    <div className="px-6 py-10 flex flex-col gap-6 text-left bg-gray-100/60 backdrop-blur-md shadow-xl rounded-2xl w-full md:w-2/3 border border-gray-300 overflow-x-hidden">
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 bg-gradient-to-l from-secondary to-primary text-transparent bg-clip-text  w-full">
        Contact Details
      </h2>

      <div className="grid gap-x-10 gap-y-6">

        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          <p className="text-lg text-gray-700">+62 851 5515 515</p>
        </div>

        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          <p className="text-lg text-gray-700">kahfi1211@student.abudzar.sch.id</p>
        </div>

        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <p className="text-lg text-gray-700">Alamat</p>
        </div>

        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
          <p className="text-lg text-gray-700">Pondok Tahfizh Plus Abu Dzar</p>
        </div>
      </div>
    </div>

    <div
      
      id="contact"
      className="px-6 py-10 flex flex-col gap-6 text-center bg-gray-100/60 backdrop-blur-md shadow-xl rounded-2xl w-full md:w-1/3 justify-center items-center border border-gray-300"
    >
      <h1 className="text-2xl font-bold bg-gradient-to-l from-secondary to-primary text-transparent bg-clip-text cursor-default">
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
          className="text-white py-2 rounded-lg font-medium bg-brand-gradient transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

}

export default Contact;
