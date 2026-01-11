import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartStore } from "../context/cartStore";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

export default function ShopFloatingCart() {
    const { items, updateQuantity, removeFromCart } = useCartStore();
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const navigate = useNavigate();

    const subtotal = items.reduce((acc, item) => {
        // Basic price parsing, assumes price is string like "100" or "100.00"
        // If strict HTML provided (unlikely in raw price field but possible in price_html), this might flop.
        // relying on 'price' field being a numeric string as per standard WC REST API
        return acc + (parseFloat(item.price) || 0) * item.quantity;
    }, 0);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    size="icon"
                    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-xl bg-primary hover:bg-primary/90 text-white"
                >
                    <div className="relative">
                        <ShoppingCart className="h-6 w-6" />
                        {totalItems > 0 && (
                            <span className="absolute -top-3 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold">
                                {totalItems}
                            </span>
                        )}
                    </div>
                </Button>
            </SheetTrigger>
            <SheetContent className="w-[90%] sm:w-[400px] flex flex-col">
                <SheetHeader>
                    <SheetTitle>Your Cart ({totalItems})</SheetTitle>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                        <ShoppingCart className="h-12 w-12 text-gray-300" />
                        <p className="text-gray-500">Your cart is empty</p>
                    </div>
                ) : (
                    <>
                        <ScrollArea className="flex-1 -mx-6 px-6 my-4">
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border bg-gray-100">
                                            {item.images && item.images.length > 0 ? (
                                                <img
                                                    src={item.images[0].src}
                                                    alt={item.images[0].alt}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex bg-gray-200 w-full h-full items-center justify-center text-xs">No Img</div>
                                            )}
                                        </div>

                                        <div className="flex flex-1 flex-col">
                                            <span className="font-medium text-sm line-clamp-2">{item.name}</span>
                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="font-semibold text-sm">₹{item.price}</span>

                                                <div className="flex items-center space-x-2">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-6 w-6"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </Button>
                                                    <span className="text-xs w-4 text-center">{item.quantity}</span>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-6 w-6"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="h-6 w-6 text-red-500 hover:text-red-600 hover:bg-red-50"
                                                    >
                                                        <Trash2 className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="border-t pt-4 space-y-4">
                            <div className="flex justify-between font-medium">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="text-xs text-gray-500 text-center">
                                Shipping and taxes calculated at checkout.
                            </div>
                            <SheetClose asChild>
                                <Button className="w-full" onClick={() => navigate("/checkout")}>
                                    Checkout
                                </Button>
                            </SheetClose>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
