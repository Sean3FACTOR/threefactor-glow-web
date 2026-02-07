import { ArrowRight, Phone, Shield, Users, FileCheck, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlueprintHero from "@/components/BlueprintHero";

const leadershipPressures = [
  "Answer enterprise security questionnaires",
  "Defend decisions to investors and the Board",
  "Sign off on risk you didn&apos;t personally design",
];

const leadershipRisks = [
  "The weakest link in enterprise sales",
  "The default risk owner during audits",
  "Personally exposed when something goes wrong",
];

const pricingTiers = [
  {
    id: "TIER-01",
    name: "Bronze",
    subtitle: "The Foundation",
    employees: "Up to 25 employees",
    ideal: "Ideal for early-stage startups preparing for their first serious audit, investor review, or enterprise prospect.",
    businessValue: "We eliminate guesswork. We build your Security Architecture Blueprint and a 12-month Roadmap so you can prove, to investors and prospects, that your company is not a liability.",
    riskOfNothing: "Without leadership, you&apos;re flying blind. A single \"No\" on a basic security questionnaire can freeze your sales cycle for months.",
    keyAsset: "Security Management Dashboard",
    keyAssetDesc: "Real-time visibility and proof for your Board, investors, and buyers.",
  },
  {
    id: "TIER-02",
    name: "Silver",
    subtitle: "Enterprise Readiness",
    employees: "Up to 100 employees",
    ideal: "Ideal for scaling teams actively pursuing enterprise and regulated-market deals.",
    businessValue: "Everything in Bronze, plus a custom SOC 2 framework designed for how your company actually operates. Weekly implementation sessions ensure security isn&apos;t just documented, it&apos;s embedded.",
    businessValueExtra: "We move you from \"baseline\" to battle-ready.",
    riskOfNothing: "Once you pass 25 employees, you become a visible target. Without detailed procedures, a single incident can trigger operational paralysis, and cyber insurance may deny coverage due to negligence.",
    highlighted: true,
  },
  {
    id: "TIER-03",
    name: "Gold",
    subtitle: "Total Resilience & Scale",
    employees: "100+ employees",
    ideal: "Ideal for established companies where a breach is not survivable.",
    businessValue: "Everything in Silver, plus a Secure Development Program that hard-codes security into your product, your processes, and your culture. Monthly Health Checks act as early-warning systems against the Triple Penalty: financial, operational, and reputational collapse.",
    businessValueExtra: "Security stops being a department. It becomes muscle memory.",
    riskOfNothing: "At this scale, you have a reputation, and directors, to protect. A single leak of regulated data without a Privacy Management Framework can trigger €10M DORA/NIS2 fines and irreversible brand damage.",
  },
];

const successOutcomes = [
  "Security questions stop feeling like traps.",
  "Board conversations become calm and confident.",
  "Audits become predictable instead of disruptive.",
];

const VCISOPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Blueprint Hero Section */}
      <BlueprintHero
        breadcrumb="Virtual CISO"
        headline="Elite Security Leadership"
        subhead="You shouldn't be the only one carrying the security risk."
        ctaText="Upgrade Your Executive Shield"
        ctaLink="/contact"
      />

      {/* Value Proposition Section */}
      <section className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="tech-id block mb-6">[SYS-VALUE]</span>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                Stop carrying the weight of the pen alone.<br />
                Most founders and executives are one security question away from losing a deal, or one overlooked control away from personal liability.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our vCISO services give you board-level security leadership, without the cost, delay, or risk of a full-time hire.
              </p>
              
              <p className="text-xl font-semibold text-foreground border-l-2 border-primary pl-6">
                Instead of guessing, you lead. Instead of reacting, you&apos;re prepared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Risk Section */}
      <section className="py-20 bg-muted/20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="tech-id block mb-6">[SYS-RISK]</span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase tracking-tight">
              The Real Risk: Leadership Without a Shield
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              The danger isn&apos;t a lack of tools, it&apos;s a lack of senior security leadership.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Expected Responsibilities */}
              <div className="bg-card border border-border/10 p-8">
                <h3 className="text-lg font-bold text-foreground mb-6">As your company grows, you&apos;re expected to:</h3>
                <div className="space-y-4">
                  {leadershipPressures.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-muted-foreground rotate-45 flex-shrink-0 mt-2" />
                      <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item }} />
                    </div>
                  ))}
                </div>
                <p className="text-foreground font-medium mt-6 pt-6 border-t border-border/10">
                  That pressure shouldn&apos;t sit on your shoulders alone.
                </p>
              </div>
              
              {/* The Consequences */}
              <div className="bg-card border border-destructive/20 p-8">
                <h3 className="text-lg font-bold text-foreground mb-6">Without executive-level security leadership, founders and executives become:</h3>
                <div className="space-y-4">
                  {leadershipRisks.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-destructive/70 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* vCISO Tiers Section */}
      <section className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="tech-id block mb-4">[SYS-TIERS]</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
              vCISO Tiers: Security That Scales With You
            </h2>
            <p className="text-lg text-muted-foreground">
              You don&apos;t need &quot;more security.&quot; You need the right level of leadership for your stage of growth.
            </p>
          </div>
          
          <div className="space-y-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={tier.id}
                className={`shadow-none border bg-card hover:border-primary transition-colors ${tier.highlighted ? 'border-primary' : 'border-border/10'}`}
                style={{ marginLeft: `${index * 2}rem` }}
              >
                <CardContent className="p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Tier Header */}
                    <div className="lg:w-64 flex-shrink-0">
                      <span className="tech-id block mb-2">[{tier.id}]</span>
                      <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">{tier.name}</h3>
                      <p className="text-primary font-semibold">{tier.subtitle}</p>
                      <p className="text-sm text-muted-foreground mt-2">{tier.employees}</p>
                    </div>
                    
                    {/* Tier Content */}
                    <div className="flex-1 space-y-6">
                      <p className="text-muted-foreground italic">{tier.ideal}</p>
                      
                      {/* Business Value */}
                      <div className="border-l-2 border-primary pl-4">
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">The Business Value</h4>
                        <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: tier.businessValue }} />
                        {tier.businessValueExtra && (
                          <p className="text-foreground font-medium mt-2">{tier.businessValueExtra}</p>
                        )}
                      </div>
                      
                      {/* Risk of Nothing */}
                      <div className="border-l-2 border-destructive/60 pl-4">
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">The Risk of Doing Nothing</h4>
                        <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: tier.riskOfNothing }} />
                      </div>
                      
                      {/* Key Asset (Bronze only) */}
                      {tier.keyAsset && (
                        <div className="bg-muted/30 p-4 border border-border/10">
                          <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-1">Key Asset</h4>
                          <p className="text-foreground font-semibold">{tier.keyAsset}</p>
                          <p className="text-sm text-muted-foreground">{tier.keyAssetDesc}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SME Advisory Section */}
      <section className="py-20 bg-muted/20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="tech-id block mb-6">[SYS-SME]</span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase tracking-tight">
              The Secret Weapon: On-Demand SME Advisory
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              When the stakes are high, waiting weeks for answers isn&apos;t an option.
            </p>
            
            <div className="bg-card border border-border/10 p-8 mb-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-lg text-foreground mb-4">
                    As a vCISO client, you don&apos;t just get a consultant, you get a direct line to the architects who secured 90% of the global cloud.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">The Win</h4>
                      <p className="text-muted-foreground">Specialized answers in minutes, not weeks.</p>
                    </div>
                    
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">The Strategic Advantage</h4>
                      <p className="text-muted-foreground">
                        Preferential advisory access at <span className="text-foreground font-semibold">$150–$160/hr</span> for deep technical reviews, escalations, and high-risk decisions, without long-term contracts or vendor bias.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="tech-id block mb-6">[SYS-SUCCESS]</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase tracking-tight">
              What Success Feels Like
            </h2>
            
            <div className="space-y-4 mb-8">
              {successOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground">{outcome}</p>
                </div>
              ))}
            </div>
            
            <div className="border-l-2 border-primary pl-6 mt-8">
              <p className="text-xl font-semibold text-foreground">
                You stop reacting.<br />
                You lead with certainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-muted/30 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="tech-id block mb-6">[SYS-CTA]</span>
            
            <Button 
              asChild 
              size="lg"
              className="bg-[#646464] hover:bg-[#f36f21] text-white font-semibold transition-colors"
            >
              <Link to="/contact">
                Upgrade Your Executive Shield
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VCISOPage;
