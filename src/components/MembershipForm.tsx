import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { formatMembershipEmail, sendEmail } from "@/lib/email";
import { Loader2 } from "lucide-react";

const MembershipForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    fatherHusband: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formattedMessage = formatMembershipEmail(formData);

      await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formattedMessage,
      });

      toast({
        title: "धन्यवाद!",
        description: "आपका पंजीकरण सफलतापूर्वक प्राप्त हुआ। हम जल्द ही आपसे संपर्क करेंगे।",
      });

      setFormData({
        name: "",
        role: "",
        fatherHusband: "",
        dob: "",
        phone: "",
        email: "",
        address: "",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "त्रुटि!",
        description: "पंजीकरण भेजने में समस्या आई। कृपया पुनः प्रयास करें।",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="membership" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            राम नाम लेखन / सदस्य पंजीकरण
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-hind">
            हमारे परिवार का हिस्सा बनें और राम नाम की महिमा में शामिल हों
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <Card className="shadow-soft border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-white rounded-t-xl">
              <CardTitle className="text-2xl font-hind text-center">पंजीकरण फॉर्म</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="font-hind text-base">
                    नाम *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 font-hind"
                    placeholder="अपना नाम दर्ज करें"
                  />
                </div>

                {/* Role */}
                <div>
                  <Label htmlFor="role" className="font-hind text-base">
                    आप संस्था में क्या बनना चाहते हैं? *
                  </Label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full border border-gray-300 rounded-md p-2 font-hind focus:ring-primary focus:border-primary"
                  >
                    <option value="">चयन करें</option>
                    <option value="सदस्य">सदस्य</option>
                    <option value="आजीवन सदस्य">आजीवन सदस्य</option>
                    <option value="स्वयंसेवी">स्वयंसेवी</option>
                    <option value="पदाधिकारी">पदाधिकारी</option>
                    <option value="प्रचारक">प्रचारक</option>
                  </select>
                </div>

                {/* Father/Husband Name */}
                <div>
                  <Label htmlFor="fatherHusband" className="font-hind text-base">
                    पिता / पति का नाम *
                  </Label>
                  <Input
                    id="fatherHusband"
                    name="fatherHusband"
                    value={formData.fatherHusband}
                    onChange={handleChange}
                    required
                    className="mt-2 font-hind"
                    placeholder="पिता या पति का नाम दर्ज करें"
                  />
                </div>

                {/* DOB */}
                <div>
                  <Label htmlFor="dob" className="font-hind text-base">
                    जन्मतिथि *
                  </Label>
                  <Input
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="mt-2 font-hind"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="font-hind text-base">
                    संपर्क सूत्र (मोबाइल नंबर) *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2 font-poppins"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="font-hind text-base">
                    ईमेल आईडी *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 font-poppins"
                    placeholder="example@email.com"
                  />
                </div>

                {/* Address */}
                <div>
                  <Label htmlFor="address" className="font-hind text-base">
                    पता *
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="mt-2 font-hind"
                    placeholder="पूरा पता दर्ज करें"
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full gradient-devotional text-white hover:opacity-90 shadow-devotional font-hind text-lg"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      कृपया प्रतीक्षा करें...
                    </>
                  ) : (
                    "पंजीकरण करें"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MembershipForm;
