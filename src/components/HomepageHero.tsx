import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroFrameworkMarquee from "@/components/HeroFrameworkMarquee";
const HomepageHero = () => {
  return <section className="pt-2 pb-16" style={{
    backgroundColor: "#3B3B39"
  }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-x-4 items-center">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight uppercase whitespace-nowrap">
              <span className="block">Win the RFP.</span>
              <span className="block">OWN THE MARKET.
GET CERTIFIED.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-primary-foreground">Don't let security compliance certification(s) slow you down.</p>
            <div className="space-y-4 mb-10">
              <p className="text-lg text-white flex items-start gap-3">
                <span className="w-2 h-2 rotate-45 flex-shrink-0 mt-2 bg-primary text-primary" />
                Scale into regulated sectors without the friction of security roadblocks.
              </p>
              <p className="text-lg text-white flex items-start gap-3">
                <span className="w-2 h-2 rotate-45 flex-shrink-0 mt-2 text-primary bg-primary" />
                Stop letting revenue-blocking gaps stall your growth.
              </p>
            </div>
            <p className="text-lg mb-4 leading-relaxed text-primary-foreground">
              We build defensible certification programs that clear RFI hurdles, satisfy auditors, and turn complex regulations into market access.
            </p>
            <p className="text-lg font-medium text-white mb-10">
              Security should accelerate growth. Not quietly sabotage it.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group text-white font-semibold transition-colors" style={{
              backgroundColor: "#F36F21"
            }}>
                Book Your Compliance Strategy Session
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-center justify-center">
            <HeroFrameworkMarquee />
          </div>
        </div>
      </div>
    </section>;
};
export default HomepageHero;