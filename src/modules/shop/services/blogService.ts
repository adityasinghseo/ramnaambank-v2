import axios from 'axios';

// WordPress API URL for Posts (e.g. from admin.shriramnaambank.com/wp-json/wp/v2/posts)
const WP_API_URL = import.meta.env.VITE_WP_API;

// Type definition for a Blog Post
export interface BlogPost {
    id: number;
    date: string;
    slug: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text?: string;
        }>;
        'author'?: Array<{
            name: string;
            link: string;
        }>;
    };
}

const api = axios.create({
    baseURL: WP_API_URL, // This is expected to be 'https://admin.shriramnaambank.com/wp-json'
});

/**
 * Validates if the WP_API_URL points to the /wp-json root, 
 * and appends /wp/v2 if necessary, or just uses it directly.
 * Adjust based on your .env VITE_WP_API structure. 
 * Assuming VITE_WP_API = 'https://admin.shriramnaambank.com/wp-json'
 */

// Fetch Latest Blog Posts
export const fetchPosts = async (page = 1, perPage = 10): Promise<BlogPost[]> => {
    try {
        const response = await api.get('/wp/v2/posts', {
            params: {
                page,
                per_page: perPage,
                _embed: true, // Crucial to get featured image and author details
                status: 'publish',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
};

// Fetch Single Post by Slug
export const fetchPostBySlug = async (slug: string): Promise<BlogPost | null> => {
    try {
        const response = await api.get('/wp/v2/posts', {
            params: {
                slug,
                _embed: true,
            },
        });
        if (response.data && response.data.length > 0) {
            return response.data[0];
        }
        return null; // Not found
    } catch (error) {
        console.error('Error fetching post by slug:', error);
        throw error;
    }
};
