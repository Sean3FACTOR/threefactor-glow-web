import cmmc from "@/assets/frameworks/cmmc.png";
import fedramp from "@/assets/frameworks/fedramp.svg";
import iso27001 from "@/assets/frameworks/iso27001.png";
import soc2 from "@/assets/frameworks/soc2.webp";
import dora from "@/assets/frameworks/dora.png";

const frameworks = [
  { name: "ISO 27001", logo: iso27001 },
  { name: "SOC 2", logo: soc2 },
  { name: "PCI DSS", logo: null },
  { name: "FedRAMP", logo: fedramp },
  { name: "NIS2", logo: null },
  { name: "DORA", logo: dora },
  { name: "CMMC", logo: cmmc },
  { name: "HIPAA", logo: null },
  { name: "GDPR", logo: null },
];

const FrameworkMarquee = () => {
  const items = [...frameworks, ...frameworks];

  return (
    <section
      className="relative overflow-hidden py-6"
      style={{ backgroundColor: "rgba(59, 59, 57, 0.95)" }}
    >
      {/* Left fade mask */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-32"
        style={{
          background:
            "linear-gradient(to right, rgba(59,59,57,1) 0%, rgba(59,59,57,0) 100%)",
        }}
      />
      {/* Right fade mask */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-32"
        style={{
          background:
            "linear-gradient(to left, rgba(59,59,57,1) 0%, rgba(59,59,57,0) 100%)",
        }}
      />

      <div className="marquee-track group flex w-max items-center gap-16 hover:[animation-play-state:paused]">
        {items.map((fw, i) => (
          <div
            key={`${fw.name}-${i}`}
            className="flex shrink-0 items-center gap-4 transition-all duration-300 group/item"
          >
            {fw.logo && (
              <img
                src={fw.logo}
                alt={fw.name}
                className="h-10 w-10 object-contain grayscale transition-all duration-500 hover:grayscale-0 hover:brightness-100"
                style={{ filter: "grayscale(100%) brightness(0.8)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLImageElement).style.filter =
                    "grayscale(0%) brightness(1) drop-shadow(0 0 6px #F36F21)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLImageElement).style.filter =
                    "grayscale(100%) brightness(0.8)";
                }}
              />
            )}
            <span
              className="text-sm font-bold uppercase tracking-tighter text-white/70 transition-colors duration-300 hover:text-white"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {fw.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrameworkMarquee;
