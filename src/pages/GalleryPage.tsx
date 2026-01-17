import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import gl1 from "@/assets/gl1.webp";
import gl2 from "@/assets/gl2.webp";
import gl3 from "@/assets/gl3.webp";
import gl4 from "@/assets/gl4.webp";
import gl5 from "@/assets/gl5.webp";
import gl6 from "@/assets/gl6.webp";
import gl7 from "@/assets/gl7.jpg";
import gl8 from "@/assets/gl8.jpg";
import gl9 from "@/assets/gl9.jpg";
import gl10 from "@/assets/gl10.jpg";
import gl11 from "@/assets/gl11.jpg";
import gl12 from "@/assets/gl12.jpg";
import gl13 from "@/assets/gl13.jpg";
import gl14 from "@/assets/gl14.jpg";
import gl15 from "@/assets/gl15.jpg";

const GalleryPage = () => {
  const { language } = useLanguage();
  const galleryImages = [gl1, gl2, gl3, gl4, gl5, gl6, gl7, gl8, gl9, gl10, gl11, gl12, gl13, gl14, gl15];

  const videoLinks = [
    "https://www.youtube.com/embed/sCSimkx0nwE",
    "https://www.youtube.com/embed/xLXndzvOBno",
    "https://www.youtube.com/embed/VYoYFr843r8",
    "https://www.youtube.com/embed/XNiECc_Xtbo",
    "https://www.youtube.com/embed/FmopoTkjnJk",
    "https://www.youtube.com/embed/C2FQmSGcmLI",
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={language === 'english' ? "Media Gallery" : "मीडिया गैलरी"}
        description={language === 'english'
          ? "Media Gallery - Photo and video collection of Shri Ram Naam World Bank Committee. See glimpses of our events."
          : "मीडिया गैलरी - श्री राम नाम विश्व बैंक समिति के फोटो और वीडियो संग्रह। हमारे आयोजनों की झलकियां देखें।"}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-cream">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
                {language === 'english' ? "Media Gallery" : "मीडिया गैलरी"}
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground font-hind leading-relaxed">
                {language === 'english'
                  ? "Glimpses of religious, social and public service programs of Shri Ram Naam World Bank Committee"
                  : "श्री राम नाम विश्व बैंक समिति के धार्मिक, सामाजिक और जनहित कार्यक्रमों की झलकियां"}
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 font-hind">
              {language === 'english' ? "Photo Gallery" : "फोटो गैलरी"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((src, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105 cursor-pointer group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="py-20 bg-[#fffaf0]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-hind">
                {language === 'english' ? "Video Gallery" : "वीडियो गैलरी"}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-hind leading-relaxed">
                {language === 'english'
                  ? "Watch glimpses of our spiritual and social programs through videos."
                  : "हमारे आध्यात्मिक और सामाजिक कार्यक्रमों की झलकियां वीडियो के माध्यम से देखें।"}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {videoLinks.map((url, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-md border border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <iframe
                    src={url}
                    title={`Video ${index + 1}`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 animate-fade-in-up">
              <a
                href="https://www.youtube.com/channel/UCVQZt8utN8yQa_M5gmJVIdg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-primary to-accent text-white font-hind text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500"
              >
                {language === 'english' ? "Watch All Videos on YouTube →" : "सभी वीडियो देखें YouTube पर →"}
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-hind">
              {language === 'english' ? "Join Our Programs" : "हमारे कार्यक्रमों में शामिल हों"}
            </h2>
            <p className="text-xl text-muted-foreground font-hind max-w-2xl mx-auto mb-8">
              {language === 'english'
                ? "Contact us to participate in upcoming programs of Ram Naam Bank and share your photos."
                : "राम नाम बैंक के आगामी कार्यक्रमों में भाग लेने और अपनी तस्वीरें साझा करने के लिए हमसे संपर्क करें।"}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-hind text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500"
              >
                <Mail className="w-5 h-5" />
                {language === 'english' ? "Contact Us" : "संपर्क करें"}
              </a>

              <a
                href="https://wa.me/919045000108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-hind text-lg px-8 py-3 rounded-full shadow-md hover:scale-105 transition-all duration-500"
              >
                <MessageCircle className="w-5 h-5" />
                {language === 'english' ? "Connect on WhatsApp" : "WhatsApp पर जुड़ें"}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default GalleryPage;
