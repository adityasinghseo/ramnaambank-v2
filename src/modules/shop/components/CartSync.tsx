import { useEffect, useRef } from 'react';
import { useCartStore } from '../context/cartStore';
import { useAuth } from '@/modules/auth/context/authContext';
import { updateCustomer } from '@/modules/auth/services/authService';

const CartSync = () => {
    const { items } = useCartStore();
    const { user } = useAuth();
    const isFirstRun = useRef(true);

    // Sync Cart to Server (Debounced)
    useEffect(() => {
        if (!user) return;

        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        // Skip initial load to avoid overwriting server data with potentially empty local data immediately
        // Wait, actually we need to merge on login, handled by AuthContext? 
        // Let's assume AuthContext might load it... or we just save local changes to server.

        const timeoutId = setTimeout(() => {
            // Save cart items to user meta
            // WC REST API allows updating meta_data
            const cartJson = JSON.stringify(items);

            // Check if we need to update? 
            // Ideally we only update if changed.

            updateCustomer(user.id, {
                meta_data: [
                    {
                        key: 'ram_bank_saved_cart',
                        value: cartJson
                    }
                ]
            } as any).catch(err => console.error("Failed to sync cart", err));

        }, 2000); // 2 second debounce

        return () => clearTimeout(timeoutId);
    }, [items, user]);

    return null;
};

export default CartSync;
