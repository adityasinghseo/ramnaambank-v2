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
import { createOrder } from "../services/orderService";
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

const CheckoutPage = () => {
    const navigate = useNavigate();
    const { items, clearCart } = useCartStore();
    const { user } = useAuth();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<'cod' | 'online'>('cod');

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
            if (paymentMethod === 'online') {
                // SIMULATED PAYMENT FLOW
                // In a real scenario, you would create an order first, get an ID, then open Razorpay/Stripe.
                // Upon success, you verify signature and update order status.

                // For this demo: We pretend to create order pending payment, then complete it.
                await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate processing

                // Create Paid Order
                await createOrder({
                    ...createPayload(data, items),
                    payment_method: "razorpay",
                    payment_method_title: "Online Payment (Razorpay)",
                    set_paid: true, // Mark as paid
                });

                clearCart();
                toast.success("Payment Successful! Order placed.");
                navigate("/order-success");

            } else {
                // COD FLOW
                await createOrder({
                    ...createPayload(data, items),
                    payment_method: "cod",
                    payment_method_title: "Cash on Delivery",
                    set_paid: false,
                });

                clearCart();
                toast.success("Order placed successfully");
                navigate("/order-success");
            }

        } catch (error) {
            console.error(error);
            toast.error("Failed to place order. Please try again.");
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
        },
        line_items: items.map((item) => ({
            product_id: item.id,
            quantity: item.quantity,
        })),
    });

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>Checkout - Shri Ram Naam Vishwa Bank</title>
                <meta name="description" content="Secure checkout for Shri Ram Naam Vishwa Bank store. Complete your purchase with Cash on Delivery." />
            </Helmet>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center text-primary-800">Checkout</h1>

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
                                            "Place Order (COD)"
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
