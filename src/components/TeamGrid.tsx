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
import sean from "@/assets/team/sean_1.png";
import linkedinLogo from "@/assets/linkedin-logo.avif";

const teamMembers = [
  {
    name: "Spyro Malaspinas",
    role: "Principal",
    image: spyro,
    linkedin: "https://www.linkedin.com/in/spyro/",
    bio: "Spyro's passion for providing value to clients with straightforward advice and building long-term relationships led him to beginning 3Factor in 2007. He truly values each of his clients and team members, which is shown by the many inside jokes, fun experiences and genuine concern for each person he interacts with. He will always allow his team and clients to put family first, as he has learned as the father to his daughter, is a very important role. He proves that one can provide amazing client value whether that is onsite, working from home or while traveling to new places, and ensure the team around him feels the same.",
    featured: true,
  },
  {
    name: "Marcus Atkins",
    role: "Director of Compliance Services",
    image: marcus,
    linkedin: "https://www.linkedin.com/in/marcus-atkins-a746694/",
    bio: "Marcus brings vast experience and has shown that he bleeds 3Factor orange. He prioritizes family, and to that end, considers the team and clients he works with as an extension of such. He enjoys traveling and being able to go on holiday, though being a hard worker, we sometimes have to push him out of our virtual office to do so! Then he comes back tan, refreshed and ready to continue the exceptional work with our clients.",
  },
  {
    name: "Jonathan Kiernan",
    role: "Director of Cyber Risk & Strategy",
    image: jonathan,
    linkedin: "https://www.linkedin.com/in/jonathan-kiernan-a3199253/",
    bio: "Jonathan joined 3Factor in 2019 from a background in Big4 consulting. He leads 3Factor's Strategy & Risk service line and likes to deliver complex transformation programmes. Jonathan seems miserable on first impressions, but is much worse once you get to know him. He is a big WWE buff and loves to make fun of all things American, mostly in good fun.",
  },
  {
    name: "Tania Nicholas",
    role: "Director of PCI Compliance Services",
    image: tania,
    linkedin: "https://www.linkedin.com/in/tania-nicholas-107b062/",
    bio: "Since starting at 3Factor in 2017, Tania has become the self-proclaimed GRC Nurturer in Chief given her extensive experience. She is backed up by her team, which she is always happy to share her wisdom with. She is an exceptional project manager, and wears this hat even with her husband and two kids. They enjoy traveling, playing and watching sports and hanging out with friends and family.",
  },
  {
    name: "Ricardo Patino",
    role: "",
    image: ricardo,
    linkedin: "https://www.linkedin.com/in/ricardopatino/",
    bio: "Ricardo has been putting up with Spyro since 2012, as they tackled cybersecurity work together. They both love to take on and debate through security challenges and conundrums. When he isn't doing that, you can find Ricardo on a beach somewhere- but that doesn't stop his productivity. The sea salt air and adventures power the brain behind that shiny head.",
  },
  {
    name: "Mason Reagan",
    role: "",
    image: mason,
    linkedin: "https://www.linkedin.com/in/mason-reagan-507877132/",
    bio: "Mason has been friends with our Greek principal since college, and decided to take their friendship to the next level and come to work for him. He is always down for an adventure, and Spyro is always happy to think one up and (strongly) encourage participation. He brings his love of poker, travel and being willing to always learn. He is working on being the best husband he can be — happy wife, happy life.",
  },
  {
    name: "Kelsee Moore",
    role: "",
    image: kelsee,
    linkedin: "https://www.linkedin.com/in/kelsee-moore-a6ba42158/",
    bio: "Kelsee has mastered the pain of invoicing and all things 3Factor since 2018. She has brought her fun spirit and enthusiasm for making the team feel appreciated. She handles the ad hoc requests that keep the lights on here. Kelsee loves listening to music, dancing and laughing and being around her family. Her guilty pleasures include Bravo tv shows and true crime docuseries. Since 2018, Kelsee wakes up bright and early hearing invoices.",
  },
  {
    name: "Haley Burr",
    role: "",
    image: haley,
    linkedin: "https://www.linkedin.com/in/haley-burr-68a799112/",
    bio: "Haley graduated from UC Davis with high honors in 2021 with a bachelor's in communication studies and minors in sociology and education sciences. After graduating, she moved to Arizona and soon began working as Spyro's assistant. Her main goals are to keep household operations running smoothly and allow Spyro to focus on what matters most to him. Punctuality and enthusiasm are her two mantras.",
  },
  {
    name: "Michel Helal",
    role: "",
    image: michel,
    linkedin: "https://www.linkedin.com/in/michel-helal/",
    bio: "Michel's love for challenges makes him the \"ironman\" of security analysts. He loves to construct detailed work plans that align with business goals. His project management skills help keep projects on schedule and within scope and budget. His past experience being an entrepreneur makes him excellent in managing teams and achieving milestones.",
  },
  {
    name: "Koert DuBois",
    role: "",
    image: koert,
    linkedin: "https://www.linkedin.com/in/koert-d-a908b95/",
    bio: "Koert joined the 3Factor family in 2020 after a long career in IT and Cybersecurity. He's a collaborative contributor and enjoys team environments where he can encourage team members to excel, to learn, and challenge themselves along the way, as well as deliver to expectations. You can always count on Koert to bring humor to the conversation, and is a master of storytelling in a way that only he can!",
  },
  {
    name: "Sean Suter",
    role: "",
    image: sean,
    linkedin: "https://www.linkedin.com/in/sean-suter-45a25b304/",
    bio: "Sean joined the 3Factor fold in 2025 as our Information Security Analyst, bringing a fresh, high-velocity perspective to our compliance projects. A former varsity rugby player for Manchester university, Sean treats every compliance hurdle like a defensive line - something to be analyzed, tackled, and overcome. When he's not deep-diving into security frameworks, he's likely debating sports or playing a round of golf (weather permitting of course!)",
  },
];

