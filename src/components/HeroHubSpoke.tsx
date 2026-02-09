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
  { name: "FedRAMP", logo: fedrampLogo, scale: 1 },
  { name: "NIS2", logo: nis2Logo, scale: 1 },
  { name: "DORA", logo: doraLogo, scale: 1 },
  { name: "CMMC", logo: cmmcLogo, scale: 1 },
  { name: "NIST", logo: nistLogo, scale: 1 },
];

const HeroHubSpoke = () => {
  return (
    <div className="relative w-full aspect-square max-w-[580px] mx-auto">
      {/* Central contract icon */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className="w-[100px] h-[130px] md:w-[120px] md:h-[155px] flex items-center justify-center"
          style={{
            backgroundColor: "#2A2A28",
            border: "3px solid #F36F21",
            borderRadius: "4px",
            boxShadow: "0 0 30px rgba(243,111,33,0.2)",
          }}
        >
          <svg viewBox="0 0 40 52" className="w-10 h-12 md:w-12 md:h-14">
            {/* Shackle */}
            <path
              d="M12,22 L12,12 A8,8 0 0,1 28,12 L28,22"
              fill="none"
              stroke="#F36F21"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Body */}
            <rect x="8" y="21" width="24" height="18" rx="2" fill="#F36F21" />
            {/* Keyhole */}
            <circle cx="20" cy="28" r="3.5" fill="#2A2A28" />
            <rect x="18.5" y="30" width="3" height="5" rx="0.5" fill="#2A2A28" />
          </svg>
        </div>
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
