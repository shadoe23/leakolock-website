"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";

function FormField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block text-xs tracking-widest mb-2"
        style={{
          color: focused ? "#DC2626" : "#555555",
          fontFamily: "var(--font-bebas)",
          letterSpacing: "0.15em",
          transition: "color 0.3s ease",
        }}
      >
        {label}
        {required && (
          <span className="ml-1" style={{ color: "#DC2626" }}>
            *
          </span>
        )}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full resize-none outline-none transition-all duration-300"
          style={{
            background: "#0A0A0A",
            border: `1px solid ${focused ? "rgba(220,38,38,0.5)" : "#1A1A1A"}`,
            borderBottom: `2px solid ${focused ? "#DC2626" : "#1A1A1A"}`,
            color: "#FFFFFF",
            padding: "0.875rem 1rem",
            fontFamily: "var(--font-barlow)",
            fontSize: "0.9rem",
            boxShadow: focused ? "0 0 20px rgba(220,38,38,0.05)" : "none",
          }}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full outline-none transition-all duration-300"
          style={{
            background: "#0A0A0A",
            border: `1px solid ${focused ? "rgba(220,38,38,0.5)" : "#1A1A1A"}`,
            borderBottom: `2px solid ${focused ? "#DC2626" : "#1A1A1A"}`,
            color: "#FFFFFF",
            padding: "0.875rem 1rem",
            fontFamily: "var(--font-barlow)",
            fontSize: "0.9rem",
            boxShadow: focused ? "0 0 20px rgba(220,38,38,0.05)" : "none",
          }}
        />
      )}
    </div>
  );
}

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    brand: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "#000000", paddingTop: "5rem" }}>
      {/* Hero */}
      <div
        ref={heroRef}
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ borderBottom: "1px solid #0A0A0A" }}
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
              GET IN TOUCH
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
              transform: heroInView ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.1s",
            }}
          >
            Let&apos;s seal
            <br />
            <span style={{ color: "#DC2626" }}>the deal</span>
          </h1>
          <p
            className="text-base max-w-xl"
            style={{
              color: "#777777",
              fontFamily: "var(--font-barlow)",
              opacity: heroInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.3s",
            }}
          >
            Get a quote, ask about availability, or tell us what seal kit you need.
            We respond within hours and dispatch same-day when possible.
          </p>
        </div>
      </div>

      <div className="container-brand py-16 md:py-20">
        <div
          ref={formRef}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16"
        >
          {/* Contact info */}
          <div
            className="lg:col-span-2 space-y-8"
            style={{
              opacity: formInView ? 1 : 0,
              transform: formInView ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <div>
              <h2
                className="font-display text-white mb-6"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                }}
              >
                Contact information
              </h2>

              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    label: "Address",
                    value: "Kaveri Hydraulics\nBangalore, Karnataka, India",
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l1.94-1.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.64v1.28z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: "+91 99800 00000\n+91 80 2345 6789",
                    href: "tel:+919980000000",
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    label: "Email",
                    value: "info@leakolock.com\nsales@kaverihyd.com",
                    href: "mailto:info@leakolock.com",
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    ),
                    label: "Business hours",
                    value: "Mon – Sat: 9:00 AM – 6:30 PM IST\nSunday: Closed",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                      style={{
                        background: "#0A0A0A",
                        border: "1px solid #1A1A1A",
                        color: "#DC2626",
                        clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        className="text-xs tracking-widest mb-1"
                        style={{ color: "#555555", fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}
                      >
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm hover:text-white transition-colors duration-300 block"
                          style={{
                            color: "#AAAAAA",
                            fontFamily: "var(--font-barlow)",
                            whiteSpace: "pre-line",
                          }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          className="text-sm"
                          style={{
                            color: "#AAAAAA",
                            fontFamily: "var(--font-barlow)",
                            whiteSpace: "pre-line",
                          }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919980000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#0A0A0A",
                border: "1px solid #1A1A1A",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div
                  className="text-white text-sm font-medium"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Chat on WhatsApp
                </div>
                <div
                  className="text-xs"
                  style={{ color: "#555555", fontFamily: "var(--font-barlow)" }}
                >
                  Usually responds within 30 minutes
                </div>
              </div>
              <div className="ml-auto text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                →
              </div>
            </a>
          </div>

          {/* Contact form */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: formInView ? 1 : 0,
              transform: formInView ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.15s",
            }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center py-16 px-8"
                style={{
                  background: "#080808",
                  border: "1px solid #1A1A1A",
                  minHeight: "500px",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="font-display text-white mb-3"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "2rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  Message received
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-sm"
                  style={{ color: "#666666", fontFamily: "var(--font-barlow)" }}
                >
                  Thanks for reaching out. Our team will get back to you within a few hours.
                  For urgent requirements, WhatsApp us directly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", brand: "", message: "" }); }}
                  className="mt-8 btn-outline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative p-8 md:p-10 space-y-6"
                style={{ background: "#080808", border: "1px solid #1A1A1A" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, #DC2626, transparent)" }}
                />

                <h2
                  className="font-display text-white mb-2"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Request a quote
                </h2>
                <p
                  className="text-sm mb-6"
                  style={{ color: "#555555", fontFamily: "var(--font-barlow)" }}
                >
                  Fill in your details and we&apos;ll get back to you with pricing and availability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    label="Your name"
                    name="name"
                    required
                    placeholder="Rajesh Kumar"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Email address"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Phone / WhatsApp"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 99800 00000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Company name"
                    name="company"
                    placeholder="Your company"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <FormField
                  label="Excavator brand & model"
                  name="brand"
                  placeholder="e.g. Komatsu PC200-8, Hitachi ZX200"
                  value={form.brand}
                  onChange={handleChange}
                />

                <FormField
                  label="Message / requirements"
                  name="message"
                  type="textarea"
                  required
                  placeholder="Tell us what seal kits you need, quantity, urgency, or any other details..."
                  value={form.message}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center"
                  style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? "not-allowed" : "pointer" }}
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity="0.3" />
                        <path d="M21 12a9 9 0 00-9-9" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send enquiry
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
