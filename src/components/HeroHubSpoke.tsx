import isoLogo from "@/assets/frameworks/iso-blk.png";
import soc2Logo from "@/assets/frameworks/soc2-blk.png";
import pciLogo from "@/assets/frameworks/pci-blk.png";
import fedrampLogo from "@/assets/frameworks/fedramp-blk.png";
import nis2Logo from "@/assets/frameworks/nis2-blk.png";
import doraLogo from "@/assets/frameworks/dora-blk.png";
import cmmcLogo from "@/assets/frameworks/cmmc-blk.png";
import nistLogo from "@/assets/frameworks/nist.png";

const frameworks = [
  { name: "ISO 27001", logo: isoLogo, scale: 1 },
  { name: "SOC 2", logo: soc2Logo, scale: 1 },
  { name: "PCI DSS", logo: pciLogo, scale: 2 },
  { name: "FedRAMP", logo: fedrampLogo, scale: 2.7 },
  { name: "NIS2", logo: nis2Logo, scale: 1 },
  { name: "DORA", logo: doraLogo, scale: 1 },
  { name: "CMMC", logo: cmmcLogo, scale: 1.15 },
  { name: "NIST", logo: nistLogo, scale: 1 },
];

const HeroHubSpoke = () => {
  return (
    <div className="relative w-full aspect-square max-w-[580px] mx-auto">
      {/* Central contract icon */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <svg viewBox="0 0 40 52" className="w-[100px] h-[130px] md:w-[120px] md:h-[155px]">
          {/* Page fold corner */}
          <path d="M28,0 L40,12 L28,12 Z" fill="#3B3B39" />
          <path d="M0,0 L28,0 L28,12 L40,12 L40,52 L0,52 Z" fill="#2A2A28" stroke="#F36F21" strokeWidth="1.5" />
          {/* Contract lines */}
          <line x1="6" y1="10" x2="22" y2="10" stroke="#F36F21" strokeWidth="1.5" />
          <line x1="6" y1="16" x2="34" y2="16" stroke="#F36F21" strokeOpacity="0.6" strokeWidth="1" />
          <line x1="6" y1="21" x2="34" y2="21" stroke="#F36F21" strokeOpacity="0.6" strokeWidth="1" />
          <line x1="6" y1="26" x2="34" y2="26" stroke="#F36F21" strokeOpacity="0.6" strokeWidth="1" />
          <line x1="6" y1="31" x2="28" y2="31" stroke="#F36F21" strokeOpacity="0.4" strokeWidth="1" />
          <line x1="6" y1="36" x2="30" y2="36" stroke="#F36F21" strokeOpacity="0.4" strokeWidth="1" />
          {/* Signature line */}
          <line x1="18" y1="45" x2="34" y2="45" stroke="#F36F21" strokeWidth="1.5" />
          <circle cx="12" cy="45" r="3" fill="none" stroke="#F36F21" strokeWidth="1" />
        </svg>
      </div>

      {/* Logo orbit using absolute positioning in a circle */}
      {frameworks.map((fw, i) => {
        const angle = (i * 360) / frameworks.length - 90;
        const rad = (angle * Math.PI) / 180;
        // Position as percentage from center (50%) outward
        const orbitPercent = 42; // how far from center as % of container
        const left = 50 + orbitPercent * Math.cos(rad);
        const top = 50 + orbitPercent * Math.sin(rad);

        return (
          <div
            key={fw.name}
            className="absolute w-[60px] h-[60px] sm:w-[82px] sm:h-[82px] md:w-[105px] md:h-[105px] lg:w-[120px] lg:h-[120px] flex items-center justify-center"
            style={{ left: `${left}%`, top: `${top}%`, transform: `translate(-50%, -50%) scale(${fw.scale})` }}
          >
            <img
              src={fw.logo}
              alt={fw.name}
              className="w-full h-full object-contain"
            />
          </div>
        );
      })}
    </div>
  );
};

export default HeroHubSpoke;
