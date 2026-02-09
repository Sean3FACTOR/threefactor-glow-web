import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  return <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Architectural Split Layout */}
        <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-medium text-primary">Services</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-muted-foreground">{breadcrumb}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-foreground mb-6 leading-[1.1] whitespace-nowrap">
              {headline}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-[60ch]">
              {subhead}
            </p>

            <Button asChild size="lg" className="bg-[#646464] hover:bg-[#f36f21] text-white font-semibold transition-colors">
              <Link to={ctaLink}>
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
        </div>
      </div>
    </section>;
};
export default BlueprintHero;