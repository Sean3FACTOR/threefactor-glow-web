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
          {/* SOW label */}
          <text x="20" y="9" textAnchor="middle" fill="#F36F21" fontSize="5" fontWeight="bold" fontFamily="monospace">SOW</text>
          {/* Contract lines */}
          <line x1="6" y1="14" x2="34" y2="14" stroke="#F36F21" strokeOpacity="0.6" strokeWidth="1" />
          <line x1="6" y1="19" x2="34" y2="19" stroke="#F36F21" strokeOpacity="0.6" strokeWidth="1" />
          <line x1="6" y1="24" x2="34" y2="24" stroke="#F36F21" strokeOpacity="0.6" strokeWidth="1" />
          <line x1="6" y1="29" x2="28" y2="29" stroke="#F36F21" strokeOpacity="0.4" strokeWidth="1" />
          <line x1="6" y1="34" x2="30" y2="34" stroke="#F36F21" strokeOpacity="0.4" strokeWidth="1" />
          {/* Dollar icon */}
          <circle cx="12" cy="43" r="5" fill="none" stroke="#F36F21" strokeWidth="1" />
          <text x="12" y="45.5" textAnchor="middle" fill="#F36F21" fontSize="7" fontWeight="bold" fontFamily="monospace">$</text>
          {/* Signature line */}
          <line x1="20" y1="45" x2="34" y2="45" stroke="#F36F21" strokeWidth="1.5" />
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
