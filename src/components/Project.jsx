import Roti from '../assets/bread.webp';
import DataBarang from '../assets/pendataan.webp';
import Slicing from '../assets/slicing.webp';
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
            // animasi card hover
            const cards = gsap.utils.toArray(".project-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Efek lebih kecil (±10 derajat)
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
    return(
       <div className="max-w-6xl mx-auto px-4 md:ml-40 py-20 cursor-default" id='projects'>
        <p className="text-2xl text-gray-600">Work</p>
        <h1 className="text-5xl font-extrabold bg-gradient-to-l from-secondary to-primary text-transparent bg-clip-text mt-2">Recent Project</h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-300 rounded-lg overflow-hidden project-card">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <img src={Roti} alt="" />
                </div>  
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">Bread Papa's</h2>
                    <p className="text-gray-600">Simple bakery website</p>
                    <button onClick={() => window.open("https://bread-papas.vercel.app/", "_blank")} className="mt-4 px-4 py-2 text-primary font-semibold border-2 border-primary rounded-md hover:bg-primary hover:text-white transition duration-300 hover:scale-105 button-view">View Project</button>
                </div>
            </div>
            <div className="border border-gray-300 rounded-lg overflow-hidden project-card">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <img src={DataBarang} alt="" />
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">Invento</h2>
                    <p className="text-gray-600">Simple website for recording goods</p>
                    <button onClick={() => window.open("https://invento-beta.vercel.app/", "_blank")} className="mt-4 px-4 py-2 text-primary font-semibold border-2 border-primary rounded-md hover:bg-primary hover:text-white transition duration-300 hover:scale-105 button-view">View Project</button>
                </div>
            </div>
            <div className="border border-gray-300 rounded-lg overflow-hidden hidden lg:block project-card">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <img src={Slicing} alt="" />
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">Slicing Projek</h2>
                    <p className="text-gray-600">Slicing project for practice</p>
                    <button onClick={() => window.open("https://firstslicing-tailwind.vercel.app/", "_blank")} className="mt-4 px-4 py-2 text-primary font-semibold border-2 border-primary rounded-md hover:bg-primary hover:text-white transition duration-300 hover:scale-105 button-view">View Project</button>
                </div>
            </div>
        </div>
       </div>
    )
};
export default Project;