import { Link } from "react-router-dom";
import { useWishlistStore } from "../context/wishlistStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCartStore } from "../context/cartStore";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

const WishlistPage = () => {
    const { items, removeItem } = useWishlistStore();
    const { addToCart } = useCartStore();

    const handleAddToCart = (item: any) => {
        addToCart(item); // item is already a Product
        toast.success("Added to cart");
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Helmet>
                <title>My Wishlist - Shri Ram Naam Vishwa Bank</title>
                <meta name="description" content="Your saved items for later." />
            </Helmet>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center text-primary-800 flex items-center justify-center gap-2">
                    <Heart className="h-8 w-8 text-primary fill-primary" /> My Wishlist
                </h1>

                {items.length === 0 ? (
                    <div className="text-center py-16">
                        <Heart className="h-20 w-20 text-gray-300 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your wishlist is empty</h2>
                        <p className="text-gray-500 mb-8">Save items you love here for later.</p>
                        <Link to="/products">
                            <Button size="lg">Start Shopping</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {items.map((item) => (
                            <Card key={item.id} className="flex flex-col h-full group hover:shadow-lg transition-all duration-300">
                                <CardHeader className="p-0 overflow-hidden relative">
                                    <div className="aspect-square w-full overflow-hidden bg-gray-100">
                                        <img
                                            src={item.images?.[0]?.src || "https://placehold.co/300x300?text=No+Image"}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={() => {
                                            removeItem(item.id);
                                            toast("Item removed from wishlist");
                                        }}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </CardHeader>
                                <CardContent className="flex-grow p-4 text-center">
                                    <Link to={`/products/${item.slug}`} className="hover:text-primary transition-colors">
                                        <CardTitle className="line-clamp-2 text-lg mb-2 h-14 flex items-center justify-center">
                                            {item.name}
                                        </CardTitle>
                                    </Link>
                                    <div className="mt-2 text-lg">
                                        {(item.sale_price && item.sale_price !== "") ? (
                                            <div className="flex items-center gap-2 justify-center">
                                                <span className="text-gray-400 line-through text-base">₹{parseFloat(item.regular_price).toLocaleString()}</span>
                                                <span className="font-bold text-primary text-xl">₹{parseFloat(item.price).toLocaleString()}</span>
                                            </div>
                                        ) : (
                                            <span className="font-bold text-primary text-xl">₹{parseFloat(item.price).toLocaleString()}</span>
                                        )}
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <Button className="w-full" onClick={() => handleAddToCart(item)}>
                                        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default WishlistPage;
