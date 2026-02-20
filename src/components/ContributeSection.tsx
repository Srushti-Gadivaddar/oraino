import { ArrowRight } from "lucide-react";

const ContributeSection = () => {
  return (
    <section className="py-28 relative">
      <div className="glow-line mb-20" />
      <div className="container max-w-3xl mx-auto px-6">
        <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">Contribute</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          Join the Mission.
        </h2>
        <div className="text-muted-foreground text-lg leading-relaxed mb-4 space-y-1">
          <p>We're early.</p>
          <p>We're building core systems.</p>
          <p>
            If you care about memory systems, distributed architecture, and intelligent infrastructure — contribute to Oraino.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Join as Contributor
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Apply as AI Systems Engineer
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContributeSection;
