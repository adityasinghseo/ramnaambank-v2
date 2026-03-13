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
import { useTranslation } from "@/hooks/useTranslation";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <SEO
        titleHi="होम"
        titleEn="Home"
        descriptionHi="श्री राम नाम विश्व बैंक समिति - भक्ति, सेवा और समर्पण का एक अनूठा संगम। हमसे जुड़ें और राम नाम की महिमा का अनुभव करें।"
        descriptionEn="Shri Ram Naam Vishwa Bank Samiti - A unique confluence of devotion, service and dedication. Join us and experience the glory of Ram Naam."
        path="/"
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
    </div>
  );
};

export default Index;
