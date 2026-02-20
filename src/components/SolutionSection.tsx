import { Brain, Database, Settings, Boxes, Server } from "lucide-react";

const features = [
  { icon: Brain, label: "Long-term contextual memory" },
  { icon: Database, label: "Agent state persistence" },
  { icon: Settings, label: "Lifecycle management" },
  { icon: Boxes, label: "Modular orchestration primitives" },
  { icon: Server, label: "Scalable backend infrastructure" },
];

const SolutionSection = () => {
  return (
    <section className="py-28 relative">
      <div className="glow-line mb-20" />
      <div className="container max-w-4xl mx-auto px-6">
        <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">The Solution</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          A Foundational Memory Layer.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          Oraino provides the core primitives that autonomous agents need to remember, persist, and scale.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass-card rounded-lg p-5 flex items-start gap-4 transition-colors"
            >
              <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-secondary-foreground text-sm font-medium mt-1.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
