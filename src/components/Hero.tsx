import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-boardroom.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              Don't Let a Security Audit Kill Your $1M Contract.
            </h1>
            
            {/* Subhead */}
            <p className="text-xl md:text-2xl text-muted-foreground mt-8 max-w-2xl leading-relaxed">
              Stop letting "revenue-blocking gaps" stall your growth. We help service providers navigate regulated data to unlock new markets and secure executive confidence.
            </p>

            {/* CTA Button */}
            <div className="mt-12">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#646464] hover:bg-[#f36f21] text-white font-semibold text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all group"
                >
                  Book Your Strategy Session
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Image */}
          <div className="hidden lg:block relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Executive in modern boardroom" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent corner */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
