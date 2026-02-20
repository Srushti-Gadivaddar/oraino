import { Brain, Cpu, Music, Car, Workflow } from "lucide-react";

const expansions = [
  { icon: Brain, label: "AI Systems" },
  { icon: Workflow, label: "Autonomous Workflows" },
  { icon: Cpu, label: "Intelligent Automation" },
  { icon: Music, label: "Music Intelligence" },
  { icon: Car, label: "Future Mobility" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="glow-line mb-20" />
      <div className="container max-w-4xl mx-auto px-6">
        <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">About</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          What is Oraino?
        </h2>
        <div className="text-muted-foreground text-lg leading-relaxed space-y-4 mb-12">
          <p>
            Oraino is building foundational infrastructure for intelligent systems.
          </p>
          <p>
            Today, we focus on a Memory Operating System for AI agents — enabling persistent context, lifecycle management, and scalable execution.
          </p>
          <p>
            Tomorrow, Oraino expands into broader intelligent infrastructure:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {expansions.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass-card rounded-lg p-4 text-center transition-colors"
            >
              <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <span className="text-xs text-secondary-foreground font-medium">{label}</span>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-lg leading-relaxed mt-8">
          Our goal is to build the core infrastructure layer for next-generation intelligent technologies.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
