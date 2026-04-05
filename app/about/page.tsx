"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const milestones = [
  {
    year: "2008",
    title: "Hydraulic seal expertise built",
    body: "Spent years building technical expertise in excavator hydraulic sealing systems. Developed deep knowledge of what makes seal kits fail under demanding conditions.",
  },
  {
    year: "2012",
    title: "Seal kit specialisation",
    body: "Shifted focus exclusively to hydraulic seal kit development. Started engineering compound-specific kits matched to each machine's operating demands.",
  },
  {
    year: "2016",
    title: "Expanded brand coverage",
    body: "Grew to support 10+ excavator brands including Komatsu, Hitachi, JCB, CAT, and Volvo.",
  },
  {
    year: "2020",
    title: "LEAKOLOCK® brand launched",
    body: "After years of understanding exactly what construction teams need, LEAKOLOCK® was created - a premium seal kit brand engineered for zero-leak performance in the field.",
  },
  {
    year: "2022",
    title: "Direct manufacturing partnerships",
    body: "Established direct relationships with premium seal manufacturers. Tighter quality control from material sourcing through to final kit assembly.",
  },
  {
    year: "2024",
    title: "15+ brands supported",
    body: "LEAKOLOCK® now supports 15+ excavator brands with same-day dispatch and fast delivery to construction sites worldwide.",
  },
];

