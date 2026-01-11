import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, LoginCredentials, SignupData } from '../types';
import * as authService from '../services/authService';
import { toast } from 'sonner';
import { useCartStore } from '@/modules/shop/context/cartStore';

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (credentials: LoginCredentials) => Promise<void>;
    signup: (data: SignupData) => Promise<void>;
    logout: () => void;
    updateProfile: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        // Hydrate user from localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse user from local storage", e);
                localStorage.removeItem('user');
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (credentials: LoginCredentials) => {
        setIsLoading(true);
        try {
            const { user } = await authService.login(credentials);
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            // Store token if needed: localStorage.setItem('token', token);
            toast.success("Welcome back!");

            // Attempt to restore cart
            const savedCartMeta = user.meta_data?.find((m: any) => m.key === 'ram_bank_saved_cart');
            if (savedCartMeta) {
                try {
                    const savedItems = JSON.parse(savedCartMeta.value);
                    if (Array.isArray(savedItems) && savedItems.length > 0) {
                        const { restoreCart } = useCartStore.getState();
                        restoreCart(savedItems);
                    }
                } catch (err) {
                    console.error("Failed to restore cart", err);
                }
            }
        } catch (error: any) {
            console.error(error);
            const msg = error.response?.data?.message || "Login failed. Please check your credentials.";
            // Clean up HTML tags from WP error messages if any
            const cleanMsg = msg.replace(/<[^>]*>?/gm, '');
            toast.error(cleanMsg);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const signup = async (data: SignupData) => {
        setIsLoading(true);
        try {
            const newUser = await authService.signup(data);
            // Auto login probably requires password, but we just created user. 
            // Depending on API, we might need them to login explicitly or we can set user state.
            // We'll set user state assuming successful creation.
            // Note: Without a token, we can't do authenticated requests that require one, 
            // but our `updateCustomer` uses Consumer Keys so it's fine for now.
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
            toast.success("Account created successfully!");
        } catch (error: any) {
            console.error(error);
            const msg = error.response?.data?.message || "Signup failed.";
            const cleanMsg = msg.replace(/<[^>]*>?/gm, '');
            toast.error(cleanMsg); // WP returns HTML sometimes
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        toast.info("Logged out successfully");
    };

    const updateProfile = async (data: Partial<User>) => {
        if (!user) return;
        setIsLoading(true);
        try {
            const updatedUser = await authService.updateCustomer(user.id, data);
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            toast.success("Profile updated!");
        } catch (error) {
            toast.error("Failed to update profile.");
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, isAuthenticated: !!user, login, signup, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
