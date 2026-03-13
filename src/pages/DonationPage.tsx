import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";

import { useLanguage } from "@/contexts/LanguageContext";

const DonationPage = () => {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen">
      <SEO
        titleHi="दान करें"
        titleEn="Donate"
        descriptionHi="दान करें - समाज सेवा और धर्म के कार्य में अपना योगदान दें। श्री राम नाम विश्व बैंक समिति।"
        descriptionEn="Donate - Contribute to social service and religious works. Shri Ram Naam World Bank Committee."
        path="/donate"
      />
      <Header />
      <main>
        <Donation />
      </main>
      <Footer />
    </div>
  );
};

export default DonationPage;
