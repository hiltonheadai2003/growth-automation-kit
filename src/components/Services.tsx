import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageSquare, Calendar, Settings } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useParallaxTilt } from "@/hooks/useScrollReveal";

const ServiceMarquee = () => {
  const items = ["AI Call Automation", "Chatbot Setup", "Workflow Automation", "Custom IT Solutions", "24/7 Support", "Smart Scheduling"];
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-12 border-y border-border mb-16">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-4xl sm:text-5xl md:text-6xl font-display font-bold text-transparent"
            style={{
              WebkitTextStroke: "1px hsl(var(--foreground) / 0.2)",
            }}
          >
            {item}
            <span className="mx-8 text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const tiltRef = useParallaxTilt();
  return (
    <div ref={tiltRef} className={className} style={{ transition: "transform 0.2s ease-out" }}>
      {children}
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "AI Call Automation",
      description: "Never miss a customer call again. Our Twilio-powered AI handles incoming calls, takes messages, and routes urgent requests 24/7.",
      features: ["Automated call answering", "Smart call routing", "Message transcription", "24/7 availability"],
      color: "primary",
    },
    {
      icon: MessageSquare,
      title: "Chatbot Setup & Training",
      description: "Engage customers instantly with intelligent chatbots that understand context and provide helpful responses.",
      features: ["Custom chatbot design", "Natural conversation flow", "Multi-platform support", "Continuous learning"],
      color: "secondary",
    },
    {
      icon: Calendar,
      title: "Workflow Automation",
      description: "Streamline scheduling, reminders, and routine tasks so your team can focus on delivering great service.",
      features: ["Appointment scheduling", "Automated reminders", "Follow-up sequences", "Calendar integration"],
      color: "accent",
    },
    {
      icon: Settings,
      title: "Custom IT Automation",
      description: "Tailored automation solutions that fit your unique business needs and existing workflows.",
      features: ["Custom integrations", "API development", "Legacy system updates", "Scalable solutions"],
      color: "primary",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return { bg: "bg-primary/10", text: "text-primary", glow: "glow-primary" };
      case "secondary":
        return { bg: "bg-secondary/10", text: "text-secondary", glow: "glow-secondary" };
      case "accent":
        return { bg: "bg-accent/10", text: "text-accent", glow: "" };
      default:
        return { bg: "bg-primary/10", text: "text-primary", glow: "glow-primary" };
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <ScrollReveal>
              <h2 className="font-display font-bold text-foreground mb-4">
                Our <span className="text-primary">Services</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive automation solutions designed to transform how your business handles customer communication
              </p>
            </ScrollReveal>
          </div>

          {/* Marquee Ticker */}
          <ServiceMarquee />

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              const Icon = service.icon;

              return (
                <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                  <TiltCard>
                    <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 gradient-card border-2 hover:border-primary/50 group h-full">
                      <CardHeader>
                        <div className={`w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center mb-4 ${colorClasses.glow}`}>
                          <Icon className={`w-8 h-8 ${colorClasses.text}`} />
                        </div>
                        <CardTitle className="text-2xl font-display group-hover:-translate-y-1 transition-transform duration-300">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${colorClasses.bg}`} />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
