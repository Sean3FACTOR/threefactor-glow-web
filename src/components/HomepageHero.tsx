import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


const HomepageHero = () => {
  return (
    <section className="pt-14 pb-16" style={{ backgroundColor: "#3B3B39" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl pt-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight uppercase leading-[1.1]">
              <span className="block">Win the RFP.</span>
              <span className="block">OWN THE MARKET.</span>
              <span className="block">GET CERTIFIED.</span>
            </h1>
            <p className="text-base md:text-xl mb-8 leading-relaxed text-primary-foreground">
              Don't let security compliance certification(s) slow you down.
            </p>
            <div className="space-y-4 mb-10">
              <p className="text-base md:text-lg text-white flex items-start gap-3">
                <span className="w-2 h-2 rotate-45 flex-shrink-0 mt-2" style={{ backgroundColor: "#F36F21" }} />
                Scale into regulated sectors without the friction of security roadblocks.
              </p>
              <p className="text-base md:text-lg text-white flex items-start gap-3">
                <span className="w-2 h-2 rotate-45 flex-shrink-0 mt-2" style={{ backgroundColor: "#F36F21" }} />
                Stop letting revenue-blocking gaps stall your growth.
              </p>
            </div>
            <p className="text-base md:text-lg mb-4 leading-relaxed text-primary-foreground">
              We build defensible certification programs that clear RFI hurdles, satisfy auditors, and turn complex regulations into market access.
            </p>
            <p className="text-base md:text-lg font-medium text-white mb-10">
              Security should close the deal, not kill the momentum.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="group text-white font-semibold transition-colors w-full sm:w-auto hover:opacity-90"
                style={{ backgroundColor: "#646464" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#F36F21")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#646464")
                }
              >
                Book Your Compliance Strategy Session
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
