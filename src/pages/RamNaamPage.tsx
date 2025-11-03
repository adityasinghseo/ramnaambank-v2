import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookHeart, PenLine, Smartphone, BookOpen, Sparkles } from "lucide-react";
import androidIcon from "@/assets/android.png";
import appleIcon from "@/assets/apple.png";

const RamNaamPage = () => {
  const benefits = [
    {
      icon: <BookHeart className="w-12 h-12 text-primary" />,
      title: "मन की शांति",
      description: "राम नाम लेखन से मन को स्थिरता, शांति और भक्ति मिलती है।",
    },
    {
      icon: <PenLine className="w-12 h-12 text-primary" />,
      title: "आध्यात्मिक साधना",
      description: "यह केवल लेखन नहीं, बल्कि साधना है जो आत्मा को शुद्ध करती है।",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "पुण्य अर्जन",
      description: "कलियुग में राम नाम लेखन से 100 गुना पुण्य की प्राप्ति होती है।",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "सकारात्मक ऊर्जा",
      description: "लेखन से एकाग्रता बढ़ती है और जीवन में सकारात्मक ऊर्जा का संचार होता है।",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-cream">
          <div className="container mx-auto px-4 text-center max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
              राम नाम जमा करें
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground font-hind leading-relaxed">
              “राम नाम सो कल्पतरु, कली कल्याण निवासु। जो सुमिरत भयो भांग ते, तुलसी तुलसीदासु॥”
            </p>
            <p className="text-lg text-muted-foreground mt-4 font-hind leading-relaxed">
              भगवान श्रीराम का नाम कल्पवृक्ष के समान है, जो कलियुग में कल्याण का स्रोत है।
              तुलसीदास जी कहते हैं कि राम नाम के स्मरण मात्र से असंभव भी संभव हो जाता है।
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-[#fffaf0] relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 font-hind">
              राम नाम लिखने के लाभ — हमारी टीम से सुनिए
            </h2>

            {/* Soft Glow Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-yellow-200/30 to-transparent rounded-full blur-3xl"></div>

            {/* Responsive Video Embed */}
            <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg border border-primary/20 bg-black/10">
              <iframe
                src="https://www.youtube.com/embed/ZUKJGkaSvaY?rel=0&modestbranding=1"
                title="राम नाम लिखने के लाभ"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Methods Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 font-hind">
              यह कैसे कार्य करता है?
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {/* App Method */}
              <Card className="shadow-soft border-primary/20 bg-white/90 backdrop-blur-sm animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Smartphone className="w-10 h-10 text-primary" />
                    <CardTitle className="text-2xl text-secondary font-hind">
                      📱 पहला तरीका: मोबाइल ऐप के माध्यम से
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-lg text-muted-foreground font-hind leading-relaxed space-y-3">
                  <p>हमारे मोबाइल ऐप को डाउनलोड करें</p>
                  <p>ऐप में जप प्रारंभ करें और सदस्य बनें</p>
                  <p>अपने जप की गिनती को ऐप में जमा करें</p>

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
                      📓 दूसरा तरीका: राम नाम नोटबुक के माध्यम से
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-lg text-muted-foreground font-hind leading-relaxed space-y-3">
                  <p>राम नाम लिखने के लिए नोटबुक खरीदें</p>
                  <p>उसमें “श्री राम” या “राम राम” लिखें</p>
                  <p>सदस्य बनें और अपनी लिखी हुई नोटबुक हमें जमा करें</p>
                  <div className="mt-4">
                    <a
                      href="/contact"
                      className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition"
                    >
                      📓 राम नाम लेखन पुस्तिका खरीदें
                    </a>
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
              राम नाम लेखन का महत्व
            </h2>
            <div className="max-w-3xl mx-auto text-center text-lg text-muted-foreground font-hind leading-relaxed mb-12">
              जब हम राम नाम का लेखन करते हैं, तब हमारा शरीर, मन और आत्मा — तीनों भगवान के कार्य में लीन हो जाते हैं।
              यह लेखन मात्र शब्दों का अभ्यास नहीं, बल्कि एक आध्यात्मिक साधना है, जो कलियुग में 100 गुना पुण्य देने वाली मानी गई है।
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
                🙏 आप सदस्य बनकर इस सेवा कार्य का हिस्सा बन सकते हैं और हमारे साथ मिलकर राम नाम को जन-जन तक पहुँचाने में योगदान दे सकते हैं।
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
