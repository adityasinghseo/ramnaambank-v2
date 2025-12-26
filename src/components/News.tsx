import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";

interface NewsItem {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  publishedAt: string;
  image: any;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const query = `*[_type == "news"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          description,
          publishedAt,
          image
        }`;
        const data = await client.fetch(query);
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section id="news" className="py-20 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <p>Loading updates...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            समाचार और अपडेट
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {news.length === 0 ? (
            <div className="text-center text-muted-foreground">
              कोई अपडेट नहीं (No updates found).
            </div>
          ) : (
            news.map((item) => (
              <Card key={item._id} className="shadow-soft border-primary/20 animate-fade-in-up">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1">
                      <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 font-hind">
                        नवीनतम
                      </div>
                      <Link to={`/news/${item.slug?.current}`} className="group">
                        <h3 className="text-2xl font-bold text-secondary mb-4 font-hind group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground mb-4 leading-relaxed font-hind line-clamp-3">
                        {item.description}
                      </p>

                      <Link to={`/news/${item.slug?.current}`}>
                        <Button
                          variant="link"
                          className="text-primary hover:text-primary/80 p-0 font-hind text-base"
                        >
                          और पढ़ें <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    {item.image && (
                      <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <Link to={`/news/${item.slug?.current}`}>
                          <img
                            src={urlFor(item.image).width(400).url()}
                            alt={item.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
