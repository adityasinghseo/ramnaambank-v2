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
        title={language === 'english' ? "Donate" : "दान करें"}
        description={language === 'english'
          ? "Donate - Contribute to social service and religious works. Shri Ram Naam World Bank Committee."
          : "दान करें - समाज सेवा और धर्म के कार्य में अपना योगदान दें। श्री राम नाम विश्व बैंक समिति।"}
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
