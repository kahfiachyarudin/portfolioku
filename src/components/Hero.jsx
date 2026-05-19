import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const [word, setWord] = useState("Front"); // Awalnya "Front"
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);
  const wordRef = useRef(null);

  // Animasi pergantian "Front" <-> "Back"
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(wordRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        onComplete: () => {
          setWord((prev) => (prev === "Front" ? "Back" : "Front"));
          gsap.fromTo(
            wordRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3 }
          );
        },
      });
    }, 2000); // ganti tiap 2 detik

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const offset = -80;
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: offset },
      ease: "expo.inOut",
    });
  };

  const scrollToSectionkontak = (id) => {
  const element = document.querySelector(`#${id}`);

  if (!element) return;

  const offset = 0; 
  const targetY = element.offsetTop - offset;

  gsap.to(window, {
    duration: 1,
    scrollTo: targetY,
    ease: "expo.inOut",
  });
};


  return (
  <section
    ref={containerRef}
    className="relative min-h-screen flex flex-col justify-center items-center text-center bg-slate-950 text-slate-50 px-6 overflow-hidden select-none"
  >
    {/* Efek Ambient Light / Glow di Background agar terlihat premium */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-violet-500/10 blur-[100px] rounded-full pointer-events-none" />

    {/* Konten Utama */}
    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
      
      {/* Badge Kecil Terkini */}
      <div className="mb-6 px-3 py-1 text-xs font-medium tracking-wide text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm animate-pulse">
        Available for Freelance & Full-time
      </div>

      <h1
        ref={headingRef}
        className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight"
      >
        Hi, I’m Kahfi —{" "}
        <span ref={wordRef} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
          {word}
        </span>
        -End Developer
      </h1>

      <p
        ref={subheadingRef}
        className="text-base sm:text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed font-normal"
      >
        I craft sleek, high-performance, and interactive web experiences using{" "}
        <span className="text-slate-200 font-medium">React</span>,{" "}
        <span className="text-slate-200 font-medium">GSAP</span>, and{" "}
        <span className="text-slate-200 font-medium">Tailwind CSS</span>.
      </p>

      {/* Tombol Aksi */}
      <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button 
          className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 rounded-full font-semibold text-white transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide" 
          onClick={() => scrollToSection("projects")}
        >
          View My Work
        </button>
        <button 
          className="px-8 py-3.5 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-full font-medium text-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide"
          onClick={() => scrollToSection("contact")} // Memperbaiki nama fungsi typo sebelumnya
        >
          Contact Me
        </button>
      </div>
    </div>

    {/* Indikator Scroll Bawah */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <button
        className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-500 hover:text-indigo-400 transition-colors py-2 px-4 rounded-full border border-slate-900 bg-slate-950/50 backdrop-blur-sm group"
        onClick={() => scrollToSection("about")}
      >
        <span>Explore</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className="w-3.5 h-3.5 animate-bounce group-hover:text-indigo-400"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </button>
    </div>
  </section>
  );
}
