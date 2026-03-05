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
        {/* Dark cool-toned overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(15,23,42,0.92) 0%, rgba(20,30,50,0.85) 40%, rgba(25,35,55,0.80) 100%)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 text-center">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight uppercase leading-[1.1] text-white">
              <span className="block">Win the RFP.</span>
              <span className="block">OWN THE MARKET.</span>
              <span className="block">GET CERTIFIED.</span>
            </h1>
            <p className="text-base md:text-xl mb-8 leading-relaxed text-white font-bold uppercase">
              Don't let security compliance certification(s) slow you down.
            </p>
            <div className="mb-10 max-w-3xl mx-auto rounded-lg px-8 py-6" style={{ backgroundColor: "rgba(40,50,65,0.45)", border: "1px solid rgba(200,210,220,0.2)", backdropFilter: "blur(4px)" }}>
              <p className="text-base md:text-lg leading-relaxed text-white/90 font-bold text-left">
                We build defensible certification programs that clear RFI hurdles, satisfy auditors, and turn complex regulations into market access.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white/90 font-bold text-left mt-7">
                Scale into regulated sectors without the friction of security roadblocks.
                <br />
                <br />
                Stop letting revenue-blocking gaps stall your growth.
              </p>
            </div>
            <Link to="/contact" className="inline-block">
              <Button
                size="lg"
                className="group font-semibold transition-all text-white"
                style={{ backgroundColor: "#3B3B39", border: "1px solid #3B3B39" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#3B3B39";
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
