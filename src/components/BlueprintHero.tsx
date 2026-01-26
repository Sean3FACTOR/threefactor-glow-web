import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import greyLogo from "@/assets/3F_Grey.png";
import hexagonNetwork from "@/assets/hexagon-network.png";

interface BlueprintHeroProps {
  breadcrumb: string;
  headline: string;
  subhead: string;
  ctaText: string;
  ctaLink: string;
  OverlayIcon?: LucideIcon;
}

const BlueprintHero = ({
  breadcrumb,
  headline,
  subhead,
  ctaText,
  ctaLink,
  OverlayIcon,
}: BlueprintHeroProps) => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Architectural Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content with breathing room */}
          <div className="max-w-xl lg:pr-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-medium text-primary">Services</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-muted-foreground">{breadcrumb}</span>
            </div>

            {/* Headline - Max 4rem, scales down on mobile */}
            <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-foreground mb-6 leading-[1.1]">
              {headline}
            </h1>

            {/* Subhead - Readable width */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-[60ch]">
              {subhead}
            </p>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link to={ctaLink}>
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right Side - Layered Brand Visual */}
          <div className="relative flex items-center justify-center min-h-[350px] lg:min-h-[450px]">
            {/* Layer 1: Hexagon Network Texture - Background Pattern */}
            <div 
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage: `url(${hexagonNetwork})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
              }}
              aria-hidden="true"
            />

            {/* Layer 2: 3F Logo - Brand Anchor Watermark (15% opacity) */}
            <img
              src={greyLogo}
              alt=""
              className="absolute w-56 lg:w-72 opacity-15 select-none pointer-events-none"
              aria-hidden="true"
            />

            {/* Layer 3: Orange Vector Icon Overlay - Service Identifier */}
            {OverlayIcon && (
              <div className="relative z-10">
                <OverlayIcon
                  className="w-28 h-28 lg:w-36 lg:h-36 text-primary"
                  strokeWidth={1.25}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueprintHero;
