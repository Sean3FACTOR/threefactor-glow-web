import { ArrowRight, TrendingUp, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import trustedPartnership from "@/assets/about/trusted-partnership.jpg";
import skyscraperVision from "@/assets/services/skyscraper-vision.jpg";
import globalSkyline from "@/assets/about/global-skyline.jpg";

const benefits = [
  {
    title: "Close Deals Faster",
    description: "Security questionnaires completed in days, not quarters. Auditors nod instead of probing.",
    image: trustedPartnership,
    imageAlt: "Professional handshake - trusted partnership"
  },
  {
    title: "Unrestricted Expansion",
    description: "No geography, tender, or enterprise buyer is off-limits when compliance is built right.",
    image: globalSkyline,
    imageAlt: "Global skyline - worldwide market access"
  },
  {
    title: "Total Operational Velocity",
    description: "Scale confidently knowing your security posture supports growth instead of dragging it down.",
    image: skyscraperVision,
    imageAlt: "Skyscraper perspective - upward growth"
  }
];

const CompetitiveEdge = () => {
  return (
    <section className="py-20 relative border-t border-border bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header - Left Aligned */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Vendor to Trusted Market Authority
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Compliance isn't overhead, it's leverage.
          </p>
          <p className="text-lg text-foreground/80 font-medium">
            Walk into your next board meeting with proof, not promises, that risk is controlled and growth is protected.
          </p>
        </div>

        {/* What Success Looks Like */}
        <div className="max-w-4xl mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground border-l-4 border-primary pl-6">
            What Success Looks Like
          </h3>
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

        {/* Dual CTA Section */}
        <div className="max-w-3xl mx-auto text-center bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-[#646464] hover:bg-[#f36f21] text-white font-semibold transition-colors">
              <Link to="/contact">
                Book Your Compliance Strategy Session
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-4">Not ready to book yet?</p>
            <Button asChild variant="outline" size="lg" className="border-border hover:border-primary hover:text-primary transition-colors">
              <a href="#" onClick={(e) => e.preventDefault()}>
                <Download className="w-4 h-4 mr-2" />
                Download the 3FACTOR Whitepaper
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto">
              Learn how elite companies reframe security from a cost center into a growth engine, and why auditors trust them faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdge;
