import { Brain, Database, Settings, Boxes } from "lucide-react";

const features = [
  { icon: Brain, label: "Long-term contextual memory" },
  { icon: Database, label: "Agent state persistence" },
  { icon: Settings, label: "Lifecycle management" },
  { icon: Boxes, label: "Modular orchestration primitives" },
];

const SolutionSection = () => {
  return (
    <section className="py-32 relative">
      <div className="glow-line mb-20" />
      <div className="container max-w-3xl mx-auto px-6">
        <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">The Solution</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          A Foundational Memory Layer.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          Oraino provides the core primitives that autonomous agents need to remember, persist, and scale.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-colors"
            >
              <Icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-secondary-foreground text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
