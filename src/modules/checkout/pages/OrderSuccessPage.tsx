import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OrderSuccessPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>Order Placed Successfully - Shri Ram Naam Vishwa Bank</title>
                <meta name="description" content="Your order has been placed successfully." />
            </Helmet>
            <Header />
            <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-xl shadow-lg">
                    <div className="flex justify-center">
                        <CheckCircle className="h-24 w-24 text-green-500" />
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Order Placed Successfully!
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Thank you for your purchase. Your order has been received and will be processed shortly.
                        Payment will be collected upon delivery (Cash on Delivery).
                    </p>
                    <div className="mt-8">
                        <Link to="/shop">
                            <Button className="w-full">
                                Continue Shopping
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
