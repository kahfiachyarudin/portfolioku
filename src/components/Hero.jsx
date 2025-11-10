import Keren from '../assets/keren.jpg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Hero(){
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ".hero",
            { clipPath: "inset(0 100% 0 0)", opacity: 0 },
            {
                clipPath: "inset(0 0% 0 0)",
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.6,
            }
        );

      
        const gambar = imgRef.current; 

        if (gambar) { 
          
         
            const handleMouseEnter = () => {
                gsap.to(gambar, {
                    scale: 1.1,
                    rotation: gsap.utils.random(-10, 10),
                    duration: 0.3,
                    ease: "power2.out",
                });
            };

            const handleMouseLeave = () => {
                gsap.to(gambar, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.inOut",
                });
            };

         
            gambar.addEventListener("mouseenter", handleMouseEnter);
            gambar.addEventListener("mouseleave", handleMouseLeave);

           
            return () => {
                gambar.removeEventListener("mouseenter", handleMouseEnter);
                gambar.removeEventListener("mouseleave", handleMouseLeave);
            };
        }

    }, []);

    return(
        
        <div className="relative flex items-center justify-center py-10 hero md:ml-40" id='home'>
            <h1 className="absolute text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-extrabold text-gray-200 dark:text-gray-700 opacity-30 select-none text-center leading-none">Welcome</h1>
           
            <img 
                src={Keren} 
                alt="Keren" 
                className="w-[150px] md:w-[250px] lg:w-[350px] h-auto rounded-2xl shadow-xl relative z-10 opacity-50 hover:opacity-85 gambar"
                ref={imgRef} 
            />
        </div>

    );
}
export default Hero;