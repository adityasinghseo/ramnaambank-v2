import { useEffect, useState } from "react";
import { Order } from "@/modules/auth/types";
import { getOrdersByCustomer } from "@/modules/checkout/services/orderService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Package } from "lucide-react";

interface OrderListProps {
    customerId: number;
    email?: string;
}

export const OrderList = ({ customerId, email }: OrderListProps) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await getOrdersByCustomer(customerId, email);
                setOrders(data);
            } catch (error) {
                console.error("Failed to fetch orders", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (customerId || email) {
            fetchOrders();
        }
    }, [customerId, email]);

    if (isLoading) {
        return <div className="flex justify-center p-8"><Loader2 className="animate-spin text-primary" /></div>;
    }

    if (orders.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                <Package className="h-12 w-12 mx-auto mb-2 opacity-20" />
                <p>No orders found.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {orders.map((order) => (
                <div key={order.id} className="border rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-sm transition-shadow">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">Order #{order.id}</h3>
                            <Badge variant={order.status === 'completed' ? 'default' : 'secondary'} className={order.status === 'completed' ? 'bg-green-600' : ''}>
                                {order.status}
                            </Badge>
                        </div>
                        <p className="text-sm text-gray-500">
                            {new Date(order.date_created).toLocaleDateString()}
                        </p>
                        <div className="mt-2 text-sm">
                            {order.line_items.map(item => (
                                <div key={item.id} className="text-gray-700">
                                    {item.quantity} x {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-lg">₹{order.total}</p>
                        <p className="text-xs text-gray-500">{order.currency}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
