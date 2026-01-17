import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const ShippingPolicy = () => {
    const { t } = useTranslation();
    const { language } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>{language === 'english' ? "Shipping Policy" : "शिपिंग नीति"} - {t.header.organizationName}</title>
                <meta name="description" content={language === 'english' ? "Shipping Policy of Shri Ram Naam Vishwa Bank Samiti." : "श्री राम नाम विश्व बैंक समिति की शिपिंग नीति।"} />
            </Helmet>
            <Header />
            <div className="flex-grow container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-6 text-primary">
                    {language === 'english' ? "Shipping Policy" : "शिपिंग नीति"}
                </h1>
                <div className="prose max-w-none text-gray-700">
                    <p>
                        {language === 'english' ? (
                            <>
                                This Shipping Policy describes how <strong>{t.header.organizationName}</strong> ("we", "us", or "our") handles the shipping and delivery of products ordered through our website.
                            </>
                        ) : (
                            <>
                                यह शिपिंग नीति बताती है कि <strong>{t.header.organizationName}</strong> ("हम", "हमारा" या "हमें") हमारी वेबसाइट के माध्यम से ऑर्डर किए गए उत्पादों की शिपिंग और डिलीवरी को कैसे संभालता है।
                            </>
                        )}
                    </p>

                    <h3>{language === 'english' ? "1. Processing Time" : "1. प्रसंस्करण समय"}</h3>
                    <p>
                        {language === 'english'
                            ? <>All orders are processed within <strong>2-3 business days</strong>. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.</>
                            : <>सभी ऑर्डर <strong>2-3 व्यावसायिक दिनों</strong> के भीतर संसाधित किए जाते हैं। सप्ताहांत या छुट्टियों पर ऑर्डर शिप या डिलीवर नहीं किए जाते हैं। यदि हमारे पास अत्यधिक ऑर्डर आ रहे हैं, तो शिपमेंट में कुछ दिनों की देरी हो सकती है। कृपया डिलीवरी के लिए पारगमन में अतिरिक्त दिनों की अनुमति दें।</>}
                    </p>

                    <h3>{language === 'english' ? "2. Shipping Rates & Delivery Estimates" : "2. शिपिंग दरें और वितरण अनुमान"}</h3>
                    <p>
                        {language === 'english'
                            ? "Shipping charges for your order will be calculated and displayed at checkout."
                            : "आपके ऑर्डर के लिए शिपिंग शुल्क की गणना चेकआउट पर की जाएगी और प्रदर्शित की जाएगी।"}
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            {language === 'english'
                                ? <><strong>Standard Shipping:</strong> Estimated delivery time is <strong>5-7 business days</strong> depending on your location.</>
                                : <><strong>मानक शिपिंग:</strong> आपके स्थान के आधार पर अनुमानित डिलीवरी समय <strong>5-7 व्यावसायिक दिन</strong> है।</>}
                        </li>
                        <li>
                            {language === 'english'
                                ? "Delivery delays can occasionally occur due to unforeseen circumstances or courier delays."
                                : "अप्रत्याशित परिस्थितियों या कूरियर देरी के कारण कभी-कभी डिलीवरी में देरी हो सकती है।"}
                        </li>
                    </ul>

                    <h3>{language === 'english' ? "3. Shipment Confirmation & Order Tracking" : "3. शिपमेंट की पुष्टि और ऑर्डर ट्रैकिंग"}</h3>
                    <p>
                        {language === 'english'
                            ? "You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours."
                            : "आपका ऑर्डर शिप होने के बाद आपको एक शिपमेंट पुष्टिकरण ईमेल प्राप्त होगा जिसमें आपका ट्रैकिंग नंबर होगा। ट्रैकिंग नंबर 24 घंटे के भीतर सक्रिय हो जाएगा।"}
                    </p>

                    <h3>{language === 'english' ? "4. Customs, Duties and Taxes" : "4. सीमा शुल्क, शुल्क और कर"}</h3>
                    <p>
                        {language === 'english' ? (
                            <>
                                <strong>{t.header.organizationName}</strong> is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
                            </>
                        ) : (
                            <>
                                <strong>{t.header.organizationName}</strong> आपके ऑर्डर पर लागू होने वाले किसी भी सीमा शुल्क और करों के लिए जिम्मेदार नहीं है। शिपिंग के दौरान या बाद में लगाए गए सभी शुल्क ग्राहक (टैरिफ, कर, आदि) की जिम्मेदारी हैं।
                            </>
                        )}
                    </p>

                    <h3>{language === 'english' ? "5. Damages" : "5. नुकसान"}</h3>
                    <p>
                        {language === 'english' ? (
                            <>
                                <strong>{t.header.organizationName}</strong> is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.
                            </>
                        ) : (
                            <>
                                <strong>{t.header.organizationName}</strong> शिपिंग के दौरान क्षतिग्रस्त या खोए गए किसी भी उत्पाद के लिए उत्तरदायी नहीं है। यदि आपको अपना ऑर्डर क्षतिग्रस्त मिला है, तो कृपया दावा दायर करने के लिए शिपमेंट वाहक से संपर्क करें। दावा दायर करने से पहले कृपया सभी पैकेजिंग सामग्री और क्षतिग्रस्त सामान सुरक्षित रखें।
                            </>
                        )}
                    </p>

                    <h3>{language === 'english' ? "6. Contact Us" : "6. संपर्क करें"}</h3>
                    <p>
                        {language === 'english' ? "If you have any questions about our Shipping Policy, please contact us at:" : "यदि हमारी शिपिंग नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:"} <br />
                        <strong>{language === 'english' ? "Email:" : "ईमेल:"}</strong> raamnaambank@gmail.com
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ShippingPolicy;
