import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import enterpriseSkyline from "@/assets/homepage/enterprise-skyline.jpg";

const HomepageHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center" style={{ overflow: "hidden" }}>
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={enterpriseSkyline}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Dark overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(59,59,57,0.88) 0%, rgba(59,59,57,0.72) 50%, rgba(59,59,57,0.55) 100%)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 text-center">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight uppercase leading-[1.1] text-white">
              <span className="block">Win the RFP.</span>
              <span className="block">OWN THE MARKET.</span>
              <span className="block">GET CERTIFIED.</span>
            </h1>
            <p className="text-base md:text-xl mb-8 leading-relaxed text-white/70 font-bold">
              Don't let security compliance certification(s) slow you down.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-white p-6" style={{ border: "1px solid rgba(59,59,57,0.1)" }}>
                <div className="space-y-3">
                  <p className="text-sm md:text-base flex items-center justify-center gap-3" style={{ color: "#3B3B39" }}>
                    <span className="w-2 h-2 rotate-45 flex-shrink-0" style={{ backgroundColor: "#F36F21" }} />
                    Scale into regulated sectors without the friction of security roadblocks.
                  </p>
                  <p className="text-sm md:text-base flex items-center justify-center gap-3" style={{ color: "#3B3B39" }}>
                    <span className="w-2 h-2 rotate-45 flex-shrink-0" style={{ backgroundColor: "#F36F21" }} />
                    Stop letting revenue-blocking gaps stall your growth.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 flex items-center" style={{ border: "1px solid rgba(59,59,57,0.1)" }}>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: "#3B3B39" }}>
                  We build defensible certification programs that clear RFI hurdles, satisfy auditors, and turn complex regulations into market access.
                </p>
              </div>
            </div>
            <Link to="/contact" className="inline-block">
              <Button
                size="lg"
                className="group font-semibold transition-all text-white"
                style={{ backgroundColor: "#F36F21", border: "1px solid #F36F21" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#F36F21";
                }}
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
