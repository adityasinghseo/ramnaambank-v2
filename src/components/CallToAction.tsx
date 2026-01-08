import { Building2, Users2, HandHeart } from "lucide-react";
import kalash from "@/assets/kalash.png";
import { useTranslation } from "@/hooks/useTranslation";

const CallToAction = () => {
  const { t } = useTranslation();

  const highlights = [
    { icon: Building2, title: t.callToAction.writers, count: "5,500,000" },
    { icon: Users2, title: t.callToAction.members, count: "250,000" },
    { icon: HandHeart, title: t.callToAction.volunteers, count: "4,500" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#fff8ef] to-[#fff4e6] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-md p-8 mb-16 text-center animate-fade-in-up">
          {highlights.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-center">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-primary to-accent rounded-full shadow-sm">
                  <item.icon className="text-white w-7 h-7" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary font-hind">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground font-hind">
                {item.count}
              </p>
            </div>
          ))}
        </div>

        {/* Message Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <h4 className="text-2xl md:text-3xl font-bold text-primary mb-3 font-hind">
            {t.callToAction.heading}
          </h4>
          <p className="text-lg md:text-xl text-foreground/90 font-hind leading-relaxed">
            {t.callToAction.description}
          </p>
        </div>

        {/* CTA Row */}
        <div className="relative bg-gradient-to-r from-[#ff9933] via-[#ffb84d] to-[#ffd480] rounded-3xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-in-up max-w-5xl mx-auto">
          {/* Kalash Image */}
          <div className="flex-shrink-0">
            <img
              src={kalash}
              alt="Kalash"
              className="w-24 md:w-32 drop-shadow-lg animate-fade-in-up"
            />
          </div>

          {/* Center Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-white/90 text-lg font-hind mb-1">{t.callToAction.contactText}</p>
            <a
              href="https://wa.me/919045000108"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-4xl font-bold text-white drop-shadow font-hind hover:text-white/90 transition-colors"
            >
              +91-9045000108
            </a>
          </div>

          {/* WhatsApp Icon */}
          <div className="flex-shrink-0 animate-pulse">
            <a
              href="https://wa.me/919045000108"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-110 duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
