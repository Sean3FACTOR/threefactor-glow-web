import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ArchitectureSVG = () => (
  <svg viewBox="0 0 960 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="80" y="60" width="800" height="680" stroke="white" strokeWidth="1.5" opacity="0.15" />
    <rect x="120" y="100" width="720" height="600" stroke="white" strokeWidth="0.8" opacity="0.1" />
    {[200, 300, 400, 500, 600].map((y) => (
      <line key={`h-${y}`} x1="160" y1={y} x2="800" y2={y} stroke="white" strokeWidth="0.8" opacity="0.08" />
    ))}
    {[280, 400, 520, 640, 760].map((x) => (
      <line key={`v-${x}`} x1={x} y1="140" x2={x} y2="660" stroke="white" strokeWidth="0.8" opacity="0.08" />
    ))}
    <path d="M480 160 L720 260 L720 500 L480 640 L240 500 L240 260 Z" stroke="white" strokeWidth="2" opacity="0.2" fill="none" />
    <path d="M480 200 L680 280 L680 480 L480 600 L280 480 L280 280 Z" stroke="white" strokeWidth="1.5" opacity="0.12" fill="white" fillOpacity="0.02" />
    <rect x="360" y="280" width="240" height="80" stroke="white" strokeWidth="1.5" opacity="0.2" fill="white" fillOpacity="0.05" />
    <rect x="320" y="390" width="160" height="70" stroke="white" strokeWidth="1.5" opacity="0.15" fill="white" fillOpacity="0.04" />
    <rect x="520" y="390" width="120" height="70" stroke="white" strokeWidth="1.5" opacity="0.15" fill="white" fillOpacity="0.04" />
    <rect x="380" y="490" width="200" height="60" stroke="#F36F21" strokeWidth="2" opacity="0.6" fill="#F36F21" fillOpacity="0.08" />
    <line x1="440" y1="360" x2="400" y2="390" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="6 4" />
    <line x1="520" y1="360" x2="560" y2="390" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="6 4" />
    <line x1="400" y1="460" x2="440" y2="490" stroke="white" strokeWidth="1" opacity="0.15" strokeDasharray="6 4" />
    <line x1="580" y1="460" x2="540" y2="490" stroke="white" strokeWidth="1" opacity="0.15" strokeDasharray="6 4" />
    <circle cx="480" cy="240" r="5" fill="white" opacity="0.3" />
    <circle cx="400" cy="320" r="4" fill="white" opacity="0.2" />
    <circle cx="560" cy="320" r="4" fill="white" opacity="0.2" />
    <circle cx="480" cy="520" r="4.5" fill="#F36F21" opacity="0.5" />
    <path d="M100 80 L100 120 M80 100 L120 100" stroke="white" strokeWidth="1.5" opacity="0.2" />
    <path d="M860 80 L860 120 M840 100 L880 100" stroke="white" strokeWidth="1.5" opacity="0.2" />
    <path d="M100 720 L100 680 M80 700 L120 700" stroke="white" strokeWidth="1.5" opacity="0.2" />
    <path d="M860 720 L860 680 M840 700 L880 700" stroke="white" strokeWidth="1.5" opacity="0.2" />
  </svg>
);

const HomepageHero = () => {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#3B3B39" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight uppercase">
              Win the RFP. Own the Market.
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
              You're an IT or Operations Leader scaling into regulated markets; security shouldn't be the thing slowing you down.
            </p>
            <div className="space-y-4 mb-10">
              <p className="text-lg text-white/90 flex items-start gap-3">
                <span className="w-2 h-2 bg-white/40 rotate-45 flex-shrink-0 mt-2" />
                Scale into regulated sectors without the friction of security roadblocks.
              </p>
              <p className="text-lg text-white/90 flex items-start gap-3">
                <span className="w-2 h-2 bg-white/40 rotate-45 flex-shrink-0 mt-2" />
                Stop letting revenue-blocking gaps stall your growth.
              </p>
            </div>
            <p className="text-lg text-white/70 mb-4 max-w-xl leading-relaxed">
              We build defensible certification programs that clear RFI hurdles, satisfy auditors, and turn complex regulations into market access.
            </p>
            <p className="text-lg font-medium text-white mb-10">
              Security should accelerate growth. Not quietly sabotage it.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group text-white font-semibold transition-colors" style={{ backgroundColor: "#F36F21" }}>
                Book Your Compliance Strategy Session
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-2xl aspect-square">
              <ArchitectureSVG />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
