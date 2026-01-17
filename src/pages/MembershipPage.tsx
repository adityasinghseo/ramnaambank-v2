import { useState } from "react";
import { Check, Heart, Star, Crown, UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MembershipForm from "@/components/MembershipForm";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const MembershipPage = () => {
  const { language } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // You will need to replace these URLs with your actual Razorpay Payment Page/Button Links
  // Create these in your Razorpay Dashboard -> Payment Pages
  const paymentLinks = {
    monthly: "https://rzp.io/rzp/OWbol28",
    yearly: "https://rzp.io/rzp/YyASZQH",
    lifetime: "https://rzp.io/rzp/jM6Ni0O6"
  };

  const plans = [
    {
      id: "volunteer",
      title: "स्वयंसेवी (Volunteer)",
      price: "निःशुल्क",
      period: "/ FREE",
      icon: <Heart className="w-10 h-10 text-rose-500" />,
      features: [
        "राम नाम प्रचार में सहयोग",
        "पुस्तिका वितरण सेवा",
        "धार्मिक आयोजनों में भागीदारी",
        "डिजिटल प्रमाण पत्र"
      ],
      action: "form",
      buttonText: "अभी जुड़ें",
      highlight: false
    },
    {
      id: "monthly",
      title: "मासिक सदस्य (Monthly)",
      price: "₹300",
      period: "/ माह",
      icon: <Star className="w-10 h-10 text-yellow-500" />,
      features: [
        "स्वयंसेवी की सभी सुविधाएँ",
        "मासिक पत्रिका (पीडीएफ)",
        "विशेष आरती दर्शन",
        "1 राम नाम पुस्तिका निःशुल्क"
      ],
      action: "pay",
      link: paymentLinks.monthly,
      buttonText: "सदस्य बनें",
      highlight: false
    },
    {
      id: "yearly",
      title: "वार्षिक सदस्य (Yearly)",
      price: "₹2,100",
      period: "/ वर्ष",
      icon: <Crown className="w-10 h-10 text-primary" />,
      features: [
        "मासिक सदस्य की सभी सुविधाएँ",
        "जन्मदिन पर विशेष पूजा",
        "वार्षिक कैलेंडर",
        "10 राम नाम पुस्तिका निःशुल्क"
      ],
      action: "pay",
      link: paymentLinks.yearly,
      buttonText: "सदस्य बनें",
      highlight: true
    },
    {
      id: "lifetime",
      title: "आजीवन सदस्य (Lifetime)",
      price: "₹5,100",
      period: "/ एक बार",
      icon: <UserPlus className="w-10 h-10 text-purple-600" />,
      features: [
        "वार्षिक सदस्य की सभी सुविधाएँ",
        "स्मृति चिह्न (मोमेंटो)",
        "सभी प्रमुख उत्सवों में आमंत्रण",
        "विशेष वीआईपी दर्शन सुविधा"
      ],
      action: "pay",
      link: paymentLinks.lifetime,
      buttonText: "सदस्य बनें",
      highlight: false
    }
  ];

  const handlePlanSelect = (plan: any) => {
    if (plan.action === "pay") {
      // For now, if link is placeholder, alert user. Otherwise notify and open link.
      if (plan.link.includes("YOUR_RAZORPAY")) {
        alert("कृपया Razorpay लिंक अपडेट करें। Payment Links need to be configured in the code.");
      } else {
        window.open(plan.link, "_blank");
      }
    } else {
      setSelectedPlan("form");
      // Scroll to form smoothly
      document.getElementById("membership-form")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={language === 'english' ? "Membership Plans" : "सदस्यता योजनाएं"}
        description={language === 'english'
          ? "Membership plans of Ram Naam World Bank Committee. Join as a monthly, yearly or lifetime member and support religious works."
          : "राम नाम विश्व बैंक समिति की सदस्यता योजनाएं। मासिक, वार्षिक और आजीवन सदस्य बनकर धर्म कार्यों में सहयोग करें।"}
      />
      <Header />
      <main>
        {/* Unified Form Section */}
        <div id="membership-form" className="transition-all duration-500 opacity-100">
          <MembershipForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MembershipPage;
