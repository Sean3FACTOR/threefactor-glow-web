import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CIPTLogo from "@/assets/certifications/CIPT_logo.avif";
import CIPPLogo from "@/assets/certifications/CIPP_logo.avif";
import CCNALogo from "@/assets/certifications/CCNA_logo.avif";
import SSCPLogo from "@/assets/certifications/SSCP_logo.avif";
import AWSLogo from "@/assets/certifications/aws_partner_logo.avif";
import ISOLogo from "@/assets/certifications/ISO_logo.avif";
import CISALogo from "@/assets/certifications/CISA_logo.svg";
import CISMLogo from "@/assets/certifications/CISM_logo.svg";
import CISSPLogo from "@/assets/certifications/CISSP_logo.webp";
import PCILogo from "@/assets/certifications/PCI_logo.avif";

const certifications = [
  { name: "PCI", logo: PCILogo },
  { name: "CISSP", logo: CISSPLogo },
  { name: "CISM", logo: CISMLogo },
  { name: "CISA", logo: CISALogo },
  { name: "ISO 27001", logo: ISOLogo },
  { name: "CIPT", logo: CIPTLogo },
  { name: "CIPP", logo: CIPPLogo },
  { name: "CCNA", logo: CCNALogo },
  { name: "SSCP", logo: SSCPLogo },
  { name: "AWS Partner", logo: AWSLogo },
];

const Certifications = () => {
  return (
    <section className="py-12 border-y border-white/10" style={{ backgroundColor: "#3B3B39" }}>
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-white/50 mb-8 uppercase tracking-widest">
          Trusted Certifications & Standards
        </p>
        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {certifications.map((cert) => (
                <CarouselItem
                  key={cert.name}
                  className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="flex items-center justify-center w-full h-32 md:h-40 p-4 rounded-none border border-white/10" style={{ backgroundColor: "#646464" }}>
                    <img
                      src={cert.logo}
                      alt={`${cert.name} certification`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 md:-left-10" />
            <CarouselNext className="-right-6 md:-right-10" />
          </Carousel>
        </div>

        {/* Trusted by section - moved from Hero */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/50 uppercase tracking-widest mb-6">
            Trusted by Fortune 500 companies
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-white">15+</span>
              <span className="text-xs md:text-sm text-white/50">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-white">100+</span>
              <span className="text-xs md:text-sm text-white/50">Clients Served</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-white">Global</span>
              <span className="text-xs md:text-sm text-white/50">Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
