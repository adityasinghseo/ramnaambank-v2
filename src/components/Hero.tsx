import { Button } from "./ui/button";
import ramPic from "@/assets/ramji-pic-for-hero-section.webp";
import heroBg from "@/assets/hero-section-background-banner.webp";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex md:items-end overflow-hidden">
      {/* Background Image - Full Cover */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Optional lightweight overlay for text readability if background is busy */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 w-full md:pb-0 h-full flex flex-col md:flex-row items-center md:items-end justify-between">

        {/* Left Content */}
        <div className="w-full md:w-1/2 pt-24 md:pt-20 md:pb-24 flex flex-col justify-center animate-fade-in-up text-center md:text-left z-20">
          {/* Jai Shri Ram Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-xs md:text-sm mb-4 md:mb-6 border border-white/30 self-center md:self-start">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-400 animate-pulse" />
            {t.hero.badge}
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-400 animate-pulse" />
          </div>

          <h1 className="font-hindi text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg mb-4 md:mb-6">
            {t.hero.title} <br />
            <span className="text-yellow-200">{t.hero.titleHighlight}</span>
          </h1>

          <p className="text-white/95 text-sm md:text-lg lg:text-xl font-hind leading-relaxed md:leading-loose max-w-xl mx-auto md:mx-0 drop-shadow-md mb-8">
            {t.hero.description}<br />
            {t.hero.descriptionText}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="/donation">
              <Button
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 font-bold px-8 py-6 text-lg rounded-full border-2 border-white/20"
              >
                {t.hero.donateButton}
              </Button>
            </a>
          </div>
        </div>

        {/* Right Image (Ram Ji) */}
        <div className="w-full md:w-5/12 relative mt-auto md:mt-0 flex justify-center md:justify-end z-10 md:absolute md:bottom-0 md:right-0 pointer-events-none">
          <img
            src={ramPic}
            alt={t.hero.imageAlt}
            className="w-[80%] md:w-full max-h-[400px] md:max-h-[650px] object-contain object-bottom drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
