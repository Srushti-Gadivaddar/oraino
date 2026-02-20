import { ExternalLink, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="container max-w-4xl mx-auto px-6 text-center py-32">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-6 animate-fade-up">
          Memory OS for AI
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 animate-fade-up-delay-1">
          Oraino — The Memory Operating System for AI&nbsp;Agents
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up-delay-2">
          Persistent memory, lifecycle control, and scalable infrastructure for autonomous AI systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" />
            View Documentation
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            <Github className="w-4 h-4" />
            Contribute on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
