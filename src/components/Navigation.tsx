import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "@/assets/3factor-grey-logo.png";

/* ── Mega-menu structure (4 columns) ── */
const megaColumns = [
  {
    groups: [
      {
        heading: "Compliance Certifications",
        items: [
          { name: "ISO 27001", href: "/services/iso-27001" },
          { name: "SOC 2", href: "/services/soc-2" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        heading: "UK Government",
        items: [
          { name: "Cyber Essentials", href: "/services/cyber-essentials" },
          { name: "Cyber Essentials Plus", href: "/services/cyber-essentials" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        heading: "Cybersecurity",
        items: [
          { name: "Cyber Maturity on AWS", href: "/services/cyber-maturity-aws" },
        ],
      },
      {
        heading: "Advisory",
        items: [
          { name: "Virtual CISO", href: "/services/vciso" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        heading: "Additional Services",
        items: [
          { name: "Strategy & Risk", href: "/services/strategy" },
          { name: "Cyber Defense", href: "/services/cyber-defense" },
        ],
      },
    ],
  },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHashNav = useCallback(
    (e: React.MouseEvent, hash: string | null) => {
      if (hash) {
        e.preventDefault();
        if (location.pathname !== "/") {
          navigate("/");
          setTimeout(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        } else {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    [location.pathname, navigate]
  );

  const isServicePage = location.pathname.startsWith("/services");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 overflow-x-auto ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ borderBottom: "1px solid rgba(59,59,57,0.06)" }}
    >
      <nav className="min-w-[1200px] mx-auto px-4" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center h-full py-1 shrink-0">
            <img alt="3FACTOR" className="h-[99%] w-auto object-contain" src={Logo} />
          </Link>

          {/* ── Nav links ── */}
          <div className="flex items-center flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">

                {/* ── SERVICES with mega-menu ── */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`
                      relative h-16 px-5 text-xs font-bold uppercase tracking-[0.15em]
                      bg-transparent hover:bg-transparent focus:bg-transparent
                      data-[state=open]:bg-transparent rounded-none
                      transition-colors duration-200
                    `}
                    style={{ color: isServicePage ? "#F36F21" : "#3B3B39" }}
                  >
                    {isServicePage && (
                      <span className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: "#F36F21" }} />
                    )}
                    Services
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="!w-screen" style={{ backgroundColor: "#F8F9FA" }}>
                    <div style={{ borderTop: "3px solid #F36F21" }}>
                      <div className="min-w-[1200px] mx-auto px-6 py-8">
                      <div className="grid grid-cols-4 gap-8">
                        {megaColumns.map((col, colIdx) => (
                          <div key={colIdx} className="flex flex-col gap-6">
                            {col.groups.map((group) => (
                              <div key={group.heading}>
                                <h3
                                  className="text-sm font-bold mb-3"
                                  style={{ color: "#3B3B39" }}
                                >
                                  {group.heading}
                                </h3>
                                <div className="flex flex-col gap-1.5">
                                  {group.items.map((item) => (
                                    <NavigationMenuLink key={item.name} asChild>
                                      <Link
                                        to={item.href}
                                        className="text-sm transition-colors duration-200 hover:text-[#F36F21] py-1"
                                        style={{ color: "#3B3B39" }}
                                      >
                                        {item.name}
                                      </Link>
                                    </NavigationMenuLink>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>

                      {/* Bottom-right "All Services" */}
                      <div className="flex justify-end mt-6 pt-4" style={{ borderTop: "1px solid rgba(59,59,57,0.08)" }}>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/"
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 hover:text-[#F36F21]"
                            style={{ color: "#3B3B39" }}
                          >
                            All Services
                            <ArrowRight size={12} />
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* ── COMPANY ── */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/#company"
                      onClick={(e) => handleHashNav(e, "company")}
                      className="relative inline-flex items-center h-16 px-5 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 hover:text-[#F36F21]"
                      style={{ color: "#3B3B39" }}
                    >
                      Company
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* ── CONTACT ── */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/contact"
                      className="relative inline-flex items-center h-16 px-5 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 hover:text-[#F36F21]"
                      style={{ color: location.pathname === "/contact" ? "#F36F21" : "#3B3B39" }}
                    >
                      {location.pathname === "/contact" && (
                        <span className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: "#F36F21" }} />
                      )}
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* ── CTA ── */}
          <div className="flex items-center gap-4 shrink-0">
            <Link to="/contact">
              <Button
                className="text-white font-bold text-xs uppercase tracking-[0.15em] px-6 h-10 transition-all duration-200 hover:shadow-lg rounded-none"
                style={{ backgroundColor: "#3B3B39" }}
                aria-label="Contact 3FACTOR"
              >
                Get a Quote
                <ArrowRight size={14} className="ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
