import { useState, useEffect, useCallback } from "react";
import cmmcLogo from "@/assets/frameworks/cmmc.png";
import fedrampLogo from "@/assets/frameworks/fedramp.svg";
import iso27001Logo from "@/assets/frameworks/iso27001.png";
import soc2Logo from "@/assets/frameworks/soc2.webp";
import doraLogo from "@/assets/frameworks/dora.png";

interface FrameworkItem {
  name: string;
  logo?: string;
}

const frameworks: FrameworkItem[] = [
  { name: "ISO 27001", logo: iso27001Logo },
  { name: "SOC 2", logo: soc2Logo },
  { name: "PCI DSS" },
  { name: "FedRAMP", logo: fedrampLogo },
  { name: "NIS2" },
  { name: "DORA", logo: doraLogo },
  { name: "CMMC", logo: cmmcLogo },
  { name: "HIPAA" },
  { name: "GDPR" },
];

const HeroFrameworkMarquee = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % frameworks.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      className="relative flex items-center justify-center w-full"
      style={{ height: "400px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Radial fade mask */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at center, transparent 50%, #3B3B39 100%)",
        }}
      />

      {/* Logo slides */}
      {frameworks.map((fw, i) => {
        const isActive = i === current;
        return (
          <div
            key={fw.name}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out"
            style={{ opacity: isActive ? 1 : 0 }}
          >
            {fw.logo ? (
              <img
                src={fw.logo}
                alt={fw.name}
                className="max-w-[350px] max-h-[200px] object-contain grayscale transition-all duration-500 hover:grayscale-0"
                style={{ filter: isActive && !isPaused ? "grayscale(1)" : undefined }}
                onMouseEnter={(e) => {
                  (e.target as HTMLImageElement).style.filter = "grayscale(0)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLImageElement).style.filter = "grayscale(1)";
                }}
              />
            ) : (
              <span className="font-['Open_Sans'] font-bold text-5xl uppercase tracking-tight text-white/40 transition-colors duration-500 hover:text-white">
                {fw.name}
              </span>
            )}
          </div>
        );
      })}

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {frameworks.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-1.5 h-1.5 transition-all duration-300"
            style={{
              backgroundColor: i === current ? "#F36F21" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroFrameworkMarquee;
