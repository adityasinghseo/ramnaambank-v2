export interface Product {
    id: number;
    name: string;
    slug: string;
    permalink: string;
    price: string;
    regular_price: string;
    sale_price: string;
    images: { id: number; src: string; alt: string }[];
    description: string;
    short_description: string;
    categories: { id: number; name: string; slug: string }[];
    stock_status: string;
    price_html?: string;
    acf?: {
        english_title?: string;
        english_description?: string;
    };
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    count: number;
    image: { src: string } | null;
}

export interface CartItem extends Product {
    quantity: number;
}
