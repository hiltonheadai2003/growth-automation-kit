import { Search, Wrench, Rocket, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "We Analyze Your Business",
      description:
        "We start by understanding your unique needs, customer pain points, and existing workflows to design the perfect automation solution.",
      color: "primary",
    },
    {
      icon: Wrench,
      number: "02",
      title: "Build Your Automation",
      description:
        "Our team develops and configures your custom AI tools, chatbots, and workflows, integrating seamlessly with your existing systems.",
      color: "secondary",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Launch & Train",
      description:
        "We deploy your automation, train your team on how to use it, and ensure everything runs smoothly from day one.",
      color: "accent",
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "You Save Time & Money",
      description:
        "Watch as your automation handles routine tasks 24/7, freeing your team to focus on growth and exceptional customer service.",
      color: "primary",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return { border: "border-primary", bg: "bg-primary", text: "text-primary", gradient: "from-primary to-primary/50" };
      case "secondary":
        return { border: "border-secondary", bg: "bg-secondary", text: "text-secondary", gradient: "from-secondary to-secondary/50" };
      case "accent":
        return { border: "border-accent", bg: "bg-accent", text: "text-accent", gradient: "from-accent to-accent/50" };
      default:
        return { border: "border-primary", bg: "bg-primary", text: "text-primary", gradient: "from-primary to-primary/50" };
    }
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="font-display font-bold text-foreground mb-4">
                How It <span className="text-secondary">Works</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Getting started with AI automation is easier than you think. Here's our proven process:
              </p>
            </ScrollReveal>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary via-accent to-primary opacity-20" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((step, index) => {
                const colorClasses = getColorClasses(step.color);
                const Icon = step.icon;

                return (
                  <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                    <div className="relative group">
                      {/* Step Card */}
                      <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/50 h-full flex flex-col">
                        {/* Number Badge */}
                        <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full ${colorClasses.bg} flex items-center justify-center font-mono font-bold text-white shadow-lg`}>
                          {step.number}
                        </div>

                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorClasses.gradient} flex items-center justify-center mb-6 glow-primary`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Content */}
                        <h3 className="font-display font-bold text-foreground mb-3 group-hover:-translate-y-1 transition-transform duration-300">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed flex-grow">{step.description}</p>
                      </div>

                      {/* Connection Arrow (Mobile) */}
                      {index < steps.length - 1 && (
                        <div className="lg:hidden flex justify-center py-4">
                          <div className={`w-1 h-8 bg-gradient-to-b ${colorClasses.gradient} opacity-30`} />
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
