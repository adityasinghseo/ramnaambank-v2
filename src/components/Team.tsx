import teamone from "@/assets/teamone.png";
import teamtwo from "@/assets/teamtwo.png";

const Team = () => {
  return (
    <section id="team" className="relative py-20 bg-gradient-to-b from-cream to-[#f2e2d0] text-foreground overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 font-hind drop-shadow-sm">
            हमारी टीम
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-foreground/90 font-hind leading-relaxed">
            हमारी टीम समर्पित, अनुभवी और आध्यात्मिक भावना से ओत-प्रोत उन व्यक्तियों का समूह है
            जो श्री राम नाम विश्व बैंक समिति के उद्देश्य को साकार करने में निरंतर कार्यरत हैं।
            प्रत्येक सदस्य अपने क्षेत्र में निपुण है और संस्था के हर पहलू — राम नाम लेखन, आयोजन,
            प्रचार-प्रसार, तकनीकी सहायता और सेवा कार्य — में सक्रिय भागीदारी निभाता है।
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-10 justify-center items-stretch max-w-6xl mx-auto">
          {/* Member 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-devotional transition-all duration-500 animate-fade-in-up">
            <div className="overflow-hidden rounded-xl mb-5">
              <img
                src={teamone}
                alt="श्री सुमित तिवारी जी"
                className="w-full max-w-[320px] mx-auto rounded-xl transition-transform duration-700 hover:scale-105 drop-shadow-lg"
              />
            </div>
            <p className="text-primary font-semibold text-lg font-hind">
              राष्ट्रीय अध्यक्ष
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-secondary font-hind mt-1">
              श्री सुमित तिवारी जी
            </h3>
          </div>

          {/* Member 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-devotional transition-all duration-500 animate-fade-in-up">
            <div className="overflow-hidden rounded-xl mb-5">
              <img
                src={teamtwo}
                alt="श्री विकास गर्ग जी"
                className="w-full max-w-[320px] mx-auto rounded-xl transition-transform duration-700 hover:scale-105 drop-shadow-lg"
              />
            </div>
            <p className="text-primary font-semibold text-lg font-hind">
              राष्ट्रीय महासचिव
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-secondary font-hind mt-1">
              श्री विकास गर्ग जी
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
