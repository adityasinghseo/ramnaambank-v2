import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet-async";
import { Loader2, LogOut, User as UserIcon, MapPin } from "lucide-react";
import { Address } from "../types";
import { OrderList } from "../components/OrderList";

const addressSchema = z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    address_1: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    postcode: z.string().min(6, "Valid Pincode is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email is required"),
});

type AddressFormValues = z.infer<typeof addressSchema>;

export default function ProfilePage() {
    const { user, logout, updateProfile, isLoading: authLoading } = useAuth();
    const navigate = useNavigate();
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (!authLoading && !user) {
            navigate("/login");
        }
    }, [user, authLoading, navigate]);

    const form = useForm<AddressFormValues>({
        resolver: zodResolver(addressSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            address_1: "",
            city: "",
            state: "",
            postcode: "",
            phone: "",
            email: "",
        },
    });

    // Reset form when user loads
    useEffect(() => {
        if (user && user.billing) {
            form.reset({
                first_name: user.billing.first_name || user.first_name || "",
                last_name: user.billing.last_name || user.last_name || "",
                address_1: user.billing.address_1 || "",
                city: user.billing.city || "",
                state: user.billing.state || "",
                postcode: user.billing.postcode || "",
                phone: user.billing.phone || "",
                email: user.billing.email || user.email || "",
            });
        }
    }, [user, form]);

    const onSaveAddress = async (data: AddressFormValues) => {
        setIsSaving(true);
        try {
            const addressData: Address = {
                first_name: data.first_name,
                last_name: data.last_name,
                address_1: data.address_1,
                city: data.city,
                state: data.state,
                postcode: data.postcode,
                email: data.email,
                phone: data.phone,
                country: 'IN',
            };

            await updateProfile({
                billing: addressData,
                shipping: addressData
            });
        } finally {
            setIsSaving(false);
        }
    };

    if (authLoading || !user) {
        return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Helmet>
                <title>My Profile - Shri Ram Naam Vishwa Bank</title>
            </Helmet>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="md:w-1/4">
                        <Card>
                            <CardContent className="p-6 flex flex-col items-center space-y-4">
                                <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <UserIcon className="h-10 w-10" />
                                </div>
                                <div className="text-center">
                                    <h2 className="font-bold text-xl">{user.first_name} {user.last_name}</h2>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                </div>
                                <Button variant="outline" className="w-full text-red-500 hover:text-red-700 hover:bg-red-50" onClick={logout}>
                                    <LogOut className="mr-2 h-4 w-4" /> Logout
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="md:w-3/4">
                        <Tabs defaultValue="address" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="address">Address Book</TabsTrigger>
                                <TabsTrigger value="orders">My Orders</TabsTrigger>
                            </TabsList>
                            <TabsContent value="address">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <MapPin className="h-5 w-5" /> Billing & Shipping Address
                                        </CardTitle>
                                        <CardDescription>
                                            Update your address details for faster checkout.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(onSaveAddress)} className="space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <FormField
                                                        control={form.control}
                                                        name="first_name"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>First Name</FormLabel>
                                                                <FormControl><Input {...field} /></FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="last_name"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Last Name</FormLabel>
                                                                <FormControl><Input {...field} /></FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Email</FormLabel>
                                                            <FormControl><Input {...field} disabled /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="phone"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Phone</FormLabel>
                                                            <FormControl><Input {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="address_1"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Address</FormLabel>
                                                            <FormControl><Input {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <FormField
                                                        control={form.control}
                                                        name="city"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>City</FormLabel>
                                                                <FormControl><Input {...field} /></FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="state"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>State</FormLabel>
                                                                <FormControl><Input {...field} /></FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="postcode"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Pincode</FormLabel>
                                                                <FormControl><Input {...field} /></FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <Button type="submit" disabled={isSaving}>
                                                    {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                                    Save Address
                                                </Button>
                                            </form>
                                        </Form>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="orders">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Order History</CardTitle>
                                        <CardDescription>View your past orders.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <OrderList customerId={user.id} email={user.email} />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
