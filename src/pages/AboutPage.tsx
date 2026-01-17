import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import rampic from "@/assets/rampic.png";
import rambaba from "@/assets/team/rambabanew.webp";
import teamone from "@/assets/team/sumittiwarinew.webp";
import teamtwo from "@/assets/team/vikasgargnew.webp";
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutPage = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      <SEO
        title={language === 'english' ? "About Us" : "हमारे बारे में"}
        description={language === 'english'
          ? "From Work to Ram... - Shri Ram Naam World Bank Committee (Regd.) has been propagating the message of Dharma, Devotion and Self-purification for 37 years."
          : "काम से राम की ओर... - श्री राम नाम विश्व बैंक समिति (रजि.) 37 वर्षों से धर्म, भक्ति और आत्मशुद्धि का संदेश प्रसारित कर रही है।"}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-cream text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
              {language === 'english' ? "Shri Ram Naam World Bank Committee" : "श्री राम नाम विश्व बैंक समिति"}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground font-hind leading-relaxed max-w-3xl mx-auto">
              {language === 'english'
                ? "“From Work to Ram…” — This is the motto of this organization. Shri Ram Naam World Bank Committee (Regd.) has been propagating the message of Dharma, Devotion and Self-purification for 37 years."
                : "“काम से राम की ओर…” — यही इस संस्था का मूल मंत्र है। श्री राम नाम विश्व बैंक समिति (रजि.) 37 वर्षों से धर्म, भक्ति और आत्मशुद्धि का संदेश प्रसारित कर रही है।"}
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16 bg-[#fffaf0]">
          <div className="container mx-auto px-4 text-center">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 flex justify-center">
                <div className="w-[420px] h-[420px] md:w-[500px] md:h-[500px] bg-gradient-to-b from-yellow-200/30 to-transparent rounded-full blur-3xl"></div>
              </div>
              <img
                src={rampic}
                alt="Shri Ram Naam"
                className="relative z-10 w-[320px] md:w-[420px] drop-shadow-2xl"
              />
            </div>

            <div className="max-w-5xl mx-auto mt-12">
              <Card className="shadow-soft border-primary/20 bg-white/80 backdrop-blur-sm animate-fade-in-up">
                <CardContent className="p-8 md:p-10 space-y-6 text-lg leading-relaxed text-muted-foreground font-hind">
                  <p>
                    {language === 'english'
                      ? "Shri Ram Naam World Bank Committee is a unique spiritual institution, where no currency is collected, but the names of the Lord are compiled and collected. Here devotees offer the holy names of Shri Ram, Shiv, Krishna, Radha etc. through writing. This organization has been working continuously for the last 37 years and so far lakhs of crores of times the writing of God's name has been compiled."
                      : "श्री राम नाम विश्व बैंक समिति एक अनूठा आध्यात्मिक संस्थान है, जहाँ किसी मुद्रा का नहीं, बल्कि भगवान के नामों का संकलन और संग्रह किया जाता है। यहाँ भक्तजन श्रीराम, शिव, कृष्ण, राधा आदि के पावन नामों को लेखन के माध्यम से अर्पित करते हैं। यह संस्था पिछले 37 वर्षों से सतत रूप से कार्य कर रही है और अब तक लाखों करोड़ बार भगवान के नाम का लेखन संकलित किया जा चुका है।"}
                  </p>

                  <h3 className="text-2xl text-secondary font-bold">
                    {language === 'english' ? "Our Objective" : "हमारा उद्देश्य"}
                  </h3>
                  <p>
                    {language === 'english'
                      ? <>Our main goal is — <strong>“From Work to Ram.”</strong> We inspire people busy in worldly life to connect with the name of God and lead them towards Dharma, Devotion and Self-purification.</>
                      : <>हमारा मुख्य ध्येय है — <strong>“काम से राम की ओर।”</strong> हम सांसारिक जीवन में व्यस्त जनों को भगवान के नाम से जोड़ते हुए उन्हें धर्म, भक्ति और आत्मशुद्धि की ओर ले जाने के लिए प्रेरित करते हैं।</>}
                  </p>

                  <h3 className="text-2xl text-secondary font-bold">
                    {language === 'english' ? "Our Beginning" : "हमारी शुरुआत"}
                  </h3>
                  <p>
                    {language === 'english'
                      ? <>The institution was established in August 1988 under the divine guidance of <strong>Shri Sitaram Baba</strong>. Baba himself used to chant Ram Naam daily in the morning. He chose his supreme disciple and exclusive worshiper of Bajrangbali <strong>Pandit Kuldeep Tiwari (Ram Baba)</strong> for this great work and introduced him to the power of Ram Naam.</>
                      : <>संस्था की स्थापना अगस्त 1988 में <strong>श्री सीताराम बाबा</strong> के दिव्य मार्गदर्शन में हुई। बाबा स्वयं प्रतिदिन प्रभातकाल में राम नाम का जाप किया करते थे। उन्होंने अपने परम शिष्य और बजरंगबली के अनन्य उपासक <strong>पंडित कुलदीप तिवारी (रामबाबा)</strong> को इस महान कार्य के लिए चुना और राम नाम की शक्ति से परिचित कराया।</>}
                  </p>

                  <h3 className="text-2xl text-secondary font-bold">
                    {language === 'english' ? "Present Form" : "आज का स्वरूप"}
                  </h3>
                  <p>
                    {language === 'english'
                      ? "Today Shri Ram Naam World Bank Committee has developed into a strong and dedicated organization, which is playing a leading role in the propagation of Sanatan Dharma, Ram Naam writing, collective chanting and religious awareness activities."
                      : "आज श्री राम नाम विश्व बैंक समिति एक सशक्त और समर्पित संगठन के रूप में विकसित हो चुका है, जो सनातन धर्म के प्रचार, राम नाम लेखन, सामूहिक जाप और धार्मिक जागरूकता के कार्यों में अग्रणी भूमिका निभा रहा है।"}
                  </p>

                  <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-md italic">
                    {language === 'english'
                      ? <>💠 <strong>Ram Naam is the only solution.</strong> Come, become a part of this spiritual campaign and make your life Ram-filled.</>
                      : <>💠 <strong>राम नाम ही समाधान है।</strong> आइए, इस आध्यात्मिक अभियान का हिस्सा बनें और अपने जीवन को राममय बनाएं।</>}
                  </div>

                  <p>
                    {language === 'english'
                      ? "📜 Join us, write Ram Naam, and earn virtue."
                      : "📜 हमसे जुड़ें, राम नाम लिखें, और पुण्य अर्जित करें।"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-gradient-to-br from-accent/10 via-[#fffaf0] to-primary/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <Card className="shadow-soft border-primary/20 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-10 flex flex-col md:flex-row items-center gap-10 font-hind text-muted-foreground">
                <div className="flex justify-center md:w-1/3">
                  <img
                    src={rambaba}
                    alt="Swami Ram Baba Ji"
                    className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-primary/30 shadow-2xl drop-shadow-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="md:w-2/3 space-y-4">
                  <h2 className="text-3xl font-bold text-secondary">
                    {language === 'english' ? "Brahmalin Param Shraddhey Swami Ram Baba Ji Maharaj" : "ब्रम्हलीन परम श्रद्धेय स्वामी रामबाबा जी महाराज"}
                  </h2>
                  <p className="text-lg leading-relaxed">
                    {language === 'english'
                      ? "Acharya Shri Ram Baba Ji was the founder of Shri Ram Naam World Bank Committee. Who connected lakhs of people with Shri Ram Naam by inspiring them during his lifetime. In the approximately 37 years of the institution's tenure, Ram Naam has been written in countless quantities so far — which is a spiritual record in itself. The credit for this great work goes entirely to Acharya Shri Ram Baba Ji."
                      : "आचार्य श्री रामबाबा जी श्री राम नाम विश्व बैंक समिति के संस्थापक थे। जिन्होंने जीवनकाल में लाखों लोगों को प्रेरणा देकर श्री राम नाम से जोड़ा। संस्था के लगभग 37 वर्षों के कार्यकाल में अब तक असंख्य मात्रा में राम नाम लिखा जा चुका है — जो अपने आप में एक आध्यात्मिक रिकॉर्ड है। इस महान कार्य का श्रेय पूर्ण रूप से आचार्य श्री रामबाबा जी को जाता है।"}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {language === 'english'
                      ? "Even though he is not amongst us today, but this divine work started by him is continuing daily and is leading lakhs of devotees on the path of Ram Naam."
                      : "आज भले ही वह हमारे बीच नहीं हैं, परंतु उनके द्वारा प्रारंभ किया गया यह दिव्य कार्य नित्य निरंतर चल रहा है और लाखों भक्तों को राम नाम के पथ पर अग्रसर कर रहा है।"}
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    {language === 'english' ? "Shri Ram Naam World Bank Committee | Jai Shri Ram 🙏" : "श्री राम नाम विश्व बैंक समिति | जय श्रीराम 🙏"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* National President Section - Visiting Card Style */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row hover:shadow-2xl transition-shadow duration-300">

              {/* Image Section - Left Panel */}
              <div className="md:w-2/5 relative flex items-center justify-center bg-gradient-to-b from-orange-100 to-orange-50 p-8">
                {/* Circular Image with Border */}
                <img
                  src={teamone}
                  alt="Acharya Shri Sumit Tiwari Ji"
                  className="w-60 h-60 md:w-72 md:h-72 object-cover object-top rounded-full border-4 border-primary/30 shadow-2xl drop-shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content Section - Right Panel */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">

                {/* Header (Desktop) */}
                <div className="hidden md:block mb-8 border-b pb-4">
                  <h2 className="text-4xl font-bold text-gray-800 font-hind mb-2">
                    {language === 'english' ? "Acharya Shri Sumit Tiwari Ji" : "आचार्य श्री सुमित तिवारी जी"}
                  </h2>
                  <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full font-bold uppercase tracking-wider text-sm shadow-sm">
                    {language === 'english' ? "NATIONAL PRESIDENT" : "राष्ट्रीय अध्यक्ष"}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-hind text-justify">
                  {language === 'english'
                    ? "Acharya Shri Pandit Sumit Tiwari Ji is currently the National President of the organization Shri Ram Naam World Bank Committee. He is a Computer Software Engineer by profession. Due to his religious background, he devoted most of his life to this Ram Naam service. His resolution is to take Ram Naam to the masses."
                    : "आचार्य श्री पंडित सुमित तिवारी जी संस्था श्री राम नाम विश्व बैंक समिति के वर्तमान में राष्ट्रीय अध्यक्ष है। वह पेशे से कंप्यूटर सॉफ्टवेयर इंजीनियर है। धार्मिक पृष्ठभूमि होने के कारण उन्होंने अपने जीवन का अधिकांश समय इस राम नाम सेवा में लगा दिया। उनका संकल्प है कि राम नाम को जन-जन तक पहुँचाया जाए।"}
                </p>

                {/* Contact Details - Visiting Card Layout */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-4 shadow-inner">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Mobile</p>
                      <p className="text-gray-800 font-medium font-hind">+91-9045000108</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Email</p>
                      <p className="text-gray-800 font-medium font-hind">sumit@ramnaam.in </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Address</p>
                      <p className="text-gray-800 font-medium font-hind leading-snug">
                        {language === 'english'
                          ? "H.No. 7, Nai Basti Ramgarh Road, Kharkhari, Haridwar, Uttarakhand 249401"
                          : "H.No. 7, नई बस्ती रामगढ़ रोड, खड़खड़ी, हरिद्वार, उत्तराखंड 249401"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Footer */}
                <div className="mt-8 flex gap-4">
                  <a href="https://www.facebook.com/people/Shriramnaambank/61556191174978/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#1877F2] hover:text-white transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@raamnaambank" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#FF0000] hover:text-white transition-all">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/ramnaambank/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#E4405F] hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* National General Secretary Section - Visiting Card Style */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row-reverse hover:shadow-2xl transition-shadow duration-300">

              {/* Image Section - Right Panel */}
              <div className="md:w-2/5 relative flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 p-8">
                {/* Circular Image with Border */}
                <img
                  src={teamtwo}
                  alt="Shri Vikas Garg Ji"
                  className="w-60 h-60 md:w-72 md:h-72 object-cover object-top rounded-full border-4 border-primary/30 shadow-2xl drop-shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content Section - Left Panel */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">

                {/* Header (Desktop) */}
                <div className="hidden md:block mb-8 border-b pb-4">
                  <h2 className="text-4xl font-bold text-gray-800 font-hind mb-2">
                    {language === 'english' ? "Shri Vikas Garg Ji" : "श्री विकास गर्ग जी"}
                  </h2>
                  <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full font-bold uppercase tracking-wider text-sm shadow-sm">
                    {language === 'english' ? "NATIONAL GENERAL SECRETARY" : "राष्ट्रीय महासचिव"}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-hind text-justify">
                  {language === 'english'
                    ? "Shri Vikas Garg Ji is the National General Secretary of Shri Ram Naam World Bank Committee. He is an industrialist by profession. He is committed to taking the influence of Ram Naam and its writing to the masses. His resolution is that rest will not be taken until the construction work of Shri Ram Naam Museum is completed."
                    : "श्री विकास गर्ग जी श्री राम नाम विश्व बैंक समिति के राष्ट्रीय महासचिव हैं। वह पेशे से एक उद्योगपति है। राम नाम के प्रभाव और उसके लेखन को जन-जन तक पहुंचाने कि लिए वह प्रतिबद्ध हैं। उनका संकल्प है कि जब तक श्री राम नाम का संग्रहालय का निर्माण कार्य पूरा नहीं हो जाता तब तक विश्राम नहीं किया जाएगा।"}
                </p>

                {/* Contact Details - Visiting Card Layout */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-4 shadow-inner">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Mobile</p>
                      <p className="text-gray-800 font-medium font-hind">+91-8868888601</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Email</p>
                      <p className="text-gray-800 font-medium font-hind">vikas@raamnaam.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Address</p>
                      <p className="text-gray-800 font-medium font-hind leading-snug">
                        {language === 'english'
                          ? "8 Govindpuri, Ranipur Mode, Above Woodland Showroom 2nd Floor, Haridwar Uttarakhand 249401"
                          : "8 गोविंदपुरी, रानीपुर मोड, वुडलैंड शोरूम के ऊपर द्वितीय तल, हरिद्वार उत्तराखंड 249401"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Footer */}
                <div className="mt-8 flex gap-4">
                  <a href="https://www.facebook.com/people/Shriramnaambank/61556191174978/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#1877F2] hover:text-white transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@raamnaambank" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#FF0000] hover:text-white transition-all">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/ramnaambank/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#E4405F] hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
