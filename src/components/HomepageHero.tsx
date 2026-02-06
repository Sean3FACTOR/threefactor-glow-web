import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomepageHero = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Win the RFP. Own the Market.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            You're a founder or executive scaling into regulated markets; security shouldn't be the thing slowing you down.
          </p>

          {/* Value Props */}
          <div className="space-y-3 mb-10 text-foreground">
            <p className="text-lg">
              Scale into regulated sectors without the friction of security roadblocks.
            </p>
            <p className="text-lg">
              Stop letting revenue-blocking gaps stall your growth.
            </p>
          </div>

          {/* Supporting Copy */}
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl leading-relaxed">
            We build unshakeable compliance frameworks that shorten sales cycles, clear RFP hurdles, and secure executive confidence.
          </p>

          <p className="text-lg font-medium text-foreground mb-10">
            Security should accelerate growth. Not quietly sabotage it.
          </p>

          {/* CTA */}
          <Link to="/contact">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-[hsl(var(--ring))] text-primary-foreground transition-colors"
            >
              Book Your Compliance Strategy Session
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
