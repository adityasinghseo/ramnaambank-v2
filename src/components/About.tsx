import { Card } from "./ui/card";
import ramVideo from "@/assets/videos/ram2.mp4";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-[#fffaf0] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            {t.about.heading}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80 font-hind">
            {t.about.subtitle}<br />
            {t.about.description}
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
                  {t.about.paragraph1}
                </p>
                <p>
                  {t.about.paragraph2}
                </p>
                <p>
                  {t.about.paragraph3}
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
