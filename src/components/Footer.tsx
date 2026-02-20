import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Documentation", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Contribute", href: "#" },
  { label: "Careers", href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-14">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-bold text-xs">O</span>
            </div>
            <span className="font-semibold text-foreground tracking-tight">Oraino</span>
          </Link>

          {/* Center links */}
          <div className="flex flex-wrap items-center gap-6">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="text-right">
            <p className="font-mono text-sm text-muted-foreground">
              © 2026 Oraino
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Building the future of intelligent infrastructure.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
