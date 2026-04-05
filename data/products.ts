export interface SealKitProduct {
  id: string;
  category: string;
  name: string;
  description: string;
  brands: string[];
  image: string;
  specs: string[];
  badge?: string;
}

export const productCategories = [
  "All",
  "Boom",
  "Bucket",
  "Arm",
  "Center Joint",
  "Hydraulic Cylinder",
  "Track Adjuster",
];

export const compatibleBrands = [
  "Komatsu",
  "Hitachi",
  "CAT",
  "JCB",
  "Volvo",
  "Kobelco",
  "Hyundai",
  "Doosan",
  "Liugong",
  "XCMG",
  "Sany",
  "Zoomlion",
  "Sunward",
  "Yanmar",
  "Case",
];

export const products: SealKitProduct[] = [
  {
    id: "boom-sk-001",
    category: "Boom",
    name: "Boom Cylinder Seal Kit",
    description:
      "Heavy-duty seal kit for excavator boom cylinders. Withstands extreme hydraulic pressures up to 350 bar. OEM-compatible for all major brands.",
    brands: ["Komatsu", "Hitachi", "CAT", "JCB", "Volvo"],
    image: "/products/DSC01266.webp",
    specs: ["Pressure rating: 350 bar", "Temperature: -30°C to 120°C", "Material: Polyurethane + NBR"],
    badge: "Best Seller",
  },
  {
    id: "bucket-sk-001",
    category: "Bucket",
    name: "Bucket Cylinder Seal Kit",
    description:
      "Precision-engineered bucket cylinder seal kit. Designed for high-cycle applications with superior abrasion resistance.",
    brands: ["Komatsu", "Hitachi", "CAT", "Kobelco", "Hyundai"],
    image: "/products/DSC01267.webp",
    specs: ["Pressure rating: 320 bar", "Temperature: -25°C to 110°C", "Material: FKM + PTFE"],
    badge: "OEM Compatible",
  },
  {
    id: "arm-sk-001",
    category: "Arm",
    name: "Arm Cylinder Seal Kit",
    description:
      "Complete arm/stick cylinder seal kit. Features triple-lip wiper seals for maximum contamination resistance in harsh environments.",
    brands: ["Komatsu", "Hitachi", "Doosan", "JCB", "Volvo"],
    image: "/products/DSC01271.webp",
    specs: ["Pressure rating: 340 bar", "Temperature: -30°C to 115°C", "Material: Polyurethane"],
    badge: "Triple-Lip Seal",
  },
  {
    id: "center-joint-001",
    category: "Center Joint",
    name: "Center Joint Seal Kit",
    description:
      "360° rotary seal kit for excavator center joints / swivel joints. Ensures leak-free rotation under continuous hydraulic flow.",
    brands: ["Komatsu", "Hitachi", "CAT", "Hyundai", "Kobelco"],
    image: "/products/DSC01273.webp",
    specs: ["Rotary rated", "Pressure: 250 bar", "Material: NBR + PTFE glide ring"],
  },
  {
    id: "cylinder-sk-001",
    category: "Hydraulic Cylinder",
    name: "Hydraulic Cylinder Seal Kit",
    description:
      "Universal hydraulic cylinder seal kit. Comprehensive set including piston seal, rod seal, wiper, O-rings and backup rings.",
    brands: ["Komatsu", "CAT", "JCB", "Volvo", "XCMG", "Liugong"],
    image: "/products/DSC01274.webp",
    specs: ["Complete kit: 12 pieces", "Pressure: 380 bar", "Material: Composite"],
    badge: "Full Kit",
  },
  {
    id: "boom-sk-002",
    category: "Boom",
    name: "Mini Excavator Boom Seal Kit",
    description:
      "Compact boom seal kit for mini excavators. Fits 1T–8T machines. Includes all seals, O-rings, and back-up rings.",
    brands: ["Yanmar", "JCB", "Case", "Hyundai", "Kobelco"],
    image: "/products/DSC01275.webp",
    specs: ["For 1T–8T machines", "Pressure: 280 bar", "Temperature: -20°C to 100°C"],
  },
  {
    id: "track-adj-001",
    category: "Track Adjuster",
    name: "Track Adjuster Seal Kit",
    description:
      "Track tensioner / recoil spring unit seal kit. Prevents grease blow-out under tension. Extends track component life significantly.",
    brands: ["Komatsu", "Hitachi", "CAT", "Doosan", "Sany"],
    image: "/products/DSC01276.webp",
    specs: ["Grease rated", "Dual-lip design", "Material: NBR high-pressure"],
  },
  {
    id: "bucket-sk-002",
    category: "Bucket",
    name: "Heavy-Duty Bucket Seal Kit",
    description:
      "Extra heavy-duty bucket kit for rock-breaking and quarry applications. Double-reinforced wiper seals, extended service life.",
    brands: ["CAT", "Komatsu", "Hitachi", "Volvo", "Doosan"],
    image: "/products/DSC01278.webp",
    specs: ["Rock-breaking rated", "Pressure: 380 bar", "Heavy-duty wipers"],
    badge: "Heavy Duty",
  },
  {
    id: "arm-sk-002",
    category: "Arm",
    name: "Long-Reach Arm Seal Kit",
    description:
      "Specialized seal kit for long-reach excavator configurations. Engineered for extended stroke lengths and deep dredging applications.",
    brands: ["Komatsu", "Hitachi", "Kobelco", "Doosan"],
    image: "/products/DSC01281.webp",
    specs: ["Long-reach rated", "Pressure: 320 bar", "Extended stroke design"],
  },
  {
    id: "cylinder-sk-002",
    category: "Hydraulic Cylinder",
    name: "Dozer Blade Cylinder Kit",
    description:
      "Hydraulic cylinder seal kit for bulldozer and grading blade tilt/lift cylinders. Full kit with high-pressure piston seals.",
    brands: ["Komatsu", "CAT", "Hitachi", "Case"],
    image: "/products/DSC01282.webp",
    specs: ["Blade cylinder spec", "Pressure: 350 bar", "Complete 14-piece kit"],
  },
  {
    id: "center-joint-002",
    category: "Center Joint",
    name: "Large Excavator Center Joint Kit",
    description:
      "Center joint seal kit for 20T–50T class excavators. High-capacity rotary seals for continuous high-flow hydraulic circuits.",
    brands: ["Komatsu PC300", "Hitachi ZX350", "CAT 330", "Volvo EC350"],
    image: "/products/DSC01283.webp",
    specs: ["20T–50T class", "Flow rate: 400 L/min", "Multi-circuit: 6 ports"],
    badge: "Large Class",
  },
  {
    id: "boom-sk-003",
    category: "Boom",
    name: "20T–30T Class Boom Seal Kit",
    description:
      "Boom cylinder seal kit for medium-large 20T–30T excavator class. Compatible with Komatsu PC200-8, PC210, PC220 series.",
    brands: ["Komatsu PC200-8", "Komatsu PC210", "Hitachi ZX200", "CAT 320"],
    image: "/products/DSC01284.webp",
    specs: ["20T–30T class", "Pressure: 360 bar", "Material: Premium PU + NBR"],
  },
];
