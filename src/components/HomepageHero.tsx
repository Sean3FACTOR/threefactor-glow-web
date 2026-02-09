import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hexagonNetwork from "@/assets/hexagon-network-hero.png";
const ArchitectureSVG = () => <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="40" y="30" width="400" height="340" stroke="white" strokeWidth="1" opacity="0.15" />
    <rect x="60" y="50" width="360" height="300" stroke="white" strokeWidth="0.5" opacity="0.1" />
    {[100, 150, 200, 250, 300].map(y => <line key={`h-${y}`} x1="80" y1={y} x2="400" y2={y} stroke="white" strokeWidth="0.5" opacity="0.08" />)}
    {[140, 200, 260, 320, 380].map(x => <line key={`v-${x}`} x1={x} y1="70" x2={x} y2="330" stroke="white" strokeWidth="0.5" opacity="0.08" />)}
    <path d="M240 80 L360 130 L360 250 L240 320 L120 250 L120 130 Z" stroke="white" strokeWidth="1.5" opacity="0.2" fill="none" />
    <path d="M240 100 L340 140 L340 240 L240 300 L140 240 L140 140 Z" stroke="white" strokeWidth="1" opacity="0.12" fill="white" fillOpacity="0.02" />
    <rect x="180" y="140" width="120" height="40" stroke="white" strokeWidth="1" opacity="0.2" fill="white" fillOpacity="0.05" />
    <rect x="160" y="195" width="80" height="35" stroke="white" strokeWidth="1" opacity="0.15" fill="white" fillOpacity="0.04" />
    <rect x="260" y="195" width="60" height="35" stroke="white" strokeWidth="1" opacity="0.15" fill="white" fillOpacity="0.04" />
    <rect x="190" y="245" width="100" height="30" stroke="#F36F21" strokeWidth="1.5" opacity="0.6" fill="#F36F21" fillOpacity="0.08" />
    <line x1="220" y1="180" x2="200" y2="195" stroke="white" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
    <line x1="260" y1="180" x2="280" y2="195" stroke="white" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
    <line x1="200" y1="230" x2="220" y2="245" stroke="white" strokeWidth="0.8" opacity="0.15" strokeDasharray="4 3" />
    <line x1="290" y1="230" x2="270" y2="245" stroke="white" strokeWidth="0.8" opacity="0.15" strokeDasharray="4 3" />
    <circle cx="240" cy="120" r="3" fill="white" opacity="0.3" />
    <circle cx="200" cy="160" r="2" fill="white" opacity="0.2" />
    <circle cx="280" cy="160" r="2" fill="white" opacity="0.2" />
    <circle cx="240" cy="260" r="2.5" fill="#F36F21" opacity="0.5" />
    <path d="M50 40 L50 60 M40 50 L60 50" stroke="white" strokeWidth="1" opacity="0.2" />
    <path d="M430 40 L430 60 M420 50 L440 50" stroke="white" strokeWidth="1" opacity="0.2" />
    <path d="M50 360 L50 340 M40 350 L60 350" stroke="white" strokeWidth="1" opacity="0.2" />
    <path d="M430 360 L430 340 M420 350 L440 350" stroke="white" strokeWidth="1" opacity="0.2" />
  </svg>;
const HomepageHero = () => {
  return <section className="pt-4 pb-16" style={{
    backgroundColor: "#3B3B39"
  }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-x-4 items-center">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight uppercase whitespace-nowrap">
              <span className="block">Win the RFP.</span>
              <span className="block">Own the Market.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed text-primary-foreground">
              You're an IT or Operations Leader scaling into regulated markets; security shouldn't be the thing slowing you down.
            </p>
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
            <p className="text-lg mb-4 max-w-xl leading-relaxed text-primary-foreground">
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
          <div className="col-span-12 lg:col-span-5 flex items-center justify-start">
            <div className="w-full max-w-3xl scale-[2] origin-center">
              <img src={hexagonNetwork} alt="Hexagonal network architecture" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HomepageHero;