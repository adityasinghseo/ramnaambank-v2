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

            {/* Ank Jyotish Section */}
            <Card className="shadow-md border-primary/20 mb-10">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-hind text-primary text-center">
                  🔢 2. अंक ज्योतिष (Numerology)
                </CardTitle>
              </CardHeader>
              <CardContent className="font-hind text-lg text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  अंक ज्योतिष का अर्थ है अंक शास्त्र। हर चीज़ ब्रह्मांड (Universe) में कंपन (vibrate) करती है। इन्हीं अंकों की आवृत्ति (frequency) और उनके कंपन सूचकांक (vibrational index) से हम यह जान सकते हैं कि एक संख्या की क्या विशेषताएँ (properties) और ऊर्जा (energies) हैं।
                </p>
                <p>
                  इन्हीं अंकों से जुड़ी हुई चीज़ों को समझते हुए, जब हम अपनी जन्म तिथि (date of birth) से जुड़े अंकों को देखते हैं, तो हम अपने भूतकाल, वर्तमान और भविष्य को उन ग्रहों के अंकों के माध्यम से समझ सकते हैं।
                </p>

                <h4 className="font-bold text-secondary text-xl mt-6">🌟 अंक ज्योतिष की प्रमुख शाखाएँ (Major Branches):</h4>

                <div className="space-y-4 mt-4">
                  <div>
                    <h5 className="font-semibold text-primary text-lg">1. Pythagorean (5000 BC)</h5>
                    <p>यह पद्धति लोगों की उनकी ऊर्जा और सामंजस्य (harmony) के आधार पर सहायता करती है। यह बताती है कि व्यक्ति अपने संबंधों (relationships) और दूसरों के साथ कैसा तालमेल रखता है।</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-primary text-lg">2. Chaldean (900 BC)</h5>
                    <p>यह प्रणाली यह बताती है कि कौन-सा अंक आपके लिए लकी (Lucky) है और कौन-सा नहीं।</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-primary text-lg">3. Lo Shu</h5>
                    <p>यह चीनी फेंग शुई (Chinese Feng Shui) पर आधारित है। इसमें Lo Shu Grid के तीन स्तंभ (columns) और तीन पंक्तियाँ (rows) होती हैं, जिनमें 1 से 9 तक के अंक होते हैं।</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-primary text-lg">4. Vedic (1500 BC)</h5>
                    <p>इसके अनुसार, 1 से 9 तक के प्रत्येक अंक का संबंध किसी ग्रह से होता है। प्रमुख ग्रहों और आपके चार्ट में स्थित अशुभ ग्रहों के आधार पर अंक शुभ या अशुभ प्रभाव दे सकते हैं।</p>
                    <p className="mt-2">यह प्रणाली भविष्यवाणियों (predictions) और व्यक्तित्व विश्लेषण (character analysis) में मदद करती है। इसके माध्यम से करियर, वित्त, यात्रा, संपत्ति और जीवन के अन्य पहलुओं का अनुमान लगाया जा सकता है।</p>
                  </div>
                </div>


                <div className="mt-8">
                  <h4 className="font-bold text-secondary text-xl mb-4">🪐 अंक और ग्रह (Planets & Numerology)</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-primary/20 text-center text-sm md:text-base">
                      <thead className="bg-primary/10">
                        <tr className="text-secondary">
                          <th className="p-3 border border-primary/20">Number</th>
                          <th className="p-3 border border-primary/20">Ruling Planet</th>
                          <th className="p-3 border border-primary/20">Personality</th>
                          <th className="p-3 border border-primary/20">Characteristics</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { num: 1, planet: "Sun (Surya)", personality: "King / Raja", traits: "Leader, Visionary, Ambitious, Independent, Authoritative" },
                          { num: 2, planet: "Moon (Chandrama)", personality: "Queen / Rani", traits: "Intuitive, Sensitive, Supportive, Feminine Personality, Nurturing" },
                          { num: 3, planet: "Jupiter (Guru)", personality: "Teacher / Guru", traits: "Wisdom, Inventive, Knowledge, Creative" },
                          { num: 4, planet: "Rahu", personality: "Mysterious / Common Man", traits: "Practical, Overthinker, Intelligent, Unpredictable" },
                          { num: 5, planet: "Mercury (Budh)", personality: "Prince / Rajkumar", traits: "Creative, Dynamic, Communicator, Charming" },
                          { num: 6, planet: "Venus (Shukra)", personality: "Teacher of Devils / Detya Guru", traits: "Responsible, Caring, Self-Sacrificing, Warm Hearted" },
                          { num: 7, planet: "Ketu", personality: "Disciples / Sanyasi", traits: "Spiritual, Introvert, Perfectionist, Researcher" },
                          { num: 8, planet: "Saturn (Shani)", personality: "Judgement / Nyaye k devta", traits: "Laborious, Realistic, Planner, Dominating" },
                          { num: 9, planet: "Mars (Mangal)", personality: "Commander / Senapati", traits: "Political, Confident, Kind-hearted, Passionate" },
                        ].map((item) => (
                          <tr key={item.num} className="hover:bg-primary/5 transition-colors">
                            <td className="p-3 border border-primary/20 font-bold">{item.num}</td>
                            <td className="p-3 border border-primary/20">{item.planet}</td>
                            <td className="p-3 border border-primary/20">{item.personality}</td>
                            <td className="p-3 border border-primary/20 text-left">{item.traits}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison Table */}
            <Card className="shadow-md border-primary/20 mb-10">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-hind text-primary text-center">
                  ⚖️ कुंडली बनाम अंक ज्योतिष
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto font-hind text-lg text-muted-foreground">
                <table className="min-w-full border border-primary/20 text-center">
                  <thead className="bg-primary/10">
                    <tr className="text-secondary">
                      <th className="p-3 border border-primary/20">विशेषता</th>
                      <th className="p-3 border border-primary/20">कुंडली ज्योतिष 🪔</th>
                      <th className="p-3 border border-primary/20">अंक ज्योतिष 📐</th>
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

                <h4 className="font-bold text-secondary text-xl pt-4">2. अंक ज्योतिष (Numerology)</h4>
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
        </section >

        {/* Contact Section */}
        < section className="py-16 bg-cream text-center" >
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
        </section >
      </main >
      <Footer />
    </div >
  );
};

export default JyotishPage;
