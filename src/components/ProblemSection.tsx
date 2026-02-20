const ProblemSection = () => {
  return (
    <section className="py-32 relative">
      <div className="glow-line mb-20" />
      <div className="container max-w-3xl mx-auto px-6">
        <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">The Problem</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          AI Agents Forget.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Modern AI agents lack persistent memory, lifecycle management, and structured state control. Developers struggle with context resets, fragile workflows, and scaling limitations.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
