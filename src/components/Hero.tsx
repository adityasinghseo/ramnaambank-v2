import { Button } from "./ui/button";
import heroVideo from "@/assets/videos/ayodhya.mp4";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Video */}
      <div className="w-full relative">
        <video
          src={heroVideo}
          className="w-full h-auto block"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-2xl animate-fade-in-up text-left md:pt-10">
            {/* Jai Shri Ram Badge */}
            <span className="inline-flex items-center gap-2 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-primary/20 text-primary font-semibold text-[10px] md:text-base">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" /> ।। जय श्री राम ।।
            </span>

            <h1 className="font-hind text-xl md:text-6xl font-extrabold text-white mt-1 md:mt-4 leading-tight drop-shadow-lg">
              आओ चलें काम से <br /> राम की ओर...
            </h1>

            {/* Description */}
            <p className="text-white/90 mt-1 md:mt-4 text-[9px] leading-tight md:text-xl md:leading-relaxed font-hind max-w-xl">
              प्रिय भक्तगण,<br />
              श्री राम नाम विश्व बैंक समिति द्वारा संचालित सेवा कार्यों में जैसे, श्री राम नाम लेखन सामग्री,
              श्री राम नाम संग्रहालय, गौशाला, अस्पताल, श्री राम आश्रय, गंगा घाट व मंदिर निर्माण, अन्नक्षेत्र,
              शिक्षण सामग्री, वृक्षारोपण, मोक्षधाम आदि कार्यों में योगदान देकर पुण्य प्राप्त कर सकते है।
              क्योंकि कलयुग में दान का ही महत्व है।
            </p>

            {/* CTA Button */}
            <div className="mt-2 md:mt-8 flex flex-wrap items-center gap-4">
              <a href="/donation">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-hind px-3 py-1 h-7 text-xs md:h-11 md:px-8 md:text-lg"
                >
                  दान करें 🙏
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative ॐ */}
      <div className="absolute bottom-8 right-8 text-white/10 text-8xl md:text-9xl font-hind select-none animate-slow-float">
        ॐ
      </div>
    </section>
  );
};

export default Hero;
