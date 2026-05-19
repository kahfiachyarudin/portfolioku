import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

function Skill() {
  const textRef = useRef(null);


  useEffect(() => {

    // animasi paragraf deskripsi
    const split = new SplitText(textRef.current, { type: "lines" });

    const animation = gsap.from(split.lines, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        toggleActions: "play ",
      },
      rotationX: -80,
      transformOrigin: "50% 50% -160px",
      opacity: 0,
      duration: 0.7,
      ease: "back.out(2)",
      stagger: 0.15,
    });

    // cleanup
    return () => {
      animation.revert();
      split.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

return (
  <section 
    id="skill" 
    className="max-w-6xl mx-auto py-24 px-6 md:px-16 text-slate-100 select-none"
  >
    {/* Header Section */}
    <div className="mb-14">
      <p className="text-sm font-medium tracking-widest text-indigo-400 uppercase font-mono">
        // My Expertise
      </p>
      <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
        Skills
      </h2>
    </div>

    {/* Konten Utama */}
    <div className="mt-12 flex flex-col lg:flex-row gap-12 items-center">
      
      {/* Kiri: Teks Deskripsi Besar & Catchy */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
        <p 
          className="text-slate-400 leading-relaxed text-xl md:text-3xl font-extrabold tracking-tight font-inter" 
          ref={textRef}
        >
          I create <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">fast, responsive, and modern</span> websites with the latest frontend technologies.
        </p>
        <p className="text-sm text-slate-500 mt-4 font-mono">
          Focused on smooth user experiences & clean architectures.
        </p>
      </div>

      {/* Kanan: Grid Kartu Skill Premium */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2 skill-cards">
        
        {/* Kartu HTML */}
        <div className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 group text-center backdrop-blur-sm skill-item">
          <div className="w-12 h-12 mb-4 mx-auto text-slate-400 group-hover:text-indigo-400 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-indigo-300 transition-colors">HTML</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Build structured and semantic web page layouts efficiently.
          </p>
        </div>

        {/* Kartu CSS */}
        <div className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl shadow-xl hover:shadow-violet-500/10 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 group text-center backdrop-blur-sm skill-item">
          <div className="w-12 h-12 mb-4 mx-auto text-slate-400 group-hover:text-violet-400 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-violet-300 transition-colors">CSS</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Design beautiful and responsive websites with clean styling.
          </p>
        </div>

        {/* Kartu JavaScript */}
        <div className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 group text-center backdrop-blur-sm skill-item">
          <div className="w-12 h-12 mb-4 mx-auto text-slate-400 group-hover:text-amber-400 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M7.5 8h3v8l-2 -1" />
              <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-amber-300 transition-colors">JavaScript</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Add interactivity and dynamic logic to enhance user experience.
          </p>
        </div>

        {/* Kartu Tailwind */}
        <div className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl shadow-xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 group text-center backdrop-blur-sm skill-item">
          <div className="w-12 h-12 mb-4 mx-auto text-slate-400 group-hover:text-sky-400 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-sky-300 transition-colors">Tailwind</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Speed up styling with flexible, responsive, and efficient classes.
          </p>
        </div>

      </div>
    </div>
  </section>
);}

export default Skill;
