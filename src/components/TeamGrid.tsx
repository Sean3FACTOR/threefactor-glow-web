import { Linkedin } from "lucide-react";

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
  { name: "Spyro", role: "Managing Director", image: spyro, linkedin: "" },
  { name: "Michel", role: "Principal Consultant", image: michel, linkedin: "" },
  { name: "Koert", role: "Senior Consultant", image: koert, linkedin: "" },
  { name: "Jonathan", role: "Senior Consultant", image: jonathan, linkedin: "" },
  { name: "Ricardo", role: "Senior Consultant", image: ricardo, linkedin: "" },
  { name: "Marcus", role: "Consultant", image: marcus, linkedin: "" },
  { name: "Mason", role: "Consultant", image: mason, linkedin: "" },
  { name: "Haley", role: "Consultant", image: haley, linkedin: "" },
  { name: "Kelsee", role: "Consultant", image: kelsee, linkedin: "" },
  { name: "Tania", role: "Consultant", image: tania, linkedin: "" },
];

const glassCard = "bg-white/60 backdrop-blur-[20px] border border-[rgba(59,59,57,0.08)] rounded-none";

const TeamGrid = () => {
  return (
    <section className="py-16 md:py-24 px-4" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "#F36F21" }}
          >
            [TEAM-01] — The People Behind Your Mission
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
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
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <Linkedin size={14} style={{ color: "#3B3B39" }} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
