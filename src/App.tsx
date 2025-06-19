
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QRScanner from "./pages/QRScanner";
import Survey from "./pages/Survey";
import LoyaltyDetails from "./pages/LoyaltyDetails";
import CoverageCalculator from "./pages/CoverageCalculator";
import Products from "./pages/Products";
import ReferFriend from "./pages/ReferFriend";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/qr-scanner" element={<QRScanner />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/loyalty-details" element={<LoyaltyDetails />} />
          <Route path="/coverage-calculator" element={<CoverageCalculator />} />
          <Route path="/products" element={<Products />} />
          <Route path="/refer-friend" element={<ReferFriend />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
