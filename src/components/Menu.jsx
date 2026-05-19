import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    // Navbar otomatis muncul setelah scroll melewati 20% section #about
    const trigger = ScrollTrigger.create({
      trigger: "#about",      
      start: "top 20%",    
      onEnter: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false),
    });

    return () => trigger.kill();
  }, []);

  // Fungsi scroll halus
  const scrollToSection = (id) => {
    const offset = 80; 
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: `#${id}`, offsetY: offset },
      ease: "power4.inOut"
    });
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* HEADER / NAVBAR CONTAINER */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 transition-all duration-500 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Kapsul Floating Glassmorphism */}
        <div className="max-w-5xl mx-auto bg-slate-950/70 backdrop-blur-xl border border-slate-900/80 rounded-2xl px-6 py-3.5 flex items-center justify-between shadow-2xl relative">
          
          {/* Logo / Brand */}
          <h1 
            className="text-lg font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 cursor-pointer font-poppins" 
            onClick={() => scrollToSection("home")}
          >
            MKA.
          </h1>

          {/* Menu Desktop (Horizontal) */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {["home", "about", "skill", "projects", "achievement", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-slate-400 hover:text-indigo-400 font-mono text-[11px] tracking-widest uppercase transition-colors duration-200 cursor-pointer"
                  >
                    {item === "achievement" ? "Achieve" : item}
                  </button>
                </li>
              ))}
            </ul>

            {/* Garis Pembatas Vertikal Kecil */}
            <div className="w-[1px] h-4 bg-slate-800" />

            {/* Medsos Sosmed Desktop */}
            <div className="flex items-center gap-3">
              <button 
                className="text-slate-500 hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
                onClick={() => window.open("https://www.linkedin.com/in/muhammad-kahfi-537941377", "_blank")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 1 0 -4 0M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"/></svg>
              </button>
              <button 
                className="text-slate-500 hover:text-violet-400 transition-colors duration-200 cursor-pointer"
                onClick={() => window.open("https://www.instagram.com/sk3choo/", "_blank")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M16.5 7.5v.01"/></svg>
              </button>
            </div>
          </nav>

          {/* Tombol Hamburger Menu (Mobile Only) */}
          <button 
            className="md:hidden w-9 h-9 flex items-center justify-center text-slate-300 bg-slate-900 border border-slate-800 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </header>

      {/* MENU MOBILE OVERLAY & DRAWER */}
      {/* Overlay Gelap Latar Belakang */}
      <div 
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${
          isOpen && isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Kotak Menu Dropdown Mobile */}
      <div 
        className={`fixed top-24 left-6 right-6 bg-slate-950/95 backdrop-blur-2xl border border-slate-900 rounded-2xl p-6 z-40 md:hidden flex flex-col gap-6 shadow-2xl transition-all duration-300 transform origin-top ${
          isOpen && isVisible ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-4 text-left">
          {["home", "about", "skill", "projects", "achievement", "contact"].map((item) => (
            <li key={item} className="border-b border-slate-900 pb-2 last:border-none last:pb-0">
              <button
                onClick={() => scrollToSection(item) || handleLinkClick()}
                className="text-slate-300 hover:text-indigo-400 font-mono text-xs tracking-widest uppercase transition-colors duration-200 w-full text-left py-1 cursor-pointer"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Medsos Mobile */}
        <div className="flex items-center gap-4 pt-2 border-t border-slate-900 justify-center">
          <button className="text-slate-400" onClick={() => window.open("https://www.linkedin.com/in/muhammad-kahfi-537941377", "_blank")}>LinkedIn</button>
          <button className="text-slate-400" onClick={() => window.open("https://www.instagram.com/sk3choo/", "_blank")}>Instagram</button>
        </div>
      </div>
    </>
  );
}

export default Menu;