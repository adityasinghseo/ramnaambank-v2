import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookHeart, PenLine, Smartphone, BookOpen, Sparkles } from "lucide-react";
import androidIcon from "@/assets/android.png";
import appleIcon from "@/assets/apple.png";
import { useLanguage } from "@/contexts/LanguageContext";

const RamNaamPage = () => {
  const { language } = useLanguage();

  const benefits = [
    {
      icon: <BookHeart className="w-12 h-12 text-primary" />,
      title: language === 'english' ? "Peace of Mind" : "मन की शांति",
      description: language === 'english' ? "Writing Ram Naam brings stability, peace and devotion to the mind." : "राम नाम लेखन से मन को स्थिरता, शांति और भक्ति मिलती है।",
    },
    {
      icon: <PenLine className="w-12 h-12 text-primary" />,
      title: language === 'english' ? "Spiritual Practice" : "आध्यात्मिक साधना",
      description: language === 'english' ? "This is not just writing, but a spiritual practice that purifies the soul." : "यह केवल लेखन नहीं, बल्कि साधना है जो आत्मा को शुद्ध करती है।",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: language === 'english' ? "Earning Virtue" : "पुण्य अर्जन",
      description: language === 'english' ? "Writing Ram Naam in Kaliyuga gives 100 times more virtue." : "कलियुग में राम नाम लेखन से 100 गुना पुण्य की प्राप्ति होती है।",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: language === 'english' ? "Positive Energy" : "सकारात्मक ऊर्जा",
      description: language === 'english' ? "Writing increases concentration and infuses positive energy in life." : "लेखन से एकाग्रता बढ़ती है और जीवन में सकारात्मक ऊर्जा का संचार होता है।",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        titleHi="राम नाम बैंक - राम नाम लेखन"
        titleEn="Ram Naam Bank - Ram Naam Writing"
        descriptionHi="राम नाम सो कल्पतरु, कली कल्याण निवासु। राम नाम लेखन से पुण्य अर्जन और मन की शांति पाएं। अभी शुरू करें।"
        descriptionEn="Ram Naam So Kalpataru, Kali Kalyan Niwasu. Get virtue and peace of mind by writing Ram Naam. Start now."
        path="/ram-naam"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-cream">
          <div className="container mx-auto px-4 text-center max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
              {language === 'english' ? "Deposit Ram Naam" : "राम नाम जमा करें"}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground font-hind leading-relaxed">
              {language === 'english'
                ? "“Ram Naam So Kalpataru, Kali Kalyan Niwasu. Jo Sumirat Bhayo Bhang Te, Tulsi Tulsidasu॥”"
                : "“राम नाम सो कल्पतरु, कली कल्याण निवासु। जो सुमिरत भयो भांग ते, तुलसी तुलसीदासु॥”"}
            </p>
            <p className="text-lg text-muted-foreground mt-4 font-hind leading-relaxed">
              {language === 'english'
                ? "The name of Lord Shri Ram is like a Kalpavriksha (wish-fulfilling tree), which is the source of welfare in Kaliyuga. Tulsidas Ji says that by just remembering Ram Naam, even the impossible becomes possible."
                : "भगवान श्रीराम का नाम कल्पवृक्ष के समान है, जो कलियुग में कल्याण का स्रोत है। तुलसीदास जी कहते हैं कि राम नाम के स्मरण मात्र से असंभव भी संभव हो जाता है।"}
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-[#fffaf0] relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 font-hind">
              {language === 'english' ? "Benefits of writing Ram Naam — Listen from our team" : "राम नाम लिखने के लाभ — हमारी टीम से सुनिए"}
            </h2>

            {/* Soft Glow Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-yellow-200/30 to-transparent rounded-full blur-3xl"></div>

            {/* Responsive Video Embed */}
            <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg border border-primary/20 bg-black/10">
              <iframe
                src="https://www.youtube.com/embed/ZUKJGkaSvaY?rel=0&modestbranding=1"
                title={language === 'english' ? "Benefits of writing Ram Naam" : "राम नाम लिखने के लाभ"}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Methods Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 font-hind">
              {language === 'english' ? "How does it work?" : "यह कैसे कार्य करता है?"}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* App Method */}
              <Card className="shadow-soft border-primary/20 bg-white/90 backdrop-blur-sm animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Smartphone className="w-10 h-10 text-primary" />
                    <CardTitle className="text-2xl text-secondary font-hind">
                      {language === 'english' ? "📱 Method 1: Via Mobile App" : "📱 पहला तरीका: मोबाइल ऐप के माध्यम से"}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-lg text-muted-foreground font-hind leading-relaxed space-y-3">
                  <p>{language === 'english' ? "Download our mobile app" : "हमारे मोबाइल ऐप को डाउनलोड करें"}</p>
                  <p>{language === 'english' ? "Start chanting in the app and become a member" : "ऐप में जप प्रारंभ करें और सदस्य बनें"}</p>
                  <p>{language === 'english' ? "Submit your chant count in the app" : "अपने जप की गिनती को ऐप में जमा करें"}</p>

                  {/* App Buttons with Icons */}
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.shri.rnvbs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary/80 transition"
                    >
                      <img
                        src={androidIcon}
                        alt="Google Play"
                        className="h-5 w-5 object-contain filter invert brightness-200"
                      />
                      <span>Google Play Store</span>
                    </a>

                    <a
                      href="https://apps.apple.com/in/app/ram-naam/id6746091971"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-secondary text-white px-5 py-2 rounded-lg hover:bg-secondary/80 transition"
                    >
                      <img
                        src={appleIcon}
                        alt="App Store"
                        className="h-5 w-5 object-contain filter invert brightness-200"
                      />
                      <span>Apple App Store</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Notebook Method */}
              <Card className="shadow-soft border-primary/20 bg-white/90 backdrop-blur-sm animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="w-10 h-10 text-primary" />
                    <CardTitle className="text-2xl text-secondary font-hind">
                      {language === 'english' ? "📓 Method 2: Via Ram Naam Notebook" : "📓 दूसरा तरीका: राम नाम नोटबुक के माध्यम से"}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-lg text-muted-foreground font-hind leading-relaxed space-y-3">
                  <p>{language === 'english' ? "Buy notebook for writing Ram Naam" : "राम नाम लिखने के लिए नोटबुक खरीदें"}</p>
                  <p>{language === 'english' ? "Write \"Shri Ram\" or \"Ram Ram\" in it" : "उसमें \"श्री राम\" या \"राम राम\" लिखें"}</p>
                  <p>{language === 'english' ? "Become a member and submit your written notebook to us" : "सदस्य बनें और अपनी लिखी हुई नोटबुक हमें जमा करें"}</p>
                  <div className="mt-4">
                    <a
                      href="/product/%e0%a4%b0%e0%a4%be%e0%a4%ae-%e0%a4%a8%e0%a4%be%e0%a4%ae-%e0%a4%b2%e0%a5%87%e0%a4%96%e0%a4%a8-%e0%a4%95%e0%a5%80-%e0%a4%aa%e0%a5%81%e0%a4%b8%e0%a5%8d%e0%a4%a4%e0%a4%bf%e0%a4%95%e0%a4%be"
                      className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition"
                    >
                      {language === 'english' ? "📓 Buy Ram Naam Writing Booklet" : "📓 राम नाम लेखन पुस्तिका खरीदें"}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Mail Submission Method */}
              <Card className="shadow-soft border-primary/20 bg-white/90 backdrop-blur-sm animate-fade-in md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <BookHeart className="w-10 h-10 text-primary" />
                    <CardTitle className="text-2xl text-secondary font-hind">
                      {language === 'english' ? "📮 Method 3: Send Booklet by Post" : "📮 तीसरा तरीका: पुस्तिका डाक द्वारा भेजें"}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-lg text-muted-foreground font-hind leading-relaxed space-y-3">
                  <p>{language === 'english' ? "If you also write Ram Naam, then you can send the books written by you to the address of the ashram of Shri Ram Naam World Bank Committee given below." : "यदि आप भी राम नाम लिखते है तो अपने द्वारा लिखी गई पुस्तकों को आप श्री राम नाम विश्व बैंक समिति के नीचे दिए गए आश्रम के पते पर भेज सकते है।"}</p>
                  <p>{language === 'english' ? "To submit books, first of all your account will be opened. For which Aadhar card and a photo will be required." : "पुस्तकें जमा करने के लिए सबसे पहले आपका खाता खोला जाएगा। जिसके लिए आधार कार्ड और एक फोटो की आवश्यकता होगी।"}</p>
                  <p>{language === 'english' ? "After that, you can submit the Ram Naam booklets written by you by choosing any option from Free, Monthly, Annual or Lifetime." : "उसके बाद आप फ्री, मासिक, वार्षिक या आजीवन किसी भी विकल्प को चुनकर अपने द्वारा लिखी गई राम नाम पुस्तिकाएं जमा करवा सकते हैं।"}</p>
                  <div className="mt-4 bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <p className="font-semibold text-secondary">{language === 'english' ? "Contact the organization's number for more information." : "अधिक जानकारी के लिए संस्था के नंबर पर संपर्क करें।"}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#fffaf0]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 font-hind">
              {language === 'english' ? "Importance of Ram Naam Writing" : "राम नाम लेखन का महत्व"}
            </h2>
            <div className="max-w-3xl mx-auto text-center text-lg text-muted-foreground font-hind leading-relaxed mb-12">
              {language === 'english'
                ? "When we write Ram Naam, our body, mind and soul — all three get absorbed in the work of God. This writing is not just practicing words, but a spiritual practice, which is considered to give 100 times virtue in Kaliyuga."
                : "जब हम राम नाम का लेखन करते हैं, तब हमारा शरीर, मन और आत्मा — तीनों भगवान के कार्य में लीन हो जाते हैं। यह लेखन मात्र शब्दों का अभ्यास नहीं, बल्कि एक आध्यात्मिक साधना है, जो कलियुग में 100 गुना पुण्य देने वाली मानी गई है।"}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 border-primary/20 animate-fade-in-up"
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">{benefit.icon}</div>
                    <CardTitle className="text-xl font-hind text-center text-secondary">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground font-hind">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg font-hind text-muted-foreground">
                {language === 'english'
                  ? "🙏 You can become a part of this service work by becoming a member and contribute in taking Ram Naam to the masses together with us."
                  : "🙏 आप सदस्य बनकर इस सेवा कार्य का हिस्सा बन सकते हैं और हमारे साथ मिलकर राम नाम को जन-जन तक पहुँचाने में योगदान दे सकते हैं।"}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RamNaamPage;
