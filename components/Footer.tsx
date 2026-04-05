import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Products: [
    { label: "Boom Seal Kits", href: "/products" },
    { label: "Bucket Seal Kits", href: "/products" },
    { label: "Arm Seal Kits", href: "/products" },
    { label: "Center Joint Seal Kits", href: "/products" },
    { label: "Cylinder Seal Kits", href: "/products" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Heritage", href: "/about" },
    { label: "Kaveri Hydraulics", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Brands: [
    { label: "Komatsu", href: "/products" },
    { label: "Hitachi", href: "/products" },
    { label: "CAT", href: "/products" },
    { label: "JCB", href: "/products" },
    { label: "Volvo", href: "/products" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#050505", borderTop: "1px solid #1A1A1A" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(220,38,38,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-brand relative z-10">
        {/* Top section */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="relative w-[160px] h-[60px] mb-6">
              <Image
                src="/logo.jpeg"
                alt="LEAKOLOCK®"
                fill
                className="object-contain object-left"
              />
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "#666666", fontFamily: "var(--font-barlow)" }}
            >
              Precision-engineered hydraulic seal kits for heavy machinery.
              Built for the demands of modern construction and excavation.
            </p>
            <div className="flex items-center gap-1 mb-2">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#DC2626" }}
              />
              <span
                className="text-xs tracking-widest"
                style={{ color: "#A0A0A0", fontFamily: "var(--font-bebas)" }}
              >
                PERFORMANTE PARTS
              </span>
            </div>
            <p
              className="text-xs"
              style={{ color: "#444444", fontFamily: "var(--font-barlow)" }}
            >
              A brand by Kaveri Hydraulics · Bangalore, India · Est. 1993
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-xs tracking-[0.2em] mb-5"
                style={{ color: "#DC2626", fontFamily: "var(--font-bebas)", letterSpacing: "0.2em" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
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
          ))}
        </div>

        {/* Bottom divider */}
        <div className="bolt-divider" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "#444444", fontFamily: "var(--font-barlow)" }}
          >
            © {new Date().getFullYear()} LEAKOLOCK® by Kaveri Hydraulics. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/919980000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs hover:text-white transition-colors duration-300"
              style={{ color: "#666666", fontFamily: "var(--font-barlow)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#25D366" }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:info@leakolock.com"
              className="text-xs hover:text-white transition-colors duration-300"
              style={{ color: "#666666", fontFamily: "var(--font-barlow)" }}
            >
              info@leakolock.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
