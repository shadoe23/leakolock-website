"use client";

import { useInView } from "react-intersection-observer";

export default function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "8rem 0", background: "#000000" }}
    >
      {/* Full-width red accent bar at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #DC2626 30%, #DC2626 70%, transparent)" }}
      />

      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        style={{ opacity: 0.025 }}
      >
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(8rem, 20vw, 22rem)",
            letterSpacing: "0.05em",
            color: "#DC2626",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          LEAKOLOCK
        </span>
      </div>

      {/* Red glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(220,38,38,0.08) 0%, transparent 70%)" }}
      />

      <div ref={ref} className="container-brand relative z-10 text-center">
        <div
          className="flex items-center justify-center gap-3 mb-6"
          style={{
            opacity: inView ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          <div className="red-line" />
          <span
            className="text-xs tracking-[0.25em] text-red-brand"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            READY TO SEAL THE DEAL?
          </span>
          <div className="red-line" style={{ transform: "scaleX(-1)" }} />
        </div>

        <h2
          className="font-display text-white mb-6"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3rem, 9vw, 8rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.1s",
          }}
        >
          Stop the leaks.
          <br />
          <span style={{ color: "#DC2626" }}>Start sealing.</span>
        </h2>

        <p
          className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{
            color: "#777777",
            fontFamily: "var(--font-barlow)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.25s",
          }}
        >
          Get a quote for your fleet today. Same-day dispatch.
          Built on decades of hydraulic expertise.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.4s",
          }}
        >
          <a href="mailto:info@leakolock.com" className="btn-primary text-base">
            Get a Quote Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="mailto:info@leakolock.com"
            className="btn-outline flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email Us
          </a>
        </div>

        {/* Tagline */}
        <div
          className="mt-16 pt-8"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.04)",
            opacity: inView ? 0.4 : 0,
            transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.6s",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              letterSpacing: "0.3em",
              color: "#DC2626",
            }}
          >
            SEALING FAST FORWARD
          </span>
        </div>
      </div>

      {/* Bottom red accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #DC2626 30%, #DC2626 70%, transparent)" }}
      />
    </section>
  );
}
