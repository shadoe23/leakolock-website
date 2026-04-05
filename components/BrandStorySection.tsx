"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { value: 30, suffix: "+", label: "Years of hydraulic expertise", sublabel: "Since 1993" },
  { value: 50000, suffix: "+", label: "Seal kits delivered", sublabel: "Across India" },
  { value: 15, suffix: "+", label: "Excavator brands supported", sublabel: "OEM compatible" },
  { value: 100, suffix: "%", label: "Leak-proof guarantee", sublabel: "Every kit tested" },
];

const timeline = [
  { year: "1993", event: "Kaveri Hydraulics founded in Bangalore" },
  { year: "2005", event: "Expanded to serve 10+ excavator brands" },
  { year: "2015", event: "Achieved 50,000+ seal kit milestone" },
  { year: "2020", event: "LEAKOLOCK® brand launched" },
  { year: "2024", event: "Supplying 15+ brands across India" },
];

function StatCard({
  value, suffix, label, sublabel, delay
}: typeof stats[0] & { delay: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="relative p-6 card-dark clip-corner-tr"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, #DC2626, transparent)" }}
      />
      <div
        className="font-display text-red-brand mb-1"
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          lineHeight: 1,
        }}
      >
        {inView ? (
          <CountUp
            end={value}
            duration={2.5}
            separator=","
            suffix={suffix}
          />
        ) : (
          `0${suffix}`
        )}
      </div>
      <div
        className="text-sm font-medium mb-1 text-white"
        style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
      >
        {label}
      </div>
      <div
        className="text-xs"
        style={{ color: "#555555", fontFamily: "var(--font-barlow)" }}
      >
        {sublabel}
      </div>
    </div>
  );
}

export default function BrandStorySection() {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-pad relative overflow-hidden" style={{ background: "#000000" }}>
      {/* Side ambient glow */}
      <div
        className="absolute -left-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 70%)" }}
      />

      <div className="container-brand">
        {/* Header */}
        <div
          ref={headingRef}
          className="max-w-3xl mb-20"
        >
          <div
            className="flex items-center gap-3 mb-6"
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
              OUR HERITAGE
            </span>
          </div>

          <h2
            className="font-display text-white mb-6"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              opacity: headingInView ? 1 : 0,
              transform: headingInView ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.1s",
            }}
          >
            Born from
            <br />
            <span style={{ color: "#DC2626" }}>30+ years</span> of
            <br />
            hydraulic mastery
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "#A0A0A0",
              fontFamily: "var(--font-barlow)",
              fontWeight: 400,
              maxWidth: "540px",
              opacity: headingInView ? 1 : 0,
              transform: headingInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.25s",
            }}
          >
            Kaveri Hydraulics has been the trusted name in excavator spare parts
            since 1993. LEAKOLOCK® is our premium seal kit brand — built with
            decades of field knowledge and an obsession for zero-leak performance.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 100} />
          ))}
        </div>

        {/* Timeline + story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div ref={timelineRef}>
            <h3
              className="font-display text-white mb-8"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                letterSpacing: "0.05em",
                opacity: timelineInView ? 1 : 0,
                transform: timelineInView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              Timeline of excellence
            </h3>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-3 top-2 bottom-2 w-px"
                style={{ background: "linear-gradient(to bottom, #DC2626, transparent)" }}
              />

              <div className="space-y-6 pl-10">
                {timeline.map((item, i) => (
                  <div
                    key={item.year}
                    style={{
                      opacity: timelineInView ? 1 : 0,
                      transform: timelineInView ? "translateX(0)" : "translateX(-20px)",
                      transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${i * 120}ms`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Dot */}
                      <div
                        className="absolute left-0 w-6 h-6 rounded-full border flex items-center justify-center"
                        style={{
                          borderColor: "#DC2626",
                          background: "#000000",
                          marginTop: "2px",
                        }}
                      >
                        <div className="w-2 h-2 rounded-full bg-red-brand" />
                      </div>
                      <div>
                        <div
                          className="font-display text-red-brand mb-1"
                          style={{ fontFamily: "var(--font-bebas)", fontSize: "1.1rem", letterSpacing: "0.1em" }}
                        >
                          {item.year}
                        </div>
                        <div
                          className="text-sm"
                          style={{ color: "#A0A0A0", fontFamily: "var(--font-barlow)" }}
                        >
                          {item.event}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story */}
          <div>
            <div className="space-y-6">
              {[
                {
                  title: "Why LEAKOLOCK?",
                  text: "We created LEAKOLOCK® because we saw too many machines go down due to poor-quality seal kits. Every hour of downtime costs contractors money. Our brand was born to fix that — permanently.",
                  delay: 100,
                },
                {
                  title: "What 'Performante' means",
                  text: '"Performante" is Italian for high-performance. We chose this word because our seal kits are not just replacements — they are performance upgrades. Built to the same tolerances as OEM components or better.',
                  delay: 200,
                },
                {
                  title: "Sealing fast forward",
                  text: "Our tagline captures everything: the speed of delivery, the certainty of performance, and the forward momentum we give our customers when their machines are back running at full power.",
                  delay: 300,
                },
              ].map((item, i) => {
                const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); // eslint-disable-line react-hooks/rules-of-hooks
                return (
                  <div
                    key={item.title}
                    ref={ref}
                    className="p-6 card-dark"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(20px)",
                      transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${item.delay}ms`,
                    }}
                  >
                    <h4
                      className="text-white mb-3 font-medium"
                      style={{ fontFamily: "var(--font-barlow)", fontWeight: 500, fontSize: "1rem" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#777777", fontFamily: "var(--font-barlow)" }}
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
