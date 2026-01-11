import teamone from "@/assets/team/sumittiwarinew.webp";
import teamtwo from "@/assets/team/vikasgargnew.webp";
import { useTranslation } from "@/hooks/useTranslation";

const Team = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="relative py-20 bg-gradient-to-b from-cream to-[#f2e2d0] text-foreground overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 font-hind drop-shadow-sm">
            {t.team.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-foreground/90 font-hind leading-relaxed">
            {t.team.subtitle}
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-10 justify-center items-stretch max-w-6xl mx-auto">
          {/* Member 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-devotional transition-all duration-500 animate-fade-in-up">
            <div className="overflow-hidden rounded-xl mb-5">
              <img
                src={teamone}
                alt={t.team.member1.imageAlt}
                className="w-full max-w-[320px] mx-auto rounded-xl transition-transform duration-700 hover:scale-105 drop-shadow-lg"
              />
            </div>
            <p className="text-primary font-semibold text-lg font-hind">
              {t.team.member1.role}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-secondary font-hind mt-1">
              {t.team.member1.name}
            </h3>
          </div>

          {/* Member 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-devotional transition-all duration-500 animate-fade-in-up">
            <div className="overflow-hidden rounded-xl mb-5">
              <img
                src={teamtwo}
                alt={t.team.member2.imageAlt}
                className="w-full max-w-[320px] mx-auto rounded-xl transition-transform duration-700 hover:scale-105 drop-shadow-lg"
              />
            </div>
            <p className="text-primary font-semibold text-lg font-hind">
              {t.team.member2.role}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-secondary font-hind mt-1">
              {t.team.member2.name}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
