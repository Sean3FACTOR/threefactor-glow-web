import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Linkedin, X } from "lucide-react";

import haley from "@/assets/team/haley_1.avif";
import jonathan from "@/assets/team/jonathan_1.jpg";
import kelsee from "@/assets/team/kelsee_1.jpg";
import koert from "@/assets/team/koert_1.jpg";
import marcus from "@/assets/team/marcus_1.jpg";
import mason from "@/assets/team/mason_1.jpg";
import michel from "@/assets/team/michel_1.jpg";
import ricardo from "@/assets/team/ricardo_1.jpg";
import spyro from "@/assets/team/spyro_1.avif";
import tania from "@/assets/team/tania_1.jpg";

const teamMembers = [
  {
    name: "Spyro Malaspinas",
    role: "Principal",
    image: spyro,
    linkedin: "",
    bio: "With over 15 years leading global security programmes, Spyro founded 3Factor to bridge the gap between compliance and real-world resilience. He has personally led recovery efforts for six of the ten largest breaches in North America.",
    featured: true,
  },
  {
    name: "Marcus Atkins",
    role: "Director of Compliance Services",
    image: marcus,
    linkedin: "",
    bio: "Marcus leads the compliance practice with deep expertise across SOC 2, ISO 27001, and emerging frameworks. His strategic vision ensures clients build programmes that scale with their growth.",
  },
  {
    name: "Jonathan Kiernan",
    role: "Director of Cyber Risk & Strategy",
    image: jonathan,
    linkedin: "",
    bio: "Jonathan brings a decade of experience in risk management and regulatory compliance across financial services. He excels at translating complex regulatory requirements into actionable security roadmaps.",
  },
  {
    name: "Tania Nicholas",
    role: "Director of PCI Compliance Services",
    image: tania,
    linkedin: "",
    bio: "Tania leads the PCI practice, guiding organisations through the complexities of payment card security. Her deep knowledge of PCI DSS ensures clients achieve and maintain compliance with confidence.",
  },
  {
    name: "Ricardo Patino",
    role: "Senior Consultant",
    image: ricardo,
    linkedin: "",
    bio: "Ricardo is a CISSP-certified security strategist focused on enterprise risk and governance. He has guided dozens of organisations through their first SOC 2 and ISO 27001 certifications.",
  },
  {
    name: "Michel de Leeuw",
    role: "Principal Consultant",
    image: michel,
    linkedin: "",
    bio: "A seasoned principal consultant with deep expertise in ISO 27001, SOC 2, and PCI DSS. Michel brings a methodical, client-first approach to every engagement.",
  },
  {
    name: "Koert van der Veer",
    role: "Senior Consultant",
    image: koert,
    linkedin: "",
    bio: "Koert specialises in cloud security architecture and compliance automation. His engineering background bridges technical implementation and audit-ready documentation.",
  },
  {
    name: "Mason Clarke",
    role: "Consultant",
    image: mason,
    linkedin: "",
    bio: "Mason specialises in cloud-native security across AWS and Azure environments. He helps organisations build secure-by-design architectures.",
  },
  {
    name: "Haley Whitfield",
    role: "Consultant",
    image: haley,
    linkedin: "",
    bio: "Haley brings expertise in privacy regulations including GDPR, CCPA, and HIPAA. She helps organisations build privacy programmes that protect both customers and business interests.",
  },
  {
    name: "Kelsee Martin",
    role: "Consultant",
    image: kelsee,
    linkedin: "",
    bio: "Kelsee is a compliance operations specialist who streamlines audit preparation and evidence collection. Her process-driven approach reduces the burden on internal teams by up to 60%.",
  },
];

const featured = teamMembers.find((m) => m.featured);
const rest = teamMembers.filter((m) => !m.featured);
const ITEMS_PER_PAGE = 4;