const featured = teamMembers.find((m) => m.featured);
const rest = teamMembers.filter((m) => !m.featured);
const PAGE_SIZES = [4, 3, 3];

const getPageSlices = () => {
  const pages: (typeof rest)[] = [];
  let offset = 0;
  for (const size of PAGE_SIZES) {
    pages.push(rest.slice(offset, offset + size));
    offset += size;
    if (offset >= rest.length) break;
  }
  return pages;
};
const pages = getPageSlices();
const totalPages = pages.length;

const TeamGrid = () => {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null);
  const [page, setPage] = useState(0);

  const visible = pages[page] || [];

  const prev = useCallback(() => setPage((p) => (p > 0 ? p - 1 : totalPages - 1)), []);
  const next = useCallback(() => setPage((p) => (p < totalPages - 1 ? p + 1 : 0)), []);

  const LinkedInLogo = () => (
    <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5 object-contain" />
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

        {/* Featured principal — only on first tab */}
        {featured && page === 0 && (
          <div className="flex flex-col items-center mb-14">
            <div
              className="w-[200px] md:w-[235px] aspect-[3/4] overflow-hidden border border-[rgba(59,59,57,0.1)] rounded-sm cursor-pointer group"
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
              style={{ color: "#5A5A58" }}
            >
              {featured.role}
            </p>
            {featured.linkedin && (
              <a href={featured.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2">
                <LinkedInLogo />
              </a>
            )}
          </div>
        )}

        {/* Carousel of remaining members */}
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

          <div className="flex flex-wrap justify-center gap-6">
            {visible.map((member) => (
              <div key={member.name} className="flex flex-col items-center w-[calc(50%-12px)] md:w-[189px]">
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
                  className="text-sm font-bold mt-4 text-center w-full"
                  style={{ color: "#3B3B39" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs mt-1 text-center w-full min-h-[1rem]"
                  style={{ color: "#5A5A58" }}
                >
                  {member.role}
                </p>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2">
                    <LinkedInLogo />
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
                    <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5 object-contain" />
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