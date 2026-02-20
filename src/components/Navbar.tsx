import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Technology", href: "/#technology" },
  { label: "Vision", href: "/#vision" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">O</span>
          </div>
          <span className="font-semibold text-foreground text-lg tracking-tight">Oraino</span>
        </Link>

        {/* Center nav links — desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) =>
            href.startsWith("/") && !href.startsWith("/#") ? (
              <Link
                key={label}
                to={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  if (location.pathname === "/" && href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(href);
                  }
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            )
          )}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-3 py-1.5 text-xs rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 w-36"
            />
          </div>
          <Link
            to="/contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5"
          >
            Login
          </Link>
          <Link
            to="/contact"
            className="text-sm px-4 py-1.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Register
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 pt-2 space-y-4">
          {navLinks.map(({ label, href }) =>
            href.startsWith("/") && !href.startsWith("/#") ? (
              <Link
                key={label}
                to={href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  if (location.pathname === "/" && href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(href);
                  }
                }}
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                {label}
              </a>
            )
          )}
          <div className="flex gap-3 pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted-foreground"
            >
              Login
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm px-4 py-1.5 rounded-md bg-primary text-primary-foreground font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
