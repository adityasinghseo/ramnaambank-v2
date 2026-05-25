import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import androidIcon from "@/assets/android.png";
import appleIcon from "@/assets/apple.png";
import { Smartphone, Sparkles, BookHeart, ListChecks, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const RamNaamAppPage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const isEn = language === "english";

  const features = [
    {
      icon: <BookHeart className="w-10 h-10 text-primary" />,
      title: isEn ? "Easy & Distraction-Free Jaap" : "आसान और एकाग्र जप",
      description: isEn
        ? "Perform your Ram Naam Jaap in a peaceful, focused environment without any digital distractions."
        : "बिना किसी डिजिटल व्यवधान के एक शांतिपूर्ण और केंद्रित वातावरण में अपना राम नाम जप करें।",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      title: isEn ? "Digital Jaap Counter" : "डिजिटल जप काउंटर",
      description: isEn
        ? "An interactive and simple digital counter to track your chants dynamically as you repeat the divine name."
        : "जैसे ही आप दिव्य नाम दोहराते हैं, अपने जप को गतिशील रूप से ट्रैक करने के लिए एक सरल डिजिटल काउंटर।",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      title: isEn ? "Virtual Ram Naam Bank" : "वर्चुअल राम नाम बैंक",
      description: isEn
        ? "Offer your written and chanted Ram Naam directly to the digital bank and track your devotional savings."
        : "अपने लिखित और जपे गए राम नाम को सीधे डिजिटल बैंक में अर्पित करें और अपनी भक्ति बचत को ट्रैक करें।",
    },
    {
      icon: <ListChecks className="w-10 h-10 text-primary" />,
      title: isEn ? "Consistent Devotional Practice" : "निरंतर आध्यात्मिक साधना",
      description: isEn
        ? "Maintain daily streaks, set goals, and build a consistent, rewarding spiritual discipline."
        : "दैनिक निरंतरता बनाए रखें, लक्ष्य निर्धारित करें, और एक दृढ़ आध्यात्मिक अनुशासन का निर्माण करें।",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{isEn ? "Ram Naam App - Devotion & Jaap Companion" : "राम नाम ऐप - भक्ति एवं जप साथी"} - {t.header.organizationName}</title>
        <meta
          name="description"
          content={
            isEn
              ? "Download Ram Naam App to perform Jaap, count chants, and deposit your devotional offerings to the virtual Ram Naam Bank."
              : "जप करने, जप गिनने और वर्चुअल राम नाम बैंक में अपनी भक्ति प्रसाद जमा करने के लिए राम नाम ऐप डाउनलोड करें।"
          }
        />
      </Helmet>
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/15 via-accent/10 to-cream overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-yellow-200/20 to-transparent rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold font-hind mb-6 animate-fade-in">
              {isEn ? "📱 Now Available on iOS & Android" : "📱 अब iOS और Android पर उपलब्ध"}
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind leading-tight">
              {isEn ? "Welcome to Ram Naam App" : "राम नाम ऐप में आपका स्वागत है"}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

            <p className="text-xl md:text-2xl text-muted-foreground font-hind max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
              {isEn
                ? "Experience devotion, peace, and spiritual connection through the divine name of Lord Ram."
                : "भगवान राम के दिव्य नाम के माध्यम से भक्ति, शांति और आध्यात्मिक संबंध का अनुभव करें।"}
            </p>

            <p className="text-lg text-muted-foreground font-hind max-w-2xl mx-auto leading-relaxed mb-10">
              {isEn
                ? "Ram Naam App is a simple and powerful companion for devotees who wish to make Ram Naam Jaap a part of their daily life. Perform Naam Jaap anytime and anywhere, keep track of your chanting progress, and strengthen your spiritual journey with a meaningful digital experience."
                : "राम नाम ऐप उन भक्तों के लिए एक सरल और शक्तिशाली साथी है जो राम नाम जप को अपने दैनिक जीवन का हिस्सा बनाना चाहते हैं। किसी भी समय और कहीं भी नाम जप करें, अपने जप की प्रगति का ट्रैक रखें, और एक सार्थक डिजिटल अनुभव के साथ अपनी आध्यात्मिक यात्रा को मजबूत करें।"}
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.shri.rnvbs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#FF7E26] hover:bg-[#E0661B] text-white px-6 py-3 rounded-xl transition duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                <img
                  src={androidIcon}
                  alt="Google Play"
                  className="h-6 w-6 object-contain filter invert brightness-200"
                />
                <div className="text-left">
                  <div className="text-[10px] text-white/80 font-poppins uppercase tracking-wider">Get it on</div>
                  <div className="text-base font-bold font-poppins">Google Play</div>
                </div>
              </a>

              <a
                href="https://apps.apple.com/in/app/ram-naam/id6746091971"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-xl transition duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                <img
                  src={appleIcon}
                  alt="App Store"
                  className="h-6 w-6 object-contain filter invert brightness-200"
                />
                <div className="text-left">
                  <div className="text-[10px] text-white/80 font-poppins uppercase tracking-wider">Download on the</div>
                  <div className="text-base font-bold font-poppins">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary font-hind mb-4">
                {isEn ? "App Features" : "ऐप की विशेषताएं"}
              </h2>
              <div className="w-16 h-0.5 bg-primary mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-6 rounded-2xl border border-primary/10 bg-cream/30 hover:shadow-soft transition duration-300"
                >
                  <div className="shrink-0 p-3 bg-white rounded-xl shadow-sm h-fit">
                    {feature.icon}
                  </div>
                  <div className="font-hind">
                    <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Quote */}
        <section className="py-20 bg-[#fffaf0] border-t border-b border-primary/10">
          <div className="container mx-auto px-4 max-w-3xl text-center font-hind">
            <p className="text-lg md:text-xl text-muted-foreground italic mb-6 leading-relaxed">
              {isEn
                ? "Whether you chant for inner peace, devotion, mindfulness, or spiritual growth, Ram Naam App helps you stay connected with the sacred name of Lord Ram every day."
                : "चाहे आप आंतरिक शांति, भक्ति, ध्यान या आध्यात्मिक विकास के लिए जप करते हों, राम नाम ऐप आपको हर दिन भगवान राम के पवित्र नाम से जुड़े रहने में मदद करता है।"}
            </p>
            <h3 className="text-2xl font-bold text-secondary mb-6">
              {isEn ? "Begin your journey of devotion today." : "आज ही अपनी भक्ति यात्रा की शुरुआत करें।"}
            </h3>
            <div className="flex justify-center gap-2 items-center text-primary font-bold text-lg mb-2">
              <span>{isEn ? "Shri Ram Jai Ram Jai Jai Ram" : "श्री राम जय राम जय जय राम"}</span>
              <span>🙏</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RamNaamAppPage;
