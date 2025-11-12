import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

function Experience() {
  const expRefJudul = useRef(null);
  const expRefDeskripsi = useRef(null);

  useEffect(() => {
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

    const splitDesc = new SplitText(expRefDeskripsi.current, { type: "words" });
    gsap.from(splitDesc.words, {
      scrollTrigger: { trigger: expRefDeskripsi.current, start: "top 70%" },
      scale: 0.8,
      opacity: 0,
      filter: "blur(6px)",
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.8,
    });

    // Tilt hanya aktif di desktop
    if (window.innerWidth >= 768) {
      const cards = gsap.utils.toArray(".experience-card");
      cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const rotateY = ((x / rect.width) - 0.5) * 20;
          const rotateX = ((y / rect.height) - 0.5) * -20;

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
    <div className="min-h-screen flex items-center justify-center p-4 mt-10 md:ml-40 px-6 md:px-16">
      <div className="w-full max-w-6xl mx-auto rounded-3xl p-10 lg:p-16 shadow-2xl bg-brand-gradientaaa md:bg-brand-gradient flex flex-col md:flex-row text-white section-experience">
        <div className="mb-12 md:w-1/2 text-center md:text-left">
          <p className="mb-2 cursor-default">Experience</p>
          <h1 className="text-4xl font-bold cursor-default" ref={expRefJudul}>My Experience</h1>
          <p className="mt-2 cursor-default" ref={expRefDeskripsi}>
            Hi, I'm <span className="font-semibold">Muhammad Kahfi Achyarudin</span>, 
            a student who loves web development — especially frontend and backend. 
            I’ve been learning to build responsive and creative websites using React, Tailwind CSS, and Node.js.
          </p>
          <button className="px-6 py-2 mt-4 text-white font-semibold border-2 border-secondary hover:bg-secondary hover:text-white rounded-md transition duration-300 button-cv">
            Download My CV
          </button>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block md:w-1/2 space-y-8 cursor-default text-center md:text-left">
          {cardList.map((card, index) => (
            <ExperienceCard key={index} {...card} />
          ))}
        </div>

        {/* Mobile slider */}
        <div className="flex md:hidden overflow-x-auto space-x-4 snap-x snap-mandatory pb-4 scrollbar-hide">
          {cardList.map((card, index) => (
            <div key={index} className="snap-center min-w-[85%]">
              <ExperienceCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Card reusable
const cardList = [
  {
    year: "2025 – Now",
    title: "Frontend Developer Journey",
    desc: "Exploring tools like React, Tailwind CSS, and GSAP to create interactive websites."
  },
  {
    year: "2024 – 2025",
    title: "Understanding the basics of frontend",
    desc: "Learned HTML and CSS to design clean and structured web pages."
  },
  {
    year: "2023 – 2024",
    title: "My first step into coding",
    desc: "Discovered my passion for coding and built my first simple website."
  },
];

function ExperienceCard({ year, title, desc }) {
  return (
    <div className="experience-card flex flex-col border-b border-gray-300 pb-4 bg-white/10 rounded-xl p-6 transition-transform duration-300 ease-out">
      <p className="text-sm text-gray-200">{year}</p>
      <h1 className="text-lg font-semibold text-white">{title}</h1>
      <p className="text-sm text-gray-200 mt-2">{desc}</p>
    </div>
  );
}

export default Experience;
