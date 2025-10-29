import { Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Hilton Head AI
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              We help local businesses thrive by automating their customer communication, so they can focus on what
              matters most—growing their business.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-lg mb-12 gradient-card border border-border">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">Our Mission</h3>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Helping local businesses save time and scale effortlessly with affordable AI-powered automation. We
              believe every small business deserves access to cutting-edge technology that was once only available to
              enterprise companies.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 glow-primary">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Local Focus</h4>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in understanding the unique needs of local businesses, from restaurants to salons and
                everything in between.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 glow-secondary">
                <Zap className="w-7 h-7 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">AI Expertise</h4>
              <p className="text-muted-foreground leading-relaxed">
                Our team combines deep AI knowledge with practical business automation experience to deliver solutions
                that actually work.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Human-Centered</h4>
              <p className="text-muted-foreground leading-relaxed">
                Technology should serve people, not replace them. We build automation that enhances your team's
                capabilities and customer relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
