import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ProductsSection from "@/components/landing/ProductsSection";
import TechnicalBenefitsSection from "@/components/landing/TechnicalBenefitsSection";
import SegmentsSection from "@/components/landing/SegmentsSection";
import MapSection from "@/components/landing/MapSection";
import ProcessSection from "@/components/landing/ProcessSection";
import CredibilitySection from "@/components/landing/CredibilitySection";
import FormSection from "@/components/landing/FormSection";
import FaqSection from "@/components/landing/FaqSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <TechnicalBenefitsSection />
      <SegmentsSection />
      <MapSection />
      <ProcessSection />
      <CredibilitySection />
      <FormSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Index;
