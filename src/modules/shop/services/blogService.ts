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

const isDev = import.meta.env.MODE === 'development';
const apiBaseUrl = isDev ? '/api-wp' : WP_API_URL + '/wp/v2';

const api = axios.create({
    baseURL: apiBaseUrl,
});

// Fetch Latest Blog Posts
export const fetchPosts = async (page = 1, perPage = 10, lang?: string): Promise<BlogPost[]> => {
    try {
        const params: any = {
            page,
            per_page: perPage,
            _embed: true, // Crucial to get featured image and author details
            status: 'publish',
        };

        if (lang) {
            params.lang = lang === 'hindi' ? 'hi' : 'en';
        }

        const endpoint = isDev ? '/posts' : '/posts'; 
        // Wait, if it's WP_API_URL + '/wp/v2' as base, it should be just '/posts'. Let me adjust above!
        
        const response = await api.get('/posts', {
            params,
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
        const response = await api.get('/posts', {
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
