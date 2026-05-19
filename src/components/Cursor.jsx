import { useEffect, useRef } from "react";

export default function Cursor() {
  const innerRef = useRef(null);
  const outerRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let outerX = 0;
    let outerY = 0;
    let animationFrameId = null;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // INNER DOT: Langsung nempel di ujung kursor tanpa delay
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
      }
    };

    const animate = () => {
      // Interpolasi diperhalus (0.15) untuk memberikan efek seret (inertia) yang mewah
      outerX += (mouseX - outerX) * 0.15;
      outerY += (mouseY - outerY) * 0.15;

      // OUTER AURA: Mengikuti dengan efek lerp lambat
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerX - 24}px, ${outerY - 24}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Deteksi interaksi hover secara global agar kursor membesar saat menyentuh tombol/link
    const handleHoverStart = () => {
      if (outerRef.current) {
        outerRef.current.style.width = '64px';
        outerRef.current.style.height = '64px';
        outerRef.current.style.backgroundColor = 'rgba(139, 92, 246, 0.25)'; // Violet glow lebih terang
        outerRef.current.style.filter = 'blur(16px)';
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `scale(2) translate(${mouseX/2 - 1.5}px, ${mouseY/2 - 1.5}px)`;
        innerRef.current.style.backgroundColor = '#a5b4fc'; // Indigo terang
      }
    };

    const handleHoverEnd = () => {
      if (outerRef.current) {
        outerRef.current.style.width = '48px';
        outerRef.current.style.height = '48px';
        outerRef.current.style.backgroundColor = 'rgba(99, 102, 241, 0.15)'; // Kembali ke Indigo pudar
        outerRef.current.style.filter = 'blur(12px)';
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `scale(1) translate(${mouseX - 3}px, ${mouseY - 3}px)`;
        innerRef.current.style.backgroundColor = '#818cf8';
      }
    };

    // Pasang event listener ke window
    window.addEventListener("mousemove", moveCursor);
    animate();

    // Otomatis cari semua elemen interaktif di web kamu
    const attachHoverEvents = () => {
      const interactiveElements = document.querySelectorAll("button, a, input, textarea, [onClick]");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    // Jalankan pencarian elemen setelah DOM selesai me-render komponen
    const timeoutId = setTimeout(attachHoverEvents, 500);

    // CLEANUP: Mencegah lag dan kebocoran memori saat ganti halaman
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
      
      const interactiveElements = document.querySelectorAll("button, a, input, textarea, [onClick]");
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      {/* OUTER NEON AURA — Diubah jadi lingkaran glow transparan indigo padat */}
      <div
        ref={outerRef}
        className="
          fixed top-0 left-0
          w-12 h-12
          rounded-full
          bg-indigo-500/15
          blur-md
          pointer-events-none
          z-[9998]
          transition-[width,height,background-color,filter] duration-300 ease-out
        "
        style={{ willChange: "transform" }}
      />

      {/* INNER CORE DOT — Inti kursor ungu neon tajam */}
      <div
        ref={innerRef}
        className="
          fixed top-0 left-0
          w-1.5 h-1.5
          rounded-full
          bg-indigo-400
          pointer-events-none
          z-[9999]
          shadow-[0_0_8px_rgba(129,140,248,0.8)]
          transition-transform duration-100 ease-out
        "
        style={{ willChange: "transform" }}
      />
    </>
  );
}