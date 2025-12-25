import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import DonationPage from "./pages/DonationPage";
import RamNaamPage from "./pages/RamNaamPage";
import MembershipPage from "./pages/MembershipPage";
import LekhanPage from "./pages/LekhanPage";
import YojanaPage from "./pages/YojanaPage";
import YojanaDetailPage from "./pages/YojanaDetailPage";
import JyotishPage from "./pages/JyotishPage";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/* ✅ ScrollToTop component */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const AppRoutes = () => (
  <>
    <ScrollToTop /> {/* ✅ triggers scroll on every route change */}
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/ram-naam" element={<RamNaamPage />} />
      <Route path="/membership" element={<MembershipPage />} />
      <Route path="/lekhan" element={<LekhanPage />} />
      <Route path="/yojana" element={<YojanaPage />} />
      <Route path="/yojana/:slug" element={<YojanaDetailPage />} />
      <Route path="/jyotish" element={<JyotishPage />} />
      <Route path="/donation" element={<DonationPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
