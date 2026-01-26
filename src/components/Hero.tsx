import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-architecture.jpg";
import greyLogo from "@/assets/3F_Grey.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Architectural precision - steel cables" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>

      {/* Large 3F Logo on the right */}
      <div className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 z-[5] hidden md:block">
        <img 
          src={greyLogo} 
          alt="3Factor" 
          className="w-64 lg:w-80 xl:w-96 opacity-100"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Tagline */}
          <span className="text-sm text-primary uppercase tracking-[0.3em] font-semibold mb-6 block">
            Enterprise Security Advisory
          </span>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] tracking-tight">
            <span className="block text-foreground">Expert Security</span>
            <span className="block text-foreground">Strategies Built</span>
            <span className="block text-muted-foreground">to Last.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-light">
            Move beyond checklists. We architect security programs that protect your value and accelerate your growth.
          </p>

          {/* CTA */}
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all group"
            >
              Book Your Strategy Session
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
