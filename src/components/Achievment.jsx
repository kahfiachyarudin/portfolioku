import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Achievement() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl mx-auto px-4 lg:px-8 py-20 md:ml-40 cursor-default"
      id="achievement"
    >
      <p className="text-2xl text-gray-600 font-inter">
        Some things I've achieved...
      </p>

      <h1 className="text-5xl font-extrabold bg-gradient-to-l from-[#FBBF24] to-[#7C3AED] text-transparent bg-clip-text mt-2">
        Achievement
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        
        <div className="p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-primary font-poppins">
            2nd Place National Mathematics Olympiad
          </h2>

          <p className="text-gray-500 mt-3 leading-relaxed font-inter">
            Achieved second place in a national mathematics olympiad through
            strong analytical thinking, logic, and problem-solving abilities.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-primary font-poppins">
            Frontend Development Journey
          </h2>

          <p className="text-gray-500 mt-3 leading-relaxed font-inter">
            Built several responsive web projects using React, Tailwind CSS,
            HTML, CSS, and JavaScript while continuously improving UI design
            and component structure.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-primary font-poppins">
            Git & GitHub Workflow
          </h2>

          <p className="text-gray-500 mt-3 leading-relaxed font-inter">
            Learned collaboration workflows including branching, merging,
            rebasing, conflict resolution, and version control management.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-primary font-poppins">
            Most Disciplined Student Award
          </h2>
          <p className="text-gray-500 mt-3 leading-relaxed font-inter">
            Recognized for exceptional time management, consistent punctuality, and 
            steadfast commitment to academic excellence and school regulations.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Achievement;