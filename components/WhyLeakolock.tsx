"use client";

import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "OEM-compatible precision",
    description:
      "Every seal kit is dimensioned to OEM specifications. Direct-fit replacement with no modifications needed — saving you time and labour costs.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "Zero-leak guarantee",
    description:
      "Each kit is batch-tested to withstand pressures up to 380 bar. If it leaks within the warranty period, we replace it. No questions asked.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Built for Indian conditions",
    description:
      "Heat, dust, monsoon mud — Indian construction sites are brutal. Our seal compounds are formulated for temperatures from -30°C to 120°C and extreme contamination exposure.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "15+ brand compatibility",
    description:
      "Komatsu, Hitachi, CAT, JCB, Volvo, Kobelco, Hyundai, Doosan, XCMG, Liugong, Sany, Zoomlion and more. One supplier for your entire fleet.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Genuine material grades",
    description:
      "Polyurethane, FKM (Viton), NBR, and PTFE — we specify the right compound for each application, not just the cheapest rubber available.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Fast delivery, Bangalore & beyond",
    description:
      "Same-day dispatch for orders placed before 3pm. Pan-India delivery within 48–72 hours. We know downtime costs money — we move fast.",
  },
];

export default function WhyLeakolock() {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-pad relative overflow-hidden" style={{ background: "#050505" }}>
      {/* Red glow right */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(220,38,38,0.04) 0%, transparent 70%)" }}
      />

      <div className="container-brand">
        {/* Header */}
        <div ref={headingRef} className="max-w-2xl mb-16">
          <div
            className="flex items-center gap-3 mb-5"
            style={{
              opacity: headingInView ? 1 : 0,
              transform: headingInView ? "translateX(0)" : "translateX(-20px)",
              transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <div className="red-line" />
            <span
              className="text-xs tracking-[0.25em] text-red-brand"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              WHY LEAKOLOCK
            </span>
          </div>
          <h2
            className="font-display text-white mb-5"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              opacity: headingInView ? 1 : 0,
              transform: headingInView ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.1s",
            }}
          >
            Engineering trust,
            <br />
            <span style={{ color: "#DC2626" }}>one seal at a time</span>
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{
              color: "#777777",
              fontFamily: "var(--font-barlow)",
              opacity: headingInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.25s",
            }}
          >
            Every LEAKOLOCK® kit is backed by decades of hands-on experience,
            rigorous testing, and a simple promise — zero leaks, zero downtime.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 }); // eslint-disable-line react-hooks/rules-of-hooks
            return (
              <div
                key={feature.title}
                ref={ref}
                className="group p-7 card-dark relative overflow-hidden"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${i * 80}ms`,
                }}
              >
                {/* Top corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at top right, rgba(220,38,38,0.08), transparent 70%)" }}
                />

                {/* Icon */}
                <div
                  className="flex items-center justify-center w-14 h-14 mb-5 relative"
                  style={{
                    background: "#0A0A0A",
                    border: "1px solid #1A1A1A",
                    color: "#DC2626",
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                    transition: "all 0.3s ease",
                  }}
                >
                  {feature.icon}
                </div>

                <h3
                  className="text-white mb-3 group-hover:text-red-brand transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    lineHeight: 1.4,
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#666666", fontFamily: "var(--font-barlow)" }}
                >
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "linear-gradient(90deg, #DC2626, transparent)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
