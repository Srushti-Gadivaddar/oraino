import { AlertTriangle } from "lucide-react";

const struggles = [
  "Context resets",
  "Fragile multi-agent workflows",
  "Poor memory recall",
  "Scaling limitations",
];

const ProblemSection = () => {
  return (
    <section className="py-28 relative">
      <div className="glow-line mb-20" />
      <div className="container max-w-4xl mx-auto px-6">
        <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">The Problem</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          AI Agents Forget.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Modern AI agents lack persistent memory, structured state control, and reliable lifecycle management.
        </p>
        <p className="text-muted-foreground text-base mb-4">Developers struggle with:</p>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {struggles.map((item) => (
            <div key={item} className="flex items-center gap-3 glass-card rounded-lg p-4 transition-colors">
              <AlertTriangle className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm text-secondary-foreground">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-lg font-medium italic">
          Without infrastructure, intelligence remains temporary.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
