import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Radar, Flag } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Calendar,
    label: "Book Strategy Session",
    number: "1",
  },
  {
    icon: Radar,
    label: "Identify Gaps",
    number: "2",
  },
  {
    icon: Flag,
    label: "Get Roadmap",
    number: "3",
  },
];

const CTASection = () => {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-sm text-primary uppercase tracking-[0.3em] font-semibold">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-6 mb-6">
            Ready to Scale?
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Stop treating security as a blocker. Start using it to close bigger deals, faster.
          </p>

          {/* Flight Plan - Three Steps */}
          <div className="relative flex items-center justify-center mb-16">
            {/* Connecting Line */}
            <div className="absolute top-10 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-3xl">
              {steps.map((step, index) => (
                <div key={step.label} className="flex flex-col items-center relative">
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 md:relative md:top-0 md:right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center z-10 md:hidden">
                    {step.number}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="w-20 h-20 rounded-full border-2 border-primary bg-background flex items-center justify-center relative z-10 shadow-lg">
                    <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    {/* Desktop Number */}
                    <div className="hidden md:flex absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Label */}
                  <span className="text-sm font-medium text-foreground mt-4 text-center">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-12 py-8 shadow-xl hover:shadow-2xl transition-all group"
            >
              Get Your Roadmap
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          {/* Trust Line */}
          <p className="text-sm text-muted-foreground mt-8">
            No obligation. 30-minute call. Direct access to senior advisors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
