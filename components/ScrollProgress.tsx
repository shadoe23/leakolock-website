"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9997] bg-transparent">
      <div
        ref={barRef}
        className="h-full transition-none"
        style={{
          width: "0%",
          background: "linear-gradient(90deg, #DC2626, #FF4444)",
          boxShadow: "0 0 8px rgba(220, 38, 38, 0.8)",
        }}
      />
    </div>
  );
}
