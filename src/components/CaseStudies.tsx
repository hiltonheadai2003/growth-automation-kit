import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, TrendingUp, Clock, Users } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      business: "Coastal Bistro",
      type: "Restaurant",
      challenge: "Missing 40+ calls daily during peak hours, losing reservations and customer trust",
      solution: "AI call automation with reservation booking and waitlist management",
      results: [
        { icon: Clock, label: "20 hrs/week saved", color: "primary" },
        { icon: TrendingUp, label: "95% call answer rate", color: "secondary" },
        { icon: Users, label: "30% more reservations", color: "accent" },
      ],
      quote: "Hilton Head AI transformed how we handle calls. We never miss a reservation now!",
      author: "Maria Santos, Owner",
    },
    {
      business: "Sunshine Salon & Spa",
      type: "Beauty & Wellness",
      challenge: "Staff overwhelmed with appointment scheduling and reminder calls",
      solution: "Chatbot for online booking + automated SMS appointment reminders",
      results: [
        { icon: Clock, label: "15 hrs/week saved", color: "primary" },
        { icon: TrendingUp, label: "60% fewer no-shows", color: "secondary" },
        { icon: Users, label: "25% increase in bookings", color: "accent" },
      ],
      quote: "Our team can now focus on clients instead of phones. Game-changer!",
      author: "Jennifer Lee, Manager",
    },
    {
      business: "Harbor Auto Shop",
      type: "Automotive Service",
      challenge: "After-hours calls going unanswered, losing emergency service opportunities",
      solution: "24/7 AI call handling with emergency routing and service scheduling",
      results: [
        { icon: Clock, label: "Available 24/7", color: "primary" },
        { icon: TrendingUp, label: "40% more service calls", color: "secondary" },
        { icon: Users, label: "$15K extra monthly revenue", color: "accent" },
      ],
      quote: "We're now capturing business we used to lose. The ROI was immediate.",
      author: "Mike Patterson, Owner",
    },
  ];

  return (
    <section id="case-studies" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Success <span className="text-accent">Stories</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              See how local businesses like yours are saving time and growing revenue with our automation solutions
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-8">
            {cases.map((caseStudy, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Left Column - Story */}
                  <div className="lg:col-span-2 p-8 sm:p-10">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-2xl sm:text-3xl mb-2">{caseStudy.business}</CardTitle>
                          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            {caseStudy.type}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{caseStudy.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-muted-foreground">{caseStudy.solution}</p>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex items-start gap-3">
                          <Quote className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-foreground italic mb-2">&ldquo;{caseStudy.quote}&rdquo;</p>
                            <p className="text-sm text-muted-foreground">— {caseStudy.author}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  {/* Right Column - Results */}
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 sm:p-10 flex flex-col justify-center">
                    <h4 className="font-bold text-foreground mb-6 text-xl">Results</h4>
                    <div className="space-y-6">
                      {caseStudy.results.map((result, resultIndex) => {
                        const Icon = result.icon;
                        return (
                          <div key={resultIndex} className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-lg bg-${result.color}/10 flex items-center justify-center flex-shrink-0`}>
                              <Icon className={`w-6 h-6 text-${result.color}`} />
                            </div>
                            <p className="font-semibold text-foreground">{result.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
