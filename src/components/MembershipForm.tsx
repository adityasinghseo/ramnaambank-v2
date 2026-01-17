import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { formatMembershipEmail, sendEmail } from "@/lib/email";
import { Loader2, Heart, Star, Crown, UserPlus, Check } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useLanguage } from "@/contexts/LanguageContext";

const MembershipForm = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState("volunteer");

  const [formData, setFormData] = useState({
    name: "",
    fatherHusband: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
  });

  const plans = [
    {
      id: "volunteer",
      title: language === 'english' ? "Volunteer" : "स्वयंसेवी (Volunteer)",
      price: language === 'english' ? "Free" : "निःशुल्क",
      amount: 0,
      period: "/ FREE",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      features: language === 'english'
        ? ["Support in propagating Ram Naam", "Booklet distribution service", "Participation in religious events"]
        : ["राम नाम प्रचार में सहयोग", "पुस्तिका वितरण सेवा", "धार्मिक आयोजनों में भागीदारी"],
      highlight: false
    },
    {
      id: "monthly",
      title: language === 'english' ? "Monthly Member" : "मासिक सदस्य",
      price: "₹300",
      amount: 300,
      period: language === 'english' ? "/ Month" : "/ माह",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      features: language === 'english'
        ? ["Monthly Magazine (PDF)", "Special Aarti Darshan", "1 Ram Naam Booklet Free"]
        : ["मासिक पत्रिका (पीडीएफ)", "विशेष आरती दर्शन", "1 राम नाम पुस्तिका निःशुल्क"],
      link: "https://rzp.io/rzp/OWbol28",
      highlight: false
    },
    {
      id: "yearly",
      title: language === 'english' ? "Yearly Member" : "वार्षिक सदस्य",
      price: "₹2,100",
      amount: 2100,
      period: language === 'english' ? "/ Year" : "/ वर्ष",
      icon: <Crown className="w-6 h-6 text-primary" />,
      features: language === 'english'
        ? ["Special Puja on Birthday", "Annual Calendar", "10 Ram Naam Booklets Free"]
        : ["जन्मदिन पर विशेष पूजा", "वार्षिक कैलेंडर", "10 राम नाम पुस्तिका निःशुल्क"],
      link: "https://rzp.io/rzp/YyASZQH",
      highlight: true
    },
    {
      id: "lifetime",
      title: language === 'english' ? "Lifetime Member" : "आजीवन सदस्य",
      price: "₹5,100",
      amount: 5100,
      period: language === 'english' ? "/ One Time" : "/ एक बार",
      icon: <UserPlus className="w-6 h-6 text-purple-600" />,
      features: language === 'english'
        ? ["Momento", "Invitation to Major Festivals", "Special VIP Darshan Facility"]
        : ["स्मृति चिह्न (मोमेंटो)", "प्रमुख उत्सवों में आमंत्रण", "विशेष वीआईपी दर्शन सुविधा"],
      link: "https://rzp.io/rzp/jM6Ni0O6",
      highlight: false
    }
  ];

  const selectedPlan = plans.find(p => p.id === selectedPlanId) || plans[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1. Send Data via Email (so we capture the lead regardless of payment)
      const dataToSend = {
        ...formData,
        role: selectedPlan.title, // Use selected plan as role
        planDetails: `${selectedPlan.title} (${selectedPlan.price})`
      };

      const formattedMessage = formatMembershipEmail(dataToSend);

      await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formattedMessage,
        subject: `New Membership Registration: ${selectedPlan.title}`
      });

      // 2. Handle success/payment
      if (selectedPlan.amount > 0 && selectedPlan.link) {
        toast({
          title: language === 'english' ? "Registration Successful!" : "पंजीकरण सफल!",
          description: language === 'english' ? "Redirecting to payment page..." : "आपको भुगतान पृष्ठ पर भेजा जा रहा है...",
        });

        // Short delay to let them see the toast
        setTimeout(() => {
          window.location.href = selectedPlan.link!;
        }, 1500);
      } else {
        toast({
          title: language === 'english' ? "Thank You!" : "धन्यवाद!",
          description: language === 'english'
            ? "Your registration has been received successfully. We will contact you soon."
            : "आपका पंजीकरण सफलतापूर्वक प्राप्त हुआ। हम जल्द ही आपसे संपर्क करेंगे।",
        });
        // Reset form only if not redirecting
        setFormData({
          name: "",
          fatherHusband: "",
          dob: "",
          phone: "",
          email: "",
          address: "",
        });
      }

    } catch (error) {
      toast({
        variant: "destructive",
        title: language === 'english' ? "Error!" : "त्रुटि!",
        description: language === 'english'
          ? "Problem in sending registration. Please try again."
          : "पंजीकरण भेजने में समस्या आई। कृपया पुनः प्रयास करें।",
      });
    } finally {
      if (selectedPlan.amount === 0) {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="membership" className="py-12 bg-cream">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            {language === 'english' ? "Ram Naam Writing / Membership Registration" : "राम नाम लेखन / सदस्य पंजीकरण"}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-hind">
            {language === 'english'
              ? "Choose your membership from the plans below and fill the form."
              : "नीचे दी गई योजनाओं में से अपनी सदस्यता चुनें और फॉर्म भरें।"}
          </p>
        </div>

        <Card className="shadow-xl border-primary/20 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary to-accent text-white p-6">
            <CardTitle className="text-2xl font-hind text-center">
              {language === 'english' ? "Membership Form" : "सदस्यता फॉर्म (Membership Form)"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Plan Selection */}
              <div className="space-y-4">
                <Label className="text-lg font-bold text-secondary font-hind">
                  {language === 'english' ? "1. Select Membership" : "1. अपनी सदस्यता चुनें (Select Membership)"}
                </Label>
                <RadioGroup
                  defaultValue="volunteer"
                  value={selectedPlanId}
                  onValueChange={setSelectedPlanId}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {plans.map((plan) => (
                    <div key={plan.id} className="relative">
                      <RadioGroupItem value={plan.id} id={plan.id} className="peer sr-only" />
                      <Label
                        htmlFor={plan.id}
                        className={`flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all hover:bg-gray-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 ${plan.highlight ? 'border-primary/40' : 'border-gray-200'}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-full bg-white shadow-sm border`}>{plan.icon}</div>
                            <div>
                              <h3 className="font-bold text-lg text-gray-900">{plan.title}</h3>
                              <p className="text-sm font-semibold text-primary">{plan.price} <span className="text-gray-500 font-normal">{plan.period}</span></p>
                            </div>
                          </div>
                          <div className="h-5 w-5 rounded-full border border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-white"></div>
                        </div>
                        <ul className="text-xs text-gray-500 space-y-1 ml-11 mt-1">
                          {plan.features.slice(0, 2).map((feat, i) => (
                            <li key={i} className="flex items-center">
                              <Check className="w-3 h-3 text-green-500 mr-1" /> {feat}
                            </li>
                          ))}
                        </ul>
                      </Label>
                      {plan.highlight && (
                        <span className="absolute -top-2 right-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                          {language === 'english' ? "Most Popular" : "सर्वाधिक लोकप्रिय"}
                        </span>
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="border-t border-gray-200"></div>

              {/* Personal Details */}
              <div className="space-y-6">
                <Label className="text-lg font-bold text-secondary font-hind">
                  {language === 'english' ? "2. Personal Details" : "2. व्यक्तिगत विवरण (Personal Details)"}
                </Label>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="font-hind">{language === 'english' ? "Name *" : "नाम (Name) *"}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder={language === 'english' ? "Enter your name" : "अपना नाम दर्ज करें"}
                    />
                  </div>
                  <div>
                    <Label htmlFor="fatherHusband" className="font-hind">{language === 'english' ? "Father's / Husband's Name *" : "पिता / पति का नाम *"}</Label>
                    <Input
                      id="fatherHusband"
                      name="fatherHusband"
                      value={formData.fatherHusband}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder={language === 'english' ? "Required" : "Required"}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="dob" className="font-hind">{language === 'english' ? "Date of Birth (DOB) *" : "जन्मतिथि (DOB) *"}</Label>
                    <Input id="dob" name="dob" type="date" value={formData.dob} onChange={handleChange} required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-hind">{language === 'english' ? "Mobile Number *" : "मोबाइल नंबर (Mobile) *"}</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="mt-2" placeholder="+91 XXXXXXXXXX" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-hind">{language === 'english' ? "Email ID *" : "ईमेल आईडी (Email) *"}</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2" placeholder="example@email.com" />
                </div>

                <div>
                  <Label htmlFor="address" className="font-hind">{language === 'english' ? "Address *" : "पता (Address) *"}</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder={language === 'english' ? "Enter full address" : "पूरा पता दर्ज करें"}
                    rows={3}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full gradient-devotional text-white hover:opacity-90 shadow-lg font-hind text-xl py-6 rounded-xl"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {language === 'english' ? "Processing..." : "Processing..."}
                    </>
                  ) : (
                    selectedPlan.amount > 0
                      ? (language === 'english' ? `Pay ${selectedPlan.price} & Join Now` : `Pay ${selectedPlan.price} & Join Now`)
                      : (language === 'english' ? "Join for Free" : "निःशुल्क जुड़ें (Join for Free)")
                  )}
                </Button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  {selectedPlan.amount > 0
                    ? (language === 'english' ? "Secure Payment via Razorpay. Your donation supports our cause." : "Secure Payment via Razorpay. Your donation supports our cause.")
                    : (language === 'english' ? "Thank you for volunteering." : "Thank you for volunteering.")}
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MembershipForm;
