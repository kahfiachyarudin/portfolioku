import gambar from '../assets/gktw.JPG';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

function About() {
  const skillRef = useRef(null);
  const aboutRef = useRef(null);
  const expRef = useRef(null);

  useEffect(() => {
    // animasi untuk bagian about
    const splitAbout = new SplitText(aboutRef.current, { type: "words" });
const aboutAnimation = gsap.from(splitAbout.words, {
  scrollTrigger: {
    trigger: aboutRef.current,
    start: "top 90%",
    toggleActions: "play",
  },
  y: -30,
  opacity: 0,
  rotation: "random(-30, 30)",
  duration: 0.25,
  ease: "power2.out",
  stagger: 0.05,
});


    // animasi untuk bagian nama / section awal
    const aboutSection = gsap.utils.toArray(".about-section");
    gsap.fromTo(
      aboutSection,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
        }
      }
    );

    // animasi untuk card about
    const cardAbout = gsap.utils.toArray(".card-about");
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
        stagger: 0.3,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: ".card-about",
          start: "top 80%",
        },
      }
    );

    // animasi untuk div contact details & about me
    const divDetail = gsap.utils.toArray(".div-2");
    gsap.fromTo(
      divDetail,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".div-2",
          start: "top 0%",
        }
      }
    );

    // animasi untuk skill dan experience
    const splitSkill = new SplitText(skillRef.current, { type: "words" });
    const skillAnimation = gsap.from(splitSkill.words, {
      scrollTrigger: {
        trigger: skillRef.current,
        start: "top 80%",
        toggleActions: "play",
      },
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 0.7,
      ease: "back",
      stagger: 0.15,
    });

    const splitExp = new SplitText(expRef.current, { type: "chars" });
    const expAnimation = gsap.from(splitExp.chars, {
      scrollTrigger: {
        trigger: skillRef.current,
        start: "top 80%",
        toggleActions: "play",
      },
      x: 150,
      opacity: 0,
      duration: 1.5,
      ease: "power4",
      stagger: 0.04,
      delay: 0.3,
    });

    // cleanup animasi
    return () => {
      aboutAnimation.revert();
      splitAbout.revert();
      aboutAnimation.kill();
      skillAnimation.revert();
      splitSkill.revert();
      skillAnimation.kill();
      expAnimation.revert();
      splitExp.revert();
      expAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-20 md:ml-40 cursor-default" id="about">
      <p className="text-2xl text-gray-600">Nice to meet you...</p>
      <h1 className="text-5xl font-extrabold bg-gradient-to-l from-secondary to-primary text-transparent bg-clip-text mt-2">
        About Me
      </h1>

      {/* Bagian utama: card kiri + detail kanan */}
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-16 mt-16 about-section">
        
        {/* Kiri: Foto dan nama */}
        <div className="w-full lg:w-1/3 flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow-lg card-about">
          <img
            src={gambar}
            alt="Profile"
            className="w-48 h-48 object-cover rounded-full mb-4 border-4 border-indigo-500"
          />
          <h1 className="text-2xl font-bold text-indigo-700 text-center">
            Muhammad Kahfi Achyarudin
          </h1>
          <p className="text-lg text-gray-500 mt-1 text-center">
            Best Candidate for Professional Backend
          </p>
        </div>

        {/* Kanan: Contact details, about me, skill & exp */}
        <div className="w-full lg:w-2/3 space-y-12 div-2">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-indigo-600 w-full">
              Contact Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-phone">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                <p className="text-lg text-gray-700">+62 851 5515 515</p>
              </div>

              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-mail">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
                <p className="text-lg text-gray-700">
                  kahfi1211@student.abudzar.sch.id
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-map-pin">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                <p className="text-lg text-gray-700">Alamat</p>
              </div>

              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-book">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <path d="M3 6l0 13" />
                  <path d="M12 6l0 13" />
                  <path d="M21 6l0 13" />
                </svg>
                <p className="text-lg text-gray-700">
                  Pondok Tahfizh Plus Abu Dzar
                </p>
              </div>
            </div>
          </div>

          {/* About Me */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-indigo-600">
              About Me
            </h2>
            <p className="text-gray-600 leading-relaxed" ref={aboutRef}>
              Hello, my name is Muhammad Kahfi Achyarudin. I'm a (potential)
              best frontend and backend developer. I'm still in high school, but
              I'm very passionate and dedicated to my learning journey. I have
              above-average abilities in general subjects (especially
              mathematics and logic).
            </p>
          </div>

          {/* Experience & Skill */}
          <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-10 sm:space-y-0">
            <div className="sm:w-1/2">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-indigo-600">
                Experience
              </h2>
              <p className="text-gray-500" ref={expRef}>
                2nd Place in the National Mathematics Olympiad
              </p>
            </div>
            <div className="sm:w-1/2">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-indigo-600">
                Skill
              </h2>
              <p className="text-gray-500" ref={skillRef}>
                HTML, CSS, JS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
