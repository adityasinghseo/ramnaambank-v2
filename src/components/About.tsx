import { Card } from "./ui/card";
import ramVideo from "@/assets/videos/ram2.mp4";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#fffaf0] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            श्री राम नाम विश्व बैंक का परिचय
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80 font-hind">
            “काम से राम की ओर…” — यही हमारे जीवन का संदेश है।
            श्री राम नाम विश्व बैंक समिति (रजि.) पिछले 37 वर्षों से भक्ति, सेवा और संस्कार का सन्देश देती आ रही है।
          </p>
        </div>

        {/* Content Row */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Video */}
          <div className="relative animate-fade-in-up flex justify-center">
            <video
              src={ramVideo}
              className="w-full max-w-lg rounded-lg object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Right Text */}
          <div className="animate-fade-in-up">
            <Card className="p-8 shadow-soft border-primary/20 bg-white/80 backdrop-blur-sm">
              <div className="space-y-6 text-lg leading-relaxed font-hind text-foreground">
                <p>
                  श्री राम नाम विश्व बैंक समिति (रजि.) एक अनोखी संस्था है जहाँ धन का नहीं बल्कि
                  भगवान के नामों का लेनदेन होता है — श्रीराम, शिव, कृष्ण, राधा जैसे
                  दिव्य नामों का संकलन ही यहाँ की सच्ची संपत्ति है।
                </p>
                <p>
                  1988 में <strong>परम पूज्य श्री सीताराम बाबा</strong> के आदेशानुसार स्थापित इस
                  संस्था ने करोड़ों भक्तों को राम नाम लेखन और सेवा के कार्यों से जोड़ा है।
                  पूज्य श्री रामबाबा जी महाराज के नेतृत्व में यह संस्था “काम से राम की ओर” का
                  प्रेरणास्रोत बन चुकी है।
                </p>
                <p>
                  हमारा उद्देश्य है — हर हृदय में राम, हर जीवन में सेवा और हर कर्म में भक्ति।
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
