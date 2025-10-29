import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageSquare, Calendar, Settings } from "lucide-react";

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
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          glow: "glow-primary",
        };
      case "secondary":
        return {
          bg: "bg-secondary/10",
          text: "text-secondary",
          glow: "glow-secondary",
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          glow: "",
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          glow: "glow-primary",
        };
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive automation solutions designed to transform how your business handles customer communication
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              const Icon = service.icon;

              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 gradient-card border-2 hover:border-primary/50"
                >
                  <CardHeader>
                    <div className={`w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center mb-4 ${colorClasses.glow}`}>
                      <Icon className={`w-8 h-8 ${colorClasses.text}`} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
