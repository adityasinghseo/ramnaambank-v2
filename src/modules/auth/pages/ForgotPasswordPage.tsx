import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Loader2, ArrowLeft, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Schema
const formSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof formSchema>;

const ForgotPasswordPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            // We will use a standard WP endpoint or custom one. 
            // Using the WP Lost Password endpoint is tricky in headless without a plugin.
            // So we will assume the user adds the custom snippet we provide.
            await axios.post(`${import.meta.env.VITE_WP_API}/rambank/v1/reset-password`, {
                email: data.email
            });

            setIsSent(true);
            toast.success("Password reset link sent to your email!");
        } catch (error: any) {
            console.error(error);
            const msg = error.response?.data?.message || "Something went wrong. Please try again.";
            toast.error(msg);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Helmet>
                <title>Reset Password - Shri Ram Naam Vishwa Bank</title>
            </Helmet>
            <Header />

            <main className="flex-grow flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-secondary font-hind mb-2">Password Reset</h1>
                        <p className="text-muted-foreground">
                            Enter your email to receive a password reset link.
                        </p>
                    </div>

                    {isSent ? (
                        <div className="text-center space-y-6 animate-fade-in">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                <Mail className="w-8 h-8 text-green-600" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900">Check your email</h3>
                                <p className="text-gray-600">
                                    We have sent a password reset link to <br />
                                    <span className="font-medium text-gray-900">{form.getValues("email")}</span>
                                </p>
                            </div>
                            <div className="pt-4">
                                <Link to="/login">
                                    <Button className="w-full" variant="outline">
                                        Back to Login
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your registered email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="w-full h-11 text-base gradient-devotional"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending Link...
                                        </>
                                    ) : (
                                        "Send Reset Link"
                                    )}
                                </Button>

                                <div className="text-center pt-4">
                                    <Link
                                        to="/login"
                                        className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors"
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Back to Login
                                    </Link>
                                </div>
                            </form>
                        </Form>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ForgotPasswordPage;
