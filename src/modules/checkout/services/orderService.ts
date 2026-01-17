import axios from 'axios';
import { OrderPayload } from '../types';

const WC_API_URL = import.meta.env.VITE_WC_API;
const CONSUMER_KEY = import.meta.env.VITE_WC_CONSUMER_KEY;
const CONSUMER_SECRET = import.meta.env.VITE_WC_CONSUMER_SECRET;

const api = axios.create({
    baseURL: WC_API_URL,
});

export const createOrder = async (orderData: OrderPayload) => {
    try {
        const response = await api.post('/orders', orderData, {
            params: {
                consumer_key: CONSUMER_KEY,
                consumer_secret: CONSUMER_SECRET,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

export const getOrdersByCustomer = async (customerId: number, email?: string) => {
    try {
        const baseParams = {
            per_page: 50,
            status: 'any',
            consumer_key: CONSUMER_KEY,
            consumer_secret: CONSUMER_SECRET,
            _t: new Date().getTime(), // Cache buster
        };

        const requests = [
            api.get('/orders', {
                params: {
                    ...baseParams,
                    customer: customerId,
                },
            })
        ];

        // If email is provided, also search for orders by email (handles guest orders)
        if (email) {
            requests.push(
                api.get('/orders', {
                    params: {
                        ...baseParams,
                        search: email,
                    },
                })
            );
        }

        const responses = await Promise.all(requests);

        // Combine all orders from all responses
        const allOrders = responses.flatMap(response => response.data);

        // Deduplicate orders by ID
        const uniqueOrdersMap = new Map();
        allOrders.forEach((order: any) => {
            uniqueOrdersMap.set(order.id, order);
        });

        // Convert map back to array and sort by date (newest first)
        return Array.from(uniqueOrdersMap.values()).sort((a: any, b: any) =>
            new Date(b.date_created).getTime() - new Date(a.date_created).getTime()
        );

    } catch (error) {
        console.error('Error fetching customer orders:', error);
        throw error;
    }
};
