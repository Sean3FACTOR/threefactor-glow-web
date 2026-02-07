import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-transparent border-t border-border/10">
      <div className="container mx-auto px-4">
        {/* Scattered layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Primary CTA block */}
          <div className="col-span-12 md:col-span-7 md:col-start-2">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground transition-colors mb-12"
              >
                Book Your Compliance Strategy Session
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Transitional CTA block - offset */}
          <div className="col-span-12 md:col-span-6 md:col-start-3 md:mt-4">
            <div className="border-l border-border/30 pl-6">
              <p className="text-muted-foreground mb-4">
                Not ready to book yet?
              </p>
              <Link 
                to="/whitepaper" 
                className="group inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                <FileText className="w-5 h-5" />
                Download the 3FACTOR Whitepaper
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-sm text-muted-foreground mt-3 max-w-md">
                Learn how elite companies reframe security from a cost center into a growth engine, and why auditors trust them faster.
              </p>
            </div>
          </div>
        </div>

        {/* Connecting line visual */}
        <div className="hidden md:block relative h-px w-full mt-12">
          <div className="absolute left-[30%] right-[20%] top-0 h-px bg-border/30" />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
