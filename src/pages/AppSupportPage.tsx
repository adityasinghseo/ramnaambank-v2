import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Smartphone, HelpCircle, MessageSquare, Info, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AppSupportPage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const isEn = language === "english";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{isEn ? "Ram Naam App Support" : "राम नाम ऐप सहायता"} - {t.header.organizationName}</title>
        <meta
          name="description"
          content={isEn ? "Get help and support for the Ram Naam App." : "राम नाम ऐप के लिए सहायता और समर्थन प्राप्त करें।"}
        />
      </Helmet>
      <Header />

      <main className="flex-grow container mx-auto py-12 px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary font-hind mb-4">
            {isEn ? "Ram Naam App Support" : "राम नाम ऐप सहायता"}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground font-hind max-w-2xl mx-auto leading-relaxed">
            {isEn
              ? "Welcome to Ram Naam App Support. We are here to help you with any questions, issues, or feedback regarding the app."
              : "राम नाम ऐप सहायता में आपका स्वागत है। हम ऐप के संबंध में आपके किसी भी प्रश्न, समस्या या सुझाव में आपकी सहायता के लिए तैयार हैं।"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Support Content */}
          <div className="md:col-span-2 space-y-8 font-hind">
            {/* About Card */}
            <Card className="border-primary/20 bg-white shadow-soft">
              <CardHeader className="flex flex-row items-center gap-3">
                <Info className="w-8 h-8 text-primary shrink-0" />
                <CardTitle className="text-2xl text-secondary font-hind font-bold">
                  {isEn ? "About Ram Naam App" : "राम नाम ऐप के बारे में"}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-base leading-relaxed">
                {isEn
                  ? "Ram Naam App is a spiritual companion designed for devotees to perform Ram Naam Jaap, track chant counts, and maintain their devotional journey through a simple digital experience."
                  : "राम नाम ऐप एक आध्यात्मिक साथी है जिसे भक्तों के लिए राम नाम जप करने, जप की गिनती को ट्रैक करने और एक सरल डिजिटल अनुभव के माध्यम से अपनी भक्ति यात्रा को बनाए रखने के लिए डिज़ाइन किया गया है।"}
              </CardContent>
            </Card>

            {/* Common Issues Card */}
            <Card className="border-primary/20 bg-white shadow-soft">
              <CardHeader className="flex flex-row items-center gap-3">
                <ShieldAlert className="w-8 h-8 text-primary shrink-0" />
                <CardTitle className="text-2xl text-secondary font-hind font-bold">
                  {isEn ? "Need Help?" : "क्या आपको कोई समस्या है?"}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-base leading-relaxed space-y-4">
                <p>
                  {isEn
                    ? "If you experience any issues while using the app, such as:"
                    : "यदि आपको ऐप का उपयोग करते समय निम्नलिखित में से कोई भी समस्या आती है:"}
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{isEn ? "Problems with Ram Naam Jaap counting" : "राम नाम जप की गिनती में समस्या"}</li>
                  <li>{isEn ? "Login or account-related issues" : "लॉगिन या खाते से संबंधित समस्याएं"}</li>
                  <li>{isEn ? "App crashes or performance issues" : "ऐप क्रैश या परफॉरमेंस की समस्या"}</li>
                  <li>{isEn ? "Ram Naam Bank synchronization problems" : "राम नाम बैंक सिंक्रनाइज़ेशन (डेटा सिंक) की समस्या"}</li>
                  <li>{isEn ? "Feature suggestions or general feedback" : "नए फीचर्स के सुझाव या सामान्य फीडबैक"}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Suggestions Card */}
            <Card className="border-primary/20 bg-white shadow-soft">
              <CardHeader className="flex flex-row items-center gap-3">
                <MessageSquare className="w-8 h-8 text-primary shrink-0" />
                <CardTitle className="text-2xl text-secondary font-hind font-bold">
                  {isEn ? "Feedback & Suggestions" : "फीडबैक और सुझाव"}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-base leading-relaxed">
                {isEn
                  ? "Your feedback helps us improve the Ram Naam App experience. We welcome suggestions and ideas to make the app better for the spiritual community."
                  : "आपका फीडबैक हमें राम नाम ऐप के अनुभव को बेहतर बनाने में मदद करता है। हम आध्यात्मिक समुदाय के लिए ऐप को और बेहतर बनाने के लिए आपके सुझावों और विचारों का स्वागत करते हैं।"}
              </CardContent>
            </Card>
          </div>

          {/* Contact Details & Info required */}
          <div className="space-y-6 font-hind">
            <Card className="border-primary/20 bg-primary/5 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl text-secondary font-hind font-bold flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  {isEn ? "Contact Support" : "सहायता से संपर्क करें"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {isEn
                    ? "Reach out directly to our dedicated support team:"
                    : "हमारी सहायता टीम से सीधे संपर्क करें:"}
                </p>
                <div className="bg-white border border-primary/20 p-3 rounded-lg text-center">
                  <a
                    href="mailto:info@ramnaam.in"
                    className="text-primary hover:underline font-semibold font-poppins text-lg"
                  >
                    info@ramnaam.in
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-white shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg text-secondary font-hind font-bold flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  {isEn ? "Information to Include" : "आवश्यक जानकारी"}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                <p className="mb-3">
                  {isEn
                    ? "Please include the following information while reporting an issue:"
                    : "समस्या की रिपोर्ट करते समय कृपया निम्नलिखित जानकारी अवश्य शामिल करें:"}
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>{isEn ? "Device model (e.g. Samsung S23, iPhone 15)" : "डिवाइस का मॉडल (जैसे: Samsung S23, iPhone 15)"}</li>
                  <li>{isEn ? "OS version (Android/iOS version)" : "OS वर्जन (जैसे: Android 14, iOS 17)"}</li>
                  <li>{isEn ? "App version" : "ऐप वर्जन"}</li>
                  <li>{isEn ? "Description of the issue" : "समस्या का विवरण"}</li>
                  <li>{isEn ? "Screenshots (if available)" : "स्क्रीनशॉट (यदि उपलब्ध हो)"}</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center pt-4">
              <p className="text-secondary font-hind font-semibold text-lg italic">
                {isEn ? "Shri Ram Jai Ram Jai Jai Ram" : "श्री राम जय राम जय जय राम"} 🙏
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AppSupportPage;
