import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 


  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#about",       
      start: "top top",    
      onEnter: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false),
    });

    return () => trigger.kill();
  }, []);

  // fungsi scroll halus
  const scrollToSection = (id) => {
    const offset = 80; 
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: offset },
      ease: "expo.inOut"
    });
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // class menu desktop (sudah pakai isVisible)
  const desktopMenuClasses = `fixed top-0 left-0 h-full bg-black shadow-md flex flex-col items-center py-3 z-50 transition-all duration-500 ease-in-out w-64 transform ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  } md:translate-x-0 md:w-40 md:flex ${
    isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  return (
    <>
      {/* Tombol menu mobile */}
      {isVisible && (
        <button 
          className="fixed top-4 left-4 z-[60] md:hidden py-2 px-4 text-white bg-black rounded transition-all duration-300 shadow-lg" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'} 
        </button>
      )}

      {/* Overlay mobile */}
      {isOpen && isVisible && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Kontainer utama menu */}
      <div className={`${desktopMenuClasses} menu-container`}>
        <div className="mb-10 mt-10 md:mt-0">
          <h1 className="text-2xl font-bold text-white cursor-default" onClick={() => scrollToSection("home") || handleLinkClick()}>MKA</h1>
        </div>

        <div className="mb-10">
          <ul className="text-white space-y-6 text-center">
            {["home", "about", "skill", "projects", "contact"].map((item) => (
              <li key={item} className="font-bold transition">
                <button
                  onClick={() => scrollToSection(item) || handleLinkClick()}
                  className="text-white transition-all hover:bg-gradient-to-r hover:from-[#B86ADF] hover:via-[#F76D71] hover:to-[#FFB347] hover:bg-clip-text hover:text-transparent"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto mb-5">
          <div className="text-white flex flex-row items-center gap-5 w-full justify-center">
            {/* Social icons */}
            <button onClick={() => window.open("https://www.linkedin.com/in/muhammad-kahfi-537941377", "_blank")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5"/><path d="M8 8v.01"/><path d="M12 16v-5"/><path d="M16 16v-3a2 2 0 1 0 -4 0"/><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"/></svg>
            </button>
            <button onClick={() => window.open("https://www.instagram.com/sk3choo/", "_blank")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M16.5 7.5v.01"/></svg>
            </button>
            <button onClick={() => window.open("https://wa.me/628999717898", "_blank")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/></svg>
            </button>
          </div>

          <div className="text-white text-xs text-center mt-3 px-2 cursor-default">
            <p>©2025 Muhammad Kahfi Achyarudin</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
