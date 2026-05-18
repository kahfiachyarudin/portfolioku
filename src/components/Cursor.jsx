import { useEffect, useRef } from "react";

export default function Cursor() {
  const innerRef = useRef(null);
  const outerRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let outerX = 0;
    let outerY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // INNER langsung ngikut
      if (innerRef.current) {
        innerRef.current.style.transform = `
          translate(${mouseX - 4}px, ${mouseY - 4}px)
        `;
      }
    };

    const animate = () => {
      // Smooth follow tanpa delay berlebihan
      outerX += (mouseX - outerX) * 0.18;
      outerY += (mouseY - outerY) * 0.18;

      if (outerRef.current) {
        outerRef.current.style.transform = `
          translate(${outerX - 20}px, ${outerY - 20}px)
        `;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* OUTER BLUR */}
      <div
        ref={outerRef}
        className="
          fixed top-0 left-0
          w-10 h-10
          rounded-full
          bg-blue-500/20
          blur-md
          pointer-events-none
          z-[9998]
        "
      />

      {/* INNER DOT */}
      <div
        ref={innerRef}
        className="
          fixed top-0 left-0
          w-2 h-2
          rounded-full
          bg-cyan-300
          pointer-events-none
          z-[9999]
        "
      />
    </>
  );
}