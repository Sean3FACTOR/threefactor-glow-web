import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import CyberMaturityAWS from "./pages/CyberMaturityAWS";

import StrategyRiskServicesPage from "./pages/StrategyRiskServicesPage";
import CyberDefenseServicesPage from "./pages/CyberDefenseServicesPage";
import VCISOPage from "./pages/VCISOPage";
import CyberEssentialsPage from "./pages/CyberEssentialsPage";
import ISO27001Page from "./pages/ISO27001Page";
import PCIDSSPage from "./pages/PCIDSSPage";
import SOC2Page from "./pages/SOC2Page";
import CompanyPage from "./pages/CompanyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/company" element={<CompanyPage />} />
          
          <Route path="/services/strategy-risk" element={<StrategyRiskServicesPage />} />
          <Route path="/services/cyber-defense" element={<CyberDefenseServicesPage />} />
          <Route path="/services/cyber-maturity-aws" element={<CyberMaturityAWS />} />
          <Route path="/services/vciso" element={<VCISOPage />} />
          <Route path="/services/cyber-essentials" element={<CyberEssentialsPage />} />
          <Route path="/services/iso-27001" element={<ISO27001Page />} />
          <Route path="/services/pci-dss" element={<PCIDSSPage />} />
          <Route path="/services/soc-2" element={<SOC2Page />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
