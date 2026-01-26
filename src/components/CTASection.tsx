import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Radar, Flag } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Calendar,
    label: "Book your Strategy Session.",
    number: "1",
  },
  {
    icon: Radar,
    label: "We identify your revenue-blocking gaps.",
    number: "2",
  },
  {
    icon: Flag,
    label: "You get a roadmap to compliance and confidence.",
    number: "3",
  },
];

const CTASection = () => {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to scale?
          </h2>
          <p className="text-xl text-muted-foreground mb-20">
            Don't wait for a breach or a failed audit.
          </p>

          {/* Horizontal Timeline / Roadmap */}
          <div className="relative flex items-start justify-center mb-20">
            {/* Connecting Orange Line */}
            <div className="absolute top-10 left-1/4 right-1/4 h-[3px] bg-primary hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full max-w-3xl">
              {steps.map((step) => (
                <div key={step.label} className="flex flex-col items-center relative">
                  {/* Icon Circle with Orange Badge */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full border-2 border-border bg-background flex items-center justify-center relative z-10 shadow-lg">
                      <step.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                    </div>
                    {/* Orange Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center z-20 shadow-md">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Label */}
                  <p className="text-sm font-medium text-foreground text-center max-w-[200px]">
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button - Large and Centered */}
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xl px-16 py-8 shadow-xl hover:shadow-2xl transition-all group"
            >
              Get Your Roadmap
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
