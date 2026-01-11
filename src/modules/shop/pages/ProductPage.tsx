import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { fetchProductBySlug } from "../services/wooService";
import { useCartStore } from "../context/cartStore";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useWishlistStore } from "../context/wishlistStore";
import { Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductPage() {
    const { slug } = useParams<{ slug: string }>();
    const addToCart = useCartStore((state) => state.addToCart);

    const { data: product, isLoading, error } = useQuery({
        queryKey: ['product', slug],
        queryFn: () => {
            if (!slug) throw new Error("Product slug is required");
            return fetchProductBySlug(slug);
        },
        enabled: !!slug,
    });

    const handleAddToCart = () => {
        if (product) {
            addToCart(product);
            toast.success("Product added to cart!");
        }
    };

    if (isLoading) {
        return (
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Skeleton className="h-[400px] w-full rounded-xl" />
                    <div className="space-y-4">
                        <Skeleton className="h-8 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-10 w-1/3" />
                    </div>
                </div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="container mx-auto py-12 px-4 text-center">
                <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
                <p>The product you are looking for does not exist or has been removed.</p>
            </div>
        );
    }

    const hasSale = product.sale_price && product.sale_price !== "";

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="container mx-auto py-12 px-4 flex-grow">
                <Helmet>
                    <title>{product.name} - Ram Naam Shop</title>
                    <meta name="description" content={product.short_description || `Buy ${product.name} online.`} />
                </Helmet>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="rounded-xl overflow-hidden border bg-white p-4 shadow-sm">
                        {product.images && product.images.length > 0 ? (
                            <img
                                src={product.images[0].src}
                                alt={product.images[0].alt || product.name}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                        ) : (
                            <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center text-gray-400">
                                No Image Available
                            </div>
                        )}
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                            <div className="flex items-center gap-3">
                                {hasSale ? (
                                    <>
                                        <span className="text-2xl text-gray-400 line-through">
                                            ₹{parseFloat(product.regular_price).toLocaleString()}
                                        </span>
                                        <span className="text-3xl font-bold text-primary">
                                            ₹{parseFloat(product.price).toLocaleString()}
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-3xl font-bold text-primary">
                                        ₹{parseFloat(product.price).toLocaleString()}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div
                            className="prose prose-sm max-w-none text-gray-600"
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        />

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="flex-1 gap-2" onClick={handleAddToCart}>
                                <ShoppingCart className="h-5 w-5" /> Add into Cart
                            </Button>
                            <WishlistButton product={product} />
                        </div>

                        <div className="text-sm text-gray-500 py-4 border-t">
                            <p>Category: {product.categories?.map(c => c.name).join(', ') || 'Uncategorized'}</p>
                            <p className="flex items-center gap-1 mt-1">
                                Availability:
                                <span className={product.stock_status === 'instock' ? 'text-green-600 font-medium flex items-center' : 'text-red-600'}>
                                    {product.stock_status === 'instock' ? <><Check className="h-3 w-3 mr-1" /> In Stock</> : 'Out of Stock'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

const WishlistButton = ({ product }: { product: any }) => {
    const { addItem, removeItem, isInWishlist } = useWishlistStore();
    const isWishlisted = isInWishlist(product.id);

    const toggleWishlist = () => {
        if (isWishlisted) {
            removeItem(product.id);
            toast.info("Removed from wishlist");
        } else {
            addItem(product);
            toast.success("Added to wishlist");
        }
    };

    return (
        <Button
            size="lg"
            variant="outline"
            className={`gap-2 ${isWishlisted ? 'border-primary text-primary bg-primary/5' : ''}`}
            onClick={toggleWishlist}
        >
            <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-primary' : ''}`} />
            {isWishlisted ? "Saved to Wishlist" : "Add to Wishlist"}
        </Button>
    );
};
