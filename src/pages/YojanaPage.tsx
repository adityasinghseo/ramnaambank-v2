import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { yojanas } from "@/data/yojanas";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const YojanaPage = () => {
  const { language } = useLanguage();

  const title = language === 'english' ? "Our Schemes" : "हमारी योजनाएं";
  const seoDescription = language === 'english'
    ? "Information about public welfare schemes and programs of Shri Ram Naam World Bank Committee. Our efforts for the welfare of society and humanity."
    : "श्री राम नाम विश्व बैंक समिति की जनहित योजनाओं और कार्यक्रमों की जानकारी। समाज और मानवता के कल्याण के लिए हमारे प्रयास।";

  return (
    <div className="min-h-screen">
      <SEO
        title={title}
        description={seoDescription}
      />
      <Header />
      <main>
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-cream to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
                {title}
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground font-hind leading-relaxed">
                {language === 'english'
                  ? "Shri Ram Naam World Bank Committee's schemes are not only a medium of spiritual upliftment but also a source of inspiration for the welfare of society and humanity."
                  : "श्री राम नाम विश्व बैंक समिति की योजनाएं न केवल आध्यात्मिक उत्थान का माध्यम हैं, बल्कि समाज और मानवता के कल्याण के लिए प्रेरणास्रोत भी हैं।"}
              </p>
            </div>
          </div>
        </section>

        {/* Grid Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {yojanas.map((item) => (
                <Link to={`/yojana/${item.slug}`} key={item.slug} className="group">
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20 animate-fade-in">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={language === 'english' ? item.title_en : item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-secondary font-hind group-hover:text-primary transition-colors">
                        {language === 'english' ? item.title_en : item.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-hind">
              {language === 'english'
                ? "To join any scheme or public welfare work"
                : "किसी भी योजना या जनहित कार्य में शामिल होने के लिए"}
            </h2>
            <p className="text-xl mb-8 font-hind">
              {language === 'english' ? "Contact us: " : "हमसे संपर्क करें: "}
              <a href="tel:+91-9045000108" className="underline">+91-9045000108</a>
            </p>
            <p className="text-lg font-hind">
              {language === 'english' ? "Or email: " : "या ईमेल करें: "}
              <a href="mailto:raamnaambank@gmail.com" className="underline">
                raamnaambank@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default YojanaPage;
