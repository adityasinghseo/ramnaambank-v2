import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";
import { format } from "date-fns";

interface NewsItem {
    _id: string;
    title: string;
    description: string;
    publishedAt: string;
    image: any;
}

const NewsDetailPage = () => {
    const { slug } = useParams();
    const [news, setNews] = useState<NewsItem | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNewsDetail = async () => {
            if (!slug) return;
            try {
                const query = `*[_type == "news" && slug.current == $slug][0] {
          _id,
          title,
          description,
          publishedAt,
          image
        }`;
                const data = await client.fetch(query, { slug });
                setNews(data);
            } catch (error) {
                console.error("Error fetching news detail:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNewsDetail();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    if (!news) {
        return (
            <div className="min-h-screen">
                <Header />
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-2xl font-bold mb-4">News not found</h1>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-cream pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <article className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up">
                        {news.image && (
                            <div className="w-full h-64 md:h-96 relative">
                                <img
                                    src={urlFor(news.image).url()}
                                    alt={news.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <div className="p-6 md:p-10">
                            <div className="mb-6">
                                {news.publishedAt && (
                                    <span className="text-muted-foreground text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                                        {format(new Date(news.publishedAt), "dd MMMM yyyy")}
                                    </span>
                                )}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6 font-hind leading-tight">
                                {news.title}
                            </h1>

                            <div className="w-20 h-1 bg-primary mb-8"></div>

                            <div className="prose prose-lg max-w-none text-muted-foreground font-hind leading-relaxed whitespace-pre-wrap">
                                {news.description}
                            </div>
                        </div>
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NewsDetailPage;
