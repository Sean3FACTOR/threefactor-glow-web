import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Primary CTA */}
          <Link to="/contact">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-[hsl(var(--ring))] text-primary-foreground transition-colors mb-12"
            >
              Book Your Compliance Strategy Session
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          {/* Transitional CTA */}
          <div className="border-t border-border pt-12">
            <p className="text-muted-foreground mb-4">
              Not ready to book yet?
            </p>
            <Link 
              to="/whitepaper" 
              className="group inline-flex items-center gap-2 text-foreground hover:text-[hsl(var(--ring))] transition-colors font-medium"
            >
              <FileText className="w-5 h-5" />
              Download the 3FACTOR Whitepaper
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto">
              Learn how elite companies reframe security from a cost center into a growth engine, and why auditors trust them faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
