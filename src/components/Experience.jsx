import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Experience() {
  const expRefJudul = useRef(null);
  const expRefDeskripsi = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    // Animasi munculnya section utama
    gsap.fromTo(
      ".section-experience",
      { clipPath: "inset(0 100% 0 0)", opacity: 0 },
      {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: ".section-experience",
          start: "top 80%",
        },
      }
    );

    // Animasi teks judul (acak/rotate)
    const splitExp = new SplitText(expRefJudul.current, { type: "words" });
    gsap.from(splitExp.words, {
      scrollTrigger: { trigger: expRefJudul.current, start: "top 70%" },
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 0.7,
      ease: "back",
      stagger: 0.15,
      delay: 0.5,
    });

    // Animasi teks deskripsi (blur + scale)
    const splitDesc = new SplitText(expRefDeskripsi.current, { type: "words" });
    gsap.from(splitDesc.words, {
      scrollTrigger: { trigger: expRefDeskripsi.current, start: "top 70%" },
      scale: 0.8,
      opacity: 0,
      filter: "blur(6px)",
      duration: 0.1,
      ease: "power2.out",
      stagger: 0.1,
    });

    // AMINASI TIMELINE LINE: Garis memanjang kebawah saat di-scroll (Hanya Desktop)
    if (window.innerWidth >= 768) {
      gsap.fromTo(
        ".timeline-line-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );

      // Animasi titik-titik timeline menyala saat dilewati scroll
      gsap.utils.toArray(".timeline-dot").forEach((dot) => {
        gsap.to(dot, {
          backgroundColor: "#818cf8",
          borderColor: "#a78bfa",
          boxShadow: "0 0 15px #7c3aed",
          scrollTrigger: {
            trigger: dot,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }

    // Efek 3D Tilt pada Kartu
    if (window.innerWidth >= 768) {
      const cards = gsap.utils.toArray(".experience-card");
      cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const rotateY = ((x / rect.width) - 0.5) * 16; // Diperhalus sedikit ke 16
          const rotateX = ((y / rect.height) - 0.5) * -16;

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
            duration: 0.6,
            ease: "power2.out",
          });
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      splitExp.revert();
      splitDesc.revert();
    };
  }, []);

  return (
    <section 
      id="experience" 
      className="max-w-6xl mx-auto py-24 px-6 md:px-16 text-slate-100 select-none"
    >
      <div className="w-full rounded-3xl p-8 lg:p-16 border border-slate-800/80 bg-slate-900/30 backdrop-blur-md flex flex-col lg:flex-row gap-12 lg:gap-16 items-start section-experience relative overflow-hidden shadow-2xl">
        
        {/* Efek Ambient Glow */}
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-violet-500/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Sisi Kiri: Judul dan Deskripsi */}
        <div className="w-full lg:w-2/5 flex flex-col text-left relative z-10 lg:sticky lg:top-10">
          <p className="text-sm font-medium tracking-widest text-indigo-400 uppercase font-mono">
            // My Timeline
          </p>
          <h2 
            className="text-4xl md:text-5xl font-black tracking-tight mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400" 
            ref={expRefJudul}
          >
            My Experience
          </h2>
          <p className="text-slate-400 leading-relaxed text-base md:text-lg font-normal mt-6" ref={expRefDeskripsi}>
  My coding journey is driven by continuous learning and a passion for engineering. 
  Over the years, I have progressed from mastering core web fundamentals to building complex, 
  highly interactive full-stack applications with modern frameworks.
</p>
        </div>

        {/* Sisi Kanan (Desktop): Timeline Vertikal Berjalan */}
        <div 
          ref={timelineRef} 
          className="hidden md:flex flex-col w-full lg:w-3/5 relative pl-10 text-left"
        >
          {/* Garis Dasar Timeline (Muted) */}
          <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-slate-800" />
          
          {/* Garis Progress Timeline (Menyala & Tumbuh Berdasarkan Scroll) */}
          <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-indigo-500 to-purple-500 origin-top scale-y-0 timeline-line-progress" />

          {/* Wrapper Iterasi Card */}
          <div className="space-y-12">
            {cardList.map((card, index) => (
              <div key={index} className="relative group">
                {/* Titik Sambungan Timeline */}
                <div className="absolute -left-[35px] top-6 w-6 h-6 rounded-full border-4 border-slate-950 bg-slate-800 z-20 transition-all duration-300 timeline-dot" />
                
                {/* Komponen Kartu Pengalaman */}
                <ExperienceCard {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* Sisi Kanan (Mobile): Tetap Horizontal Scroll agar Hemat Ruang Layar HP */}
        <div className="flex md:hidden w-full overflow-x-auto space-x-4 snap-x snap-mandatory pb-4 scrollbar-none relative z-10">
          {cardList.map((card, index) => (
            <div key={index} className="snap-center min-w-[90%] sm:min-w-[80%]">
              <ExperienceCard {...card} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const cardList = [
  {
  year: "2016 – 2022",
  title: "Early Technology Exploration",
  desc: "Started exploring technology fundamentals during elementary school through Scratch programming, Microsoft Office tools, and basic computer understanding."
},
{
  year: "2022 – 2025",
  title: "Logic & Web Development Foundation",
  desc: "Learned programming logic, UI/UX design with Figma, and built responsive websites using HTML, CSS, and JavaScript."
},
{
  year: "2025 – Present",
  title: "Modern Frontend & Backend Journey",
  desc: "Focused on modern frontend engineering with React, Tailwind CSS, and interactive animations using GSAP, while currently exploring backend development and application architecture."
},
];

function ExperienceCard({ year, title, desc }) {
  return (
    <div className="experience-card flex flex-col p-6 bg-slate-950/40 border border-slate-900 hover:border-indigo-500/30 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <span className="text-xs font-bold tracking-wider font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md w-fit mb-4">
        {year}
      </span>
      <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors duration-200 font-poppins tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-slate-400 mt-2 leading-relaxed font-inter">
        {desc}
      </p>
    </div>
  );
}

export default Experience;