import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "धन्यवाद!",
      description: "आपका संदेश प्राप्त हुआ। हम जल्द ही आपसे संपर्क करेंगे।",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-cream">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
                संपर्क करें
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground font-hind leading-relaxed">
                हमसे जुड़ें और अपने प्रश्नों के उत्तर पाएं। हम आपकी सेवा के लिए सदैव तत्पर हैं।
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Contact Details Card */}
              <Card className="shadow-lg border-primary/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-hind text-center text-secondary">
                    संपर्क जानकारी
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground font-hind text-lg leading-relaxed">
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <span>
                      +91-9045000108, +91-8868888601, +91-9410110900
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <span>
                      श्री राम नाम विश्व बैंक समिति आश्रम,<br />
                      बिल्केश्वर बाई पास रोड, निकट वेदाग्रीन बैंकट हाल,<br />
                      ललतारौ पुल हरिद्वार (उत्तराखंड) 249401
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <span>
                      No.7 नई बस्ती रामगढ़ रोड़, खड़खड़ी हरिद्वार (उत्तराखंड) 249401
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <span>
                      8 गोविंदपुरी, रानीपुर मोड, वुडलैंड शोरूम के ऊपर द्वितीय तल,<br />
                      हरिद्वार उत्तराखंड 249401
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <span>
                      <a
                        href="mailto:raamnaambank@gmail.com"
                        className="hover:text-primary"
                      >
                        raamnaambank@gmail.com
                      </a>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <span>सोमवार - शनिवार: 9:00 AM - 6:00 PM</span>
                  </div>
                </CardContent>
              </Card>

              {/* Embedded Google Map */}
              <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg border border-primary/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539258.527891304!2d73.29318371249998!3d29.97060149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909476cd233ec29%3A0x1dd4cf11353c3203!2z4KS24KWN4KSw4KWAIOCksOCkvuCkriDgpKjgpL7gpK4g4KSs4KWI4KSC4KSVIChTSFJFRSBSQU0gTkFBTSBWSVNIVkEgQkFOSyBTQU1JVEkp!5e0!3m2!1sen!2sin!4v1762171031068!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <Card className="shadow-lg border-primary/30">
                <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
                  <CardTitle className="text-2xl font-hind text-center">
                    संदेश भेजें
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="font-hind text-base">
                        पूरा नाम *
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

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="font-hind text-base">
                          ईमेल *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="example@email.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="font-hind text-base">
                          फोन नंबर *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-hind text-base">
                        संदेश *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-2 font-hind"
                        placeholder="अपना संदेश यहाँ लिखें"
                        rows={6}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full gradient-devotional text-white hover:opacity-90 shadow-devotional font-hind text-lg"
                      size="lg"
                    >
                      संदेश भेजें
                    </Button>
                  </form>
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

export default ContactPage;
