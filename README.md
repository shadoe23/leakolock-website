# LEAKOLOCK® Website

Ultra-premium brand website for **LEAKOLOCK®** — the performante seal kit brand by Kaveri Hydraulics, Bangalore.

## Brand

- **Brand:** LEAKOLOCK®
- **Tagline:** Sealing fast forward
- **Sub-brand:** PERFORMANTE PARTS
- **Parent company:** Kaveri Hydraulics, Bangalore, India (est. 1993)
- **Industry:** Excavator hydraulic seal kits

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS-first config)
- **Animations:** Framer Motion + GSAP + Lenis smooth scroll
- **Fonts:** Bebas Neue (display) + Barlow (body) via `next/font/google`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, brand story, product showcase, compatibility, CTA |
| `/products` | Full product catalogue with category + brand filters |
| `/about` | Company history, Kaveri Hydraulics legacy, timeline, values |
| `/contact` | Enquiry form, contact info, WhatsApp integration |

## Design System

| Token | Value |
|-------|-------|
| Red (brand) | `#DC2626` |
| Black (pure) | `#000000` |
| Black (soft) | `#0A0A0A` |
| Black (card) | `#111111` |
| White | `#FFFFFF` |
| Gray (muted) | `#A0A0A0` |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx             # Root layout — fonts, metadata, global components
  page.tsx               # Home page
  about/page.tsx         # About page
  products/page.tsx      # Products catalogue
  contact/page.tsx       # Contact form
  globals.css            # Tailwind v4 config + brand tokens + global styles

components/
  Navbar.tsx             # Sticky navbar with scroll behavior + mobile menu
  Footer.tsx             # Site footer
  HeroSection.tsx        # Full-screen hero with particle canvas animation
  BrandStorySection.tsx  # Stats, timeline, brand story
  ProductShowcase.tsx    # Featured products grid
  WhyLeakolock.tsx       # Features/benefits section
  CompatibilitySection.tsx  # Compatible excavator brands
  CTASection.tsx         # Call-to-action section
  CustomCursor.tsx       # Custom cursor with red glow (desktop only)
  ScrollProgress.tsx     # Red scroll progress bar
  SmoothScrollProvider.tsx  # Lenis smooth scroll wrapper
  WhatsAppButton.tsx     # Floating WhatsApp button

data/
  products.ts            # Typed product data with categories and brands

public/
  logo.jpeg              # LEAKOLOCK® logo
  products/              # Product images (webp)
```

---

**A brand by Kaveri Hydraulics · Bangalore, India · Est. 1993**
