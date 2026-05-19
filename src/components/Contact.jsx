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
          Swal.fire({
            title: "Pesan Terkirim!",
            text: "Terima kasih, kami akan menghubungi Anda secepatnya.",
            icon: "success",
            confirmButtonColor: "#7B2CBF",
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            title: "Gagal Mengirim",
            text: "Terjadi kesalahan. Silakan coba lagi nanti.",
            icon: "error",
            confirmButtonColor: "#F87171",
          });
        }
      );
  };

 return (
  <section
    id="contact"
    ref={formContainerRef}
    className="max-w-6xl mx-auto py-24 px-6 md:px-16 text-slate-100 select-none flex flex-col lg:flex-row gap-10 items-stretch justify-center"
  >
    {/* Bagian Kiri: Contact Details */}
    <div className="p-8 lg:p-10 flex flex-col gap-6 text-left bg-slate-900/30 backdrop-blur-md shadow-2xl rounded-3xl w-full lg:w-3/5 border border-slate-800/80 relative overflow-hidden">
      {/* Ambient Glow Efek khusus di dalam Box Details */}
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <p className="font-mono text-xs tracking-widest text-indigo-400 uppercase">// Let's Connect</p>
        <h2 className="text-3xl font-black tracking-tight mt-2 pb-4 border-b border-slate-800 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
          Contact Details
        </h2>
      </div>

      <div className="grid gap-y-6 mt-4 relative z-10 font-inter">
        {/* Phone */}
        <div className="flex items-center space-x-4 group">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-indigo-500/40 text-indigo-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Phone</p>
            <p className="text-base md:text-lg text-slate-300 font-medium group-hover:text-slate-100 transition-colors duration-200">+62 899 717 898</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4 group">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-violet-500/40 text-violet-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Email Address</p>
            <p className="text-base md:text-lg text-slate-300 font-medium group-hover:text-slate-100 transition-colors duration-200 break-all">
              kahfi1211@student.abudzar.sch.id
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start space-x-4 group">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-purple-500/40 text-purple-400 transition-colors duration-300 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Location</p>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-200">
              Jl. Pln Raya, RT.001/RW.005, Klp. Indah, Kec. Tangerang, Kota Tangerang, Banten 15117
            </p>
          </div>
        </div>

        {/* Institution */}
        <div className="flex items-center space-x-4 group">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-amber-500/40 text-amber-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
              <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
              <path d="M3 6l0 13" />
              <path d="M12 6l0 13" />
              <path d="M21 6l0 13" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Institution</p>
            <p className="text-base md:text-lg text-slate-300 font-medium group-hover:text-slate-100 transition-colors duration-200">
              Pondok Tahfizh Plus Abu Dzar
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Bagian Kanan: Form */}
    <div className="p-8 lg:p-10 flex flex-col gap-6 text-center bg-slate-900/30 backdrop-blur-md shadow-2xl rounded-3xl w-full lg:w-2/5 border border-slate-800/80 relative overflow-hidden">
      <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none" />

      <div className="text-left relative z-10">
        <p className="font-mono text-xs tracking-widest text-purple-400 uppercase">// Message Me</p>
        <h2 className="text-3xl font-black tracking-tight mt-2 text-slate-100">
          Get in touch
        </h2>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 w-full relative z-10 mt-2">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-300 text-sm font-inter"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-300 text-sm font-inter"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-300 text-sm font-inter resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="mt-2 text-white py-3 rounded-xl font-semibold tracking-wider uppercase text-xs bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-md hover:shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
        >
          Send Message 
        </button>
      </form>
    </div>
  </section>
);
}

export default Contact;
