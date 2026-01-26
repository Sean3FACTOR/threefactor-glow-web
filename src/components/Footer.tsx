import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import Logo from "@/assets/3F_Grey.png";
import linkedinIcon from "@/assets/linkedin-icon.avif";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center">
              <img src={Logo} alt="3FACTOR" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Three Factor, LLC. All Rights Reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="https://www.linkedin.com/company/3factor/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-foreground" />
            <span>Securing organizations with believable cybersecurity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
