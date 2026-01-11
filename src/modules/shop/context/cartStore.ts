import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, Product } from '../types';

interface CartState {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    restoreCart: (items: CartItem[]) => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addToCart: (product) => {
                const { items } = get();
                const existingItem = items.find((item) => item.id === product.id);

                if (existingItem) {
                    set({
                        items: items.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                } else {
                    set({ items: [...items, { ...product, quantity: 1 }] });
                }
            },
            removeFromCart: (productId) => {
                set({ items: get().items.filter((item) => item.id !== productId) });
            },
            updateQuantity: (productId, quantity) => {
                if (quantity < 1) {
                    get().removeFromCart(productId);
                    return;
                }
                set({
                    items: get().items.map((item) =>
                        item.id === productId ? { ...item, quantity } : item
                    ),
                });
            },
            clearCart: () => set({ items: [] }),
            restoreCart: (newItems) => {
                const { items } = get();
                const mergedItems = [...items];
                newItems.forEach(newItem => {
                    const existingIndex = mergedItems.findIndex(i => i.id === newItem.id);
                    if (existingIndex > -1) {
                        // Merge strategy: Sum quantities
                        mergedItems[existingIndex].quantity += newItem.quantity;
                    } else {
                        mergedItems.push(newItem);
                    }
                });
                set({ items: mergedItems });
            },
        }),
        {
            name: 'shopping-cart-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
