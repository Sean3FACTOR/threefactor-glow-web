import { ArrowRight, Phone, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlueprintHero from "@/components/BlueprintHero";

const leadershipPressures = [
  "Answer enterprise security questionnaires",
  "Defend decisions to investors and the Board",
  "Sign off on risk you didn't personally design",
];
const leadershipRisks = [
  "The weakest link in enterprise sales",
  "The default risk owner during audits",
  "Personally exposed when something goes wrong",
];
const pricingTiers = [
  { name: "Bronze", subtitle: "The Foundation", employees: "Up to 25 employees", ideal: "Ideal for early-stage startups preparing for their first serious audit, investor review, or enterprise prospect.", businessValue: "We eliminate guesswork. We build your Security Architecture Blueprint and a 12-month Roadmap so you can prove, to investors and prospects, that your company is not a liability.", riskOfNothing: "Without leadership, you're flying blind. A single \"No\" on a basic security questionnaire can freeze your sales cycle for months.", keyAsset: "Security Management Dashboard", keyAssetDesc: "Real-time visibility and proof for your Board, investors, and buyers." },
  { name: "Silver", subtitle: "Enterprise Readiness", employees: "Up to 100 employees", ideal: "Ideal for scaling teams actively pursuing enterprise and regulated-market deals.", businessValue: "Everything in Bronze, plus a custom SOC 2 framework designed for how your company actually operates. Weekly implementation sessions ensure security isn't just documented, it's embedded.", businessValueExtra: "We move you from \"baseline\" to battle-ready.", riskOfNothing: "Once you pass 25 employees, you become a visible target. Without detailed procedures, a single incident can trigger operational paralysis, and cyber insurance may deny coverage due to negligence.", highlighted: true },
  { name: "Gold", subtitle: "Total Resilience & Scale", employees: "100+ employees", ideal: "Ideal for established companies where a breach is not survivable.", businessValue: "Everything in Silver, plus a Secure Development Program that hard-codes security into your product, your processes, and your culture. Monthly Health Checks act as early-warning systems against the Triple Penalty: financial, operational, and reputational collapse.", businessValueExtra: "Security stops being a department. It becomes muscle memory.", riskOfNothing: "At this scale, you have a reputation, and directors, to protect. A single leak of regulated data without a Privacy Management Framework can trigger €10M DORA/NIS2 fines and irreversible brand damage." },
];
const successOutcomes = [
  "Security questions stop feeling like traps.",
  "Board conversations become calm and confident.",
  "Audits become predictable instead of disruptive.",
];

const VCISOPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#3B3B39" }}>
      <Navigation />
      <BlueprintHero breadcrumb="Virtual CISO" headline="Elite Security Leadership" subhead="You shouldn't be the only one carrying the security risk." ctaText="Upgrade Your Executive Shield" ctaLink="/contact" />

      {/* Value Prop */}
      <section className="py-24" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-6xl px-4">
          <div className="text-left space-y-8">
            <p className="text-3xl md:text-4xl font-bold text-white leading-snug">Stop Carrying the Weight of the Pen Alone.</p>
            <p className="text-lg md:text-xl text-white leading-relaxed">Most founders and executives are one security question away from losing a deal, or one overlooked control away from personal liability.</p>
            <p className="text-base text-white/60 leading-relaxed">Our vCISO services give you board-level security leadership, without the cost, delay, or risk of a full-time hire.</p>
            <p className="text-xl md:text-2xl font-semibold text-white pl-6" style={{ borderLeft: "2px solid #F36F21" }}>Instead of guessing, you lead. Instead of reacting, you&apos;re prepared.</p>
          </div>
        </div>
      </section>

      {/* Real Risk */}
      <section className="py-20" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-tight">The Real Risk: Leadership Without a Shield</h2>
            <p className="text-lg text-white/60 mb-8">The danger isn&apos;t a lack of tools, it&apos;s a lack of senior security leadership.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8" style={{ backgroundColor: "#646464", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="text-lg font-bold text-white mb-6">As your company grows, you&apos;re expected to:</h3>
                <div className="space-y-4">
                  {leadershipPressures.map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><span className="w-2 h-2 bg-white/40 rotate-45 flex-shrink-0 mt-2" /><p className="text-white/70">{item}</p></div>
                  ))}
                </div>
                <p className="text-white font-medium mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>That pressure shouldn&apos;t sit on your shoulders alone.</p>
              </div>
              <div className="p-8" style={{ backgroundColor: "#646464", borderTop: "2px solid #F36F21", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="text-lg font-bold text-white mb-6">Without executive-level security leadership, founders and executives become:</h3>
                <div className="space-y-4">
                  {leadershipRisks.map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><AlertTriangle className="w-4 h-4 text-white/50 flex-shrink-0 mt-1" /><p className="text-white/70">{item}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">vCISO TIERS: SECURITY THAT SCALES WITH YOU</h2>
            <p className="text-lg text-white/60">You don&apos;t need &quot;more security.&quot; You need the right level of leadership for your stage of growth.</p>
          </div>
          <div className="space-y-8">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className="p-8 md:p-10 transition-all hover:shadow-lg" style={{ backgroundColor: "#646464", border: tier.highlighted ? "2px solid #F36F21" : "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:w-64 flex-shrink-0">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{tier.name}</h3>
                    <p className="font-semibold" style={{ color: "#F36F21" }}>{tier.subtitle}</p>
                    <p className="text-sm text-white/50 mt-2">{tier.employees}</p>
                  </div>
                  <div className="flex-1 space-y-6">
                    <p className="text-white/50 italic">{tier.ideal}</p>
                    <div className="pl-4" style={{ borderLeft: "2px solid #F36F21" }}>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2">The Business Value</h4>
                      <p className="text-white/60">{tier.businessValue}</p>
                      {tier.businessValueExtra && <p className="text-white font-medium mt-2">{tier.businessValueExtra}</p>}
                    </div>
                    <div className="pl-4" style={{ borderLeft: "2px solid rgba(255,255,255,0.2)" }}>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2">The Risk of Doing Nothing</h4>
                      <p className="text-white/60">{tier.riskOfNothing}</p>
                    </div>
                    {tier.keyAsset && (
                      <div className="p-4" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1">Key Asset</h4>
                        <p className="text-white font-semibold">{tier.keyAsset}</p>
                        <p className="text-sm text-white/50">{tier.keyAssetDesc}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SME Advisory */}
      <section className="py-20" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-tight">The Secret Weapon: On-Demand SME Advisory</h2>
            <p className="text-lg text-white/60 mb-8">When the stakes are high, waiting weeks for answers isn&apos;t an option.</p>
            <div className="p-8" style={{ backgroundColor: "#646464", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(243,111,33,0.15)" }}>
                  <Phone className="w-6 h-6" style={{ color: "#F36F21" }} />
                </div>
                <div>
                  <p className="text-lg text-white mb-4">As a vCISO client, you move beyond standard consulting. You get a dedicated strategist focused on turning your complex regulatory requirements into a massive competitive advantage.</p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="pl-4" style={{ borderLeft: "2px solid #F36F21" }}>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2">The Win</h4>
                      <p className="text-white/60">Specialized answers in minutes, not weeks.</p>
                    </div>
                    <div className="pl-4" style={{ borderLeft: "2px solid #F36F21" }}>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2">The Strategic Advantage</h4>
                      <p className="text-white/60">Preferential advisory access at <span className="text-white font-semibold">$150–$160/hr</span> for deep technical reviews, escalations, and high-risk decisions, without long-term contracts or vendor bias.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success */}
      <section className="py-20" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-tight">What Success Feels Like</h2>
            <div className="space-y-4 mb-8">
              {successOutcomes.map((o, i) => (
                <div key={i} className="flex items-start gap-4"><span className="w-2 h-2 rotate-45 flex-shrink-0 mt-2" style={{ backgroundColor: "#F36F21" }} /><p className="text-lg text-white">{o}</p></div>
              ))}
            </div>
            <div className="mt-8 pl-6" style={{ borderLeft: "2px solid #F36F21" }}>
              <p className="text-xl font-semibold text-white">You stop reacting.<br />You lead with certainty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Button asChild size="lg" className="text-white font-semibold" style={{ backgroundColor: "#F36F21" }}>
              <Link to="/contact">Upgrade Your Executive Shield <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VCISOPage;
