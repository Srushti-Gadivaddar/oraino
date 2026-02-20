import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Decorative orbs */}
      <div className="glow-orb glow-orb-primary w-[500px] h-[500px] -top-40 -right-40 animate-pulse-glow" />
      <div className="glow-orb glow-orb-cyan w-[400px] h-[400px] -bottom-32 -left-32 animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Neural decoration lines */}
      <div className="absolute top-20 left-[15%] neural-line h-40 opacity-30 animate-float" />
      <div className="absolute top-32 right-[20%] neural-line h-32 opacity-20 animate-float" style={{ animationDelay: "3s" }} />

      {/* Floating abstract circles */}
      <div className="absolute top-1/4 right-[10%] w-2 h-2 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 left-[12%] w-3 h-3 rounded-full bg-accent/20 animate-float" style={{ animationDelay: "2.5s" }} />
      <div className="absolute top-1/3 left-[25%] w-1.5 h-1.5 rounded-full bg-cyan/25 animate-float" style={{ animationDelay: "4s" }} />

      <div className="container max-w-4xl mx-auto px-6 text-center py-32 relative z-10">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-6 animate-fade-up">
          Memory OS for AI
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 animate-fade-up-delay-1">
          Oraino — The Memory Operating System for AI&nbsp;Agents
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up-delay-2">
          Persistent memory, lifecycle control, and scalable infrastructure for autonomous intelligent systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
          <a
            href="#technology"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Explore Technology
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
