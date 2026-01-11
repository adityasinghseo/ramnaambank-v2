import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Download, FileText, Scroll, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import ramnamLekhan from "@/assets/ramnam-lekhan.png";

const LekhanPage = () => {
  const materials = [
    {
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: "राम नाम लेखन पुस्तिका",
      description: "विशेष रूप से डिज़ाइन की गई लेखन पुस्तिका",
      available: true
    },
    {
      icon: <Scroll className="w-10 h-10 text-primary" />,
      title: "राम चरित मानस",
      description: "तुलसीदास जी द्वारा रचित पवित्र ग्रंथ",
      available: true
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "भजन संग्रह",
      description: "राम भजनों का सुंदर संकलन",
      available: true
    },
    {
      icon: <Download className="w-10 h-10 text-primary" />,
      title: "डिजिटल सामग्री",
      description: "PDF और ऑडियो फॉर्मेट में उपलब्ध",
      available: true
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="लेखन सामग्री"
        description="राम नाम लेखन के लिए आवश्यक सभी सामग्री, पुस्तिकाएं और आध्यात्मिक साहित्य यहाँ प्राप्त करें। श्री राम नाम विश्व बैंक समिति।"
        image={ramnamLekhan}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-accent/10 via-primary/10 to-cream overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0 animate-fade-in order-2 lg:order-1">
                <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
                  लेखन सामग्री
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto lg:mx-0 mb-6"></div>
                <p className="text-xl text-muted-foreground font-hind leading-relaxed mb-8">
                  राम नाम लेखन के लिए आवश्यक सभी सामग्री यहाँ उपलब्ध है।
                  हम उच्च गुणवत्ता की पुस्तिकाएं और आध्यात्मिक साहित्य प्रदान करते हैं।
                </p>
              </div>

              <div className="relative animate-fade-in order-1 lg:order-2 flex justify-center">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={ramnamLekhan}
                    alt="Ram Naam Lekhan Samagri"
                    className="w-full h-auto max-w-md object-cover"
                  />
                </div>
                {/* Decorative background circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 font-hind">
              उपलब्ध सामग्री
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {materials.map((material, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/20 animate-fade-in hover:scale-105">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {material.icon}
                    </div>
                    <CardTitle className="text-lg font-hind text-center text-secondary">
                      {material.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground font-hind mb-4">
                      {material.description}
                    </p>
                    {material.available ? (
                      <a
                        href={`https://wa.me/919045000108?text=${encodeURIComponent(`नमस्ते, मुझे ${material.title} के बारे में जानकारी चाहिए।`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full gradient-devotional text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          प्राप्त करें
                        </Button>
                      </a>
                    ) : (
                      <Button
                        className="w-full gradient-devotional text-white"
                        disabled
                      >
                        जल्द आ रहा है
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 font-hind">
                सामग्री कैसे प्राप्त करें
              </h2>
              <Card className="shadow-lg border-primary/30">
                <CardContent className="p-8">
                  <div className="space-y-6 font-hind text-lg">
                    <p className="text-muted-foreground">
                      <strong className="text-secondary">व्यक्तिगत रूप से:</strong> आप हमारे केंद्र पर आकर सीधे सामग्री प्राप्त कर सकते हैं।
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-secondary">ऑनलाइन:</strong> हमारी वेबसाइट से डिजिटल सामग्री डाउनलोड करें।
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-secondary">डाक द्वारा:</strong> संपूर्ण भारत में होम डिलीवरी की सुविधा उपलब्ध है।
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-secondary">संपर्क:</strong> +91- 9045000108 या info@ramnaambank.org
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LekhanPage;