const TeamGrid = () => {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(rest.length / ITEMS_PER_PAGE);
  const visible = rest.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  const prev = useCallback(() => setPage((p) => (p > 0 ? p - 1 : totalPages - 1)), [totalPages]);
  const next = useCallback(() => setPage((p) => (p < totalPages - 1 ? p + 1 : 0)), [totalPages]);

  const LinkedInIcon = ({ className }: { className?: string }) => (
    <Linkedin size={18} className={className} style={{ color: "#F36F21" }} />
  );

  return (
    <section className="py-16 md:py-24 px-4" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2
          className="text-2xl md:text-4xl font-bold mb-14 text-center uppercase"
          style={{ color: "#3B3B39" }}
        >
          Meet Your Guides
        </h2>

        {/* Featured principal — centered, larger */}
        {featured && (
          <div className="flex flex-col items-center mb-14">
            <div
              className="w-48 md:w-56 aspect-[3/4] overflow-hidden border border-[rgba(59,59,57,0.1)] rounded-sm cursor-pointer group"
              onClick={() => setSelectedMember(featured)}
            >
              <img
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3
              className="text-base font-bold mt-4 text-center"
              style={{ color: "#3B3B39" }}
            >
              {featured.name}
            </h3>
            <p
              className="text-sm mt-1 text-center"
              style={{ color: "#F36F21" }}
            >
              {featured.role}
            </p>
            {featured.linkedin && (
              <a href={featured.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2">
                <LinkedInIcon />
              </a>
            )}
          </div>
        )}

        {/* Carousel of remaining members — 4 per row like reference */}
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-14 top-[40%] -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full border border-[rgba(59,59,57,0.12)] bg-white shadow-sm hover:border-[#F36F21] transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} style={{ color: "#3B3B39" }} />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-14 top-[40%] -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full border border-[rgba(59,59,57,0.12)] bg-white shadow-sm hover:border-[#F36F21] transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} style={{ color: "#3B3B39" }} />
          </button>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {visible.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div
                  className="w-full aspect-[3/4] overflow-hidden border border-[rgba(59,59,57,0.1)] rounded-sm cursor-pointer group"
                  onClick={() => setSelectedMember(member)}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  className="text-sm font-bold mt-4 text-center"
                  style={{ color: "#3B3B39" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs mt-1 text-center"
                  style={{ color: "#F36F21" }}
                >
                  {member.role}
                </p>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2">
                    <LinkedInIcon />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-200"
              style={{
                backgroundColor: i === page ? "#F36F21" : "rgba(59,59,57,0.15)",
              }}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bio Modal — reference style: photo left, name + linkedin top-right, bio below */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(15,23,42,0.5)", backdropFilter: "blur(6px)" }}
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white max-w-3xl w-full flex flex-col sm:flex-row overflow-hidden border border-[rgba(59,59,57,0.1)] shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-3 z-10 opacity-40 hover:opacity-100 transition-opacity"
            >
              <X size={20} style={{ color: "#3B3B39" }} />
            </button>

            {/* Photo — left half */}
            <div className="sm:w-[45%] shrink-0">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover object-top"
                style={{ minHeight: 320 }}
              />
            </div>

            {/* Content — right half */}
            <div className="p-6 sm:p-8 flex flex-col justify-start flex-1">
              {/* Name + LinkedIn row */}
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3
                  className="text-xl font-bold"
                  style={{ color: "#F36F21" }}
                >
                  {selectedMember.name}
                </h3>
                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 mt-1"
                  >
                    <Linkedin size={20} style={{ color: "#F36F21" }} />
                  </a>
                )}
              </div>

              <p
                className="text-sm mb-6"
                style={{ color: "#F36F21" }}
              >
                {selectedMember.role}
              </p>

              <div
                className="w-full h-px mb-6"
                style={{ backgroundColor: "rgba(59,59,57,0.1)" }}
              />

              <p
                className="text-sm leading-relaxed"
                style={{ color: "#5A5A58" }}
              >
                {selectedMember.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamGrid;