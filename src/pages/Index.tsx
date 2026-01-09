import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Activities from "@/components/Activities";
import Faq from "@/components/FAQ"
import Team from "@/components/Team"
import Social from "@/components/SocialInitiatives"
import Cta from "@/components/CallToAction"
import Events from "@/components/Events";
import News from "@/components/News";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useTranslation } from "@/hooks/useTranslation";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <SEO
        title={t.pages.home}
        description={t.pages.homeDescription}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Founder />
        <Activities />
        <Faq />
        <Team />
        <Social />
        <Cta />
        <Events />
        <News />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
