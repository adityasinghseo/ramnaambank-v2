import { Card } from "./ui/card";
import founderImage from "@/assets/rambaba.png";

const Founder = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            ब्रम्हलीन परम श्रद्धेय स्वामी रामबाबा जी
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-soft border-primary/20">
            <div className="grid md:grid-cols-5 gap-8 p-8">
              <div className="md:col-span-2 animate-fade-in-up">
                <div className="relative">
                  <img
                    src={founderImage}
                    alt="परम श्रद्धेय स्वामी रामबाबा जी"
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
                </div>
              </div>

              <div className="md:col-span-3 animate-fade-in-up flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-primary font-bold text-lg font-hind">संस्थापक एवं मार्गदर्शक</span>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-foreground leading-relaxed font-hind">
                    ब्रम्हलीन परम पूज्य स्वामी रामबाबा जी महाराज श्री राम नाम विश्व बैंक के संस्थापक एवं प्रेरणास्रोत हैं। उन्होंने अपना सम्पूर्ण जीवन भगवान श्री राम की भक्ति, राम नाम के प्रचार-प्रसार और समाज सेवा में समर्पित कर दिया है।
                  </p>

                  <p className="text-lg text-foreground leading-relaxed font-hind">
                    स्वामी जी के मार्गदर्शन में यह संस्था करोड़ों लोगों को आध्यात्मिक मार्ग पर आगे बढ़ने के लिए प्रेरित कर चुकी है। उनके सरल और भावपूर्ण उपदेशों में प्रेम, करुणा, सेवा और समर्पण का संदेश निहित है। राम नाम लेखन, जप और सामूहिक कीर्तन के माध्यम से उन्होंने समाज में आध्यात्मिक चेतना जगाने का महान कार्य किया है।
                  </p>

                  <div className="pt-4 border-t border-border">
                    <p className="font-bold text-gray-900 font-hind text-lg">
                      "जब हम नही थे, राम का नाम तब भी था और आगे जब हम नही होंगे राम का नाम तब भी रहेगा । क्योंकि मूल में तो राम है"
                    </p>
                    <p className="text-right text-primary font-semibold mt-2 font-hind">- परम पूज्य स्वामी रामबाबा जी महाराज</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Founder;
