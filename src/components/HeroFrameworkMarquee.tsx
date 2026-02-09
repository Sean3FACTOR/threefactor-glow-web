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
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
      {frameworks.map((fw) => (
        <div
          key={fw.name}
          className="h-[80px] md:h-[100px] flex items-center justify-center p-3 md:p-4"
        >
          <img
            src={fw.logo}
            alt={fw.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroFrameworkMarquee;
