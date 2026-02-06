import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomepageHero = () => {
  return (
    <section className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Scattered layout with 12-col grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Main content block - offset for asymmetry */}
          <div className="col-span-12 md:col-span-8 md:col-start-1">
            {/* Technical ID */}
            <span className="tech-id block mb-6">[SYS-HERO-001]</span>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight uppercase">
              Win the RFP. Own the Market.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              You're a founder or executive scaling into regulated markets; security shouldn't be the thing slowing you down.
            </p>
          </div>

          {/* Value props block - staggered */}
          <div className="col-span-12 md:col-span-7 md:col-start-2 md:mt-4">
            <div className="space-y-3 mb-10 text-foreground border-l border-border/30 pl-6">
              <p className="text-lg">
                Scale into regulated sectors without the friction of security roadblocks.
              </p>
              <p className="text-lg">
                Stop letting revenue-blocking gaps stall your growth.
              </p>
            </div>
          </div>

          {/* Supporting copy block - further offset */}
          <div className="col-span-12 md:col-span-6 md:col-start-3 md:mt-2">
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
                className="group bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
              >
                Book Your Compliance Strategy Session
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Connecting line visual */}
        <div className="hidden md:block relative h-px w-full mt-16">
          <div className="absolute left-0 right-[50%] top-0 h-px bg-border/30" />
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
