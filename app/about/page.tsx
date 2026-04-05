"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const milestones = [
  {
    year: "1993",
    title: "Kaveri Hydraulics founded",
    body: "Started as a small spare parts distributor in Bangalore, serving local excavator operators with genuine parts.",
  },
  {
    year: "1998",
    title: "Hydraulic specialisation",
    body: "Shifted focus to hydraulic components — cylinders, pumps, and sealing solutions. Became the go-to hydraulic specialist in the region.",
  },
  {
    year: "2005",
    title: "Expanded brand coverage",
    body: "Grew to support 10+ excavator brands including Komatsu, Hitachi, JCB, CAT, and Volvo. Pan-Karnataka distribution established.",
  },
  {
    year: "2012",
    title: "Manufacturing partnerships",
    body: "Established direct relationships with premium seal manufacturers. Started customising kits for local market conditions.",
  },
  {
    year: "2020",
    title: "LEAKOLOCK® brand launched",
    body: "After years of understanding exactly what construction teams need, we created our own premium seal kit brand — built for India's toughest job sites.",
  },
  {
    year: "2024",
    title: "15+ brands, all India presence",
    body: "LEAKOLOCK® now supports 15+ excavator brands with same-day dispatch and 48-hour delivery to construction sites across India.",
  },
];

const values = [
  {
    title: "Precision over compromise",
    body: "We never cut corners on material specifications. Every seal is the right compound for its application — not just the cheapest option that fits.",
  },
  {
    title: "30 years of field knowledge",
    body: "We have seen what seal failures look like in Indian conditions. That experience is baked into every kit specification we produce.",
  },
  {
    title: "Speed as a feature",
    body: "'Sealing fast forward' isn't just a tagline. Same-day dispatch, 48-hour delivery, and zero-fuss ordering are core to what we offer.",
  },
  {
    title: "The Kaveri guarantee",
    body: "Behind every LEAKOLOCK® kit is the reputation of Kaveri Hydraulics — three decades of trusted relationships with India's construction industry.",
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
            KAVERI
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
            Three decades
            <br />
            of <span style={{ color: "#DC2626" }}>hydraulic</span>
            <br />
            mastery
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
            LEAKOLOCK® is the premium seal kit brand of Kaveri Hydraulics,
            a Bangalore-based excavator spare parts company trusted since 1993.
            We don&apos;t just sell seal kits. We eliminate downtime.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="bolt-divider" />

      {/* Kaveri Hydraulics section */}
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
                        KAVERI HYDRAULICS
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
                      Bangalore&apos;s trusted
                      <br />
                      <span style={{ color: "#DC2626" }}>hydraulics specialist</span>
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
                        Founded in 1993, Kaveri Hydraulics has spent three decades supplying excavator operators,
                        construction companies, and equipment dealers across Karnataka and India with reliable hydraulic components.
                      </p>
                      <p className="text-base leading-relaxed" style={{ color: "#888888", fontFamily: "var(--font-barlow)" }}>
                        Over the years, we built deep expertise in what seal failures actually look like in the field —
                        the heat, the dust, the monsoon mud, the extreme pressures of Indian construction sites.
                        That knowledge is what LEAKOLOCK® is built on.
                      </p>
                      <p className="text-base leading-relaxed" style={{ color: "#888888", fontFamily: "var(--font-barlow)" }}>
                        Every kit we produce carries the weight of 30+ years of relationships, feedback, and field experience.
                        When a LEAKOLOCK® kit goes into a machine, it stays there — leak-free.
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
                      background: "#080808",
                      border: "1px solid #1A1A1A",
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
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { v: "1993", l: "Founded" },
                        { v: "30+", l: "Years active" },
                        { v: "50K+", l: "Kits sold" },
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
                            style={{ color: "#555555", fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}
                          >
                            {s.l}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className="mt-8 pt-6"
                      style={{ borderTop: "1px solid #1A1A1A" }}
                    >
                      <p
                        className="text-xs italic"
                        style={{ color: "#444444", fontFamily: "var(--font-barlow)" }}
                      >
                        &ldquo;We created LEAKOLOCK® because we knew exactly what the market was missing — not cheap seals, but engineered seals that actually last.&rdquo;
                      </p>
                      <p
                        className="text-xs mt-2"
                        style={{ color: "#DC2626", fontFamily: "var(--font-bebas)", letterSpacing: "0.1em" }}
                      >
                        — Kaveri Hydraulics, Bangalore
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
      <section className="section-pad" style={{ background: "#030303", borderTop: "1px solid #0A0A0A" }}>
        <div className="container-brand">
          {(() => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // eslint-disable-line react-hooks/rules-of-hooks
            return (
              <div ref={ref}>
                <div className="flex items-center gap-3 mb-4"
                  style={{
                    opacity: inView ? 1 : 0,
                    transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                >
                  <div className="red-line" />
                  <span className="text-xs tracking-[0.25em] text-red-brand" style={{ fontFamily: "var(--font-bebas)" }}>
                    COMPANY TIMELINE
                  </span>
                </div>
                <h2
                  className="font-display text-white mb-16"
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
                  Three decades,
                  <br />
                  <span style={{ color: "#DC2626" }}>one mission</span>
                </h2>

                <div className="relative">
                  {/* Vertical line */}
                  <div
                    className="absolute left-6 top-4 bottom-0 w-px hidden md:block"
                    style={{ background: "linear-gradient(to bottom, #DC2626, rgba(220,38,38,0.1))" }}
                  />

                  <div className="space-y-0">
                    {milestones.map((m, i) => {
                      const [mRef, mInView] = useInView({ triggerOnce: true, threshold: 0.2 }); // eslint-disable-line react-hooks/rules-of-hooks
                      return (
                        <div
                          key={m.year}
                          ref={mRef}
                          className="relative md:pl-20 pb-12 last:pb-0"
                          style={{
                            opacity: mInView ? 1 : 0,
                            transform: mInView ? "translateX(0)" : "translateX(-20px)",
                            transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${i * 100}ms`,
                          }}
                        >
                          {/* Dot */}
                          <div
                            className="absolute left-[18px] w-7 h-7 rounded-full border-2 items-center justify-center hidden md:flex"
                            style={{
                              borderColor: "#DC2626",
                              background: "#000000",
                              top: "2px",
                            }}
                          >
                            <div className="w-2 h-2 rounded-full bg-red-brand" />
                          </div>

                          <div className="flex items-start gap-5">
                            <div
                              className="flex-shrink-0 px-3 py-1 md:hidden"
                              style={{
                                background: "#DC2626",
                                fontFamily: "var(--font-bebas)",
                                fontSize: "0.85rem",
                                letterSpacing: "0.1em",
                              }}
                            >
                              {m.year}
                            </div>
                            <div>
                              <div
                                className="text-sm mb-1 hidden md:block"
                                style={{ color: "#DC2626", fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}
                              >
                                {m.year}
                              </div>
                              <h3
                                className="text-white mb-2"
                                style={{ fontFamily: "var(--font-barlow)", fontWeight: 500, fontSize: "1rem" }}
                              >
                                {m.title}
                              </h3>
                              <p
                                className="text-sm leading-relaxed"
                                style={{ color: "#666666", fontFamily: "var(--font-barlow)", maxWidth: "520px" }}
                              >
                                {m.body}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })()}
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
                        className="p-7 card-dark relative"
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
            Get a quote or drop us a message — we respond within hours.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contact" className="btn-primary">Get in touch</Link>
            <Link href="/products" className="btn-outline">View products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
