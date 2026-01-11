export interface CheckoutFormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
}

export interface OrderItem {
    product_id: number;
    quantity: number;
}

export interface OrderPayload {
    payment_method: string;
    payment_method_title: string;
    set_paid: boolean;
    billing: {
        first_name: string;
        last_name: string;
        address_1: string;
        city: string;
        state: string;
        postcode: string;
        country: string;
        email: string;
        phone: string;
    };
    shipping: {
        first_name: string;
        last_name: string;
        address_1: string;
        city: string;
        state: string;
        postcode: string;
        country: string;
    };
    line_items: OrderItem[];
}
