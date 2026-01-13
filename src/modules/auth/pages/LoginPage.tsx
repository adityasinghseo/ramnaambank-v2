import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Loader2 } from "lucide-react";

const loginSchema = z.object({
    username: z.string().min(1, "Username or Email is required"),
    password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginFormValues) => {
        setIsLoading(true);
        try {
            await login({ username: data.username, password: data.password });
            navigate("/profile");
        } catch (error) {
            // Error handled in context
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Helmet>
                <title>Login - Shri Ram Naam Vishwa Bank</title>
                <meta name="description" content="Login to your account." />
            </Helmet>
            <Header />
            <main className="flex-grow flex items-center justify-center p-4">
                <Card className="w-full max-w-md shadow-lg">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center text-primary">Sign In</CardTitle>
                        <CardDescription className="text-center">
                            Enter your credentials to access your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username or Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="name@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="••••••••" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="text-right">
                                    <Link
                                        to="/forgot-password"
                                        className="text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-colors"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                                <Button className="w-full" type="submit" disabled={isLoading}>
                                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Sign In
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2 text-center">
                        <div className="text-sm text-muted-foreground">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-primary hover:underline font-medium">
                                Sign up
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
