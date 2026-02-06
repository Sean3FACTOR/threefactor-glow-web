import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import trustedPartnership from "@/assets/about/trusted-partnership.jpg";
import boardroomStrategy from "@/assets/services/boardroom-strategy.jpg";
import skyscraperVision from "@/assets/services/skyscraper-vision.jpg";
import globalSkyline from "@/assets/about/global-skyline.jpg";
import networkMesh from "@/assets/services/network-mesh.jpg";

const benefits = [
  {
    title: "Close Deals Faster",
    description: "Turn security reviews from a 6-month hurdle into a 24-hour formality that impresses your biggest prospects.",
    image: trustedPartnership,
    imageAlt: "Professional handshake - trusted partnership"
  },
  {
    title: "Boardroom Confidence",
    description: "Stand before your directors with definitive, real-time proof that every risk is identified, managed, and mitigated.",
    image: boardroomStrategy,
    imageAlt: "Executive boardroom - confident leadership"
  },
  {
    title: "Operational Velocity",
    description: "Scale your organization with the confidence that your growth won't be derailed by a sudden audit or a preventable breach.",
    image: skyscraperVision,
    imageAlt: "Skyscraper perspective - upward growth"
  },
  {
    title: "Total Market Access",
    description: "With ISO, SOC2, and NIS2 handled, no territory or tender is off-limits.",
    image: globalSkyline,
    imageAlt: "Global skyline - worldwide market access"
  }
];

const CompetitiveEdge = () => {
  return (
    <section className="py-20 relative border-t border-border bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header - Left Aligned */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From "High Risk" to the Industry Standard.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Compliance shouldn't be an anchor—it should be your engine. When security is built into the fabric of your business, you stop playing defense and start winning on trust.
          </p>
        </div>

        {/* Benefits Cascading Cards */}
        <div className="max-w-5xl space-y-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group flex flex-col md:flex-row bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              style={{ marginLeft: `${index * 1.5}rem` }}
            >
              {/* Content - Left Side */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>

              {/* Image - Right Side */}
              <div className="w-full md:w-[35%] shrink-0 relative overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.imageAlt}
                  className="w-full h-48 md:h-full object-cover transition-all duration-500 group-hover:scale-105 img-grayscale-hover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mx-auto text-center bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            From a Security Liability to a Trusted Market Leader.
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Walk into your next Board meeting with definitive proof that your risk is managed. By turning compliance into a competitive edge, you stop just 'staying safe' and start <span className="text-foreground font-semibold">scaling with unshakeable confidence</span>.
          </p>
          <Button asChild size="lg" className="bg-[#646464] hover:bg-[#f36f21] text-white font-semibold transition-colors">
            <Link to="/contact">
              Book Your Strategy Session
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdge;