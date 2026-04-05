import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(220,38,38,0.03) 0%, transparent 70%)" }}
      />

      <div className="container-brand relative z-10">
        {/* Top section */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="relative w-[160px] h-[60px] mb-8">
              <Image
                src="/logo.jpeg"
                alt="LEAKOLOCK®"
                fill
                className="object-contain object-left"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
            <p
              className="text-sm mb-8 max-w-xs"
              style={{ color: "#777777", fontFamily: "var(--font-barlow)", lineHeight: 1.75 }}
            >
              Precision-engineered hydraulic seal kits for heavy machinery.
              Built for zero-leak performance in demanding conditions.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:info@leakolock.com"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors duration-300"
                style={{ color: "#888888", fontFamily: "var(--font-barlow)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "#DC2626", flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@leakolock.com
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] mb-6"
              style={{ color: "#DC2626", fontFamily: "var(--font-bebas)", letterSpacing: "0.2em" }}
            >
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-white"
                    style={{ color: "#666666", fontFamily: "var(--font-barlow)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="bolt-divider" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: "#444444", fontFamily: "var(--font-barlow)" }}
          >
            © {new Date().getFullYear()} LEAKOLOCK®. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "#333333", fontFamily: "var(--font-barlow)" }}
          >
            SEALING FAST FORWARD
          </p>
        </div>
      </div>
    </footer>
  );
}
