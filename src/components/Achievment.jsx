import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Achievement() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    // Animasi Header (Subtitle & Judul)
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".achieve-header"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animasi Kartu saat di-scroll masuk layar
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl mx-auto px-6 md:px-16 py-24 text-slate-100 select-none relative"
      id="achievement"
    >
      {/* Efek Cahaya Ambient di Background */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <div className="mb-14 text-left">
        <p className="achieve-header font-mono text-sm tracking-widest text-amber-400 uppercase">
          // Milestones
        </p>
        <h2 className="achieve-header text-4xl md:text-5xl font-black tracking-tight mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-indigo-400">
          Achievements
        </h2>
      </div>

      {/* Grid Kartu Achievement */}
      <div 
        ref={gridRef} 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left"
      >
        
        {/* Kartu 1: Olimpiade Matematika */}
        <div className="p-6 bg-slate-900/40 border border-amber-500/20 rounded-2xl shadow-xl hover:shadow-amber-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 group backdrop-blur-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2" />
                </svg>
                National Award
              </span>
              <span className="font-mono text-xs font-semibold text-slate-500 tracking-wider">2020 & 2021</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-poppins text-slate-100 group-hover:text-amber-300 transition-colors duration-200 tracking-tight">
              2nd Place National Mathematics Olympiad
            </h3>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed font-inter">
              Achieved second place in a national mathematics olympiad through strong analytical thinking, advanced logic, and complex problem-solving abilities.
            </p>
          </div>
        </div>

        {/* Kartu 2: Frontend Journey */}
        <div className="p-6 bg-slate-900/40 border border-slate-900 rounded-2xl shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 group backdrop-blur-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 8l-4 4l4 4" />
                  <path d="M17 8l4 4l-4 4" />
                  <path d="M14 4l-4 16" />
                </svg>
                Engineering
              </span>
              <span className="font-mono text-xs font-semibold text-slate-500 tracking-wider">2024 - Present</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-poppins text-slate-100 group-hover:text-indigo-300 transition-colors duration-200 tracking-tight">
              Frontend Development Journey
            </h3>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed font-inter">
              Built several responsive web projects using React, Tailwind CSS, HTML, CSS, and JavaScript while continuously improving UI design and component structure.
            </p>
          </div>
        </div>

        {/* Kartu 3: Git & GitHub */}
        <div className="p-6 bg-slate-900/40 border border-slate-900 rounded-2xl shadow-xl hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 group backdrop-blur-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M11 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12 15v-6" />
                  <path d="M15 11l-2 -2" />
                  <path d="M11 7l-1.9 -1.9" />
                  <path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0" />
                </svg>
                Git Workflow
              </span>
              <span className="font-mono text-xs font-semibold text-slate-500 tracking-wider">2026</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-poppins text-slate-100 group-hover:text-violet-300 transition-colors duration-200 tracking-tight">
              Git & GitHub Workflow
            </h3>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed font-inter">
              Learned collaboration workflows including branching, merging, rebasing, conflict resolution, and version control management.
            </p>
          </div>
        </div>

        {/* Kartu 4: Disciplined Student */}
        <div className="p-6 bg-slate-900/40 border border-slate-900 rounded-2xl shadow-xl hover:shadow-orange-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 group backdrop-blur-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider font-mono text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/xl" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 4v3m-4 -3v6m8 -6v6" />
                  <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5l-3 -1.5" />
                </svg>
                Soft Skill
              </span>
              <span className="font-mono text-xs font-semibold text-slate-500 tracking-wider">2025</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-poppins text-slate-100 group-hover:text-orange-300 transition-colors duration-200 tracking-tight">
              Most Disciplined Student Award
            </h3>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed font-inter">
              Recognized for exceptional time management, consistent punctuality, and steadfast commitment to academic excellence and school regulations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Achievement;