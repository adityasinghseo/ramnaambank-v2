import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Product } from "../types";
import { fetchProducts } from "../services/wooService";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useCartStore } from "../context/cartStore";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";
import { useWishlistStore } from "../context/wishlistStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShopPage() {
    const { data: products, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetchProducts(),
    });

    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = (product: Product) => {
        addToCart(product);
        toast.success("Product added to cart", {
            duration: 2500,
            dismissible: true,
        });
    };

    if (isLoading) {
        return (
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-6 text-primary">Shop</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex flex-col space-y-3">
                            <Skeleton className="h-[300px] w-full rounded-xl" />
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="p-8 text-center text-red-500">Error loading products. Please try again later.</div>;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="container mx-auto py-12 px-4 flex-grow">
                <Helmet>
                    <title>Ram Naam Shop - Spiritual Merch & Books</title>
                    <meta name="description" content="Explore our collection of spiritual books, merch, and ram naam writing accessories." />
                </Helmet>
                <h1 className="text-4xl font-bold mb-8 text-center text-primary font-heading">Ram Naam Shop</h1>

                {(!products || products.length === 0) ? (
                    <p className="text-center text-gray-500">No products found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        <ProductGrid products={products} handleAddToCart={handleAddToCart} />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

// Sub-component to handle hooks inside loop cleanly
const ProductGrid = ({ products, handleAddToCart }: { products: Product[], handleAddToCart: (p: Product) => void }) => {
    const { addItem, removeItem, isInWishlist } = useWishlistStore();

    return (
        <>
            {products.map((product) => {
                const hasSale = product.sale_price && product.sale_price !== "";
                const inWishlist = isInWishlist(product.id);
                return (
                    <Card key={product.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 relative group">
                        <button
                            onClick={() => {
                                if (inWishlist) {
                                    removeItem(product.id);
                                    toast.info("Removed from wishlist");
                                } else {
                                    addItem(product);
                                    toast.success("Added to wishlist");
                                }
                            }}
                            className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors"
                        >
                            <Heart className={`h-5 w-5 ${inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
                        </button>
                        <CardHeader className="p-0">
                            <Link to={`/product/${product.slug}`} className="block overflow-hidden rounded-t-lg">
                                <div className="w-full aspect-[4/3] bg-gray-100 relative">
                                    {product.images && product.images.length > 0 ? (
                                        <img
                                            src={product.images[0].src}
                                            alt={product.images[0].alt || product.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 absolute inset-0"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                            No Image
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </CardHeader>
                        <CardContent className="flex-grow p-4 flex flex-col items-center text-center">
                            <Link to={`/product/${product.slug}`} className="w-full">
                                <CardTitle className="text-lg font-semibold mb-2 hover:text-primary transition-colors line-clamp-2 h-14 flex items-center justify-center">
                                    {product.name}
                                </CardTitle>
                            </Link>

                            <div className="mt-2 text-lg">
                                {hasSale ? (
                                    <div className="flex items-center gap-2 justify-center">
                                        <span className="text-gray-400 line-through text-base">₹{parseFloat(product.regular_price).toLocaleString()}</span>
                                        <span className="font-bold text-primary text-xl">₹{parseFloat(product.price).toLocaleString()}</span>
                                    </div>
                                ) : (
                                    <span className="font-bold text-primary text-xl">₹{parseFloat(product.price).toLocaleString()}</span>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 mt-auto">
                            <Button
                                className="w-full gap-2"
                                onClick={() => handleAddToCart(product)}
                            >
                                <ShoppingCart className="h-4 w-4" /> Add to Cart
                            </Button>
                        </CardFooter>
                    </Card>
                );
            })}
        </>
    );
};
