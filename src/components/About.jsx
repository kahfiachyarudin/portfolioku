import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const facts = [
  { k: "Grade", v: "High school" },
  { k: "Mathematics", v: "2nd Olympiad" },
  { k: "Based in", v: "Indonesia" },
  { k: "Interested", v: "GSAP + Logic" },
];

export function About() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        scrollTrigger: { 
          trigger: ref.current, 
          start: "top 75%" 
        },
        y: 40, 
        opacity: 0, 
        duration: 0.9, 
        stagger: 0.1, 
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="relative py-24 text-slate-100 select-none overflow-hidden">
      
      {/* Efek Ambient Glow samar di background belakang seni SVG */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 md:px-16">
        
        {/* Header Kecil */}
        <p className="about-reveal font-mono text-sm tracking-widest text-indigo-400 uppercase">
          01 — About Me
        </p>
        
        {/* Judul Besar dengan Teks Gradasi */}
        <h2 className="about-reveal mt-3 max-w-2xl text-4xl font-black sm:text-5xl tracking-tight leading-tight">
          A developer with a designer's eye for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
            detail
          </span>
          .
        </h2>

        {/* Pembagian Grid Konten */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Sisi Kiri: Artwork SVG Interaktif */}
          <div className="about-reveal relative w-full max-w-[400px] mx-auto lg:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm shadow-2xl group hover:border-indigo-500/30 transition-colors duration-300">
              <svg viewBox="0 0 400 400" className="h-full w-full">
                <defs>
                  {/* Gradasi warna disesuaikan menjadi Indigo ke Violet premium */}
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="120" fill="none" stroke="url(#g1)" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values="120;140;120" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="200" r="80" fill="url(#g1)" opacity="0.08" />
                <path d="M 100 200 Q 200 100 300 200 T 100 200" fill="none" stroke="url(#g1)" strokeWidth="1.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="25s" repeatCount="indefinite" />
                </path>
                <g fill="#818cf8" opacity="0.6">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const a = (i / 12) * Math.PI * 2;
                    return <circle key={i} cx={200 + Math.cos(a) * 160} cy={200 + Math.sin(a) * 160} r="2.5" />;
                  })}
                </g>
              </svg>
            </div>
          </div>

          {/* Sisi Kanan: Teks Deskripsi & Kartu Fakta */}
          <div className="about-reveal flex flex-col justify-center text-left">
            <p className="text-base md:text-lg leading-relaxed text-slate-400 font-normal">
              Hi, I'm <span className="text-slate-200 font-semibold">Muhammad Kahfi Achyarudin</span>. Even though I am currently in high school, my dedication to software engineering drives me to constantly learn and experiment. I love crafting interfaces where logic meets beautiful movement.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-400 font-normal">
              With a solid grip on mathematics and advanced logic, I ensure the code behind the screen is just as sharp and high-performing as the design in front of it.
            </p>

            {/* Grid Kartu Kecil Fakta Unik */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {facts.map((f) => (
                <div 
                  key={f.k} 
                  className="rounded-xl border border-slate-900 bg-slate-950/40 p-4 backdrop-blur-sm shadow-lg hover:border-slate-800 transition-colors duration-200"
                >
                  <p className="font-mono text-[10px] tracking-widest uppercase text-slate-500">
                    {f.k}
                  </p>
                  <p className="mt-1.5 text-lg font-bold text-slate-200 tracking-tight">
                    {f.v}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About