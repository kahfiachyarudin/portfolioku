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
    <div className="max-w-6xl mx-auto py-20 md:ml-40 cursor-default px-6 md:px-16" id="skill">
      <div>
        <p className="text-2xl text-gray-600">My</p>
        <h1 className="text-5xl font-extrabold bg-gradient-to-l from-secondary to-primary text-transparent bg-clip-text mt-2">
          Skills
        </h1>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2  justify-center items-center text-center flex flex-col">
          <p className="text-gray-700 leading-relaxed text-lg md:text-3xl font-bold font-inter" ref={textRef}>
            I create fast, responsive, and modern websites with HTML, CSS, JavaScript, React, and Tailwind CSS.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-1/2 skill-cards h-full ">
          <div className="p-6 bg-white/80 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 hover:scale-110 skill-item cursor-default text-center">
            <p className="w-12 h-12 mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
              >
                <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
              </svg>
            </p>
            <h1 className="text-2xl font-bold mb-2 ">HTML</h1>
            <p className="text-gray-600 font-inter">
              Build structured and semantic web page layouts efficiently.
            </p>
          </div>

          <div className="p-6 bg-white/80 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 hover:scale-110 skill-item cursor-default text-center">
            <p className="w-12 h-12 mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
              >
                <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
              </svg>
            </p>
            <h1 className="text-2xl font-bold mb-2">CSS</h1>
            <p className="text-gray-600 font-inter">
              Design beautiful and responsive websites with clean styling.
            </p>
          </div>

          <div className="p-6 bg-white/80 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 hover:scale-110 skill-item cursor-default text-center">
            <p className="w-12 h-12 mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
              >
                <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                <path d="M7.5 8h3v8l-2 -1" />
                <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
              </svg>
            </p>
            <h1 className="text-2xl font-bold mb-2">JavaScript</h1>
            <p className="text-gray-600 font-inter">
              Add interactivity and dynamic logic to enhance user experience.
            </p>
          </div>

          <div className="p-6 bg-white/80 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 hover:scale-110 skill-item cursor-default text-center">
            <p className="w-12 h-12 mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
              >
                <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
              </svg>
            </p>
            <h1 className="text-2xl font-bold mb-2">Tailwind</h1>
            <p className="text-gray-600">
              Speed up styling with flexible, responsive, and efficient classes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
