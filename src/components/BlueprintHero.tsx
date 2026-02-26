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
    <section className="pt-14 pb-16 relative overflow-hidden" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-12 gap-x-4 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-medium" style={{ color: "#F36F21" }}>Services</span>
              <span style={{ color: "rgba(59,59,57,0.4)" }}>/</span>
              <span className="text-sm" style={{ color: "#3B3B39" }}>{breadcrumb}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold mb-8 leading-[1.1] uppercase" style={{ color: "#3B3B39" }}>
              {headline}
            </h1>

            <p className="text-xl md:text-2xl mb-10 leading-relaxed" style={{ color: "#646464" }}>
              {subhead}
            </p>

            <Button asChild size="lg" className="text-white font-semibold transition-colors" style={{ backgroundColor: "#3B3B39" }}>
              <Link to={ctaLink}>
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="col-span-12 lg:col-span-5 hidden lg:flex items-center justify-start">
            <div className="w-full">
              <img src={hexagonGraphic} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueprintHero;
