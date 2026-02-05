import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-architecture.jpg";
import greyLogo from "@/assets/3F_Grey.png";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
      {/* Background Image with increased transparency */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Steel suspension cables - architectural precision" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        {/* Gradient fade to white on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* 3F Logo Overlay - Right Side (Grey) */}
      <div className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 z-[5] hidden md:block">
        <img 
          src={greyLogo} 
          alt="3FACTOR" 
          className="w-64 lg:w-80 xl:w-96 opacity-100"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Headline - Split into two lines */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
            Don't Let a Security Audit Kill Your $1M Contract.
            <span className="block mt-2">Secure the Deal with Unshakeable Compliance.</span>
          </h1>
          
          {/* Subhead */}
          <p className="text-xl md:text-2xl text-muted-foreground mt-8 max-w-2xl leading-relaxed">
            Stop letting 'revenue-blocking gaps' stall your growth. We help service providers navigate regulated data to unlock new markets and secure executive confidence.
          </p>

          
          {/* CTA Button - Grey default → Orange hover */}
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
      </div>
    </section>
  );
};

export default Hero;
