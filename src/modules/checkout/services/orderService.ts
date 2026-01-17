import axios from 'axios';
import { OrderPayload } from '../types';

const WC_API_URL = import.meta.env.VITE_WC_API;
const CONSUMER_KEY = import.meta.env.VITE_WC_CONSUMER_KEY;
const CONSUMER_SECRET = import.meta.env.VITE_WC_CONSUMER_SECRET;

// Use Proxy URL in development to bypass CORS
const isDev = import.meta.env.MODE === 'development';
const apiBaseUrl = isDev ? '/api-wc' : WC_API_URL;

const api = axios.create({
    baseURL: apiBaseUrl,
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

export const verifyPayment = async (orderId: number, paymentId: string) => {
    if (!orderId) {
        throw new Error("Invalid order ID: " + orderId);
    }
    console.log(`Verifying payment for Order ID: ${orderId}, Payment ID: ${paymentId}`);

    try {
        // Step 1: Update Status (Priority)
        // We use POST instead of PUT to avoid strict CORS/Firewall issues with PUT methods
        console.log(`Sending POST (Update) request to: /orders/${orderId}`);
        const updateResponse = await api.post(`/orders/${orderId}`, {
            status: 'processing',
            transaction_id: paymentId,
            set_paid: true
        }, {
            params: {
                consumer_key: CONSUMER_KEY,
                consumer_secret: CONSUMER_SECRET,
            },
        });

        // Step 2: Add Note (Optional, catch error inside so it doesn't fail the whole flow)
        try {
            await api.post(`/orders/${orderId}/notes`, {
                note: `Payment Successful via Razorpay. Payment ID: ${paymentId}`
            }, {
                params: {
                    consumer_key: CONSUMER_KEY,
                    consumer_secret: CONSUMER_SECRET,
                },
            });
        } catch (noteError) {
            console.warn("Failed to add order note, but order status updated:", noteError);
        }

        return updateResponse.data;
    } catch (error) {
        console.error('Error verifying payment:', error);
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
