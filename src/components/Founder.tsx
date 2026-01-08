import { Card } from "./ui/card";
import founderImage from "@/assets/rambaba.png";
import { useTranslation } from "@/hooks/useTranslation";

const Founder = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            {t.founder.title}
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
                    alt={t.founder.imageAlt}
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
                </div>
              </div>

              <div className="md:col-span-3 animate-fade-in-up flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-primary font-bold text-lg font-hind">{t.founder.role}</span>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-foreground leading-relaxed font-hind">
                    {t.founder.paragraph1}
                  </p>

                  <p className="text-lg text-foreground leading-relaxed font-hind">
                    {t.founder.paragraph2}
                  </p>

                  <div className="pt-4 border-t border-border">
                    <p className="font-bold text-gray-900 font-hind text-lg">
                      {t.founder.quote}
                    </p>
                    <p className="text-right text-primary font-semibold mt-2 font-hind">{t.founder.quoteAuthor}</p>
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
