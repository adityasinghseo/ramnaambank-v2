import { useState } from "react";
import { Check, Heart, Star, Crown, UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MembershipForm from "@/components/MembershipForm";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MembershipPage = () => {
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
        title="सदस्यता योजनाएं"
        description="राम नाम विश्व बैंक समिति की सदस्यता योजनाएं। मासिक, वार्षिक और आजीवन सदस्य बनकर धर्म कार्यों में सहयोग करें।"
      />
      <Header />
      <main>
        {/* Hero / Pricing Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 font-hind">
                सदस्यता योजनाएं
              </h1>
              <p className="text-xl text-muted-foreground font-hind leading-relaxed">
                अपनी श्रद्धा और सामर्थ्य अनुसार सदस्यता चुनें और राम काज में अपना योगदान दें।
                आपका सहयोग धर्म और समाज सेवा के कार्यों को निरंतरता प्रदान करता है।
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${plan.highlight ? 'border-t-primary scale-105 shadow-xl ring-2 ring-primary/20 z-10' : 'border-t-gray-300'}`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                      सर्वाधिक लोकप्रिय
                    </div>
                  )}

                  <CardHeader className="text-center pb-0">
                    <div className="flex justify-center mb-4 bg-gray-100 w-20 h-20 mx-auto rounded-full items-center">
                      {plan.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-secondary font-hind">
                      {plan.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow pt-4 text-center">
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-primary">{plan.price}</span>
                      <span className="text-gray-500 font-medium text-sm">{plan.period}</span>
                    </div>

                    <ul className="space-y-3 text-left mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 font-hind">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button
                      onClick={() => handlePlanSelect(plan)}
                      className={`w-full font-hind text-lg py-6 ${plan.highlight ? 'gradient-devotional text-white shadow-lg' : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'}`}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section - Only shown if Volunteer is selected or just kept at bottom */}
        <div id="membership-form" className={`transition-all duration-500 ${selectedPlan === "form" ? "opacity-100" : "opacity-100"}`}>
          <MembershipForm />
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default MembershipPage;
