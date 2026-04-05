"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[9990] transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(0,0,0,0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(220,38,38,0.15)" : "1px solid transparent",
          paddingTop: scrolled ? "0.75rem" : "1.25rem",
          paddingBottom: scrolled ? "0.75rem" : "1.25rem",
        }}
      >
        <div className="container-brand flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex items-center group">
            <div
              className="relative overflow-hidden"
              style={{
                width: scrolled ? "140px" : "170px",
                height: scrolled ? "52px" : "64px",
                transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              <Image
                src="/logo.jpeg"
                alt="LEAKOLOCK® - Sealing Fast Forward"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:block btn-primary text-sm py-2 px-5"
              style={{ fontSize: "0.85rem", letterSpacing: "0.12em", padding: "0.6rem 1.5rem" }}
            >
              Get a Quote
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2 group"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block h-[1.5px] bg-white transition-all duration-300"
                style={{
                  width: "24px",
                  transform: menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
                  background: menuOpen ? "#DC2626" : "white",
                }}
              />
              <span
                className="block h-[1.5px] bg-white transition-all duration-300"
                style={{
                  width: "16px",
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "translateX(-8px)" : "none",
                }}
              />
              <span
                className="block h-[1.5px] bg-white transition-all duration-300"
                style={{
                  width: "24px",
                  transform: menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
                  background: menuOpen ? "#DC2626" : "white",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-[9985] flex flex-col md:hidden transition-all duration-500"
        style={{
          background: "#000000",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Red diagonal accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, transparent 60%, rgba(220,38,38,0.08) 100%)",
          }}
        />

        <div className="flex flex-col justify-center items-start px-8 h-full gap-6">
          <div
            className="text-xs tracking-[0.3em] text-red-brand mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Navigation
          </div>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-4"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateX(0)" : "translateX(30px)",
                opacity: menuOpen ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              <span
                className="text-5xl font-display tracking-wide text-white group-hover:text-red-brand transition-colors duration-300"
                style={{ fontFamily: "var(--font-bebas)", lineHeight: 1 }}
              >
                {link.label}
              </span>
              <span className="text-red-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                →
              </span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-6"
            style={{
              transitionDelay: menuOpen ? "280ms" : "0ms",
              transform: menuOpen ? "translateX(0)" : "translateX(30px)",
              opacity: menuOpen ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            Get a Quote
          </Link>

          <div className="mt-auto pb-8">
            <p
              className="text-xs tracking-widest"
              style={{ color: "#555555", fontFamily: "var(--font-bebas)" }}
            >
              A brand by Kaveri Hydraulics · Est. 1993
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
