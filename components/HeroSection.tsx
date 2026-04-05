"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Lightning particle canvas
function LightningCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Array<{
      x: number; y: number; vx: number; vy: number;
      life: number; maxLife: number; size: number; opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    function spawnParticle() {
      if (!canvas) return;
      const side = Math.random();
      let x, y;
      if (side < 0.5) {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
      } else {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
      }
      particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        life: 0,
        maxLife: 60 + Math.random() * 120,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.6 + 0.1,
      });
    }

    // Spawn initial particles
    for (let i = 0; i < 80; i++) spawnParticle();

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new particles
      if (Math.random() < 0.4) spawnParticle();

      // Update and draw
      particles = particles.filter(p => p.life < p.maxLife);

      for (const p of particles) {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        const progress = p.life / p.maxLife;
        const alpha = p.opacity * Math.sin(progress * Math.PI);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${alpha})`;
        ctx.fill();

        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        gradient.addColorStop(0, `rgba(220, 38, 38, ${alpha * 0.3})`);
        gradient.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Draw some connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.06;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(220, 38, 38, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    // Small delay before starting
    const timeout = setTimeout(() => {
      draw();
    }, 500);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);

    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Particle canvas */}
      <LightningCanvas />

      {/* Deep radial glow in center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(220,38,38,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #000000, transparent)" }}
      />

      {/* Parallax content */}
      <div
        className="relative z-20 flex flex-col items-center text-center px-6"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: Math.max(0, 1 - scrollY * 0.003),
          transition: "opacity 0.1s",
        }}
      >
        {/* Logo */}
        <div
          className="relative mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "scale(1) translateY(0)" : "scale(0.9) translateY(30px)",
            transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.4s",
          }}
        >
          <div
            className="relative"
            style={{
              width: "clamp(260px, 45vw, 520px)",
              height: "clamp(100px, 17vw, 200px)",
              filter: "drop-shadow(0 0 40px rgba(220,38,38,0.3))",
            }}
          >
            <Image
              src="/logo.jpeg"
              alt="LEAKOLOCK® - Sealing Fast Forward"
              fill
              className="object-contain"
              priority
              style={{ mixBlendMode: "screen" }}
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-white mb-4"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(1.8rem, 6vw, 5rem)",
            letterSpacing: "0.05em",
            lineHeight: 1,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.65s",
          }}
        >
          Precision Engineered.{" "}
          <span style={{ color: "#DC2626" }}>Zero Leaks.</span>
        </h1>

        {/* Sub */}
        <p
          className="text-base md:text-lg max-w-xl mb-12"
          style={{
            color: "#AAAAAA",
            fontFamily: "var(--font-barlow)",
            fontWeight: 400,
            lineHeight: 1.75,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.85s",
          }}
        >
          Premium hydraulic seal kits for excavators, engineered with
          decades of deep hydraulic expertise.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 1.05s",
          }}
        >
          <Link href="/products" className="btn-primary">
            Explore Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a href="mailto:info@leakolock.com" className="btn-outline">
            Get a Quote
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex items-center gap-8 mt-16 pt-8"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 1.2s",
          }}
        >
          {[
            { value: "30+", label: "Years" },
            { value: "50K+", label: "Kits Delivered" },
            { value: "15+", label: "Brands Supported" },
            { value: "100%", label: "Leak-Proof" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display text-red-brand"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs tracking-widest mt-1"
                style={{ color: "#666666", fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        style={{
          opacity: loaded ? 0.6 : 0,
          transition: "opacity 0.9s ease 1.5s",
          animation: loaded ? "bounce-scroll 2s ease-in-out infinite 2s" : "none",
        }}
      >
        <span
          className="text-xs tracking-[0.3em]"
          style={{ color: "#555555", fontFamily: "var(--font-bebas)" }}
        >
          SCROLL
        </span>
        <div
          className="w-px h-10 relative overflow-hidden"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          <div
            className="absolute top-0 left-0 w-full bg-red-brand"
            style={{
              height: "40%",
              animation: "scroll-line 1.6s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% { top: -40%; }
          100% { top: 140%; }
        }
        @keyframes bounce-scroll {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
