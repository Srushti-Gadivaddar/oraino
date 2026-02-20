const VisionSection = () => {
  return (
    <section id="vision" className="py-28 relative">
      <div className="glow-line mb-20" />
      <div className="glow-orb glow-orb-cyan w-[300px] h-[300px] -bottom-20 left-0 animate-pulse-glow" />

      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">Vision</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          Building Infrastructure for Intelligent Systems.
        </h2>
        <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
          <p>
            We believe autonomous intelligence will power the next generation of software and machines.
          </p>
          <p>
            Oraino is building the infrastructure layer that enables reliable, scalable, and memory-aware intelligent systems across industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
