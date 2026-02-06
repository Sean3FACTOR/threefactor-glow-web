import { CheckCircle, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const benefits = [{
  title: "Close Deals Faster",
  description: "Turn security reviews from a 6-month hurdle into a 24-hour formality that impresses your biggest prospects."
}, {
  title: "Boardroom Confidence",
  description: "Stand before your directors with definitive, real-time proof that every risk is identified, managed, and mitigated."
}, {
  title: "Operational Velocity",
  description: "Scale your organization with the confidence that your growth won't be derailed by a sudden audit or a preventable breach."
}, {
  title: "Total Market Access",
  description: "With ISO, SOC2, and NIS2 handled, no territory or tender is off-limits."
}, {
  title: "Automated Resilience",
  description: "Scale with the certainty that your DORA and PCI requirements are automated and resilient, not a manual burden on your dev team."
}];
const CompetitiveEdge = () => {
  return <section className="py-20 relative border-t border-border bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">From "High Risk" to the Industry Standard.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compliance shouldn't be an anchor—it should be your engine. When security is built into the fabric of your business, you stop playing defense and start winning on trust.
          </p>
        </div>

        {/* Benefits List */}
        <div className="max-w-4xl mx-auto mb-16 space-y-4">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className="flex gap-4 p-6 bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="shrink-0">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold text-sm">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
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
    </section>;
};
export default CompetitiveEdge;