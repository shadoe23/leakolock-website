"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const followerPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth < 1024) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onEnter = () => setIsVisible(true);
    const onLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    // Hover detection for interactive elements
    const onLinkEnter = () => setIsHovering(true);
    const onLinkLeave = () => setIsHovering(false);

    const links = document.querySelectorAll("a, button, [data-cursor-hover]");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onLinkEnter);
      el.addEventListener("mouseleave", onLinkLeave);
    });

    // Smooth follower animation
    function animateCursor() {
      const cursor = cursorRef.current;
      const follower = followerRef.current;
      if (!cursor || !follower) return;

      cursor.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px)`;

      followerPosRef.current.x += (posRef.current.x - followerPosRef.current.x) * 0.12;
      followerPosRef.current.y += (posRef.current.y - followerPosRef.current.y) * 0.12;
      follower.style.transform = `translate(${followerPosRef.current.x - 16}px, ${followerPosRef.current.y - 16}px)`;

      rafRef.current = requestAnimationFrame(animateCursor);
    }

    rafRef.current = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onLinkEnter);
        el.removeEventListener("mouseleave", onLinkLeave);
      });
      cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  return (
    <>
      {/* Dot cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] transition-opacity duration-300 hidden lg:block"
        style={{
          background: "#DC2626",
          opacity: isVisible ? 1 : 0,
          boxShadow: "0 0 8px rgba(220, 38, 38, 0.8)",
          willChange: "transform",
        }}
      />
      {/* Follower ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] transition-all duration-100 hidden lg:block"
        style={{
          border: `1px solid rgba(220, 38, 38, ${isHovering ? 0.8 : 0.4})`,
          background: isHovering ? "rgba(220, 38, 38, 0.1)" : "transparent",
          opacity: isVisible ? 1 : 0,
          transform: isHovering ? "scale(1.5)" : "scale(1)",
          boxShadow: isHovering ? "0 0 20px rgba(220, 38, 38, 0.3)" : "none",
          willChange: "transform",
        }}
      />
    </>
  );
}
