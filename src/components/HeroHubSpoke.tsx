import isoLogo from "@/assets/frameworks/iso-blk.png";
import soc2Logo from "@/assets/frameworks/soc2-blk.png";
import pciLogo from "@/assets/frameworks/pci-blk.png";
import fedrampLogo from "@/assets/frameworks/fedramp-blk.png";
import nis2Logo from "@/assets/frameworks/nis2-blk.png";
import doraLogo from "@/assets/frameworks/dora-blk.png";
import cmmcLogo from "@/assets/frameworks/cmmc-blk.png";
import nistLogo from "@/assets/frameworks/nist.png";

const frameworks = [
  { name: "ISO 27001", logo: isoLogo },
  { name: "SOC 2", logo: soc2Logo },
  { name: "PCI DSS", logo: pciLogo },
  { name: "FedRAMP", logo: fedrampLogo },
  { name: "NIS2", logo: nis2Logo },
  { name: "DORA", logo: doraLogo },
  { name: "CMMC", logo: cmmcLogo },
  { name: "NIST", logo: nistLogo },
];

const HeroHubSpoke = () => {
  const size = 600;
  const cx = size / 2;
  const cy = size / 2;
  const orbitRadius = 220;
  const logoBox = 90;

  const positions = frameworks.map((_, i) => {
    const angle = (i * 2 * Math.PI) / frameworks.length - Math.PI / 2;
    return {
      x: cx + orbitRadius * Math.cos(angle),
      y: cy + orbitRadius * Math.sin(angle),
    };
  });

  return (
    <div className="w-full flex items-center justify-center">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[560px] h-auto">
        {/* Central contract document */}
        <g transform={`translate(${cx}, ${cy})`}>
          {/* Document shape */}
          <rect x="-48" y="-62" width="96" height="124" rx="4" fill="#2A2A28" stroke="#F36F21" strokeWidth="2.5" />
          {/* Inner border */}
          <rect x="-40" y="-54" width="80" height="108" rx="2" fill="none" stroke="#F36F2130" strokeWidth="0.75" />
          {/* Padlock shackle */}
          <path d="M-14,-16 L-14,-28 A14,14 0 0,1 14,-28 L14,-16" fill="none" stroke="#F36F21" strokeWidth="3.5" strokeLinecap="round" />
          {/* Padlock body */}
          <rect x="-20" y="-18" width="40" height="30" rx="3" fill="#F36F21" />
          {/* Keyhole */}
          <circle cx="0" cy="-6" r="5" fill="#2A2A28" />
          <rect x="-2.5" y="-3" width="5" height="10" rx="1" fill="#2A2A28" />
          {/* Document lines below lock */}
          <line x1="-24" y1="26" x2="24" y2="26" stroke="#F36F2140" strokeWidth="1.5" />
          <line x1="-18" y1="34" x2="18" y2="34" stroke="#F36F2130" strokeWidth="1" />
          <line x1="-20" y1="42" x2="20" y2="42" stroke="#F36F2120" strokeWidth="1" />
        </g>

        {/* Framework logos in orbit — no lines */}
        {frameworks.map((fw, i) => {
          const pos = positions[i];
          const half = logoBox / 2;
          return (
            <image
              key={fw.name}
              href={fw.logo}
              x={pos.x - half}
              y={pos.y - half}
              width={logoBox}
              height={logoBox}
              preserveAspectRatio="xMidYMid meet"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default HeroHubSpoke;
