import axios from 'axios';

const WP_API_URL = import.meta.env.VITE_WP_API;

export interface WordPressEvent {
    id: number;
    title: {
        rendered: string;
    };
    acf: {
        // English Fields
        event_title_en?: string;
        event_date__day_en?: string; // Double underscore based on screenshot
        event_location_en?: string;
        event_description_en?: string;

        // Hindi Fields
        event_date__day?: string; // Double underscore based on screenshot
        event_location?: string;
        event_description?: string;
    } | any;
    language?: string;
}

const api = axios.create({
    baseURL: WP_API_URL,
});

export const fetchEvents = async (): Promise<WordPressEvent[]> => {
    try {
        const response = await api.get('/wp/v2/events', {
            params: {
                per_page: 3, // Fetch latest 3 events
                _embed: true,
                status: 'publish',
                order: 'desc',
                // Try sending auth keys if available, in case ACF fields are behind auth
                consumer_key: import.meta.env.VITE_WC_CONSUMER_KEY,
                consumer_secret: import.meta.env.VITE_WC_CONSUMER_SECRET,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
};
