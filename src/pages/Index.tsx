import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TechnologySection from "@/components/TechnologySection";
import VisionSection from "@/components/VisionSection";
import ContributeSection from "@/components/ContributeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen page-gradient grid-bg">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProblemSection />
      <SolutionSection />
      <TechnologySection />
      <VisionSection />
      <ContributeSection />
      <Footer />
    </div>
  );
};

export default Index;
