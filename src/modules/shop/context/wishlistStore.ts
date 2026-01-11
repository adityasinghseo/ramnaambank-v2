import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types';

interface WishlistStore {
    items: Product[];
    addItem: (product: Product) => void;
    removeItem: (productId: number) => void;
    isInWishlist: (productId: number) => boolean;
    clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product) => {
                const { items } = get();
                if (!items.find((i) => i.id === product.id)) {
                    set({ items: [...items, product] });
                }
            },
            removeItem: (productId) => {
                const { items } = get();
                set({ items: items.filter((i) => i.id !== productId) });
            },
            isInWishlist: (productId) => {
                const { items } = get();
                return items.some((i) => i.id === productId);
            },
            clearWishlist: () => set({ items: [] }),
        }),
        {
            name: 'ram-wishlist-storage',
        }
    )
);
