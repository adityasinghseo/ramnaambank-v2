export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    username: string;
    billing?: Address;
    shipping?: Address;
    avatar_url?: string;
    meta_data?: any[];
}

export interface Address {
    first_name: string;
    last_name: string;
    company?: string;
    address_1: string;
    address_2?: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    email?: string;
    phone?: string;
}

export interface AuthResponse {
    token: string;
    user_email: string;
    user_nicename: string;
    user_display_name: string;
}

export interface LoginCredentials {
    username: string; // or email
    password: string;
}

export interface SignupData {
    email: string;
    password?: string;
    first_name: string;
    last_name: string;
    username?: string;
}

export interface OrderItem {
    id: number;
    name: string;
    product_id: number;
    quantity: number;
    total: string;
}

export interface Order {
    id: number;
    status: string;
    date_created: string;
    total: string;
    line_items: OrderItem[];
    currency: string;
}
