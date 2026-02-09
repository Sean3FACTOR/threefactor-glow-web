import { useState } from "react";
import cmmcLogo from "@/assets/frameworks/cmmc2.png";
import doraLogo from "@/assets/frameworks/dora2.png";
import fedrampLogo from "@/assets/frameworks/fedramp2.svg";
import soc2Logo from "@/assets/frameworks/soc2-2.webp";
import pciLogo from "@/assets/frameworks/pci2.png";
import isoLogo from "@/assets/frameworks/iso27001-2.png";
import nis2Logo from "@/assets/frameworks/nis2.png";

const frameworks = [
  { name: "ISO 27001", logo: isoLogo },
  { name: "SOC 2", logo: soc2Logo },
  { name: "PCI DSS", logo: pciLogo },
  { name: "FedRAMP", logo: fedrampLogo },
  { name: "NIS2", logo: nis2Logo },
  { name: "DORA", logo: doraLogo },
  { name: "CMMC", logo: cmmcLogo },
];

const HeroFrameworkMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the list to create seamless loop
  const items = [...frameworks, ...frameworks];

  return (
    <div
      className="relative w-full h-[350px] md:h-[600px] overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex flex-col"
        style={{
          animation: "marquee-vertical 28s linear infinite",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {items.map((fw, i) => (
          <div
            key={`${fw.name}-${i}`}
            className="h-[100px] md:h-[140px] w-full flex-shrink-0 flex items-center justify-center px-16 md:px-24"
          >
            <img
              src={fw.logo}
              alt={fw.name}
              className="max-h-[50%] max-w-[50%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFrameworkMarquee;
