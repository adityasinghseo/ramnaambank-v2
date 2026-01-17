import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import News from "@/components/News";

import { useLanguage } from "@/contexts/LanguageContext";

const NewsPage = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      <SEO
        title={language === 'english' ? "Latest News and Updates" : "नवीनतम समाचार और अपडेट"}
        description={language === 'english'
          ? "Latest news, events and announcements of Ram Naam Bank. Know about our recent activities and events."
          : "राम नाम बैंक की नवीनतम खबरें, कार्यक्रम और घोषणाएं। जानिए हमारे हालिया गतिविधियों और आयोजनों के बारे में।"}
      />
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
                {language === 'english' ? "Latest Updates" : "लेटेस्ट अपडेट"}
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground font-hind max-w-2xl mx-auto">
                {language === 'english'
                  ? "Latest news, events and announcements of Ram Naam Bank"
                  : "राम नाम बैंक की नवीनतम खबरें, कार्यक्रम और घोषणाएं"}
              </p>
            </div>
          </div>
        </section>
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
