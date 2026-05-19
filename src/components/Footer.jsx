import React from 'react';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {

  const scrollToSection = (id) => {
    const offset = 80; 
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: `#${id}`, offsetY: offset },
      ease: "power4.inOut" // Diperhalus menjadi power4 untuk impresi scroll yang mewah
    });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-200 py-12 px-6 md:px-16 border-t border-slate-900 overflow-hidden select-none">
      
      {/* Batas bar gradasi neon tipis di bagian paling atas footer */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60" />

      {/* Konten Utama */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">

        {/* Sisi Kiri: Jenama / Nama Singkat */}
        <div className="text-center md:text-left">
          <p className="font-mono text-xs tracking-widest text-indigo-400 uppercase">// Developed by</p>
          <p className="text-base font-bold text-slate-100 tracking-tight mt-1 font-poppins">M. Kahfi Achyarudin</p>
        </div>

        {/* Sisi Tengah: Navigasi Cepat */}
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium font-inter">
          {["home", "about", "skill", "projects", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-slate-400 hover:text-indigo-400 font-mono text-xs tracking-wider uppercase transition-colors duration-200 cursor-pointer"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Sisi Kanan: Ikon Sosial Media Medsos */}
        <div className="flex items-center gap-4">
          
          {/* LinkedIn */}
          <button
            onClick={() => window.open("https://www.linkedin.com/in/muhammad-kahfi-537941377", "_blank")}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 11v5" />
              <path d="M8 8v.01" />
              <path d="M12 16v-5" />
              <path d="M16 16v-3a2 2 0 1 0 -4 0" />
              <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
            </svg>
          </button>

          {/* Instagram */}
          <button
            onClick={() => window.open("https://www.instagram.com/sk3choo/", "_blank")}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300 cursor-pointer"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M16.5 7.5v.01" />
            </svg>
          </button>

          {/* WhatsApp */}
          <button
            onClick={() => window.open("https://wa.me/628999717898", "_blank")}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer"
            aria-label="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
          </button>
        </div>
      </div>

      {/* Garis Pemisah Dalam */}
      <div className="w-full h-[1px] bg-slate-900 my-8 max-w-6xl mx-auto" />

      {/* Baris Hak Cipta & Tombol Kembali Ke Atas */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
        <p>© {new Date().getFullYear()} M. Kahfi Achyarudin — All rights reserved.</p>
        
        <button 
          onClick={() => scrollToSection("home")}
          className="hover:text-slate-300 transition-colors duration-200 flex items-center gap-1 cursor-pointer"
        >
          Back to top <span className="text-indigo-400">↑</span>
        </button>
      </div>
    </footer>
  );
}