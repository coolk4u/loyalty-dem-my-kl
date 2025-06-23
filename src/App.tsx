
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Index";
import ContractorDashboard from "./pages/ContractorDashboard";
import ContractorQRScanner from "./pages/ContractorQRScanner";
import ContractorLoyaltyDetails from "./pages/ContractorLoyaltyDetails";
import ContractorRewards from "./pages/ContractorRewards";
import ManageMasons from "./pages/ManageMasons";
import CounterDashboard from "./pages/CounterDashboard";
import QRScanner from "./pages/QRScanner";
import Survey from "./pages/Survey";
import LoyaltyDetails from "./pages/LoyaltyDetails";
import CoverageCalculator from "./pages/CoverageCalculator";
import Products from "./pages/Products";
import ReferFriend from "./pages/ReferFriend";
import Profile from "./pages/Profile";
import Rewards from "./pages/Rewards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Index />} />
          <Route path="/contractor-dashboard" element={<ContractorDashboard />} />
          <Route path="/contractor-qr-scanner" element={<ContractorQRScanner />} />
          <Route path="/contractor-loyalty-details" element={<ContractorLoyaltyDetails />} />
          <Route path="/contractor-rewards" element={<ContractorRewards />} />
          <Route path="/manage-masons" element={<ManageMasons />} />
          <Route path="/counter-dashboard" element={<CounterDashboard />} />
          <Route path="/qr-scanner" element={<QRScanner />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/loyalty-details" element={<LoyaltyDetails />} />
          <Route path="/coverage-calculator" element={<CoverageCalculator />} />
          <Route path="/products" element={<Products />} />
          <Route path="/refer-friend" element={<ReferFriend />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rewards" element={<Rewards />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
