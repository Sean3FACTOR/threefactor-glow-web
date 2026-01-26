import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const VCISOOverview = () => {
  return (
    <section id="vciso" className="py-24 relative bg-background">
      <div className="container relative mx-auto px-4">
        <Link 
          to="/services/vciso" 
          className="block bg-card p-8 md:p-12 rounded-2xl group cursor-pointer border border-border card-hover"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">vCISO Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 leading-tight">
              Comprehensive Security.<br />
              Empowering Program.<br />
              <span className="text-muted-foreground">No Hiring. No Surprises.</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Everything you need to jumpstart and maintain a cybersecurity program, complete with a dedicated CISO and Privacy Officer.
            </p>
            <p className="text-foreground font-semibold mt-4">
              Low Setup Fee. Fixed Monthly Cost.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Dedicated CISO</h3>
              <p className="text-sm text-muted-foreground">Expert security leadership without the full-time hire</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Right-Sized Plans</h3>
              <p className="text-sm text-muted-foreground">Bronze, Silver, and Gold packages for every stage</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Proven Approach</h3>
              <p className="text-sm text-muted-foreground">Define, Implement, Manage, and Improve your security</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <span className="flex items-center text-muted-foreground font-semibold group-hover:text-foreground group-hover:gap-3 gap-2 transition-all">
              Explore vCISO Services <ArrowRight className="w-5 h-5" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default VCISOOverview;
