import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours to schedule your free demo.",
      });
      setFormData({ name: "", email: "", phone: "", business: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="font-display font-bold text-foreground mb-4">
                Get <span className="text-primary">Started</span> Today
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to automate your business and save time? Book a free demo or send us a message.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email Us", content: <a href="mailto:hello@hiltonheadai.com" className="text-muted-foreground hover:text-primary transition-colors">hello@hiltonheadai.com</a>, color: "primary", glow: "glow-primary" },
                { icon: Phone, title: "Call Us", content: <a href="tel:+18435551234" className="text-muted-foreground hover:text-secondary transition-colors">(843) 555-1234</a>, color: "secondary", glow: "glow-secondary" },
                { icon: MapPin, title: "Visit Us", content: <p className="text-muted-foreground">Hilton Head Island, SC<br />Serving the Lowcountry</p>, color: "accent", glow: "" },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                  <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-${item.color}/10 flex items-center justify-center flex-shrink-0 ${item.glow}`}>
                          <item.icon className={`w-6 h-6 text-${item.color}`} />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                          {item.content}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Contact Form */}
            <ScrollReveal delay={0.2} className="lg:col-span-2">
              <Card className="border-2 border-border shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-display">Book Your Free Demo</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll schedule a personalized demo of our automation solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    action="https://formsubmit.co/hiltonheadai2003@gmail.com"
                    method="POST"
                    className="space-y-6"
                  >
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://hiltonhead-ai.com/thank-you" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground font-mono">
                          Full Name *
                        </label>
                        <Input id="name" name="name" placeholder="John Smith" required className="min-h-[44px]" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="business" className="text-sm font-medium text-foreground font-mono">
                          Business Name *
                        </label>
                        <Input id="business" name="business" placeholder="Your Business" required className="min-h-[44px]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground font-mono">
                          Email Address *
                        </label>
                        <Input id="email" name="email" type="email" placeholder="john@business.com" required className="min-h-[44px]" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground font-mono">
                          Phone Number
                        </label>
                        <Input id="phone" name="phone" type="tel" placeholder="(843) 555-0123" className="min-h-[44px]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground font-mono">
                        Tell us about your needs
                      </label>
                      <Textarea id="message" name="message" placeholder="What challenges are you facing? What would you like to automate?" rows={5} />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full btn-interactive">
                      Send Message
                      <Send className="w-5 h-5" />
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We typically respond within 24 hours
                    </p>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