const values = [
  {
    title: "Precision over compromise",
    body: "We never cut corners on material specifications. Every seal is the right compound for its application, not just the cheapest option that fits.",
  },
  {
    title: "Decades of field knowledge",
    body: "We have seen what seal failures look like under extreme conditions. That experience is baked into every kit specification we produce.",
  },
  {
    title: "Speed as a feature",
    body: "'Sealing fast forward' isn't just a tagline. Same-day dispatch, fast delivery, and zero-fuss ordering are core to what we offer.",
  },
  {
    title: "The LEAKOLOCK® guarantee",
    body: "Behind every LEAKOLOCK® kit is a commitment to zero-leak performance. Built to the same tolerances as OEM components or better.",
  },
];

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen" style={{ background: "#000000", paddingTop: "5rem" }}>
      {/* Hero */}
      <div
        ref={heroRef}
        className="relative py-20 md:py-32 overflow-hidden"
        style={{ background: "#000000" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(220,38,38,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Large watermark text */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden"
          style={{ opacity: 0.025, whiteSpace: "nowrap" }}
        >
          <span
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(6rem, 20vw, 18rem)",
              color: "#DC2626",
              letterSpacing: "0.1em",
            }}
          >
            LEAKOLOCK
          </span>
        </div>

        <div className="container-brand relative z-10">
          <div
            className="flex items-center gap-3 mb-6"
            style={{
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? "translateX(0)" : "translateX(-20px)",
              transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <div className="red-line" />
            <span
              className="text-xs tracking-[0.25em] text-red-brand"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              OUR STORY
            </span>
          </div>
          <h1
            className="font-display text-white mb-6"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 9vw, 9rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.1s",
            }}
          >
            Built on deep
            <br />
            <span style={{ color: "#DC2626" }}>hydraulic</span>
            <br />
            expertise
          </h1>
          <p
            className="text-base md:text-lg max-w-2xl leading-relaxed"
            style={{
              color: "#A0A0A0",
              fontFamily: "var(--font-barlow)",
              opacity: heroInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.3s",
            }}
          >
            LEAKOLOCK® is a precision-engineered hydraulic seal kit brand built for construction
            professionals who can&apos;t afford downtime.
            We don&apos;t just sell seal kits. We eliminate downtime.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="bolt-divider" />

      {/* Expertise section */}
      <section className="section-pad" style={{ background: "#000000" }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {(() => {
                const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); // eslint-disable-line react-hooks/rules-of-hooks
                return (
                  <div ref={ref}>
                    <div
                      className="flex items-center gap-3 mb-5"
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
                        OUR EXPERTISE
                      </span>
                    </div>
                    <h2
                      className="font-display text-white mb-6"
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "clamp(2rem, 5vw, 4rem)",
                        lineHeight: 0.95,
                        letterSpacing: "0.02em",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.1s",
                      }}
                    >
                      Precision-engineered
                      <br />
                      <span style={{ color: "#DC2626" }}>for zero-leak performance</span>
                    </h2>
                    <div
                      className="space-y-4"
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(20px)",
                        transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.25s",
                      }}
                    >
                      <p className="text-base leading-relaxed" style={{ color: "#888888", fontFamily: "var(--font-barlow)" }}>
                        LEAKOLOCK® was built on deep technical knowledge of how hydraulic seal systems fail. We studied every failure mode
                        - contamination, pressure cycling, thermal extremes - and engineered kits that address all of them.
                      </p>
                      <p className="text-base leading-relaxed" style={{ color: "#888888", fontFamily: "var(--font-barlow)" }}>
                        We built expertise in what seal failures look like in the field: heat, dust, extreme pressure, and heavy cycles.
                        That knowledge is what LEAKOLOCK® is built on.
                      </p>
                      <p className="text-base leading-relaxed" style={{ color: "#888888", fontFamily: "var(--font-barlow)" }}>
                        Every kit carries the weight of years of field feedback and rigorous testing.
                        When a LEAKOLOCK® kit goes into a machine, it stays there, leak-free.
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Stats panel */}
            <div>
              {(() => {
                const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); // eslint-disable-line react-hooks/rules-of-hooks
                return (
                  <div
                    ref={ref}
                    className="relative p-8 md:p-10"
                    style={{
                      background: "#0A0A0A",
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(30px)",
                      transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.2s",
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{ background: "linear-gradient(90deg, #DC2626, transparent)" }}
                    />
                    <div className="relative w-[160px] h-[60px] mb-8">
                      <Image
                        src="/logo.jpeg"
                        alt="LEAKOLOCK®"
                        fill
                        className="object-contain object-left"
                        style={{ mixBlendMode: "screen" }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { v: "50K+", l: "Kits delivered" },
                        { v: "15+", l: "Brands" },
                        { v: "48hr", l: "Delivery" },
                        { v: "100%", l: "Tested" },
                      ].map((s) => (
                        <div key={s.l}>
                          <div
                            className="text-red-brand"
                            style={{
                              fontFamily: "var(--font-bebas)",
                              fontSize: "2rem",
                              lineHeight: 1,
                            }}
                          >
                            {s.v}
                          </div>
                          <div
                            className="text-xs tracking-widest"
                            style={{ color: "#777777", fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}
                          >
                            {s.l}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className="mt-8 pt-6"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <p
                        className="text-sm italic"
                        style={{ color: "#888888", fontFamily: "var(--font-barlow)", lineHeight: 1.7 }}
                      >
                        &ldquo;We created LEAKOLOCK® because we knew exactly what the market was missing: not cheap seals, but engineered seals that actually last.&rdquo;
                      </p>
                      <p
                        className="text-xs mt-2"
                        style={{ color: "#DC2626", fontFamily: "var(--font-bebas)", letterSpacing: "0.1em" }}
                      >
                        - LEAKOLOCK® Engineering Team
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "#030303", borderTop: "1px solid #0A0A0A", padding: "7rem 0" }}>
        <div className="container-brand">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <div className="red-line" />
            <span style={{ fontFamily: "var(--font-bebas)", fontSize: "0.75rem", letterSpacing: "0.25em", color: "#DC2626" }}>
              COMPANY TIMELINE
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            color: "#FFFFFF",
            marginBottom: "4rem",
          }}>
            The LEAKOLOCK®<br />
            <span style={{ color: "#DC2626" }}>journey</span>
          </h2>

          <div style={{ display: "block" }}>
            {milestones.map((m) => (
              <div key={m.year} style={{ marginBottom: "3rem" }}>
                <p style={{
                  color: "#DC2626",
                  fontFamily: "var(--font-bebas)",
                  fontSize: "1.5rem",
                  letterSpacing: "0.1em",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                  overflow: "visible",
                  display: "block",
                  width: "auto",
                  marginBottom: "0.5rem",
                }}>
                  {m.year}
                </p>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#DC2626",
                  marginBottom: "0.5rem",
                }} />
                <h3 style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 500,
                  fontSize: "1rem",
                  marginBottom: "0.4rem",
                }}>
                  {m.title}
                </h3>
                <p style={{
                  color: "#666666",
                  fontFamily: "var(--font-barlow)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  maxWidth: "520px",
                }}>
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: "#000000" }}>
        <div className="container-brand">
          {(() => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // eslint-disable-line react-hooks/rules-of-hooks
            return (
              <>
                <div
                  ref={ref}
                  className="max-w-2xl mb-14"
                >
                  <div
                    className="flex items-center gap-3 mb-5"
                    style={{
                      opacity: inView ? 1 : 0,
                      transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                  >
                    <div className="red-line" />
                    <span className="text-xs tracking-[0.25em] text-red-brand" style={{ fontFamily: "var(--font-bebas)" }}>
                      OUR PRINCIPLES
                    </span>
                  </div>
                  <h2
                    className="font-display text-white"
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(2.5rem, 6vw, 5rem)",
                      lineHeight: 0.95,
                      letterSpacing: "0.02em",
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(30px)",
                      transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.1s",
                    }}
                  >
                    Built on
                    <br />
                    <span style={{ color: "#DC2626" }}>four pillars</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {values.map((v, i) => {
                    const [vRef, vInView] = useInView({ triggerOnce: true, threshold: 0.15 }); // eslint-disable-line react-hooks/rules-of-hooks
                    return (
                      <div
                        key={v.title}
                        ref={vRef}
                        className="p-7 relative"
                        style={{
                          opacity: vInView ? 1 : 0,
                          transform: vInView ? "translateY(0)" : "translateY(30px)",
                          transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${i * 100}ms`,
                        }}
                      >
                        <div
                          className="absolute top-0 left-0 w-12 h-px"
                          style={{ background: "#DC2626" }}
                        />
                        <div
                          className="text-xl mb-3"
                          style={{ color: "#DC2626", fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
                        >
                          0{i + 1}
                        </div>
                        <h3
                          className="text-white mb-3"
                          style={{ fontFamily: "var(--font-barlow)", fontWeight: 500, fontSize: "1rem" }}
                        >
                          {v.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "#666666", fontFamily: "var(--font-barlow)" }}
                        >
                          {v.body}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* CTA */}
      <div className="bolt-divider" />
      <section className="py-20 text-center" style={{ background: "#000000" }}>
        <div className="container-brand">
          <h2
            className="font-display text-white mb-4"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              letterSpacing: "0.05em",
            }}
          >
            Ready to work with us?
          </h2>
          <p className="text-base mb-8" style={{ color: "#666666", fontFamily: "var(--font-barlow)" }}>
            Get a quote or drop us a message. We respond within hours.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="mailto:info@leakolock.com" className="btn-primary">Get in touch</a>
            <Link href="/products" className="btn-outline">View products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
