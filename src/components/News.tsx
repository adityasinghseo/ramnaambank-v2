import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, User as UserIcon } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { fetchPosts, BlogPost } from "@/modules/shop/services/blogService";
import { format } from "date-fns";

const News = () => {
  const { t, language } = useTranslation();
  const [news, setNews] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true); // Ensure loading state is reset when language changes
      try {
        const data = await fetchPosts(1, 10, language);
        setNews(data);
      } catch (error) {
        console.error("Error loading news:", error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [language]);

  // Helper to get featured image
  const getFeaturedImage = (post: BlogPost) => {
    if (post._embedded && post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0]) {
      return post._embedded["wp:featuredmedia"][0].source_url;
    }
    return null; // or a default placeholder image
  };

  // Helper to extract plain text from HTML excerpt
  const getExcerpt = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  // Helper to detect if text contains Devanagari characters (Hindi)
  const containsDevanagari = (text: string) => {
    return /[\u0900-\u097F]/.test(text);
  };

  // Filter posts based on current language
  const filteredNews = news.filter((item) => {
    const hasHindi = containsDevanagari(item.title.rendered);

    if (language === 'english') {
      // English Mode: Show functionality ONLY if it does NOT contain Hindi characters
      return !hasHindi;
    } else {
      // Hindi Mode: Show functionality ONLY if it DOES contain Hindi characters
      return hasHindi;
    }
  });

  if (loading) {
    return (
      <section id="news" className="py-20 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <p>{t.common.loading}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            {t.news.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {filteredNews.length === 0 ? (
            <div className="text-center text-muted-foreground">
              {t.news.noUpdates || "No updates found."}
            </div>
          ) : (
            filteredNews.map((item) => (
              <Card key={item.id} className="shadow-soft border-primary/20 animate-fade-in-up hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0 md:p-6 overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6 items-start">

                    {/* Content Section */}
                    <div className="flex-1 order-2 md:order-1 p-6 md:p-0">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-hind uppercase tracking-wider">
                        <span className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded">
                          <Calendar className="w-3 h-3" />
                          {format(new Date(item.date), "dd MMM yyyy")}
                        </span>
                      </div>

                      <Link to={`/news/${item.slug}`} className="group block">
                        <h3
                          className="text-2xl font-bold text-secondary mb-3 font-hind group-hover:text-primary transition-colors leading-tight"
                          dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                        />
                      </Link>

                      <div
                        className="text-muted-foreground mb-4 leading-relaxed font-hind line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                      />

                      <Link to={`/news/${item.slug}`}>
                        <Button
                          variant="link"
                          className="text-primary hover:text-primary/80 p-0 font-hind text-base font-semibold"
                        >
                          {t.news.readMore} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>

                    {/* Image Section */}
                    {getFeaturedImage(item) && (
                      <div className="w-full md:w-64 h-48 md:h-full md:aspect-[4/3] relative rounded-t-xl md:rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 order-1 md:order-2 group">
                        <Link to={`/news/${item.slug}`} className="block w-full h-full">
                          <img
                            src={getFeaturedImage(item)!}
                            alt={getExcerpt(item.title.rendered)}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </Link>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
