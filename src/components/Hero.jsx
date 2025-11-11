import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

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

  return (
    <section
      ref={containerRef}
      className="h-screen flex flex-col justify-center items-center text-center bg-[linear-gradient(90deg,#B86ADF_0%,#F76D71_50%,#FFB347_100%)] text-white px-6 w-full relative overflow-hidden"
    >
      <h1
        ref={headingRef}
        className="text-4xl md:text-6xl font-extrabold mb-4 cursor-default"
      >
        Hi, I’m Kahfi —{" "}
        <span ref={wordRef} className="inline-block">
          {word}
        </span>
        -End Developer
      </h1>

      <p
        ref={subheadingRef}
        className="text-lg md:text-xl text-white max-w-xl mb-8 cursor-default"
      >
        I create smooth, interactive web experiences with React, GSAP, and
        Tailwind CSS.
      </p>

      <div ref={buttonRef} className="flex gap-4">
        <a 
        className="px-6 py-3 bg-[#6A0DAD] hover:bg-[#5A0C96] rounded-full font-semibold text-white transition-all duration-300 shadow-md cursor-pointer" 
        onClick={() => scrollToSection("projects")}>
          View My Work
        </a>
        <a className="px-6 py-3 border border-white/80 hover:bg-white/10 rounded-full text-white transition-all duration-300 cursor-pointer"
        onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </a>
      </div>

      <div className="absolute bottom-6 animate-bounce">
        <button
          className="text-whit rounded-3xl bg-[#6A0DAD] hover:bg-[#5A0C96] p-2 font-semibold transition"
          onClick={() => scrollToSection("about")}
        >
          ↓ Scroll Down
        </button>
      </div>
    </section>
  );
}
