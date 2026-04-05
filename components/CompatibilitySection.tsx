"use client";

import { useInView } from "react-intersection-observer";
import { compatibleBrands } from "@/data/products";

export default function CompatibilitySection() {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-pad relative overflow-hidden" style={{ background: "#000000" }}>
      {/* Diagonal slash background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(220,38,38,0.012) 60px, rgba(220,38,38,0.012) 61px)",
        }}
      />

      <div className="container-brand relative z-10">
        <div
          ref={headingRef}
          className="text-center mb-16"
        >
          <div
            className="flex items-center justify-center gap-3 mb-5"
            style={{
              opacity: headingInView ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <div className="red-line" />
            <span
              className="text-xs tracking-[0.25em] text-red-brand"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              BRAND COMPATIBILITY
            </span>
            <div className="red-line" style={{ transform: "scaleX(-1)" }} />
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
            One supplier.
            <br />
            <span style={{ color: "#DC2626" }}>Every brand.</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{
              color: "#777777",
              fontFamily: "var(--font-barlow)",
              opacity: headingInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.25s",
            }}
          >
            LEAKOLOCK® seal kits are engineered for all major excavator brands.
            Simplify your procurement — one trusted supplier for your entire fleet.
          </p>
        </div>

        {/* Brand logos/tags grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-16">
          {compatibleBrands.map((brand, i) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // eslint-disable-line react-hooks/rules-of-hooks
            return (
              <div
                key={brand}
                ref={ref}
                className="group flex items-center justify-center p-4 cursor-default"
                style={{
                  background: "#0A0A0A",
                  border: "1px solid #1A1A1A",
                  clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${(i % 5) * 60}ms`,
                }}
              >
                <span
                  className="text-sm text-center group-hover:text-white transition-colors duration-300"
                  style={{
                    color: "#555555",
                    fontFamily: "var(--font-bebas)",
                    letterSpacing: "0.1em",
                    fontSize: "0.85rem",
                  }}
                >
                  {brand}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div
          className="text-center p-6 relative overflow-hidden"
          style={{
            background: "#080808",
            border: "1px solid #1A1A1A",
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #DC2626, transparent)" }}
          />
          <p
            className="text-sm"
            style={{ color: "#555555", fontFamily: "var(--font-barlow)" }}
          >
            Don&apos;t see your brand?{" "}
            <a
              href="/contact"
              className="text-red-brand hover:text-white transition-colors duration-300"
              style={{ fontWeight: 500 }}
            >
              Contact us
            </a>{" "}
            — we likely stock it or can source it within 48 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
