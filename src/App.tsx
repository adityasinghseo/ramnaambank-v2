import { Suspense, lazy } from "react";
import { useEffect } from "react";
import { AuthProvider } from "./modules/auth/context/authContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import WhatsAppFloat from "@/components/WhatsAppFloat";
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
import NewsDetailPage from "./pages/NewsDetailPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ShopFloatingCart from "./modules/shop/components/ShopFloatingCart";
import CartSync from "./modules/shop/components/CartSync";
import SocialSticky from "@/components/SocialSticky";

const ShopPage = lazy(() => import("./modules/shop/pages/ShopPage"));
const ProductPage = lazy(() => import("./modules/shop/pages/ProductPage"));
const CheckoutPage = lazy(() => import("./modules/checkout/pages/CheckoutPage"));
const OrderSuccessPage = lazy(() => import("./modules/checkout/pages/OrderSuccessPage"));
const LoginPage = lazy(() => import("./modules/auth/pages/LoginPage"));
const SignupPage = lazy(() => import("./modules/auth/pages/SignupPage"));
const ProfilePage = lazy(() => import("./modules/auth/pages/ProfilePage"));
const WishlistPage = lazy(() => import("./modules/shop/pages/WishlistPage"));
const ForgotPasswordPage = lazy(() => import("./modules/auth/pages/ForgotPasswordPage"));

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
      <Route path="/news/:slug" element={<NewsDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Shop Routes */}
      <Route path="/shop" element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Shop...</div>}>
          <ShopPage />
        </Suspense>
      } />
      <Route path="/product/:slug" element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Product...</div>}>
          <ProductPage />
        </Suspense>
      } />
      <Route path="/checkout" element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Checkout...</div>}>
          <CheckoutPage />
        </Suspense>
      } />
      <Route path="/order-success" element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <OrderSuccessPage />
        </Suspense>
      } />

      {/* Auth Routes */}
      <Route path="/login" element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <LoginPage />
        </Suspense>
      } />
      <Route path="/signup" element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <SignupPage />
        </Suspense>
      } />
      <Route path="/profile" element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <ProfilePage />
        </Suspense>
      } />
      <Route path="/wishlist" element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <WishlistPage />
        </Suspense>
      } />
      <Route path="/forgot-password" element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <ForgotPasswordPage />
        </Suspense>
      } />

      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
            <WhatsAppFloat />
            <SocialSticky />
            <ShopFloatingCart />
            <CartSync />
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
