import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ArrowRight, Shield, FileCheck, UserCog, Lock, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const allMobileItems = megaColumns.flatMap((col) =>
  col.groups.flatMap((g) => g.items.map((item) => ({ ...item, category: g.heading })))
);

const navLinks = [
  { name: "Services", hasMega: true, href: "", hash: null },
  { name: "Company", hasMega: false, href: "/#company", hash: "company" },
  { name: "Contact", hasMega: false, href: "/contact", hash: null },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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
      setMobileOpen(false);
    },
    [location.pathname, navigate]
  );

  const isServicePage = location.pathname.startsWith("/services");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ borderBottom: "1px solid rgba(59,59,57,0.06)" }}
    >
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center h-full py-1 shrink-0">
            <img alt="3FACTOR" className="h-[99%] w-auto object-contain" src={Logo} />
          </Link>

          {/* ══════════════════════════════════
              DESKTOP NAV (lg+)
          ══════════════════════════════════ */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
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
                      <div className="max-w-7xl mx-auto px-6 py-8">
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
                      className={`relative inline-flex items-center h-16 px-5 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 hover:text-[#F36F21]`}
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

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
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

          {/* ══════════════════════════════════
              MOBILE NAV (< lg)
          ══════════════════════════════════ */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open navigation menu"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors duration-200"
                  style={{ color: "#3B3B39" }}
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px] bg-white p-0 overflow-y-auto">
                <div className="px-6 pt-6 pb-4 border-b" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
                  <Link to="/" onClick={() => setMobileOpen(false)} className="inline-block">
                    <img alt="3FACTOR" className="h-10 w-auto object-contain" src={Logo} />
                  </Link>
                </div>

                <div className="px-6 py-6">
                  {/* Services accordion */}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="services" className="border-b" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
                      <AccordionTrigger
                        className="text-xs font-bold uppercase tracking-[0.15em] min-h-[44px] py-3 hover:no-underline hover:text-[#F36F21] justify-center"
                        style={{ color: "#3B3B39" }}
                      >
                        Services
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-4 pb-3">
                          {megaColumns.map((col, colIdx) =>
                            col.groups.map((group) => (
                              <div key={group.heading}>
                                <h4
                                  className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2 px-1"
                                  style={{ color: "#3B3B39" }}
                                >
                                  {group.heading}
                                </h4>
                                <div className="flex flex-col gap-0.5">
                                  {group.items.map((item) => (
                                    <SheetClose asChild key={item.name}>
                                      <Link
                                        to={item.href}
                                        className="text-sm min-h-[44px] flex items-center py-2 px-3 transition-colors duration-200 hover:bg-[#F8F9FA] hover:text-[#F36F21]"
                                        style={{ color: "#3B3B39" }}
                                      >
                                        {item.name}
                                      </Link>
                                    </SheetClose>
                                  ))}
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Other links */}
                  <div className="flex flex-col gap-0 mt-1">
                    <SheetClose asChild>
                      <Link
                        to="/#company"
                        onClick={(e) => handleHashNav(e, "company")}
                        className="text-xs font-bold uppercase tracking-[0.15em] min-h-[44px] flex items-center justify-center py-3 transition-colors duration-200 hover:text-[#F36F21] border-b"
                        style={{ color: "#3B3B39", borderColor: "rgba(59,59,57,0.08)" }}
                      >
                        Company
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to="/contact"
                        className="text-xs font-bold uppercase tracking-[0.15em] min-h-[44px] flex items-center justify-center py-3 transition-colors duration-200 hover:text-[#F36F21] border-b"
                        style={{ color: "#3B3B39", borderColor: "rgba(59,59,57,0.08)" }}
                      >
                        Contact
                      </Link>
                    </SheetClose>
                  </div>

                  <div className="mt-8">
                    <SheetClose asChild>
                      <Link to="/contact">
                        <Button
                          className="w-full min-h-[48px] text-white font-bold uppercase tracking-[0.15em] rounded-none"
                          style={{ backgroundColor: "#3B3B39" }}
                          aria-label="Get a quote from 3FACTOR"
                        >
                          Get a Quote
                          <ArrowRight size={14} className="ml-1.5" />
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
