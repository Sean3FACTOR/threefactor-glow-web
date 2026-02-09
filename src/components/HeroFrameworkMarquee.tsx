import { useState, useEffect, useCallback } from "react";
import cmmcLogo from "@/assets/frameworks/cmmc2.png";
import doraLogo from "@/assets/frameworks/dora2.png";
import fedrampLogo from "@/assets/frameworks/fedramp2.svg";
import soc2Logo from "@/assets/frameworks/soc2-2.webp";
import pciLogo from "@/assets/frameworks/pci2.svg";
import isoLogo from "@/assets/frameworks/iso27001-2.png";
import nis2Logo from "@/assets/frameworks/nis2.png";

interface FrameworkItem {
  name: string;
  logo: string;
}

const frameworks: FrameworkItem[] = [
  { name: "ISO 27001", logo: isoLogo },
  { name: "SOC 2", logo: soc2Logo },
  { name: "PCI DSS", logo: pciLogo },
  { name: "FedRAMP", logo: fedrampLogo },
  { name: "NIS2", logo: nis2Logo },
  { name: "DORA", logo: doraLogo },
  { name: "CMMC", logo: cmmcLogo },
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
      className="relative flex items-center justify-center w-full h-[450px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Logo slides */}
      {frameworks.map((fw, i) => (
        <div
          key={fw.name}
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={fw.logo}
            alt={fw.name}
            className="max-h-[350px] max-w-[350px] object-contain"
          />
        </div>
      ))}

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
