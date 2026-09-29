import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import rampic from "@/assets/rampic.png";
import rambaba from "@/assets/team/rambabanew.webp";
import teamone from "@/assets/team/sumittiwarinew.webp";
import teamtwo from "@/assets/team/vikasgargnew.webp";
import renewalCertificate from "@/assets/society-renewal-certificate.jpg";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Calendar,
  Building2,
  ExternalLink,
  Eye,
  Download,
  Award,
  ZoomIn,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutPage = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      <SEO
        titleHi="हमारे बारे में"
        titleEn="About Us"
        descriptionHi="काम से राम की ओर... - श्री राम नाम विश्व बैंक समिति (रजि.) 37 वर्षों से धर्म, भक्ति और आत्मशुद्धि का संदेश प्रसारित कर रही है।"
        descriptionEn="From Work to Ram... - Shri Ram Naam World Bank Committee (Regd.) has been propagating the message of Dharma, Devotion and Self-purification for 37 years."
        path="/about"
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

        {/* Government Registration & Renewal Certificate Section */}
        <section id="certificate" className="py-20 bg-gradient-to-b from-[#fffaf0] via-amber-50/30 to-white relative overflow-hidden border-y border-amber-100/80">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 border border-primary/20">
                <ShieldCheck className="w-4 h-4" />
                <span>
                  {language === "english"
                    ? "Government Registered & Verified"
                    : "उत्तराखण्ड शासन द्वारा पंजीकृत एवं नवीकृत"}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary font-hind mb-4">
                {language === "english"
                  ? "Society Registration & Renewal Certificate"
                  : "सोसाइटी के नवीनीकरण का प्रमाण पत्र"}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-hind">
                {language === "english"
                  ? "Shri Ram Naam World Bank Committee is an officially recognized non-profit spiritual society registered with the Government of Uttarakhand."
                  : "श्री राम नाम विश्व बैंक समिति, उत्तराखण्ड शासन के सोसाइटी रजिस्ट्रार कार्यालय द्वारा विधिवत नवीकृत एवं अधिकृत संस्था है।"}
              </p>
            </div>

            {/* Document Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Document Image & Preview Card (Left - 5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group relative cursor-pointer bg-white p-3 rounded-2xl shadow-xl border-2 border-amber-200/80 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl max-w-md w-full">
                      <div className="relative overflow-hidden rounded-xl bg-slate-50">
                        <img
                          src={renewalCertificate}
                          alt={
                            language === "english"
                              ? "Society Renewal Certificate - Shri Ram Naam World Bank Committee"
                              : "सोसाइटी नवीनीकरण प्रमाण पत्र - श्री राम नाम विश्व बैंक समिति"
                          }
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white backdrop-blur-[2px]">
                          <div className="bg-primary text-white p-3 rounded-full mb-2 shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <ZoomIn className="w-6 h-6" />
                          </div>
                          <span className="font-semibold text-sm tracking-wide bg-black/60 px-3 py-1 rounded-full">
                            {language === "english" ? "Click to Enlarge" : "क्लिक करके बड़ा देखें"}
                          </span>
                        </div>
                      </div>

                      {/* Verified Badge below image inside card */}
                      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground px-1">
                        <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          {language === "english" ? "Digitally Verified" : "डिजिटल सत्यापित"}
                        </span>
                        <span className="text-muted-foreground font-mono">
                          RENEW0823007442
                        </span>
                      </div>
                    </div>
                  </DialogTrigger>

                  {/* Modal Full Document View */}
                  <DialogContent className="max-w-4xl w-[95vw] max-h-[92vh] p-4 sm:p-6 overflow-y-auto">
                    <DialogHeader className="mb-2">
                      <DialogTitle className="text-xl font-bold text-secondary font-hind flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        {language === "english"
                          ? "Society Renewal Certificate (Govt. of Uttarakhand)"
                          : "सोसाइटी के नवीनीकरण का प्रमाण पत्र (उत्तराखण्ड शासन)"}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col items-center justify-center py-2">
                      <img
                        src={renewalCertificate}
                        alt="Renewal Certificate Full View"
                        className="max-h-[72vh] w-auto object-contain rounded-lg border shadow-md"
                      />
                      <div className="mt-4 flex flex-wrap gap-3 justify-center">
                        <a
                          href="/society-renewal-certificate.jpg"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {language === "english" ? "Open Original File" : "मूल दस्तावेज़ खोलें"}
                        </a>
                        <a
                          href="/society-renewal-certificate.jpg"
                          download="Society-Renewal-Certificate-RamNaamBank.jpg"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white text-sm font-medium rounded-lg hover:bg-secondary/90 transition-colors shadow-sm"
                        >
                          <Download className="w-4 h-4" />
                          {language === "english" ? "Download Copy" : "प्रति डाउनलोड करें"}
                        </a>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Actions below preview */}
                <div className="mt-4 flex flex-wrap gap-3 justify-center w-full max-w-md">
                  <a
                    href="/society-renewal-certificate.jpg"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-primary/30 text-primary hover:bg-primary/5 rounded-xl font-semibold text-sm transition-all shadow-sm"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{language === "english" ? "View Full Size" : "पूरा प्रमाण पत्र देखें"}</span>
                  </a>
                  <a
                    href="/society-renewal-certificate.jpg"
                    download="Society-Renewal-Certificate-RamNaamBank.jpg"
                    className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    <span>{language === "english" ? "Download" : "डाउनलोड"}</span>
                  </a>
                </div>
              </div>

              {/* Verified Details & Credentials (Right - 7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                {/* Highlights Card */}
                <Card className="border-amber-200 bg-white/95 shadow-md">
                  <CardContent className="p-6 md:p-8 space-y-6">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                          {language === "english" ? "Document Type" : "दस्तावेज़ प्रकार"}
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold text-secondary font-hind">
                          {language === "english"
                            ? "Certificate of Society Renewal"
                            : "सोसाइटी के नवीनीकरण का प्रमाण पत्र"}
                        </h3>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-300 px-3 py-1 font-semibold text-xs flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {language === "english" ? "Active & Valid" : "सक्रिय एवं वैध"}
                      </Badge>
                    </div>

                    {/* Key Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Renewal Number */}
                      <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/60">
                        <p className="text-xs font-semibold uppercase tracking-wider text-amber-900/70 flex items-center gap-1.5 mb-1">
                          <Award className="w-3.5 h-3.5 text-primary" />
                          {language === "english" ? "Renewal Number" : "नवीनीकरण संख्या"}
                        </p>
                        <p className="text-base font-bold font-mono text-secondary select-all">
                          RENEW0823007442
                        </p>
                      </div>

                      {/* Registration Cert Number */}
                      <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/60">
                        <p className="text-xs font-semibold uppercase tracking-wider text-amber-900/70 flex items-center gap-1.5 mb-1">
                          <FileText className="w-3.5 h-3.5 text-primary" />
                          {language === "english" ? "Registration Certificate No." : "रजिस्ट्रीकरण प्रमाण पत्र संख्या"}
                        </p>
                        <p className="text-base font-bold font-mono text-secondary select-all">
                          UK0680142023011037
                        </p>
                      </div>

                      {/* Initial Reg Date */}
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-1">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {language === "english" ? "Original Registration Date" : "मूल रजिस्ट्रीकरण दिनांक"}
                        </p>
                        <p className="text-base font-semibold text-foreground">
                          17-AUG-2013
                        </p>
                      </div>

                      {/* Valid Up To */}
                      <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-200/80">
                        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          {language === "english" ? "Valid Through" : "वैधता अवधि"}
                        </p>
                        <p className="text-base font-bold text-emerald-900">
                          16-AUG-2028 {language === "english" ? "(5 Years)" : "(तक के लिए नवीकृत)"}
                        </p>
                      </div>
                    </div>

                    {/* Society & Authority details */}
                    <div className="space-y-3 pt-2 border-t">
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs uppercase font-semibold text-muted-foreground tracking-wider">
                            {language === "english" ? "Registered Society Name" : "पंजीकृत संस्था का नाम"}
                          </p>
                          <p className="font-bold text-secondary font-hind">
                            {language === "english"
                              ? "Shri Ram Naam World Bank Committee"
                              : "श्री राम नाम विश्व बैंक समिति"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs uppercase font-semibold text-muted-foreground tracking-wider">
                            {language === "english" ? "Registered Office Address" : "पंजीकृत कार्यालय का पता"}
                          </p>
                          <p className="text-sm text-foreground/90 font-hind">
                            HOUSE NO 7, NAI BASTI, RAMGARH, KHARKHARI, HARIDWAR, UTTARAKHAND - 249401
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs uppercase font-semibold text-muted-foreground tracking-wider">
                            {language === "english" ? "Issuing Authority" : "प्रमाण पत्र जारीकर्ता प्राधिकारी"}
                          </p>
                          <p className="text-sm font-medium text-foreground/90 font-hind">
                            {language === "english"
                              ? "Society Registrar, Government of Uttarakhand"
                              : "सोसाइटी-रजिस्ट्रार, उत्तराखण्ड शासन"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Official Note / Seal */}
                    <div className="bg-amber-50/60 border-l-4 border-primary p-3.5 rounded-r-lg text-xs leading-relaxed text-muted-foreground font-hind">
                      {language === "english"
                        ? "Certified that the Society Registration Certificate has been officially renewed by the Registrar of Societies, Uttarakhand through e-Approval and digitally verified."
                        : "एतद्द्वारा प्रमाणित किया जाता है कि संस्था श्री राम नाम विश्व बैंक समिति का रजिस्ट्रीकरण प्रमाण पत्र सोसाइटी-रजिस्ट्रार उत्तराखण्ड द्वारा विधिवत नवीकृत किया गया है।"}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
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
