import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import executiveDiscussion from "@/assets/homepage/executive-discussion.jpg";

const HomepageHero = () => {
  return (
    <section className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Scattered layout with 12-col grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Main content block - left side */}
          <div className="col-span-12 md:col-span-7">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight uppercase">
              Win the RFP. Own the Market.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              You're a founder or executive scaling into regulated markets; security shouldn't be the thing slowing you down.
            </p>

            {/* Value props */}
            <div className="space-y-4 mb-10 text-foreground">
              <p className="text-lg flex items-start gap-3">
                <span className="w-2 h-2 bg-muted-foreground rotate-45 flex-shrink-0 mt-2" />
                Scale into regulated sectors without the friction of security roadblocks.
              </p>
              <p className="text-lg flex items-start gap-3">
                <span className="w-2 h-2 bg-muted-foreground rotate-45 flex-shrink-0 mt-2" />
                Stop letting revenue-blocking gaps stall your growth.
              </p>
            </div>

            {/* Supporting copy */}
            <p className="text-lg text-muted-foreground mb-4 max-w-xl leading-relaxed">
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

          {/* Image block - right side */}
          <div className="col-span-12 md:col-span-5 md:mt-12 relative group">
            <div className="border border-border/10 hover:border-primary transition-colors overflow-hidden h-full">
              <img 
                src={executiveDiscussion} 
                alt="Executive strategy discussion"
                className="w-full h-full min-h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
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
