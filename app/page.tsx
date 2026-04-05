import HeroSection from "@/components/HeroSection";
import BrandStorySection from "@/components/BrandStorySection";
import ProductShowcase from "@/components/ProductShowcase";
import WhyLeakolock from "@/components/WhyLeakolock";
import CompatibilitySection from "@/components/CompatibilitySection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandStorySection />
      <ProductShowcase />
      <WhyLeakolock />
      <CompatibilitySection />
      <CTASection />
    </>
  );
}
