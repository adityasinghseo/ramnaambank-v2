import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Download, FileText, Scroll, MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

import ramnamLekhan from "@/assets/ramnam-lekhan.png";

import ramCharitManasPdf from "@/assets/ram-charit-manas.pdf";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

const LekhanPage = () => {
  const { language } = useLanguage();
  const [isLekhanDialogOpen, setIsLekhanDialogOpen] = useState(false);

  const materials = [
    {
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: language === 'english' ? "Ram Naam Writing Booklet" : "राम नाम लेखन पुस्तिका",
      description: language === 'english' ? "Specially designed writing booklet" : "विशेष रूप से डिज़ाइन की गई लेखन पुस्तिका",
      available: true,
      action: "popup"
    },
    {
      icon: <Scroll className="w-10 h-10 text-primary" />,
      title: language === 'english' ? "Ram Charit Manas" : "राम चरित मानस",
      description: language === 'english' ? "Sacred text composed by Tulsidas Ji" : "तुलसीदास जी द्वारा रचित पवित्र ग्रंथ",
      available: true,
      downloadLink: ramCharitManasPdf
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: language === 'english' ? "Bhajan Collection" : "भजन संग्रह",
      description: language === 'english' ? "Beautiful collection of Ram Bhajans" : "राम भजनों का सुंदर संकलन",
      available: true
    },
    {
      icon: <Download className="w-10 h-10 text-primary" />,
      title: language === 'english' ? "Digital Content" : "डिजिटल सामग्री",
      description: language === 'english' ? "Available in PDF and Audio formats" : "PDF और ऑडियो फॉर्मेट में उपलब्ध",
      available: true
    }
  ];

  const handleMaterialClick = (material: any) => {
    if (material.action === "popup") {
      setIsLekhanDialogOpen(true);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={language === 'english' ? "Writing Material" : "लेखन सामग्री"}
        description={language === 'english'
          ? "Get all necessary materials, booklets and spiritual literature for Ram Naam writing here. Shri Ram Naam World Bank Committee."
          : "राम नाम लेखन के लिए आवश्यक सभी सामग्री, पुस्तिकाएं और आध्यात्मिक साहित्य यहाँ प्राप्त करें। श्री राम नाम विश्व बैंक समिति।"}
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
                  {language === 'english' ? "Writing Material" : "लेखन सामग्री"}
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto lg:mx-0 mb-6"></div>
                <p className="text-xl text-muted-foreground font-hind leading-relaxed mb-8">
                  {language === 'english'
                    ? "All necessary material for Ram Naam writing is available here. We provide high quality booklets and spiritual literature."
                    : "राम नाम लेखन के लिए आवश्यक सभी सामग्री यहाँ उपलब्ध है। हम उच्च गुणवत्ता की पुस्तिकाएं और आध्यात्मिक साहित्य प्रदान करते हैं।"}
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
              {language === 'english' ? "Available Material" : "उपलब्ध सामग्री"}
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
                    {material.downloadLink ? (
                      <a
                        href={material.downloadLink}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full gradient-devotional text-white">
                          <Download className="w-4 h-4 mr-2" />
                          {language === 'english' ? "Get It" : "प्राप्त करें"}
                        </Button>
                      </a>
                    ) : material.action === "popup" ? (
                      <Button
                        className="w-full gradient-devotional text-white"
                        onClick={() => handleMaterialClick(material)}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {language === 'english' ? "Get It" : "प्राप्त करें"}
                      </Button>
                    ) : material.available ? (
                      <a
                        href={`https://wa.me/919045000108?text=${encodeURIComponent(language === 'english' ? `Jai Shri Ram, I want information about ${material.title}.` : `जय श्री राम, मुझे ${material.title} के बारे में जानकारी चाहिए।`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full gradient-devotional text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          {language === 'english' ? "Get It" : "प्राप्त करें"}
                        </Button>
                      </a>
                    ) : (
                      <Button
                        className="w-full gradient-devotional text-white"
                        disabled
                      >
                        {language === 'english' ? "Coming Soon" : "जल्द आ रहा है"}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Dialog open={isLekhanDialogOpen} onOpenChange={setIsLekhanDialogOpen}>
          <DialogContent className="sm:max-w-[500px] font-hind">
            <DialogHeader>
              <DialogTitle className="text-2xl text-primary font-bold text-center">
                {language === 'english' ? "Ram Naam Writing Booklet" : "राम नाम लेखन पुस्तिका"}
              </DialogTitle>
              <DialogDescription className="text-center text-gray-600">
                {language === 'english' ? "Please choose an option to get the booklet" : "पुस्तिका प्राप्त करने के लिए कृपया एक विकल्प चुनें"}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {/* Option 1: Membership */}
              <Link to="/membership" onClick={() => setIsLekhanDialogOpen(false)}>
                <Card className="hover:bg-primary/5 transition-colors cursor-pointer border-primary/20">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-secondary">{language === 'english' ? "Become a Member" : "सदस्य बनें"}</h3>
                      <p className="text-sm text-gray-500">
                        {language === 'english'
                          ? "Become a monthly, yearly or lifetime member by paying membership fee and get booklets."
                          : "सदस्यता शुल्क देकर मासिक, वार्षिक या आजीवन सदस्य बनें और पुस्तिकाएं प्राप्त करें।"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Option 2: Buy */}
              <Link to="/product/%e0%a4%b0%e0%a4%be%e0%a4%ae-%e0%a4%a8%e0%a4%be%e0%a4%ae-%e0%a4%b2%e0%a5%87%e0%a4%96%e0%a4%a8-%e0%a4%95%e0%a5%80-%e0%a4%aa%e0%a5%81%e0%a4%b8%e0%a5%8d%e0%a4%a4%e0%a4%bf%e0%a4%95%e0%a4%be" onClick={() => setIsLekhanDialogOpen(false)}>
                <Card className="hover:bg-primary/5 transition-colors cursor-pointer border-primary/20">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <ShoppingCart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-secondary">{language === 'english' ? "Buy Directly" : "सीधे खरीदें (Buy)"}</h3>
                      <p className="text-sm text-gray-500">{language === 'english' ? "Set of 10 books for just ₹199." : "10 पुस्तकों का सेट मात्र ₹199 में।"}</p>
                      <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded mt-1 inline-block">Free Shipping</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <DialogFooter className="sm:justify-center">
              <Button type="button" variant="secondary" onClick={() => setIsLekhanDialogOpen(false)}>
                {language === 'english' ? "Cancel" : "रद्द करें"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* How to Get Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 font-hind">
                {language === 'english' ? "How to Get Material" : "सामग्री कैसे प्राप्त करें"}
              </h2>
              <Card className="shadow-lg border-primary/30">
                <CardContent className="p-8">
                  <div className="space-y-6 font-hind text-lg">
                    <p className="text-muted-foreground">
                      <strong className="text-secondary">{language === 'english' ? "Personally: " : "व्यक्तिगत रूप से:"}</strong>
                      {language === 'english' ? "You can come to our center and get the material directly." : "आप हमारे केंद्र पर आकर सीधे सामग्री प्राप्त कर सकते हैं।"}
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-secondary">{language === 'english' ? "Online: " : "ऑनलाइन:"}</strong>
                      {language === 'english' ? "Download digital material from our website." : "हमारी वेबसाइट से डिजिटल सामग्री डाउनलोड करें।"}
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-secondary">{language === 'english' ? "By Post: " : "डाक द्वारा:"}</strong>
                      {language === 'english' ? "Home delivery facility is available across India." : "संपूर्ण भारत में होम डिलीवरी की सुविधा उपलब्ध है।"}
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-secondary">{language === 'english' ? "Contact: " : "संपर्क:"}</strong>
                      +91- 9045000108 {language === 'english' ? "or" : "या"} raamnaambank@gmail.com
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
