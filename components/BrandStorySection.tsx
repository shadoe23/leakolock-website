"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { value: 30, suffix: "+", label: "Years of hydraulic expertise", sublabel: "And counting" },
  { value: 50000, suffix: "+", label: "Seal kits delivered", sublabel: "Worldwide" },
  { value: 15, suffix: "+", label: "Excavator brands supported", sublabel: "OEM compatible" },
  { value: 100, suffix: "%", label: "Leak-proof guarantee", sublabel: "Every kit tested" },
];

const timeline = [
  { year: "2015", event: "Hydraulic seal kit specialisation begins" },
  { year: "2018", event: "Expanded to serve 10+ excavator brands" },
  { year: "2020", event: "LEAKOLOCK® brand launched" },
  { year: "2022", event: "Achieved 50,000+ seal kit milestone" },
  { year: "2024", event: "Supplying 15+ brands worldwide" },
];

function StatItem({
  value, suffix, label, sublabel, delay
}: typeof stats[0] & { delay: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(2.8rem, 5vw, 4rem)",
          lineHeight: 1,
          color: "#DC2626",
          marginBottom: "0.4rem",
        }}
      >
        {inView ? (
          <CountUp end={value} duration={2.5} separator="," suffix={suffix} />
        ) : (
          `0${suffix}`
        )}
      </div>
      <div
        style={{
          fontFamily: "var(--font-barlow)",
          fontWeight: 500,
          fontSize: "0.9rem",
          color: "#FFFFFF",
          marginBottom: "0.2rem",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-barlow)",
          fontSize: "0.8rem",
          color: "#666666",
        }}
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
      <div
        className="absolute -left-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 70%)" }}
      />

      <div className="container-brand">
        {/* Header */}
        <div ref={headingRef} className="max-w-3xl mb-20">
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
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              color: "#FFFFFF",
              marginBottom: "1.5rem",
              opacity: headingInView ? 1 : 0,
              transform: headingInView ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.1s",
            }}
          >
            Built on
            <br />
            <span style={{ color: "#DC2626" }}>deep hydraulic</span>
            <br />
            expertise
          </h2>

          <p
            style={{
              color: "#A0A0A0",
              fontFamily: "var(--font-barlow)",
              fontWeight: 400,
              fontSize: "1.05rem",
              lineHeight: 1.75,
              maxWidth: "540px",
              opacity: headingInView ? 1 : 0,
              transform: headingInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.25s",
            }}
          >
            LEAKOLOCK® is a precision-engineered hydraulic seal kit brand
            built on deep field knowledge and an obsession for zero-leak performance.
          </p>
        </div>

        {/* Stats — floating text, no boxes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-28">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 100} />
          ))}
        </div>

        {/* Timeline + story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Timeline */}
          <div ref={timelineRef}>
            <h3
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                letterSpacing: "0.05em",
                color: "#FFFFFF",
                marginBottom: "2.5rem",
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
                className="absolute left-[5px] top-2 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, #DC2626, transparent)" }}
              />

              <div style={{ paddingLeft: "2rem" }}>
                {timeline.map((item, i) => (
                  <div
                    key={item.year}
                    style={{
                      position: "relative",
                      marginBottom: i < timeline.length - 1 ? "2.5rem" : 0,
                      opacity: timelineInView ? 1 : 0,
                      transform: timelineInView ? "translateX(0)" : "translateX(-20px)",
                      transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${i * 130}ms`,
                    }}
                  >
                    {/* Dot */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-2rem",
                        top: "4px",
                        width: "10px",
                        height: "10px",
                        background: "#DC2626",
                        borderRadius: "50%",
                      }}
                    />
                    <div
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "1rem",
                        letterSpacing: "0.12em",
                        color: "#DC2626",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.year}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-barlow)",
                        fontSize: "0.95rem",
                        color: "#AAAAAA",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story — plain text on black, no boxes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {[
              {
                title: "Why LEAKOLOCK?",
                text: "We created LEAKOLOCK® because we saw too many machines go down due to poor-quality seal kits. Every hour of downtime costs contractors money. Our brand was born to fix that, permanently.",
                delay: 100,
              },
              {
                title: "What 'Performante' means",
                text: '"Performante" is Italian for high-performance. We chose this word because our seal kits are not just replacements - they are performance upgrades. Built to the same tolerances as OEM components or better.',
                delay: 200,
              },
              {
                title: "Sealing fast forward",
                text: "Our tagline captures everything: the speed of delivery, the certainty of performance, and the forward momentum we give our customers when their machines are back running at full power.",
                delay: 300,
              },
            ].map((item) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); // eslint-disable-line react-hooks/rules-of-hooks
              return (
                <div
                  key={item.title}
                  ref={ref}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(20px)",
                    transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${item.delay}ms`,
                  }}
                >
                  {/* Small red accent before title */}
                  <div
                    style={{
                      width: "24px",
                      height: "2px",
                      background: "#DC2626",
                      marginBottom: "0.75rem",
                    }}
                  />
                  <h4
                    style={{
                      fontFamily: "var(--font-barlow)",
                      fontWeight: 500,
                      fontSize: "1rem",
                      color: "#FFFFFF",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-barlow)",
                      fontSize: "0.9rem",
                      color: "#999999",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
