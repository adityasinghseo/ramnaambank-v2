import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const OrderSuccessPage = () => {
    const { language } = useLanguage();
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>
                    {language === 'english' ? "Order Placed Successfully" : "ऑर्डर सफलतापूर्वक दिया गया"} - {t.header.organizationName}
                </title>
                <meta name="description" content={language === 'english' ? "Your order has been placed successfully." : "आपका ऑर्डर सफलतापूर्वक दिया गया है।"} />
            </Helmet>
            <Header />
            <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-xl shadow-lg">
                    <div className="flex justify-center">
                        <CheckCircle className="h-24 w-24 text-green-500" />
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        {language === 'english' ? "Order Placed Successfully!" : "ऑर्डर सफल रहा!"}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        {language === 'english' ? (
                            <>
                                Thank you for your purchase. Your order has been received and will be processed shortly.
                                Payment will be collected upon delivery (Cash on Delivery).
                            </>
                        ) : (
                            <>
                                आपकी खरीद के लिए धन्यवाद। आपका ऑर्डर प्राप्त हो गया है और जल्द ही उस पर कार्रवाई की जाएगी।
                                डिलीवरी पर भुगतान (कैश ऑन डिलीवरी) लिया जाएगा।
                            </>
                        )}
                    </p>
                    <div className="mt-8">
                        <Link to="/shop">
                            <Button className="w-full">
                                {language === 'english' ? "Continue Shopping" : "खरीदारी जारी रखें"}
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default OrderSuccessPage;
