import { Link } from "react-router-dom";
import { ArrowRight, CreditCard, Globe, Shield, Scale, Target, Search, Award, Lock, Building, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlueprintHero from "@/components/BlueprintHero";

const frameworks = [
  {
    name: "ISO 27001",
    icon: Globe,
    winTitle: "The Global Pass-Key",
    winDesc: "The universal language of security. Essential for international expansion and winning high-value government and enterprise tenders outside North America.",
    riskTitle: "The Border Closure",
    riskDesc: "Without ISO alignment, European and Asian enterprise buyers quietly remove you from consideration before the first meeting.",
  },
  {
    name: "SOC 2 (Type I & II)",
    icon: Shield,
    winTitle: "The SaaS Gold Standard",
    winDesc: "Instant credibility with North American enterprise procurement. Moves you from the \"untrusted vendor\" pile to the \"strategic partner\" list.",
    riskTitle: "The Security Review Dead-End",
    riskDesc: "Without SOC 2, your sales team drowns in 300-row security questionnaires, only to lose to the competitor who already has a clean report.",
  },
  {
    name: "PCI DSS",
    icon: CreditCard,
    winTitle: "The Transaction Engine",
    winDesc: "Secure your ability to process payments and handle cardholder data without interruption or increased processing fees.",
    riskTitle: "The Revenue Blackout",
    riskDesc: "A single compliance lapse can trigger merchant account suspension, freezing your company's cash flow overnight.",
  },
  {
    name: "FedRAMP",
    icon: Building,
    winTitle: "The Federal Fast-Track",
    winDesc: "Secure your Authorization to Operate (ATO) and open the door to the world's largest buyer: the U.S. Federal Government.",
    riskTitle: "The Agency Blockade",
    riskDesc: "Without a FedRAMP-authorized environment, your cloud service is legally invisible to federal agencies, cutting off billions in potential contract value.",
  },
  {
    name: "CMMC",
    icon: Lock,
    winTitle: "The Defense Supply Chain Key",
    winDesc: "Prove your cybersecurity maturity matches the mission and secure your place in the Department of Defense (DoD) supply chain.",
    riskTitle: "The Procurement Exclusion",
    riskDesc: "Failure to meet CMMC levels doesn't just mean losing new bids; it means being disqualified from existing contracts you've held for years.",
  },
  {
    name: "NIS2 & DORA",
    icon: Scale,
    winTitle: "European Regulatory Resilience",
    winDesc: "Future-proof your business against the EU's most aggressive enforcement regimes for infrastructure and finance. Prove resilience, not just intent.",
    riskTitle: "The €10M Negligence Penalty",
    riskDesc: "This isn't a warning shot. Regulators can impose fines up to 2% of global turnover and hold directors personally liable for compliance failures.",
  },
];

const planSteps = [
  {
    number: "1",
    title: "Framework Alignment",
    description: "We identify which certifications actually move the revenue needle, based on your market, buyers, and growth strategy.",
    detail: "No wasted effort. No irrelevant audits.",
    icon: Target,
  },
  {
    number: "2",
    title: "Gap Eradication",
    description: "We don't just identify gaps, we close them. Our architects have secured top global cloud providers, and they apply the same rigor to your environment.",
    detail: "This is where \"almost compliant\" becomes audit-proof.",
    icon: Search,
  },
  {
    number: "3",
    title: "Audit Dominance",
    description: "We guide you through audits, vendor reviews, and executive scrutiny so you present a calm, confident posture that earns trust instead of raising flags.",
    detail: "",
    icon: Award,
  },
];

const successOutcomes = [
  "Instead of guessing which framework matters, your team knows exactly what to build, and why.",
  "Instead of stalled RFPs, security reviews become a formality.",
  "Instead of scrambling before audits, your posture is already defensible.",
];

const roadmapBenefits = [
  "Which frameworks unlock your next market",
  "Which ones you can safely ignore",
  "How to turn compliance into a sales accelerator, not a bottleneck",
];

const ComplianceServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Blueprint Hero Section */}
      <BlueprintHero
        breadcrumb="Compliance"
        headline="The Keys to the Market"
        subhead="You're not trying to be compliant. You're trying to win deals, enter new markets, and protect enterprise value."
        ctaText="Get Your Framework Roadmap"
        ctaLink="/contact"
      />

      {/* Value Proposition Section */}
      <section className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
                Stop treating compliance like a chore.<br />
                Start treating it like a competitive advantage.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Don&apos;t let a missing certification be the quiet reason your biggest prospect says &quot;no.&quot;
                We help leaders navigate the world&apos;s most demanding frameworks so compliance unlocks revenue instead of slowing it down.
              </p>
              
              <p className="text-xl md:text-2xl font-semibold text-foreground border-l-2 border-primary pl-6 text-left inline-block">
                Compliance isn&apos;t paperwork. It&apos;s permission to play in the markets that matter.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button 
                asChild 
                size="lg"
                className="bg-[#646464] hover:bg-[#f36f21] text-white font-semibold transition-colors"
              >
                <Link to="/contact">
                  Get Your Framework Roadmap
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Fog Section */}
      <section className="py-20 bg-muted/20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase tracking-tight">
              The Real Enemy Isn't Regulation, It's Confusion
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card border border-border/10 p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">We call it Framework Fog:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The uncertainty around which certification you actually need, when you need it, and why it matters, leading to months of wasted effort and thousands in compliance debt.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="border-l-2 border-muted-foreground/30 pl-6">
                  <p className="text-muted-foreground">Most firms sell you a certificate.</p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <p className="text-foreground font-semibold">We sell you market access.</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mt-6">
                If a framework doesn't help you close deals, enter new markets, or survive regulatory scrutiny, it's noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
              The Frameworks That Decide Your Market Access
            </h2>
            <p className="text-lg text-muted-foreground">
              Each framework isn't just a requirement, it's a gate. What you choose (or ignore) determines what markets you can enter and which ones close permanently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks.map((framework) => (
              <Card 
                key={framework.name}
                className="shadow-none border border-border/10 bg-card hover:border-primary transition-colors"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center flex-shrink-0">
                      <framework.icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">
                        {framework.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* The Win */}
                  <div className="mb-6 border-l-2 border-primary pl-4">
                    <h4 className="text-lg font-bold text-foreground mb-2">{framework.winTitle}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{framework.winDesc}</p>
                  </div>
                  
                  {/* The Risk */}
                  <div className="border-l-2 border-destructive/60 pl-4">
                    <h4 className="text-lg font-bold text-foreground mb-2">{framework.riskTitle}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{framework.riskDesc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Plan Section */}
      <section className="py-20 bg-muted/20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
              The Plan: 3 Steps to Framework Mastery
            </h2>
            <p className="text-lg text-muted-foreground">
              You don't need every framework. You need the right ones, executed correctly.
            </p>
          </div>
          
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {planSteps.map((step, index) => (
                <Card 
                  key={step.number}
                  className="shadow-none border border-border/10 bg-card hover:border-primary transition-colors"
                  style={{ marginLeft: `${index * 2}rem` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-muted flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-muted-foreground">{step.number}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-3 uppercase tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed mb-2">
                          {step.description}
                        </p>
                        {step.detail && (
                          <p className="text-foreground font-medium italic">
                            {step.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Outcomes Section */}
      <section className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase tracking-tight">
              What Success Looks Like
            </h2>
            
            <div className="space-y-4 mb-8">
              {successOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-primary rotate-45 flex-shrink-0 mt-2" />
                  <p className="text-lg text-foreground">{outcome}</p>
                </div>
              ))}
            </div>
            
            <div className="border-l-2 border-primary pl-6 mt-8">
              <p className="text-xl font-semibold text-foreground">
                Compliance stops being a risk.<br />
                It becomes leverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-muted/30 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Button 
              asChild 
              size="lg"
              className="bg-[#646464] hover:bg-[#f36f21] text-white font-semibold transition-colors mb-8"
            >
              <Link to="/contact">
                Get Your Framework Roadmap
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            
            <p className="text-lg text-muted-foreground mb-6">
              Not sure where to start? Your roadmap shows:
            </p>
            
            <div className="space-y-3 text-left max-w-md mx-auto">
              {roadmapBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-muted-foreground rotate-45 flex-shrink-0 mt-2" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComplianceServicesPage;
