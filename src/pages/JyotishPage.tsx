import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail } from "lucide-react";

const JyotishPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-indigo-100 via-purple-50 to-cream">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
                ज्योतिष फलादेश सेवा
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground font-hind leading-relaxed">
                अपने जीवन की दिशा को समझें — ज्योतिषीय दृष्टिकोण से।  
                हम आपको दो प्रमुख विधाओं में परामर्श प्रदान करते हैं:  
                <strong> कुंडली ज्योतिष </strong> और <strong> गणितीय ज्योतिष </strong>।
              </p>
            </div>
          </div>
        </section>

        {/* Kundli Jyotish Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Card className="shadow-md border-primary/20 mb-10">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-hind text-primary text-center">
                  🪔 1. कुंडली ज्योतिष क्या है?
                </CardTitle>
              </CardHeader>
              <CardContent className="font-hind text-lg text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  यह जन्म तिथि, समय और स्थान के आधार पर कुंडली बनाकर ग्रहों की स्थिति का विश्लेषण करता है।
                </p>

                <h4 className="font-bold text-secondary text-xl mt-4">✅ यह कैसे कार्य करता है?</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>12 भाव और 9 ग्रहों का विवरण शामिल होता है।</li>
                  <li>ग्रहों की स्थिति के आधार पर जीवन की घटनाओं का पूर्वानुमान।</li>
                </ul>

                <h4 className="font-bold text-secondary text-xl mt-4">✨ लाभ:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>विवाह, करियर, शिक्षा, संतान, धन, स्वास्थ्य पर गहराई से विश्लेषण।</li>
                  <li>अशुभ योगों की पहचान और शांति उपाय।</li>
                  <li>शुभ मुहूर्त का निर्धारण।</li>
                </ul>
              </CardContent>
            </Card>

            {/* Mathematical Jyotish */}
            <Card className="shadow-md border-primary/20 mb-10">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-hind text-primary text-center">
                  📐 2. गणितीय ज्योतिष क्या है?
                </CardTitle>
              </CardHeader>
              <CardContent className="font-hind text-lg text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  जन्म तिथि और नाम के आधार पर अंकशास्त्र से भविष्यवाणी की जाती है।
                </p>

                <h4 className="font-bold text-secondary text-xl mt-4">✅ यह कैसे कार्य करता है?</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>नाम और जन्मतिथि से विशेष अंक निकाले जाते हैं।</li>
                  <li>इन अंकों से स्वभाव और जीवन प्रवृत्तियों का पूर्वानुमान।</li>
                </ul>

                <h4 className="font-bold text-secondary text-xl mt-4">✨ लाभ:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>जीवन की दिशा और स्वभाव की समझ।</li>
                  <li>विवाह व करियर सलाह।</li>
                  <li>समस्या का त्वरित समाधान।</li>
                </ul>
              </CardContent>
            </Card>

            {/* Comparison Table */}
            <Card className="shadow-md border-primary/20 mb-10">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-hind text-primary text-center">
                  ⚖️ कुंडली बनाम गणितीय ज्योतिष
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto font-hind text-lg text-muted-foreground">
                <table className="min-w-full border border-primary/20 text-center">
                  <thead className="bg-primary/10">
                    <tr className="text-secondary">
                      <th className="p-3 border border-primary/20">विशेषता</th>
                      <th className="p-3 border border-primary/20">कुंडली ज्योतिष 🪔</th>
                      <th className="p-3 border border-primary/20">गणितीय ज्योतिष 📐</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-primary/20">आधार</td>
                      <td className="p-3 border border-primary/20">जन्म तिथि, समय और स्थान</td>
                      <td className="p-3 border border-primary/20">केवल जन्म तिथि और नाम</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-primary/20">विधा</td>
                      <td className="p-3 border border-primary/20">वैदिक शास्त्र आधारित</td>
                      <td className="p-3 border border-primary/20">अंक शास्त्र और गणना आधारित</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-primary/20">गहराई</td>
                      <td className="p-3 border border-primary/20">विस्तृत और सूक्ष्म</td>
                      <td className="p-3 border border-primary/20">सरल और त्वरित</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-primary/20">उपयोग</td>
                      <td className="p-3 border border-primary/20">विवाह, संतान, ग्रह दोष</td>
                      <td className="p-3 border border-primary/20">स्वभाव, करियर, सलाह</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-primary/20">शांति उपाय</td>
                      <td className="p-3 border border-primary/20">ग्रह शांति यज्ञ</td>
                      <td className="p-3 border border-primary/20">अंकों से उपाय</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Our Services */}
            <Card className="shadow-md border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-hind text-primary text-center">
                  🌟 हमारी सेवाएँ
                </CardTitle>
              </CardHeader>
              <CardContent className="font-hind text-lg text-muted-foreground leading-relaxed space-y-6">
                <h4 className="font-bold text-secondary text-xl">1. कुंडली ज्योतिष</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>🔹 नयी कुंडली बनवाएं: जन्म विवरण के आधार पर विस्तृत कुंडली।</li>
                  <li>🔹 अपनी कुंडली दिखाएं: मौजूदा कुंडली का विश्लेषण और ग्रहों की स्थिति।</li>
                  <li>🔹 ग्रह शांति उपाय: दोष निवारण हेतु सरल उपाय।</li>
                </ul>

                <h4 className="font-bold text-secondary text-xl pt-4">2. गणितीय ज्योतिष</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>जन्म तिथि, समय और स्थान के आधार पर भविष्य जानें।</li>
                  <li>जीवन की प्रमुख घटनाओं की भविष्यवाणी।</li>
                  <li>विवाह, करियर, शिक्षा, स्वास्थ्य से जुड़ी सलाह।</li>
                  <li>किसी समस्या का समाधान पाएं।</li>
                </ul>

                <p className="italic text-primary/90 mt-4">
                  ✨ यह विधा वैज्ञानिक गणनाओं और शास्त्रीय विधियों पर आधारित है।
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-cream text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-hind">
              परामर्श के लिए संपर्क करें
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/contact"
                className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-hind text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500"
              >
                <Mail className="w-5 h-5" />
                संपर्क करें
              </a>

              <a
                href="https://wa.me/919045000108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-hind text-lg px-8 py-3 rounded-full shadow-md hover:scale-105 transition-all duration-500"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp पर जुड़ें
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JyotishPage;
