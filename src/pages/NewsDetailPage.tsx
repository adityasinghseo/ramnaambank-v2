import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Loader2, Calendar } from "lucide-react";
import { format } from "date-fns";
import { fetchPostBySlug, BlogPost } from "@/modules/shop/services/blogService";

const NewsDetailPage = () => {
    const { slug } = useParams();
    const [news, setNews] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNewsDetail = async () => {
            if (!slug) return;
            try {
                const data = await fetchPostBySlug(slug);
                setNews(data);
            } catch (error) {
                console.error("Error fetching news detail:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNewsDetail();
    }, [slug]);

    // Helper to get featured image
    const getFeaturedImage = (post: BlogPost) => {
        if (post._embedded && post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0]) {
            return post._embedded["wp:featuredmedia"][0].source_url;
        }
        return null;
    };

    // Helper to extract plain text from HTML (for SEO)
    const getExcerpt = (html: string) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

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

    // Clean up content styles to match Tailwind typography
    const cleanContent = news.content.rendered.replace(/class=".*?"/g, '');

    return (
        <div className="min-h-screen flex flex-col">
            <SEO
                title={getExcerpt(news.title.rendered)}
                description={getExcerpt(news.excerpt.rendered).substring(0, 150) + "..."}
                image={getFeaturedImage(news) || undefined}
            />
            <Header />
            <main className="flex-grow bg-cream pt-10 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <article className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up">
                        {getFeaturedImage(news) && (
                            <div className="w-full h-64 md:h-[400px] relative">
                                <img
                                    src={getFeaturedImage(news)!}
                                    alt={getExcerpt(news.title.rendered)}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <div className="p-6 md:p-10">
                            <div className="mb-6 flex items-center gap-4">
                                {news.date && (
                                    <span className="flex items-center gap-2 text-sm font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                                        <Calendar className="w-4 h-4" />
                                        {format(new Date(news.date), "dd MMMM yyyy")}
                                    </span>
                                )}
                            </div>

                            <h1
                                className="text-3xl md:text-5xl font-bold text-secondary mb-8 font-hind leading-tight"
                                dangerouslySetInnerHTML={{ __html: news.title.rendered }}
                            />

                            <div className="w-24 h-1 bg-primary mb-8 rounded-full"></div>

                            {/* Post Content */}
                            <div
                                className="prose prose-lg max-w-none text-muted-foreground font-hind leading-relaxed
                                prose-headings:text-secondary prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                prose-img:rounded-xl prose-img:shadow-md"
                                dangerouslySetInnerHTML={{ __html: news.content.rendered }}
                            />
                        </div>
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NewsDetailPage;
