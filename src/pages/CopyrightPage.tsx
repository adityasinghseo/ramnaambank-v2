import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { ShieldCheck, Copyright } from "lucide-react";

const CopyrightPage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const isEn = language === "english";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{isEn ? "Copyright Information" : "कॉपीराइट जानकारी"} - {t.header.organizationName}</title>
        <meta
          name="description"
          content={
            isEn
              ? "Copyright ownership and protection policies of Shri Ram Naam Vishwa Bank Samiti."
              : "श्री राम नाम विश्व बैंक समिति की कॉपीराइट स्वामित्व और संरक्षण नीतियां।"
          }
        />
      </Helmet>
      <Header />

      <main className="flex-grow container mx-auto py-12 px-4 max-w-4xl font-hind">
        <div className="bg-white border border-primary/20 rounded-2xl p-8 md:p-12 shadow-soft">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Copyright className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-secondary">
              {isEn ? "Copyright Notice" : "कॉपीराइट सूचना"}
            </h1>
          </div>
          <div className="w-full h-px bg-primary/20 mb-8"></div>

          <div className="prose max-w-none text-muted-foreground text-lg leading-relaxed space-y-8">
            {/* Standard Notice */}
            <div className="bg-cream/40 border-l-4 border-primary p-6 rounded-r-xl">
              <h2 className="text-xl font-bold text-secondary mb-2">
                {isEn ? "General Notice" : "सामान्य सूचना"}
              </h2>
              <p className="font-semibold text-secondary text-xl">
                {isEn
                  ? "© 2026 Shri Ram Naam Vishwa Bank Samiti. All rights reserved."
                  : "© 2026 श्री राम नाम विश्व बैंक समिति। सर्वाधिकार सुरक्षित।"}
              </p>
            </div>

            {/* Extended Version */}
            <div>
              <h2 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                {isEn ? "Extended Copyright Protection" : "विस्तृत कॉपीराइट संरक्षण"}
              </h2>
              <p>
                {isEn
                  ? "© 2026 Shri Ram Naam Vishwa Bank Samiti. All rights reserved. Ram Naam App and all associated content, logos, designs, text, and features are protected under applicable copyright laws."
                  : "© 2026 श्री राम नाम विश्व बैंक समिति। सर्वाधिकार सुरक्षित। राम नाम ऐप और सभी संबंधित सामग्री, लोगो, डिज़ाइन, टेक्स्ट और विशेषताएं लागू कॉपीराइट कानूनों के तहत सुरक्षित हैं।"}
              </p>
            </div>

            {/* Guidelines */}
            <div className="pt-4">
              <h2 className="text-xl font-bold text-secondary mb-3">
                {isEn ? "Intellectual Property & Fair Use" : "बौद्धिक संपदा और उचित उपयोग"}
              </h2>
              <p>
                {isEn
                  ? "All material on this website and within the Ram Naam App—including texts, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software—is the property of Shri Ram Naam Vishwa Bank Samiti and is protected by international copyright laws. No part of this platform may be reproduced, copied, distributed, or transmitted in any form without prior written permission from the organization."
                  : "इस वेबसाइट और राम नाम ऐप के भीतर की सभी सामग्रियां—जिसमें टेक्स्ट, ग्राफिक्स, लोगो, बटन आइकन, चित्र, ऑडियो क्लिप, डिजिटल डाउनलोड, डेटा संकलन और सॉफ्टवेयर शामिल हैं—श्री राम नाम विश्व बैंक समिति की संपत्ति हैं और अंतर्राष्ट्रीय कॉपीराइट कानूनों द्वारा संरक्षित हैं। संगठन की पूर्व लिखित अनुमति के बिना इस प्लेटफॉर्म के किसी भी हिस्से को किसी भी रूप में पुनरुत्पादित, कॉपी, वितरित या प्रसारित नहीं किया जा सकता है।"}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CopyrightPage;
