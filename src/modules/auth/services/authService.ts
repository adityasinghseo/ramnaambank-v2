import axios from 'axios';
import { LoginCredentials, SignupData, User, AuthResponse } from '../types';

const WP_API_URL = import.meta.env.VITE_WP_API; // Needed for JWT Auth
const WC_API_URL = import.meta.env.VITE_WC_API;
const CONSUMER_KEY = import.meta.env.VITE_WC_CONSUMER_KEY;
const CONSUMER_SECRET = import.meta.env.VITE_WC_CONSUMER_SECRET;

const api = axios.create({
    baseURL: WC_API_URL,
});

// For JWT Auth (Plugin required on WP)
const wpApi = axios.create({
    baseURL: WP_API_URL,
});

export const login = async (credentials: LoginCredentials): Promise<{ token: string; user: User }> => {
    try {
        // 1. Get Token
        const { data: authData } = await wpApi.post<AuthResponse>('/jwt-auth/v1/token', credentials);

        // 2. Get User Details
        const user = await getCustomerByEmail(authData.user_email);

        if (!user) {
            throw new Error('User found in WP but no Customer record in WC.');
        }

        return {
            token: authData.token,
            user,
        };
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

export const signup = async (data: SignupData): Promise<User> => {
    try {
        const response = await api.post('/customers', data, {
            params: {
                consumer_key: CONSUMER_KEY,
                consumer_secret: CONSUMER_SECRET,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Signup failed:', error);
        throw error;
    }
};

export const getCustomerByEmail = async (email: string): Promise<User | null> => {
    try {
        const response = await api.get('/customers', {
            params: {
                email,
                role: 'all',
                consumer_key: CONSUMER_KEY,
                consumer_secret: CONSUMER_SECRET,
            },
        });

        if (response.data && response.data.length > 0) {
            return response.data[0];
        }
        return null;
    } catch (error) {
        console.error('Error fetching customer:', error);
        throw error;
    }
};

export const getCustomerById = async (id: number): Promise<User> => {
    try {
        const response = await api.get(`/customers/${id}`, {
            params: {
                consumer_key: CONSUMER_KEY,
                consumer_secret: CONSUMER_SECRET,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching customer:', error);
        throw error;
    }
};

export const updateCustomer = async (id: number, data: Partial<User>): Promise<User> => {
    try {
        const response = await api.put(`/customers/${id}`, data, {
            params: {
                consumer_key: CONSUMER_KEY,
                consumer_secret: CONSUMER_SECRET,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating customer:', error);
        throw error;
    }
}
