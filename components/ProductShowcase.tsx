"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { products } from "@/data/products";

const featured = products.slice(0, 6);

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
      ref={ref}
      className="group relative card-dark overflow-hidden cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${index * 80}ms`,
      }}
    >
      {/* Image container */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
          }}
        />
        {/* Red glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "radial-gradient(circle at center, rgba(220,38,38,0.12) 0%, transparent 70%)" }}
        />

        {/* Badge */}
        {product.badge && (
          <div
            className="absolute top-3 left-3 px-3 py-1 text-xs tracking-widest"
            style={{
              background: "#DC2626",
              fontFamily: "var(--font-bebas)",
              letterSpacing: "0.1em",
              clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Category tag */}
        <div
          className="absolute top-3 right-3 px-2 py-1 text-xs"
          style={{
            background: "rgba(0,0,0,0.7)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#A0A0A0",
            fontFamily: "var(--font-bebas)",
            letterSpacing: "0.12em",
            backdropFilter: "blur(8px)",
          }}
        >
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-white mb-2 font-medium group-hover:text-red-brand transition-colors duration-300"
          style={{ fontFamily: "var(--font-barlow)", fontWeight: 500, fontSize: "0.95rem", lineHeight: 1.4 }}
        >
          {product.name}
        </h3>
        <p
          className="text-xs mb-4 leading-relaxed line-clamp-2"
          style={{ color: "#666666", fontFamily: "var(--font-barlow)" }}
        >
          {product.description}
        </p>

        {/* Brands */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.brands.slice(0, 3).map((brand) => (
            <span
              key={brand}
              className="text-xs px-2 py-0.5"
              style={{
                background: "#1A1A1A",
                color: "#777777",
                fontFamily: "var(--font-barlow)",
                border: "1px solid #222222",
              }}
            >
              {brand}
            </span>
          ))}
          {product.brands.length > 3 && (
            <span
              className="text-xs px-2 py-0.5"
              style={{ background: "#1A1A1A", color: "#555555", fontFamily: "var(--font-barlow)" }}
            >
              +{product.brands.length - 3}
            </span>
          )}
        </div>

        {/* Specs */}
        <div
          className="pt-4 flex items-center justify-between"
          style={{ borderTop: "1px solid #1A1A1A" }}
        >
          <div
            className="text-xs"
            style={{ color: "#555555", fontFamily: "var(--font-barlow)" }}
          >
            {product.specs[0]}
          </div>
          <div
            className="text-xs text-red-brand flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.1em" }}
          >
            Enquire →
          </div>
        </div>
      </div>

      {/* Bottom red line on hover */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-red-brand transition-all duration-500"
        style={{ width: "0%", boxShadow: "0 0 8px rgba(220,38,38,0.8)" }}
        data-product-line
      />
      <style jsx>{`
        .group:hover [data-product-line] {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default function ProductShowcase() {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #000000, #060606, #000000)" }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#DC2626 1px, transparent 1px), linear-gradient(90deg, #DC2626 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-brand relative z-10">
        {/* Header */}
        <div
          ref={headingRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
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
                SEAL KIT CATALOGUE
              </span>
            </div>
            <h2
              className="font-display text-white"
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
              Products that
              <br />
              <span style={{ color: "#DC2626" }}>perform</span>
            </h2>
          </div>

          <div
            style={{
              opacity: headingInView ? 1 : 0,
              transform: headingInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.3s",
            }}
          >
            <Link href="/products" className="btn-outline">
              View Full Catalogue
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 text-center"
          style={{
            opacity: 1,
          }}
        >
          <p
            className="text-sm mb-4"
            style={{ color: "#555555", fontFamily: "var(--font-barlow)" }}
          >
            Can&apos;t find your specific model? We stock 200+ seal kit variants.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Custom Seal Kit
          </Link>
        </div>
      </div>
    </section>
  );
}
