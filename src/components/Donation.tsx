import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, BookHeart, HandCoins, Landmark } from "lucide-react";
import daanQR from "@/assets/daan-kare.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const Donation = () => {
  const { language } = useLanguage();

  const donationWays = [
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: language === 'english' ? "Earn Merit (Punya)" : "पुण्य कमाएँ",
      description: language === 'english'
        ? "Earn supreme merit by contributing to works of Dharma, devotion and service."
        : "धर्म, भक्ति और सेवा के कार्यों में योगदान देकर परम पुण्य प्राप्त करें।",
    },
    {
      icon: <BookHeart className="w-12 h-12 text-primary" />,
      title: language === 'english' ? "Spiritual Progress" : "आध्यात्मिक उन्नति",
      description: language === 'english'
        ? "Donation leads to self-purification, peace of mind and attainment of spiritual path."
        : "दान से आत्मिक शुद्धि, मन की शांति और आध्यात्मिक मार्ग की प्राप्ति होती है।",
    },
    {
      icon: <HandCoins className="w-12 h-12 text-primary" />,
      title: language === 'english' ? "Benefit of Good Deeds" : "सद्कर्म का लाभ",
      description: language === 'english'
        ? "Every donation spreads harmony, help and culture in the society."
        : "हर दान समाज में सद्भाव, सहायता और संस्कार का संचार करता है।",
    },
    {
      icon: <Landmark className="w-12 h-12 text-primary" />,
      title: language === 'english' ? "80G Tax Exemption" : "80G कर छूट",
      description: language === 'english'
        ? "Your every donation is tax-free under Section 80G of Income Tax Act."
        : "आपका प्रत्येक दान आयकर की धारा 80G के अंतर्गत कर-मुक्त है।",
    },
  ];

  return (
    <div className="min-h-screen">

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-cream">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
                {language === 'english' ? "🙏 Donate – Earn Punya, Expand Service" : "🙏 दान करें – पुण्य कमाएँ, सेवा बढ़ाएँ"}
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground font-hind leading-relaxed">
                {language === 'english'
                  ? "Donation given to the organization is tax-exempt under Section 80G of the Income Tax Act. Every contribution given by you is a sacred step towards devotion and service."
                  : "संस्था को दिया गया दान आयकर की धारा 80G के अंतर्गत कर मुक्त है। आपके द्वारा दिया गया प्रत्येक योगदान, भक्ति और सेवा की दिशा में एक पवित्र कदम है।"}
              </p>
              <div className="mt-8">
                <a href="https://rzp.io/rzp/l2rTbK8X" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-xl px-8 py-6 animate-pulse shadow-xl hover:scale-105 transition-transform bg-[#FF7E26] hover:bg-[#E66A1F] text-white">
                    {language === 'english' ? "Donate Now" : "दान करें (Donate)"}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 font-hind">
              {language === 'english' ? "Benefits of Donation" : "दान के लाभ"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donationWays.map((way, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 border-primary/20 animate-fade-in"
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">{way.icon}</div>
                    <CardTitle className="text-xl font-hind text-center text-secondary">
                      {way.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground font-hind">
                      {way.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Details Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 font-hind">
                {language === 'english' ? "Bank Details & Donation Process" : "बैंक विवरण एवं दान प्रक्रिया"}
              </h2>

              <Card className="shadow-lg border-primary/30">
                <CardContent className="p-8 font-hind text-lg text-muted-foreground">
                  <p className="mb-6">
                    {language === 'english'
                      ? "Dear Devotees, you can earn merit by contributing to the services operated by Shri Ram Naam World Bank Committee — Ram Naam Writing Campaign, Food Service (Bhandara) for Saints and Needy, and Construction of World's Largest Shri Ram Naam Museum."
                      : "प्रिय भक्तगण, श्री राम नाम विश्व बैंक समिति द्वारा संचालित सेवाओं में — राम नाम लेखन अभियान, संत महात्माओं व ज़रूरतमंदों को भोजन / भंडारा सेवा, और विश्व का सबसे बड़ा श्री राम नाम संग्रहालय निर्माण — में आप अपना योगदान देकर पुण्य प्राप्त कर सकते हैं।"}
                  </p>

                  <div className="text-left space-y-4 bg-white/50 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl text-secondary font-bold">
                      {language === 'english' ? "🏦 Bank Details" : "🏦 बैंक विवरण"}
                    </h3>
                    <p><strong>{language === 'english' ? "Bank:" : "बैंक:"}</strong> JANA SMALL FINANCE BANK</p>
                    <p><strong>{language === 'english' ? "Account Name:" : "खाता नाम:"}</strong> {language === 'english' ? "Shri Ram Naam World Bank Committee" : "श्री राम नाम विश्व बैंक समिति"}</p>
                    <p><strong>{language === 'english' ? "Account No.:" : "खाता संख्या:"}</strong> 2141214121412141</p>
                    <p><strong>{language === 'english' ? "IFSC Code:" : "IFSC कोड:"}</strong> JSFB0004616</p>
                    <p><strong>{language === 'english' ? "Note:" : "नोट:"}</strong> {language === 'english' ? "Every donation is eligible for tax exemption under Section 80G." : "आपका प्रत्येक दान धारा 80G के अंतर्गत कर छूट योग्य है।"}</p>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={daanQR}
                      alt="Donation QR"
                      className="max-w-xs rounded-lg shadow-md"
                    />
                    <p className="text-base text-foreground font-hind">
                      {language === 'english' ? "Scan from any UPI app and donate directly." : "किसी भी UPI ऐप से स्कैन करें और सीधे दान करें।"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-hind">
              {language === 'english' ? "Donate Now and Earn Punya" : "अभी दान करें और पुण्य कमाएँ"}
            </h2>
            <p className="text-xl mb-8 font-hind">
              {language === 'english'
                ? "You can contribute directly via Online, Bank Transfer or by scanning QR code."
                : "आप ऑनलाइन, बैंक ट्रांसफर या QR कोड स्कैन करके सीधे योगदान कर सकते हैं।"}
            </p>
            <p className="text-lg font-hind">
              {language === 'english' ? "For more information contact:" : "अधिक जानकारी के लिए संपर्क करें:"} <strong>+91 9045000108</strong> {language === 'english' ? "or email:" : "या ईमेल करें:"} <strong>raamnaambank@gmail.com</strong>
            </p>
          </div>
        </section>
      </main>

    </div >
  );
};

export default Donation;
