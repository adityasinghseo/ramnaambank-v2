import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const CancellationReturnPolicy = () => {
    const { t } = useTranslation();
    const { language } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>{language === 'english' ? "Cancellation & Refund Policy" : "रद्दीकरण और धनवापसी नीति"} - {t.header.organizationName}</title>
                <meta name="description" content={language === 'english' ? "Cancellation & Refund Policy of Shri Ram Naam Vishwa Bank Samiti." : "श्री राम नाम विश्व बैंक समिति की रद्दीकरण और धनवापसी नीति।"} />
            </Helmet>
            <Header />
            <div className="flex-grow container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-6 text-primary">
                    {language === 'english' ? "Cancellation & Refund Policy" : "रद्दीकरण और धनवापसी नीति"}
                </h1>
                <div className="prose max-w-none text-gray-700">
                    <p>
                        {language === 'english' ? (
                            <>
                                At <strong>{t.header.organizationName}</strong>, we strive to ensure your satisfaction with our products and services. Please read our cancellation and return policy carefully.
                            </>
                        ) : (
                            <>
                                <strong>{t.header.organizationName}</strong> में, हम अपने उत्पादों और सेवाओं के साथ आपकी संतुष्टि सुनिश्चित करने का प्रयास करते हैं। कृपया हमारी रद्दीकरण और वापसी नीति को ध्यान से पढ़ें।
                            </>
                        )}
                    </p>

                    <h3>{language === 'english' ? "1. Cancellation Policy" : "1. रद्दीकरण नीति"}</h3>
                    <p>
                        {language === 'english'
                            ? <><strong>Before Shipment:</strong> You may cancel your order at any time before it has been shipped. To cancel, please contact us immediately at <strong>raamnaambank@gmail.com</strong> with your order details. If the order is cancelled before shipment, a full refund will be initiated.</>
                            : <><strong>शिपमेंट से पहले:</strong> आप अपने ऑर्डर को शिप किए जाने से पहले किसी भी समय रद्द कर सकते हैं। रद्द करने के लिए, कृपया अपने ऑर्डर विवरण के साथ तुरंत <strong>raamnaambank@gmail.com</strong> पर हमसे संपर्क करें। यदि शिपमेंट से पहले ऑर्डर रद्द कर दिया जाता है, तो पूरा रिफंड शुरू कर दिया जाएगा।</>}
                    </p>
                    <p>
                        {language === 'english'
                            ? <><strong>After Shipment:</strong> Once an order has been shipped, it cannot be cancelled. You may refuse the delivery, and upon receiving the package back, we will process the refund after deducting shipping charges.</>
                            : <><strong>शिपमेंट के बाद:</strong> एक बार जब ऑर्डर शिप हो जाता है, तो उसे रद्द नहीं किया जा सकता है। आप डिलीवरी लेने से मना कर सकते हैं, और पैकेज वापस मिलने पर, हम शिपिंग शुल्क काटने के बाद रिफंड की प्रक्रिया शुरू करेंगे।</>}
                    </p>

                    <h3>{language === 'english' ? "2. Return & Exchange Policy" : "2. वापसी और विनिमय नीति"}</h3>
                    <p>
                        {language === 'english' ? "We accept returns or exchanges only under the following conditions:" : "हम केवल निम्नलिखित शर्तों के तहत रिटर्न या एक्सचेंज स्वीकार करते हैं:"}
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            {language === 'english' ? "The product received is damaged or defective." : "प्राप्त उत्पाद क्षतिग्रस्त या दोषपूर्ण है।"}
                        </li>
                        <li>
                            {language === 'english' ? "The wrong product was delivered." : "गलत उत्पाद वितरित किया गया था।"}
                        </li>
                    </ul>
                    <p>
                        {language === 'english'
                            ? "To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging."
                            : "वापसी के लिए पात्र होने के लिए, आपकी वस्तु अप्रयुक्त होनी चाहिए और उसी स्थिति में होनी चाहिए जिसमें आपने इसे प्राप्त किया था। यह मूल पैकेजिंग में भी होना चाहिए।"}
                    </p>
                    <p>
                        {language === 'english'
                            ? <>You must initiate a return request within <strong>7 days</strong> of receiving the product by emailing us.</>
                            : <>आपको उत्पाद प्राप्त होने के <strong>7 दिनों</strong> के भीतर हमें ईमेल करके वापसी अनुरोध शुरू करना होगा।</>}
                    </p>

                    <h3>{language === 'english' ? "3. Refund Policy" : "3. धनवापसी नीति"}</h3>
                    <p>
                        {language === 'english'
                            ? "Once your return is received and inspected, we will notify you of the approval or rejection of your refund."
                            : "एक बार जब आपका रिटर्न प्राप्त हो जाता है और निरीक्षण कर लिया जाता है, तो हम आपको आपके रिफंड की स्वीकृति या अस्वीकृति के बारे में सूचित करेंगे।"}
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            {language === 'english'
                                ? <>If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within <strong>5-7 business days</strong>.</>
                                : <>यदि स्वीकृत हो जाता है, तो आपका रिफंड संसाधित किया जाएगा, और <strong>5-7 व्यावसायिक दिनों</strong> के भीतर आपके भुगतान की मूल विधि पर क्रेडिट स्वचालित रूप से लागू कर दिया जाएगा।</>}
                        </li>
                        <li>
                            {language === 'english'
                                ? "Shipping costs are non-refundable. If you receive a refund, the cost of return shipping may be deducted from your refund unless the return is due to our error."
                                : "शिपिंग लागत गैर-वापसी योग्य है। यदि आपको रिफंड मिलता है, तो वापसी शिपिंग की लागत आपके रिफंड से काट ली जा सकती है जब तक कि वापसी हमारी गलती के कारण न हो।"}
                        </li>
                    </ul>

                    <h3>{language === 'english' ? "4. Contact Us" : "4. संपर्क करें"}</h3>
                    <p>
                        {language === 'english' ? "For any queries related to cancellations or returns, please contact us at:" : "रद्दीकरण या रिटर्न से संबंधित किसी भी प्रश्न के लिए, कृपया हमसे संपर्क करें:"} <br />
                        <strong>{language === 'english' ? "Email:" : "ईमेल:"}</strong> raamnaambank@gmail.com <br />
                        <strong>{language === 'english' ? "Phone:" : "फोन:"}</strong> +91-9045000108
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CancellationReturnPolicy;
