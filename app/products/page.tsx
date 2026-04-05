"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { products, productCategories, compatibleBrands, type SealKitProduct } from "@/data/products";

function ProductCard({ product, index }: { product: SealKitProduct; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="group card-dark relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${(index % 3) * 80}ms`,
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "radial-gradient(circle at center, rgba(220,38,38,0.1), transparent 70%)" }}
        />

        <div
          className="absolute bottom-3 left-3 px-2.5 py-1 text-xs"
          style={{
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(8px)",
            color: "#DC2626",
            fontFamily: "var(--font-bebas)",
            letterSpacing: "0.1em",
          }}
        >
          {product.category}
        </div>
      </div>

      <div className="p-6">
        <h3
          className="text-white mb-2 group-hover:text-red-brand transition-colors duration-300"
          style={{ fontFamily: "var(--font-barlow)", fontWeight: 500, fontSize: "1rem", lineHeight: 1.4 }}
        >
          {product.name}
        </h3>
        <p
          className="text-sm mb-5"
          style={{ color: "#A0A0A0", fontFamily: "var(--font-barlow)", lineHeight: 1.7 }}
        >
          {product.description}
        </p>

        {/* Compatible brands */}
        <div className="flex flex-wrap gap-1.5">
          {product.brands.slice(0, 4).map((brand) => (
            <span
              key={brand}
              className="text-xs px-2.5 py-1"
              style={{
                background: "#181818",
                color: "#888888",
                fontFamily: "var(--font-barlow)",
              }}
            >
              {brand}
            </span>
          ))}
          {product.brands.length > 4 && (
            <span
              className="text-xs px-2.5 py-1"
              style={{ background: "#181818", color: "#666666", fontFamily: "var(--font-barlow)" }}
            >
              +{product.brands.length - 4} more
            </span>
          )}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
        style={{ background: "#DC2626", boxShadow: "0 0 8px rgba(220,38,38,0.6)" }}
      />
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All");
  const [heroRef, heroInView] = useInView({ triggerOnce: true });

  const featuredBrands = ["All", "Komatsu", "Hitachi", "CAT", "JCB", "Volvo", "Kobelco"];

  const filtered = products.filter((p) => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const brandMatch = activeBrand === "All" || p.brands.some((b) => b.includes(activeBrand));
    return catMatch && brandMatch;
  });

  return (
    <div className="min-h-screen" style={{ background: "#000000", paddingTop: "5rem" }}>
      {/* Page hero */}
      <div
        ref={heroRef}
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "#000000" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(220,38,38,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="container-brand relative z-10">
          <div
            className="flex items-center gap-3 mb-5"
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
              SEAL KIT CATALOGUE
            </span>
          </div>
          <h1
            className="font-display text-white mb-4"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 9vw, 8rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.1s",
            }}
          >
            Products
          </h1>
          <p
            className="text-base max-w-xl"
            style={{
              color: "#777777",
              fontFamily: "var(--font-barlow)",
              opacity: heroInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.25s",
            }}
          >
            Browse our complete range of precision-engineered hydraulic seal kits.
            OEM-compatible, field-tested, and built for zero-leak performance.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div
        className="sticky z-40 py-4"
        style={{
          top: "4rem",
          background: "rgba(0,0,0,0.92)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="container-brand">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Category filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-xs tracking-widest mr-1 hidden sm:block"
                style={{ color: "#444444", fontFamily: "var(--font-bebas)" }}
              >
                TYPE:
              </span>
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="text-xs px-3 py-1.5 transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    letterSpacing: "0.1em",
                    background: activeCategory === cat ? "#DC2626" : "rgba(255,255,255,0.04)",
                    color: activeCategory === cat ? "#FFFFFF" : "#888888",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Brand filter */}
            <div className="flex items-center gap-2 flex-wrap sm:ml-auto">
              <span
                className="text-xs tracking-widest mr-1 hidden sm:block"
                style={{ color: "#444444", fontFamily: "var(--font-bebas)" }}
              >
                BRAND:
              </span>
              {featuredBrands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className="text-xs px-3 py-1.5 transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    letterSpacing: "0.1em",
                    background: activeBrand === brand ? "rgba(220,38,38,0.18)" : "rgba(255,255,255,0.04)",
                    color: activeBrand === brand ? "#DC2626" : "#888888",
                  }}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="container-brand py-12">
        {/* Count */}
        <div
          className="mb-8 flex items-center justify-between"
        >
          <p
            className="text-sm"
            style={{ color: "#444444", fontFamily: "var(--font-barlow)" }}
          >
            Showing{" "}
            <span style={{ color: "#DC2626" }}>{filtered.length}</span>{" "}
            product{filtered.length !== 1 ? "s" : ""}
          </p>
          <a
            href="mailto:info@leakolock.com"
            className="text-xs hover:text-white transition-colors duration-300"
            style={{ color: "#666666", fontFamily: "var(--font-bebas)", letterSpacing: "0.1em" }}
          >
            Need a custom kit? Email us →
          </a>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <div
              className="text-5xl mb-4"
              style={{ fontFamily: "var(--font-bebas)", color: "#1A1A1A" }}
            >
              No kits found
            </div>
            <p
              className="text-sm mb-6"
              style={{ color: "#444444", fontFamily: "var(--font-barlow)" }}
            >
              We likely stock this, just not shown here.
            </p>
            <a href="mailto:info@leakolock.com" className="btn-primary">
              Email us for availability
            </a>
          </div>
        )}

        {/* CTA Banner */}
        <div
          className="mt-16 p-8 md:p-12 relative overflow-hidden"
          style={{ background: "#0A0A0A" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #DC2626, transparent)" }}
          />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3
                className="font-display text-white mb-2"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  letterSpacing: "0.05em",
                }}
              >
                Can&apos;t find your model?
              </h3>
              <p
                className="text-sm"
                style={{ color: "#666666", fontFamily: "var(--font-barlow)", maxWidth: "400px" }}
              >
                We stock 200+ seal kit variants and can source or custom-manufacture
                kits for virtually any excavator model within 48 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="mailto:info@leakolock.com" className="btn-primary">
                Request Custom Kit
              </a>
              <a
                href="mailto:info@leakolock.com"
                className="btn-outline flex items-center gap-2"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
