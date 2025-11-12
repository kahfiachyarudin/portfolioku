import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function Footer() {

  const scrollToSection = (id) => {
    const offset = 80; 
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: offset },
      ease: "expo.inOut"
    });
  };

  return (
    <footer className="relative bg-[#1B0B2B] text-white py-10 px-6 md:px-12 md:ml-40 border-t border-white/10">
      {/* Gradient bar di atas footer */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#7B2CBF] via-[#F76D71] to-[#FFB347]" />

      {/* Konten utama */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Navigasi cepat */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {["home", "about", "skill", "projects", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="hover:text-[#FFB347] transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Ikon sosial */}
        <div className="flex items-center gap-5">
          {/* LinkedIn */}
          <button
            onClick={() => window.open("https://www.linkedin.com/in/muhammad-kahfi-537941377", "_blank")}
            className="hover:text-[#FFB347] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            className="hover:text-[#FFB347] transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M16.5 7.5v.01" />
            </svg>
          </button>

          {/* WhatsApp */}
          <button
            onClick={() => window.open("https://wa.me/628999717898", "_blank")}
            className="hover:text-[#FFB347] transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
          </button>
        </div>
      </div>

      {/* Garis pemisah */}
      <div className="w-full h-px bg-white/10 my-6" />

      {/* Copyright */}
      <p className="text-xs text-center text-white/70">
        © 2025 Muhammad Kahfi Achyarudin — All rights reserved.
      </p>
    </footer>
  );
}
