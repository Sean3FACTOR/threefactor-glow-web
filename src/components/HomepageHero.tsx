import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import cloudArchitectsDashboard from "@/assets/cloud-architects-dashboard.jpg";

const HomepageHero = () => {
  return (
    <section className="pt-14 pb-16" style={{ backgroundColor: "#3B3B39" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-4 gap-y-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight uppercase">
              <span className="block">Don't Let a Security Audit</span>
              <span className="block">Kill Your $1M Contract.</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2" style={{ color: "#F36F21" }}>
                Secure the Deal with Unshakeable Compliance.
              </span>
            </h1>
            <p className="text-base md:text-xl mb-8 leading-relaxed text-primary-foreground">
              Security is an engine for growth, not an anchor for your revenue. Stop letting "revenue-blocking gaps" stall your growth.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="group text-white font-semibold transition-colors w-full sm:w-auto"
                style={{ backgroundColor: "#F36F21" }}
              >
                Book Your Strategy Session
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-[520px]">
              <img
                src={cloudArchitectsDashboard}
                alt="Architects of the Cloud - Security infrastructure dashboard"
                className="w-full h-auto object-contain"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
