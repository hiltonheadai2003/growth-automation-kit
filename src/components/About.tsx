import { Target, Users, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="font-display font-bold text-foreground mb-4">
                About Hilton Head AI
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                We help local businesses thrive by automating their customer communication, so they can focus on what
                matters most—growing their business.
              </p>
            </ScrollReveal>
          </div>

          {/* Mission Statement */}
          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-lg mb-12 gradient-card border border-border">
              <h3 className="font-display font-bold text-foreground mb-6 text-center">Our Mission</h3>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                Helping local businesses save time and scale effortlessly with affordable AI-powered automation. We
                believe every small business deserves access to cutting-edge technology that was once only available to
                enterprise companies.
              </p>
            </div>
          </ScrollReveal>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Local Focus",
                desc: "We specialize in understanding the unique needs of local businesses, from restaurants to salons and everything in between.",
                glow: "glow-primary",
                iconColor: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: Zap,
                title: "AI Expertise",
                desc: "Our team combines deep AI knowledge with practical business automation experience to deliver solutions that actually work.",
                glow: "glow-secondary",
                iconColor: "text-secondary",
                bgColor: "bg-secondary/10",
              },
              {
                icon: Users,
                title: "Human-Centered",
                desc: "Technology should serve people, not replace them. We build automation that enhances your team's capabilities and customer relationships.",
                glow: "",
                iconColor: "text-accent",
                bgColor: "bg-accent/10",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border group">
                  <div className={`w-14 h-14 ${item.bgColor} rounded-lg flex items-center justify-center mb-6 ${item.glow}`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-foreground mb-3 group-hover:-translate-y-1 transition-transform duration-300">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
