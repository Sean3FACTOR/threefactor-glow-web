import { Shield, AlertCircle, TrendingUp } from "lucide-react";

const AuthorityBar = () => {
  return (
    <section className="py-12 bg-card border-t border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Stat 1 */}
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <p className="text-foreground font-semibold text-lg">
              <span className="text-primary">9 of 10</span> Cloud Service Providers secured by our lead architects.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6 text-primary" />
            </div>
            <p className="text-foreground font-semibold text-lg">
              <span className="text-primary">6 of 10</span> Largest North American security breaches recovered by our principals.
            </p>
          </div>
        </div>

        {/* Success Statement */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Walk into your next Board meeting with definitive proof that your risk is managed. By turning compliance into a competitive edge, you stop just 'staying safe' and start <span className="text-foreground font-semibold">scaling with unshakeable confidence</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorityBar;
