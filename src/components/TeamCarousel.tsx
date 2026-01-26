import { useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Managing Director",
    bio: "Experienced cybersecurity leader with 15+ years helping Fortune 500 companies build robust security programs.",
    image: "/placeholder.svg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Team Member 2",
    role: "Principal Consultant",
    bio: "Expert in compliance and risk management with deep experience in ISO 27001, PCI DSS, and SOC 2 implementations.",
    image: "/placeholder.svg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Team Member 3",
    role: "Senior Security Architect",
    bio: "Cloud security specialist with certifications across AWS, Azure, and GCP. Passionate about secure architecture design.",
    image: "/placeholder.svg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Team Member 4",
    role: "Security Consultant",
    bio: "Application security expert focused on helping organizations shift security left in their development lifecycle.",
    image: "/placeholder.svg",
    linkedin: "https://linkedin.com/in/",
  },
];

const TeamCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="py-24 relative bg-card/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary uppercase tracking-widest">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Meet the Experts
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our team of experienced professionals is dedicated to helping you achieve your security goals.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
            aria-label="Next team member"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
                    {/* Image */}
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden flex-shrink-0 bg-muted">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Bio */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-4">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {member.bio}
                      </p>
                      
                      {/* LinkedIn */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="w-6 h-6" />
                        <span className="text-sm font-medium">Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
