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
  const cx = 250;
  const cy = 250;
  const radius = 175;
  const logoSize = 52;
  const centerSize = 80;

  const positions = frameworks.map((_, i) => {
    const angle = (i * 2 * Math.PI) / frameworks.length - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });

  return (
    <div className="w-full flex items-center justify-center">
      <svg viewBox="0 0 500 500" className="w-full max-w-[500px] h-auto">
        {/* Subtle outer ring */}
        <circle cx={cx} cy={cy} r={radius + 10} fill="none" stroke="#F36F2120" strokeWidth="1" />
        <circle cx={cx} cy={cy} r={radius - 10} fill="none" stroke="#F36F2110" strokeWidth="0.5" strokeDasharray="4 4" />

        {/* Connecting lines from each logo to center */}
        {positions.map((pos, i) => (
          <line
            key={`line-${i}`}
            x1={cx}
            y1={cy}
            x2={pos.x}
            y2={pos.y}
            stroke="#F36F21"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
        ))}

        {/* Small glowing dots at connection points */}
        {positions.map((pos, i) => (
          <circle
            key={`dot-${i}`}
            cx={pos.x}
            cy={pos.y}
            r="3"
            fill="#F36F21"
            opacity="0.6"
          />
        ))}

        {/* Central hub */}
        <circle cx={cx} cy={cy} r={centerSize} fill="#2A2A28" stroke="#F36F21" strokeWidth="2" />
        <circle cx={cx} cy={cy} r={centerSize - 6} fill="none" stroke="#F36F2140" strokeWidth="0.5" />

        {/* Padlock icon in center */}
        <g transform={`translate(${cx}, ${cy - 12})`}>
          {/* Lock body */}
          <rect x="-16" y="0" width="32" height="24" rx="2" fill="#F36F21" />
          {/* Lock shackle */}
          <path d="M-10,-2 L-10,-12 A10,10 0 0,1 10,-12 L10,-2" fill="none" stroke="#F36F21" strokeWidth="3" strokeLinecap="round" />
          {/* Keyhole */}
          <circle cx="0" cy="10" r="4" fill="#2A2A28" />
          <rect x="-2" y="12" width="4" height="6" fill="#2A2A28" />
        </g>

        {/* RFP SECURED text */}
        <text x={cx} y={cy + 30} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="'Open Sans', sans-serif" letterSpacing="2">
          RFP SECURED
        </text>

        {/* Framework logos in orbit */}
        {frameworks.map((fw, i) => {
          const pos = positions[i];
          const half = logoSize / 2;
          return (
            <image
              key={fw.name}
              href={fw.logo}
              x={pos.x - half}
              y={pos.y - half}
              width={logoSize}
              height={logoSize}
              preserveAspectRatio="xMidYMid meet"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default HeroHubSpoke;
