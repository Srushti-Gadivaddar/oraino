import { HardDrive, Cpu, Layers, GitBranch, Server } from "lucide-react";

const modules = [
  { icon: HardDrive, title: "Memory Engine", desc: "Persistent long-term & working memory for agents" },
  { icon: Cpu, title: "Agent Runtime", desc: "Execution environment for autonomous agent processes" },
  { icon: Layers, title: "State Manager", desc: "Structured state tracking across agent lifecycles" },
  { icon: GitBranch, title: "Orchestration Layer", desc: "Multi-agent coordination and workflow routing" },
  { icon: Server, title: "Scalable Infrastructure", desc: "Distributed backend for production-grade deployments" },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-28 relative">
      <div className="glow-line mb-20" />

      {/* Decorative orb */}
      <div className="glow-orb glow-orb-primary w-[350px] h-[350px] top-0 right-0 animate-pulse-glow" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">Technology</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Core Architecture
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-14 max-w-2xl">
          A modular, system-oriented architecture designed for intelligent agent infrastructure.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass-card rounded-xl p-6 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-base mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Simple architecture diagram placeholder */}
        <div className="mt-16 glass-card rounded-xl p-8 flex items-center justify-center min-h-[140px]">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {modules.map(({ title }, i) => (
              <div key={title} className="flex items-center gap-3">
                <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20">
                  {title}
                </span>
                {i < modules.length - 1 && (
                  <span className="text-muted-foreground text-xs">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
