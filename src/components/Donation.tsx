import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, BookHeart, HandCoins, Landmark } from "lucide-react";
import daanQR from "@/assets/daan-kare.webp";

const DonationPage = () => {
  const donationWays = [
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "पुण्य कमाएँ",
      description: "धर्म, भक्ति और सेवा के कार्यों में योगदान देकर परम पुण्य प्राप्त करें।",
    },
    {
      icon: <BookHeart className="w-12 h-12 text-primary" />,
      title: "आध्यात्मिक उन्नति",
      description: "दान से आत्मिक शुद्धि, मन की शांति और आध्यात्मिक मार्ग की प्राप्ति होती है।",
    },
    {
      icon: <HandCoins className="w-12 h-12 text-primary" />,
      title: "सद्कर्म का लाभ",
      description: "हर दान समाज में सद्भाव, सहायता और संस्कार का संचार करता है।",
    },
    {
      icon: <Landmark className="w-12 h-12 text-primary" />,
      title: "80G कर छूट",
      description: "आपका प्रत्येक दान आयकर की धारा 80G के अंतर्गत कर-मुक्त है।",
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
                🙏 दान करें – पुण्य कमाएँ, सेवा बढ़ाएँ
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground font-hind leading-relaxed">
                संस्था को दिया गया दान आयकर की धारा 80G के अंतर्गत कर मुक्त है।
                आपके द्वारा दिया गया प्रत्येक योगदान, भक्ति और सेवा की दिशा में एक पवित्र कदम है।
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 font-hind">
              दान के लाभ
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
                बैंक विवरण एवं दान प्रक्रिया
              </h2>

              <Card className="shadow-lg border-primary/30">
                <CardContent className="p-8 font-hind text-lg text-muted-foreground">
                  <p className="mb-6">
                    प्रिय भक्तगण, श्री राम नाम विश्व बैंक समिति द्वारा संचालित सेवाओं में — राम नाम लेखन अभियान,
                    संत महात्माओं व ज़रूरतमंदों को भोजन / भंडारा सेवा, और विश्व का सबसे बड़ा श्री राम नाम संग्रहालय निर्माण —
                    में आप अपना योगदान देकर पुण्य प्राप्त कर सकते हैं।
                  </p>

                  <div className="text-left space-y-4 bg-white/50 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl text-secondary font-bold">🏦 बैंक विवरण</h3>
                    <p><strong>Bank:</strong> JANA SMALL FINANCE BANK</p>
                    <p><strong>Account Name:</strong> श्री राम नाम विश्व बैंक समिति</p>
                    <p><strong>Account No.:</strong> 2141214121412141</p>
                    <p><strong>IFSC Code:</strong> JSFB0004616</p>
                    <p><strong>Note:</strong> आपका प्रत्येक दान धारा 80G के अंतर्गत कर छूट योग्य है।</p>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={daanQR}
                      alt="Donation QR"
                      className="max-w-xs rounded-lg shadow-md"
                    />
                    <p className="text-base text-foreground font-hind">
                      किसी भी UPI ऐप से स्कैन करें और सीधे दान करें।
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
              अभी दान करें और पुण्य कमाएँ
            </h2>
            <p className="text-xl mb-8 font-hind">
              आप ऑनलाइन, बैंक ट्रांसफर या QR कोड स्कैन करके सीधे योगदान कर सकते हैं।
            </p>
            <p className="text-lg font-hind">
              अधिक जानकारी के लिए संपर्क करें: <strong>+91 9045000108</strong> या ईमेल करें: <strong>raamnaambank@gmail.com</strong>
            </p>
          </div>
        </section>
      </main>

    </div>
  );
};

export default DonationPage;
