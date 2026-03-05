import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ArrowRight, Shield, FileCheck, UserCog, Lock, ChevronUp, Search, X, CreditCard, Layers, ShieldCheck } from "lucide-react";
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

/* ── Search data ── */
const searchServices = [
  { name: "ISO 27001", path: "/services/iso-27001", keywords: ["iso", "27001", "isms", "information security", "management system", "certification"], icon: Shield, description: "Information security management system certification & readiness" },
  { name: "PCI DSS", path: "/services/pci-dss", keywords: ["pci", "dss", "payment", "credit card", "cardholder", "merchant", "transaction", "card data"], icon: CreditCard, description: "Payment card industry data security standard compliance" },
  { name: "SOC 2", path: "/services/soc-2", keywords: ["soc", "soc2", "service org", "audit", "trust", "aicpa", "type 1", "type 2", "type ii"], icon: FileCheck, description: "Service organisation control reporting & trust assurance" },
  { name: "CCF (Common Control Framework)", path: "/services/strategy-risk", keywords: ["ccf", "common control", "framework", "integrated", "unified", "mapping", "reuse"], icon: Layers, description: "Unified control framework to reduce duplication across standards" },
  { name: "Cyber Essentials", path: "/services/cyber-essentials", keywords: ["cyber essentials", "ce", "ce+", "plus", "ncsc", "baseline", "basic"], icon: ShieldCheck, description: "UK government-backed baseline cyber security certification" },
];

/* ── Mega-menu structure (4 columns) ── */
const megaColumns = [
  {
    groups: [
      {
        heading: "Compliance Certifications",
        items: [
          { name: "ISO 27001", href: "/services/iso-27001" },
          { name: "SOC 2", href: "/services/soc-2" },
          { name: "PCI DSS", href: "/services/pci-dss" },
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
        heading: "Strategy and Risk Services",
        items: [
          { name: "Cyber Maturity", href: "/services/strategy" },
          { name: "Vendor Risk Management", href: "/services/strategy" },
          { name: "Cybersecurity Strategy", href: "/services/strategy" },
        ],
      },
    ],
  },
];

const navLinks = [
  { name: "Services", hasMega: true, href: "", hash: null },
  { name: "Company", hasMega: false, href: "/#company", hash: "company" },
  { name: "Contact", hasMega: false, href: "/contact", hash: null },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q.length === 0) return [];
    return searchServices.filter(
      (s) => s.name.toLowerCase().includes(q) || s.keywords.some((kw) => kw.includes(q))
    );
  }, [searchQuery]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setSearchQuery("");
  }, [location.pathname]);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [searchOpen]);

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

  const handleSearchResultClick = (path: string) => {
    setSearchOpen(false);
    setSearchQuery("");
    navigate(path);
  };

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
          <Link to="/" className="flex items-center h-full py-1 shrink-0 lg:w-[180px]">
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

          {/* ── Desktop: Search + CTA ── */}
          <div className="hidden lg:flex items-center justify-end gap-3 shrink-0 w-[220px]">
            <button
              onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(""); }}
              className="w-10 h-10 flex items-center justify-center transition-colors duration-200 hover:text-[#F36F21]"
              style={{ color: searchOpen ? "#F36F21" : "#3B3B39" }}
              aria-label="Search services"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
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
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(""); }}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors duration-200"
              style={{ color: searchOpen ? "#F36F21" : "#3B3B39" }}
              aria-label="Search services"
            >
              {searchOpen ? <X size={22} /> : <Search size={22} />}
            </button>
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

      {/* ══════════════════════════════════
          SEARCH OVERLAY DROPDOWN
      ══════════════════════════════════ */}
      {searchOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-14 md:top-16 bg-black/20 z-40"
            onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
          />
          <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t z-50" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
            <div className="container mx-auto px-4 py-6 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a standard, framework, or keyword…"
                  className="w-full pl-12 pr-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 bg-[#F8F9FA] border-2 border-slate-300 focus:border-[#3B3B39] focus:outline-none transition-colors"
                />
              </div>

              {searchQuery.trim().length > 0 && (
                <div className="mt-3 border border-slate-200 bg-white overflow-hidden rounded-lg">
                  {searchResults.length > 0 ? (
                    searchResults.map((service) => {
                      const Icon = service.icon;
                      return (
                        <button
                          key={service.name}
                          onClick={() => handleSearchResultClick(service.path)}
                          className="w-full flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0 group text-left"
                        >
                          <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-lg border border-slate-200 flex-shrink-0 group-hover:border-orange-300 transition-colors">
                            <Icon className="w-5 h-5 text-slate-500 group-hover:text-orange-500 transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                              {service.name}
                            </p>
                            <p className="text-xs text-slate-500 truncate">
                              {service.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-500 transition-all group-hover:translate-x-1 flex-shrink-0" />
                        </button>
                      );
                    })
                  ) : (
                    <div className="px-5 py-6 text-center">
                      <p className="text-sm text-slate-500">No matching services found. Try "ISO", "SOC", or "PCI".</p>
                    </div>
                  )}
                </div>
              )}

              {searchQuery.trim().length === 0 && (
                <p className="mt-3 text-xs text-slate-400 text-center">
                  Try searching: ISO, SOC 2, PCI, Credit Card, Cyber Essentials, CCF
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navigation;
