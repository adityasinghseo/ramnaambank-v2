import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

import { useAuth } from "@/modules/auth/context/authContext";
import { useCartStore } from "@/modules/shop/context/cartStore";
import { createOrder, verifyPayment } from "../services/orderService";
import { CheckoutFormData } from "../types";
import { BillingForm } from "../components/BillingForm";
import { OrderSummary } from "../components/OrderSummary";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const formSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    phone: z.string().regex(/^[0-9]{10}$/, "Invalid phone number (10 digits)"),
    email: z.string().email("Invalid email address"),
    address: z.string().min(5, "Address is too short"),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    pincode: z.string().regex(/^[0-9]{6}$/, "Invalid pincode (6 digits)"),
});

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const CheckoutPage = () => {
    const navigate = useNavigate();
    const { items, clearCart } = useCartStore();
    const { user } = useAuth();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<'cod' | 'online'>('cod');
    const { language } = useLanguage();
    const { t } = useTranslation();

    // ... existing hook logic ...
    const form = useForm<CheckoutFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            city: "",
            state: "",
            pincode: "",
        },
    });

    useEffect(() => {
        if (user) {
            form.reset({
                firstName: user.billing?.first_name || user.first_name || "",
                lastName: user.billing?.last_name || user.last_name || "",
                email: user.billing?.email || user.email || "",
                phone: user.billing?.phone || "",
                address: user.billing?.address_1 || "",
                city: user.billing?.city || "",
                state: user.billing?.state || "",
                pincode: user.billing?.postcode || "",
            });
        }
    }, [user, form]);

    const onSubmit = async (data: CheckoutFormData) => {
        if (items.length === 0) {
            toast.error("Your cart is empty");
            return;
        }

        setIsSubmitting(true);

        try {
            // 1. Create Order (Status: Pending Payment)
            // We set 'set_paid' to false for both scenarios initially.
            // For COD, the backend might handle status, but 'pending' is safe.
            const orderPayload = {
                ...createPayload(data, items),
                payment_method: paymentMethod === 'online' ? "razorpay" : "cod",
                payment_method_title: paymentMethod === 'online' ? "Online Payment" : "Cash on Delivery",
                set_paid: false,
            };

            const response = await createOrder(orderPayload);

            if (!response || !response.id) {
                throw new Error("Invalid order response");
            }

            if (paymentMethod === 'online') {
                // Initialize Razorpay
                const options = {
                    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                    amount: response.total ? Math.round(parseFloat(response.total) * 100) : 0, // Amount in paise
                    currency: "INR",
                    name: "Shri Ram Naam Vishwa Bank",
                    description: `Order #${response.id}`,
                    image: "/logo.png", // Ensure you have a logo at this path or use a remote URL
                    order_id: "", // We are not creating a Razorpay Order ID from backend yet to keep it simple, but recommended for production.

                    handler: async function (razorpayResponse: any) {
                        // Verify and Update Order in WooCommerce (using 'response' from outer scope which is the WC Order)
                        const toastId = toast.loading("Verifying Payment...");

                        try {
                            const paymentId = razorpayResponse.razorpay_payment_id;
                            await verifyPayment(response.id, paymentId);

                            toast.success("Payment Successful! Order placed.", { id: toastId });
                            clearCart();
                            navigate("/order-success");
                        } catch (err: any) {
                            console.error("Payment verification failed", err);
                            const errorMessage = err.response?.data?.message || err.message || "Unknown error";
                            toast.error(`Payment verification failed: ${errorMessage}`, { id: toastId });
                        }
                    },
                    prefill: {
                        name: `${data.firstName} ${data.lastName}`,
                        email: data.email,
                        contact: data.phone,
                    },
                    notes: {
                        address: `${data.address}, ${data.city}, ${data.state}, ${data.pincode}`
                    },
                    theme: {
                        color: "#F97316", // Primary color (orange)
                    },
                };

                // Load Razorpay Script dynamically if not present
                const loadRazorpay = () => {
                    return new Promise((resolve) => {
                        const script = document.createElement("script");
                        script.src = "https://checkout.razorpay.com/v1/checkout.js";
                        script.onload = () => resolve(true);
                        script.onerror = () => resolve(false);
                        document.body.appendChild(script);
                    });
                };

                const isLoaded = await loadRazorpay();
                if (!isLoaded) {
                    toast.error("Razorpay SDK failed to load. Are you online?");
                    setIsSubmitting(false);
                    return;
                }

                const rzp1 = new (window as any).Razorpay(options);
                rzp1.on('payment.failed', function (response: any) {
                    toast.error(`Payment Failed: ${response.error.description}`);
                    setIsSubmitting(false);
                });

                rzp1.open();
                // We keep isSubmitting true until payment handler closes or succeeds
                // But if they close modal without paying? Handle that:
                // Razorpay doesn't have a specific "close" event easily accessible in all versions without custom UI.
                // For now, we rely on the user to try again or payment.failed.

            } else {
                // COD FLOW
                clearCart();
                toast.success("Order placed successfully");
                navigate("/order-success");
            }

        } catch (error: any) {
            console.error(error);
            // Better Error Handling
            const msg = error.response?.data?.message || error.message || "Failed to place order.";
            toast.error(`Order Failed: ${msg}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Helper to construct payload
    const createPayload = (data: CheckoutFormData, items: any[]) => ({
        customer_id: user?.id || 0,
        billing: {
            first_name: data.firstName,
            last_name: data.lastName,
            address_1: data.address,
            city: data.city,
            state: data.state,
            postcode: data.pincode,
            country: "IN",
            email: data.email,
            phone: data.phone,
        },
        shipping: {
            first_name: data.firstName,
            last_name: data.lastName,
            address_1: data.address,
            city: data.city,
            state: data.state,
            postcode: data.pincode,
            country: "IN",
            shipping_class: "",
            shipping_class_id: 0,
            priority: 0,
            workflow_id: ""
        },
        line_items: items.map((item) => ({
            product_id: item.id,
            quantity: item.quantity,
        })),
    });

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>{language === 'english' ? "Checkout" : "चेकआउट"} - {t.header.organizationName}</title>
                <meta name="description" content={language === 'english' ? "Secure checkout for Shri Ram Naam Vishwa Bank store." : "श्री राम नाम विश्व बैंक स्टोर के लिए सुरक्षित चेकआउट।"} />
            </Helmet>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center text-primary-800">
                    {language === 'english' ? "Checkout" : "चेकआउट"}
                </h1>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Column: Billing Details */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border">
                                    <h2 className="text-xl font-semibold mb-4">Billing & Shipping Details</h2>
                                    <BillingForm />
                                </div>

                                {/* Payment Method Selection */}
                                <div className="bg-white p-6 rounded-lg shadow-sm border">
                                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                                    <div className="space-y-4">
                                        <div onClick={() => setPaymentMethod('cod')} className={`cursor-pointer p-4 border rounded-lg flex items-center gap-4 transition-colors ${paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'hover:border-primary/50'}`}>
                                            <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${paymentMethod === 'cod' ? 'border-primary' : 'border-gray-400'}`}>
                                                {paymentMethod === 'cod' && <div className="h-2 w-2 rounded-full bg-primary" />}
                                            </div>
                                            <div>
                                                <h3 className="font-medium">Cash on Delivery (COD)</h3>
                                                <p className="text-sm text-gray-500">Pay securely when your order arrives.</p>
                                            </div>
                                        </div>

                                        <div onClick={() => setPaymentMethod('online')} className={`cursor-pointer p-4 border rounded-lg flex items-center gap-4 transition-colors ${paymentMethod === 'online' ? 'border-primary bg-primary/5' : 'hover:border-primary/50'}`}>
                                            <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${paymentMethod === 'online' ? 'border-primary' : 'border-gray-400'}`}>
                                                {paymentMethod === 'online' && <div className="h-2 w-2 rounded-full bg-primary" />}
                                            </div>
                                            <div>
                                                <h3 className="font-medium">Online Payment</h3>
                                                <p className="text-sm text-gray-500">Pay via UPI, Cards, NetBanking (Simulated).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-24 space-y-6">
                                    <OrderSummary />

                                    <Button
                                        type="submit"
                                        className="w-full text-lg py-6"
                                        disabled={isSubmitting || items.length === 0}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Placing Order...
                                            </>
                                        ) : (
                                            paymentMethod === 'online' ? "Place Order (Online)" : "Place Order (COD)"
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </Form>
            </main>
            <Footer />
        </div>
    );
};

export default CheckoutPage;
