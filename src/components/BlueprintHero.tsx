import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hexagonGraphic from "@/assets/hexagon-network-hero.png";

interface BlueprintHeroProps {
  breadcrumb: string;
  headline: string;
  subhead: string;
  ctaText: string;
  ctaLink: string;
}

const BlueprintHero = ({
  breadcrumb,
  headline,
  subhead,
  ctaText,
  ctaLink
}: BlueprintHeroProps) => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden" style={{ backgroundColor: "#3B3B39" }}>
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-medium" style={{ color: "#F36F21" }}>Services</span>
              <span className="text-white/60">/</span>
              <span className="text-sm text-white">{breadcrumb}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold text-white mb-8 leading-[1.1]">
              {headline}
            </h1>

            <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-[50ch]">
              {subhead}
            </p>

            <Button asChild size="lg" className="text-white font-semibold transition-colors" style={{ backgroundColor: "#F36F21" }}>
              <Link to={ctaLink}>
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="col-span-12 lg:col-span-6 hidden lg:flex items-center justify-center">
            <img src={hexagonGraphic} alt="" className="w-full max-w-[64rem] opacity-60 scale-[2.5]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueprintHero;
