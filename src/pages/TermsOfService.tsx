import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsOfService = () => {
    const { t } = useTranslation();
    const { language } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>{language === 'english' ? "Terms of Service" : "सेवा की शर्तें"} - {t.header.organizationName}</title>
                <meta name="description" content={language === 'english' ? "Terms of Service of Shri Ram Naam Vishwa Bank Samiti." : "श्री राम नाम विश्व बैंक समिति की सेवा की शर्तें।"} />
            </Helmet>
            <Header />
            <div className="flex-grow container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-6 text-primary">
                    {language === 'english' ? "Terms of Service" : "सेवा की शर्तें"}
                </h1>
                <div className="prose max-w-none text-gray-700">
                    <p>{language === 'english' ? "Effective date: 2024-01-01" : "प्रभावी तिथि: 2024-01-01"}</p>
                    <p>
                        {language === 'english' ? (
                            <>
                                Welcome to <strong>{t.header.organizationName}</strong>. By accessing or using our website <strong>shriramnaambank.com</strong>, you agree to comply with and be bound by the following Terms of Service ("Terms"). Please read them carefully.
                            </>
                        ) : (
                            <>
                                <strong>{t.header.organizationName}</strong> में आपका स्वागत है। हमारी वेबसाइट <strong>shriramnaambank.com</strong> तक पहुँचने या उसका उपयोग करने के लिए, आप निम्नलिखित सेवा की शर्तों ("शर्तें") का पालन करने और उनसे बाध्य होने के लिए सहमत हैं। कृपया उन्हें ध्यान से पढ़ें।
                            </>
                        )}
                    </p>

                    <h3>{language === 'english' ? "1. Acceptance of Terms" : "1. शर्तों की स्वीकृति"}</h3>
                    <p>
                        {language === 'english'
                            ? "By accessing or using our Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you must not use our Site."
                            : "हमारी साइट तक पहुँचने या उसका उपयोग करने से, आप इन शर्तों और हमारी गोपनीयता नीति से बाध्य होने के लिए सहमत होते हैं। यदि आप इन शर्तों के किसी भी हिस्से से सहमत नहीं हैं, तो आपको हमारी साइट का उपयोग नहीं करना चाहिए।"}
                    </p>

                    <h3>{language === 'english' ? "2. Use of the Site" : "2. साइट का उपयोग"}</h3>
                    <p>
                        {language === 'english'
                            ? "You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our Site."
                            : "आप साइट का उपयोग केवल वैध उद्देश्यों के लिए और इस तरह से करने के लिए सहमत हैं जो किसी और के साइट के उपयोग और आनंद के अधिकारों का उल्लंघन, प्रतिबंधित या बाधित न करे। निषिद्ध व्यवहार में किसी अन्य उपयोगकर्ता को परेशान करना या संकट या असुविधा पैदा करना, अश्लील या आपत्तिजनक सामग्री प्रसारित करना, या हमारी साइट के भीतर संवाद के सामान्य प्रवाह को बाधित करना शामिल है।"}
                    </p>

                    <h3>{language === 'english' ? "3. Intellectual Property" : "3. बौद्धिक संपदा"}</h3>
                    <p>
                        {language === 'english' ? (
                            <>
                                All content included on this Site, such as text, graphics, logos, images, and software, is the property of <strong>{t.header.organizationName}</strong> or its content suppliers and is protected by applicable copyright laws. Unauthorized use of any content is strictly prohibited.
                            </>
                        ) : (
                            <>
                                इस साइट पर शामिल सभी सामग्री, जैसे टेक्स्ट, ग्राफिक्स, लोगो, चित्र और सॉफ्टवेयर, <strong>{t.header.organizationName}</strong> या इसके सामग्री आपूर्तिकर्ताओं की संपत्ति है और लागू कॉपीराइट कानूनों द्वारा संरक्षित है। किसी भी सामग्री का अनधिकृत उपयोग सख्त वर्जित है।
                            </>
                        )}
                    </p>

                    <h3>{language === 'english' ? "4. Product and Service Descriptions" : "4. उत्पाद और सेवा विवरण"}</h3>
                    <p>
                        {language === 'english'
                            ? "We strive to ensure that the information on our Site is accurate and up-to-date. However, we do not warrant that product descriptions, pricing, or other content on this Site is accurate, complete, reliable, current, or error-free."
                            : "हम यह सुनिश्चित करने का प्रयास करते हैं कि हमारी साइट पर जानकारी सटीक और अद्यतित हो। हालाँकि, हम यह गारंटी नहीं देते हैं कि इस साइट पर उत्पाद विवरण, मूल्य निर्धारण, या अन्य सामग्री सटीक, पूर्ण, विश्वसनीय, वर्तमान या त्रुटि-मुक्त है।"}
                    </p>

                    <h3>{language === 'english' ? "5. Limitation of Liability" : "5. दायित्व की सीमा"}</h3>
                    <p>
                        {language === 'english' ? (
                            <>
                                In no event shall <strong>{t.header.organizationName}</strong>, its directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our Site or Services.
                            </>
                        ) : (
                            <>
                                किसी भी स्थिति में <strong>{t.header.organizationName}</strong>, इसके निदेशक, कर्मचारी, या एजेंट हमारी साइट या सेवाओं के उपयोग से उत्पन्न या किसी भी तरह से जुड़े किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक, विशेष, या परिणामी नुकसान के लिए उत्तरदायी नहीं होंगे।
                            </>
                        )}
                    </p>

                    <h3>{language === 'english' ? "6. Governing Law" : "6. शासी कानून"}</h3>
                    <p>
                        {language === 'english'
                            ? "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in [Your City/State]."
                            : "इन शर्तों को भारत के कानूनों के अनुसार शासित और समझा जाएगा। इन शर्तों के तहत या इसके संबंध में उत्पन्न होने वाले कोई भी विवाद [Your City/State] में स्थित अदालतों के अनन्य क्षेत्राधिकार के अधीन होंगे।"}
                    </p>

                    <h3>{language === 'english' ? "7. Changes to Terms" : "7. शर्तों में बदलाव"}</h3>
                    <p>
                        {language === 'english'
                            ? "We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms."
                            : "हम किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। कोई भी परिवर्तन साइट पर पोस्ट किए जाने पर तुरंत प्रभावी होगा। ऐसे किसी भी परिवर्तन के बाद साइट का आपका निरंतर उपयोग नई शर्तों की आपकी स्वीकृति का गठन करता है।"}
                    </p>

                    <h3>{language === 'english' ? "8. Contact Us" : "8. संपर्क करें"}</h3>
                    <p>
                        {language === 'english' ? "If you have any questions about these Terms, please contact us at:" : "यदि इन शर्तों के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:"} <br />
                        <strong>{language === 'english' ? "Email:" : "ईमेल:"}</strong> raamnaambank@gmail.com
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfService;
