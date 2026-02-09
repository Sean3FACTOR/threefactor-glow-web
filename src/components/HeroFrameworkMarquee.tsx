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

const FrameworkCard = ({ item }: { item: FrameworkItem }) => (
  <div className="flex items-center justify-center h-20 w-[150px] flex-shrink-0 grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:[filter:brightness(1)_saturate(1)]">
    {item.logo ? (
      <img
        src={item.logo}
        alt={item.name}
        className="max-h-16 max-w-[140px] object-contain brightness-0 invert transition-all duration-500 hover:brightness-100 hover:invert-0"
        style={{ filter: "brightness(0) invert(1)" }}
        onMouseEnter={(e) => {
          (e.target as HTMLImageElement).style.filter =
            "brightness(1) invert(0) sepia(1) saturate(5) hue-rotate(350deg)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLImageElement).style.filter = "brightness(0) invert(1)";
        }}
      />
    ) : (
      <span
        className="font-['Inter'] font-bold text-xl uppercase tracking-tighter text-white/50 transition-colors duration-500 hover:text-[#F36F21]"
      >
        {item.name}
      </span>
    )}
  </div>
);

const HeroFrameworkMarquee = () => {
  const doubledFrameworks = [...frameworks, ...frameworks];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "520px" }}
    >
      {/* Top fade mask */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-24"
        style={{
          background: "linear-gradient(to bottom, #3B3B39, transparent)",
        }}
      />
      {/* Bottom fade mask */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24"
        style={{
          background: "linear-gradient(to top, #3B3B39, transparent)",
        }}
      />

      {/* Scrolling columns */}
      <div className="flex items-start justify-center gap-6 h-full">
        {/* Column 1 - scrolls up */}
        <div className="vertical-marquee-up flex flex-col items-center gap-10 hover:[animation-play-state:paused]">
          {doubledFrameworks.map((fw, i) => (
            <FrameworkCard key={`col1-${i}`} item={fw} />
          ))}
        </div>
        {/* Column 2 - scrolls down */}
        <div className="vertical-marquee-down flex flex-col items-center gap-10 hover:[animation-play-state:paused]">
          {[...doubledFrameworks].reverse().map((fw, i) => (
            <FrameworkCard key={`col2-${i}`} item={fw} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroFrameworkMarquee;
