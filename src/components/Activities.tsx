import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Crown, Star, HeartHandshake, Users } from "lucide-react";
import offlineForm from "../assets/ऑफ़लाइन-फार्म.pdf";

const Activities = () => {
  const memberships = [
    {
      icon: Crown,
      title: "₹5100 – आजीवन सदस्यता",
      description:
        "एक बार सहयोग करके आजीवन श्री राम नाम सेवा से जुड़े रहें। विशेष भक्ति आयोजनों में आमंत्रण, प्रमाणपत्र एवं प्राथमिकता सेवाएँ प्राप्त करें।",
      color: "from-primary to-accent",
    },
    {
      icon: Star,
      title: "₹2100 – वार्षिक सदस्यता",
      description:
        "हर वर्ष नव संकल्प के साथ राम नाम सेवा में सहभागिता करें। वार्षिक भक्ति कार्यक्रमों में विशेष निमंत्रण प्राप्त करें।",
      color: "from-secondary to-sacred-light",
    },
    {
      icon: HeartHandshake,
      title: "₹300 – मासिक सदस्यता",
      description:
        "हर महीने एक छोटी राशि से भी आप श्री राम नाम के प्रसार में बड़ा योगदान दे सकते हैं।",
      color: "from-accent to-golden",
    },
    {
      icon: Users,
      title: "स्वयंसेवी बनें – निःशुल्क",
      description:
        "आप स्वयंसेवक बनकर बिना किसी शुल्क के भी संस्था के विविध सेवाकार्यों में भाग ले सकते हैं। सहयोग क्षेत्र: राम नाम लेखन प्रसार, आयोजन, भोजन सेवा, प्रचार-प्रसार आदि।",
      color: "from-primary to-devotional-dark",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            सदस्यता विकल्प
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-hind">
            श्री राम नाम विश्व बैंक समिति में जुड़ें — राम नाम सेवा का संकल्प लें और पुण्य लाभ अर्जित करें।
            आप निम्नलिखित सदस्यता विकल्पों में से किसी एक को चुनकर इस आध्यात्मिक यात्रा का हिस्सा बन सकते हैं।
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {memberships.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-devotional transition-smooth border-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center flex flex-col items-center justify-between h-full">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-soft`}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 font-hind">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-hind leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
          <Button
            size="lg"
            className="gradient-devotional text-white hover:opacity-90 shadow-devotional font-hind text-lg"
            asChild
          >
            <a href="/membership">ऑनलाइन सदस्य बनें</a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 font-hind text-lg"
            asChild
          >
            <a href={offlineForm} target="_blank" rel="noopener noreferrer">
              ऑफलाइन सदस्य बनें
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
