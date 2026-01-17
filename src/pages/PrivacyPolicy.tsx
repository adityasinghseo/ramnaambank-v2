import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
    const { t } = useTranslation();
    const { language } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>{language === 'english' ? "Privacy Policy" : "गोपनीयता नीति"} - {t.header.organizationName}</title>
                <meta name="description" content={language === 'english' ? "Privacy Policy of Shri Ram Naam Vishwa Bank Samiti." : "श्री राम नाम विश्व बैंक समिति की गोपनीयता नीति।"} />
            </Helmet>
            <Header />
            <div className="flex-grow container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-6 text-primary">
                    {language === 'english' ? "Privacy Policy" : "गोपनीयता नीति"}
                </h1>
                <div className="prose max-w-none text-gray-700">
                    <p>{language === 'english' ? "Effective date: 2024-01-01" : "प्रभावी तिथि: 2024-01-01"}</p>
                    <p>
                        {language === 'english' ? (
                            <>
                                Welcome to <strong>{t.header.organizationName}</strong> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and protect your information when you visit our website <strong>shriramnaambank.com</strong> (the "Site") and use our services.
                            </>
                        ) : (
                            <>
                                <strong>{t.header.organizationName}</strong> ("हम," "हमारा," या "हमें") में आपका स्वागत है। हम आपकी गोपनीयता की रक्षा करने और यह सुनिश्चित करने के लिए प्रतिबद्ध हैं कि आपकी व्यक्तिगत जानकारी सुरक्षित और जिम्मेदार तरीके से संभाली जाए। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट <strong>shriramnaambank.com</strong> (साइट) पर आते हैं और हमारी सेवाओं का उपयोग करते हैं तो हम आपकी जानकारी कैसे एकत्र, उपयोग और संरक्षित करते हैं।
                            </>
                        )}
                    </p>

                    <h3>{language === 'english' ? "1. Information We Collect" : "1. हम जो जानकारी एकत्र करते हैं"}</h3>
                    <p>{language === 'english' ? "We may collect the following types of information:" : "हम निम्नलिखित प्रकार की जानकारी एकत्र कर सकते हैं:"}</p>
                    <ul className="list-disc pl-5">
                        <li>
                            {language === 'english' ? (
                                <><strong>Personal Information:</strong> Name, email address, phone number, shipping address, and other contact details provided when you register, make a donation, or purchase items.</>
                            ) : (
                                <><strong>व्यक्तिगत जानकारी:</strong> नाम, ईमेल पता, फोन नंबर, शिपिंग पता और अन्य संपर्क विवरण जो आप पंजीकरण करते समय, दान करते समय, या वस्तुएं खरीदते समय प्रदान करते हैं।</>
                            )}
                        </li>
                        <li>
                            {language === 'english' ? (
                                <><strong>Payment Information:</strong> We do not store your credit/debit card information. All payment transactions are processed through secure payment gateways like Razorpay.</>
                            ) : (
                                <><strong>भुगतान जानकारी:</strong> हम आपके क्रेडिट/डेबिट कार्ड की जानकारी संग्रहीत नहीं करते हैं। सभी भुगतान लेनदेन रेजरपे (Razorpay) जैसे सुरक्षित भुगतान गेटवे के माध्यम से संसाधित किए जाते हैं।</>
                            )}
                        </li>
                        <li>
                            {language === 'english' ? (
                                <><strong>Usage Data:</strong> Information about how you access and use the Site, such as your IP address, browser type, and operating system.</>
                            ) : (
                                <><strong>उपयोग डेटा:</strong> इस बारे में जानकारी कि आप साइट तक कैसे पहुंचते हैं और उसका उपयोग कैसे करते हैं, जैसे कि आपका आईपी पता, ब्राउज़र प्रकार और ऑपरेटिंग सिस्टम।</>
                            )}
                        </li>
                    </ul>

                    <h3>{language === 'english' ? "2. How We Use Your Information" : "2. हम आपकी जानकारी का उपयोग कैसे करते हैं"}</h3>
                    <p>{language === 'english' ? "We use the collected information for the following purposes:" : "हम एकत्रित जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए करते हैं:"}</p>
                    <ul className="list-disc pl-5">
                        <li>{language === 'english' ? "To process your donations and orders." : "आपके दान और ऑर्डर को संसाधित करने के लिए।"}</li>
                        <li>{language === 'english' ? "To communicate with you regarding your transactions, updates, and promotional offers." : "आपके लेनदेन, अपडेट और प्रचार प्रस्तावों के बारे में आपसे संवाद करने के लिए।"}</li>
                        <li>{language === 'english' ? "To improve our website, services, and user experience." : "हमारी वेबसाइट, सेवाओं और उपयोगकर्ता अनुभव को बेहतर बनाने के लिए।"}</li>
                        <li>{language === 'english' ? "To comply with legal obligations and prevent fraud." : "कानूनी दायित्वों का पालन करने और धोखाधड़ी को रोकने के लिए।"}</li>
                    </ul>

                    <h3>{language === 'english' ? "3. Data Security" : "3. डेटा सुरक्षा"}</h3>
                    <p>
                        {language === 'english'
                            ? "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet is 100% secure."
                            : "हम आपकी व्यक्तिगत जानकारी को अनधिकृत पहुंच, परिवर्तन, प्रकटीकरण या विनाश से बचाने के लिए उचित सुरक्षा उपाय लागू करते हैं। हालाँकि, कृपया ध्यान रखें कि इंटरनेट पर प्रसारण का कोई भी तरीका 100% सुरक्षित नहीं है।"}
                    </p>

                    <h3>{language === 'english' ? "4. Sharing of Information" : "4. जानकारी साझा करना"}</h3>
                    <p>
                        {language === 'english'
                            ? "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential."
                            : "हम आपकी व्यक्तिगत जानकारी को तीसरे पक्ष को बेचते, व्यापार या किराए पर नहीं देते हैं। हम आपकी जानकारी उन विश्वसनीय तृतीय-पक्ष सेवा प्रदाताओं के साथ साझा कर सकते हैं जो हमारी वेबसाइट के संचालन और हमारे व्यवसाय के संचालन में हमारी सहायता करते हैं, बशर्ते वे इस जानकारी को गोपनीय रखने के लिए सहमत हों।"}
                    </p>

                    <h3>{language === 'english' ? "5. Cookies" : "5. कुकीज़"}</h3>
                    <p>
                        {language === 'english'
                            ? "Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of certain features on our Site."
                            : "हमारी वेबसाइट आपके ब्राउज़िंग अनुभव को बढ़ाने के लिए कुकीज़ का उपयोग करती है। आप अपनी ब्राउज़र सेटिंग्स के माध्यम से कुकीज़ को अक्षम करना चुन सकते हैं, लेकिन यह हमारी साइट पर कुछ सुविधाओं की कार्यक्षमता को प्रभावित कर सकता है।"}
                    </p>

                    <h3>{language === 'english' ? "6. Contact Us" : "6. संपर्क करें"}</h3>
                    <p>
                        {language === 'english' ? "If you have any questions about this Privacy Policy, please contact us at:" : "यदि इस गोपनीयता नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:"} <br />
                        <strong>{language === 'english' ? "Email:" : "ईमेल:"}</strong> raamnaambank@gmail.com <br />
                        <strong>{language === 'english' ? "Phone:" : "फोन:"}</strong> +91-9045000108
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
