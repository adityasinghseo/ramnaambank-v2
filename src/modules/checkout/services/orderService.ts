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

export const getOrdersByCustomer = async (customerId: number) => {
    try {
        const response = await api.get('/orders', {
            params: {
                customer: customerId,
                per_page: 50, // Increased limit
                consumer_key: CONSUMER_KEY,
                consumer_secret: CONSUMER_SECRET,
                _t: new Date().getTime(), // Cache buster
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching customer orders:', error);
        throw error;
    }
};
