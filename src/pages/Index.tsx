import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import VisionSection from "@/components/VisionSection";
import ContributeSection from "@/components/ContributeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-bg">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <VisionSection />
      <ContributeSection />
      <Footer />
    </div>
  );
};

export default Index;
