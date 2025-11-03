import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialInitiatives from "@/components/SocialInitiatives";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users2, GraduationCap, Heart } from "lucide-react";

const YojanaPage = () => {
  const schemes = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "राम नाम लेखन योजना",
      description:
        "प्रतिदिन नियमित रूप से राम नाम लेखन करें और आध्यात्मिक लक्ष्य प्राप्त करें। 1 लाख, 10 लाख और 1 करोड़ राम नाम लेखन के लक्ष्य।",
      benefits: [
        "विशेष प्रमाण पत्र",
        "आध्यात्मिक मार्गदर्शन",
        "सामूहिक आयोजनों में प्राथमिकता",
      ],
    },
    {
      icon: <Users2 className="w-12 h-12 text-primary" />,
      title: "परिवार योजना",
      description:
        "पूरे परिवार के साथ राम नाम लेखन में भाग लें। परिवार के सभी सदस्यों के लिए विशेष प्रोत्साहन।",
      benefits: [
        "परिवार प्रमाण पत्र",
        "सामूहिक कार्यक्रमों में निःशुल्क प्रवेश",
        "विशेष आशीर्वाद",
      ],
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "बाल योजना",
      description:
        "बच्चों के लिए विशेष राम नाम लेखन कार्यक्रम। छोटे बच्चों को आध्यात्मिकता से जोड़ने का माध्यम।",
      benefits: [
        "रंगीन लेखन पुस्तिका",
        "प्रोत्साहन पुरस्कार",
        "नैतिक शिक्षा",
      ],
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "सेवा योजना",
      description:
        "समाज सेवा के साथ राम नाम प्रचार। गरीबों और जरूरतमंदों की सहायता करते हुए राम नाम का प्रसार।",
      benefits: ["सेवा का अवसर", "पुण्य लाभ", "समाज में योगदान"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-cream to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
                हमारी योजनाएं
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground font-hind leading-relaxed">
                श्री राम नाम विश्व बैंक समिति की योजनाएं न केवल आध्यात्मिक
                उत्थान का माध्यम हैं, बल्कि समाज और मानवता के कल्याण के लिए
                प्रेरणास्रोत भी हैं।
              </p>
            </div>
          </div>
        </section>

        {/* Schemes Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {schemes.map((scheme, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-primary/20 animate-fade-in"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      {scheme.icon}
                      <CardTitle className="text-2xl font-hind text-secondary">
                        {scheme.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-hind mb-6 text-lg leading-relaxed">
                      {scheme.description}
                    </p>
                    <div className="bg-cream/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-secondary mb-3 font-hind">
                        लाभ:
                      </h4>
                      <ul className="space-y-2">
                        {scheme.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground font-hind"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Initiatives Section */}
        <SocialInitiatives />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-hind">
              किसी भी योजना या जनहित कार्य में शामिल होने के लिए
            </h2>
            <p className="text-xl mb-8 font-hind">
              हमसे संपर्क करें: <a href="tel:+91-9045000118" className="underline">+91-9045000118</a>
            </p>
            <p className="text-lg font-hind">
              या ईमेल करें:{" "}
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
