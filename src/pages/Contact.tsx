import { useState } from "react";
import { Mail, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — no backend yet
    alert("Message sent (placeholder). Thank you!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen page-gradient grid-bg">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container max-w-2xl mx-auto px-6">
          <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">Contact</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg mb-2">
            Interested in partnerships or early collaboration? Reach out.
          </p>
          <a
            href="mailto:hello@oraino.ai"
            className="inline-flex items-center gap-2 text-primary text-sm hover:underline mb-12"
          >
            <Mail className="w-4 h-4" />
            hello@oraino.ai
          </a>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm text-secondary-foreground block mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-secondary-foreground block mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-secondary-foreground block mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
