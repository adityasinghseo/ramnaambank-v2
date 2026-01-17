import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/modules/shop/context/cartStore";
import { useLanguage } from "@/contexts/LanguageContext";

export const OrderSummary = () => {
    const { items } = useCartStore();
    const { language } = useLanguage();

    const total = items.reduce(
        (sum, item) => sum + parseFloat(item.price || "0") * item.quantity,
        0
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    {items.map((item) => {
                        const displayName = (language === 'english' && item.acf?.english_title)
                            ? item.acf.english_title
                            : item.name;

                        return (
                            <div key={item.id} className="flex justify-between items-center text-sm">
                                <span className="flex-1">
                                    {displayName} <span className="text-gray-500">x {item.quantity}</span>
                                </span>
                                <span className="font-medium">₹{parseFloat(item.price).toFixed(2)}</span>
                            </div>
                        );
                    })}
                </div>

                <Separator />

                <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                </div>

                <div className="text-xs text-gray-500 mt-2">
                    * Cash on Delivery (COD) only using standard shipping.
                </div>
            </CardContent>
        </Card>
    );
};
