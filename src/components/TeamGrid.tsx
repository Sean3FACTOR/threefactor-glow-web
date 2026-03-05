import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
    bio: "A seasoned principal consultant with deep expertise in ISO 27001, SOC 2, and PCI DSS. Michel brings a methodical, client-first approach to every engagement, ensuring frameworks translate into genuine operational improvements.",
  },
  {
    name: "Koert van der Veer",
    role: "Senior Consultant",
    image: koert,
    linkedin: "",
    bio: "Koert specialises in cloud security architecture and compliance automation. His engineering background allows him to bridge the gap between technical implementation and audit-ready documentation.",
  },
  {
    name: "Mason Clarke",
    role: "Consultant",
    image: mason,
    linkedin: "",
    bio: "Mason specialises in cloud-native security across AWS and Azure environments. He helps organisations build secure-by-design architectures that satisfy even the most rigorous audit requirements.",
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

const ITEMS_PER_PAGE = 5;
const glassCard =
  "bg-white/60 backdrop-blur-[20px] border border-[rgba(59,59,57,0.08)] rounded-none";

const TeamGrid = () => {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(teamMembers.length / ITEMS_PER_PAGE);
  const visibleMembers = teamMembers.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const prev = useCallback(() => setPage((p) => (p > 0 ? p - 1 : totalPages - 1)), [totalPages]);
  const next = useCallback(() => setPage((p) => (p < totalPages - 1 ? p + 1 : 0)), [totalPages]);

  return (
    <section className="py-16 md:py-24 px-4" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "#F36F21" }}
          >
            [TEAM-01] — Our Team
          </span>
        </div>
        <h2
          className="text-2xl md:text-4xl font-bold mb-4 text-center uppercase"
          style={{ color: "#3B3B39" }}
        >
          Meet Your Guides
        </h2>
        <p
          className="text-base leading-relaxed mb-12 max-w-2xl mx-auto text-center"
          style={{ color: "#5A5A58" }}
        >
          Every engagement is senior-led. No juniors learning on your dime — just
          battle-tested experts who've been in the trenches.
        </p>

        {/* Carousel container */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center border border-[rgba(59,59,57,0.12)] bg-white/80 backdrop-blur-sm hover:border-[#F36F21] transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={18} style={{ color: "#3B3B39" }} />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center border border-[rgba(59,59,57,0.12)] bg-white/80 backdrop-blur-sm hover:border-[#F36F21] transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={18} style={{ color: "#3B3B39" }} />
          </button>

          {/* Grid of visible members */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {visibleMembers.map((member) => (
              <div
                key={member.name}
                className={`${glassCard} group overflow-hidden transition-all duration-200 hover:border-[#F36F21]`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: "#3B3B39" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-xs font-mono mt-1"
                    style={{ color: "#5A5A58" }}
                  >
                    {member.role}
                  </p>
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 border border-[rgba(59,59,57,0.12)] hover:border-[#F36F21] transition-colors bg-transparent"
                    style={{ color: "#F36F21" }}
                  >
                    Read Bio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="w-2 h-2 transition-all duration-200"
              style={{
                backgroundColor: i === page ? "#F36F21" : "rgba(59,59,57,0.2)",
              }}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(15,23,42,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setSelectedMember(null)}
        >
          <div
            className={`${glassCard} bg-white max-w-lg w-full flex flex-col sm:flex-row overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sm:w-2/5 aspect-[3/4] sm:aspect-auto shrink-0">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 opacity-50 hover:opacity-100 transition-opacity"
              >
                <X size={18} style={{ color: "#3B3B39" }} />
              </button>
              <span
                className="text-[10px] font-mono mb-3"
                style={{ color: "#F36F21" }}
              >
                [BIO]
              </span>
              <h3
                className="text-lg font-bold uppercase tracking-wide mb-1"
                style={{ color: "#3B3B39" }}
              >
                {selectedMember.name}
              </h3>
              <p
                className="text-xs font-mono mb-4"
                style={{ color: "#F36F21" }}
              >
                {selectedMember.role}
              </p>
              <div
                className="w-8 h-px mb-4"
                style={{ backgroundColor: "rgba(59,59,57,0.15)" }}
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