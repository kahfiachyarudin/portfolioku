import Roti from '../assets/bread.webp';
import Quran from '../assets/albayan.webp';
import SkyCast from '../assets/skycast.webp';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Project(){
    useEffect(() => {
        const cardAbout = gsap.utils.toArray(".card-projek");
            gsap.fromTo(
            cardAbout,
            {
                clipPath: "inset(0 100% 0 0)", 
                opacity: 0,
            },
            {
                clipPath: "inset(0 0% 0 0)", 
                opacity: 1,
                duration: 1.5,
                stagger: 0.7,
                ease: "power3.out",
                delay: 0.3,
                scrollTrigger: {
                    trigger: ".card-projek",
                    start: "top 80%",
                },
            });
            const cards = gsap.utils.toArray(".project-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    gsap.to(card, {
      rotationY: rotateY,
      rotationX: rotateX,
      transformPerspective: 600,
      ease: "power2.out",
      duration: 0.3,
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  });
});

    // animasi button hover
    const buttonView = gsap.utils.toArray(".button-view");
    buttonView.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          scale: 1.1,
          rotation: gsap.utils.random(-10, 10),
          duration: 0.3,
          ease: "power2.out",
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });

    })
return (
  <section 
    id="projects" 
    className="max-w-6xl mx-auto py-24 px-6 md:px-16 text-slate-100 select-none"
  >
    {/* Header Section */}
    <div className="mb-14">
      <p className="text-sm font-medium tracking-widest text-indigo-400 uppercase font-mono">
        // My Creations
      </p>
      <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
        Recent Projects
      </h2>
    </div>

    {/* Grid Project - Responsif di semua device */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Projek 1: Bread Papa's */}
      <div className="border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-indigo-500/5 group project-card">
        <div className="h-48 bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-900 relative">
          {/* Overlay gradasi tipis di atas gambar */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50 z-10" />
          <img 
            src={Roti} 
            alt="Bread Papa's" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>  
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-indigo-300 transition-colors duration-200 font-poppins tracking-tight">
            Bread Papa's
          </h3>
          <p className="text-sm text-slate-400 font-inter leading-relaxed">
            A sleek, modern, and high-performance bakery landing page layout.
          </p>
          <button 
            onClick={() => window.open("https://bread-papas.vercel.app/", "_blank")} 
            className="mt-6 w-full px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-slate-200 border border-slate-800 bg-slate-950/60 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:border-transparent hover:text-white rounded-xl transition-all duration-300 shadow-md active:translate-y-0"
          >
            Launch Project
          </button>
        </div>
      </div>

      {/* Projek 2: Al-Bayan */}
      <div className="border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-violet-500/5 group project-card">
        <div className="h-48 bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-900 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50 z-10" />
          <img 
            src={Quran} 
            alt="Al-Bayan" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-violet-300 transition-colors duration-200 font-poppins tracking-tight">
            Al-Bayan
          </h3>
          <p className="text-sm text-slate-400 font-inter leading-relaxed">
            Digital Al-Quran web platform designed for clean readability and access.
          </p>
          <button 
            onClick={() => window.open("https://al-bayan-snowy.vercel.app/", "_blank")} 
            className="mt-6 w-full px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-slate-200 border border-slate-800 bg-slate-950/60 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:border-transparent hover:text-white rounded-xl transition-all duration-300 shadow-md active:translate-y-0"
          >
            Launch Project
          </button>
        </div>
      </div>

      {/* Projek 3: SkyCast */}
      <div className="border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-purple-500/5 group project-card">
        <div className="h-48 bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-900 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50 z-10" />
          <img 
            src={SkyCast} 
            alt="SkyCast" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-purple-300 transition-colors duration-200 font-poppins tracking-tight">
            SkyCast
          </h3>
          <p className="text-sm text-slate-400 font-inter leading-relaxed">
            Real-time weather application built using dynamic external API integration.
          </p>
          <button 
            onClick={() => window.open("https://skycast-murex.vercel.app/", "_blank")} 
            className="mt-6 w-full px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-slate-200 border border-slate-800 bg-slate-950/60 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:border-transparent hover:text-white rounded-xl transition-all duration-300 shadow-md active:translate-y-0"
          >
            Launch Project 
          </button>
        </div>
      </div>

    </div>
  </section>
);
};
export default Project;