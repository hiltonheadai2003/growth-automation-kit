import { Bot, Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const FooterMarquee = () => {
  const text = "HILTON HEAD AI • SMART AUTOMATION • ";
  const doubled = text.repeat(8);

  return (
    <div className="overflow-hidden py-8 border-b border-border">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="text-6xl sm:text-7xl md:text-8xl font-display font-bold text-transparent" style={{ WebkitTextStroke: "1px hsl(var(--foreground) / 0.08)" }}>
          {doubled}
        </span>
        <span className="text-6xl sm:text-7xl md:text-8xl font-display font-bold text-transparent" style={{ WebkitTextStroke: "1px hsl(var(--foreground) / 0.08)" }}>
          {doubled}
        </span>
      </div>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <FooterMarquee />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-primary">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">Hilton Head AI</h3>
                <p className="text-xs text-muted-foreground font-mono">Smart Automation for Local Business Growth</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Helping local businesses save time and scale effortlessly with affordable AI-powered automation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", id: "about" },
                { label: "Services", id: "services" },
                { label: "How It Works", id: "how-it-works" },
                { label: "Case Studies", id: "case-studies" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@hiltonheadai.com" className="hover:text-primary transition-colors text-sm">
                  hello@hiltonheadai.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+18435551234" className="hover:text-secondary transition-colors text-sm">
                  (843) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-sm">
                  Hilton Head Island, SC
                  <br />
                  Serving the Lowcountry
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left font-mono">
              © {currentYear} Hilton Head AI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-all duration-300 hover:scale-110 inline-block">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-all duration-300 hover:scale-110 inline-block">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
