import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { yojanas } from "@/data/yojanas";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const YojanaDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { language } = useLanguage();

    const yojana = yojanas.find(y => y.slug === slug);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!yojana) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-secondary mb-4">
                            {language === 'english' ? 'Yojana Not Found' : 'योजना नहीं मिली'}
                        </h2>
                        <Button onClick={() => navigate("/yojana")}>
                            {language === 'english' ? 'Go Back' : 'वापस जाएं'}
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const title = language === 'english' ? yojana.title_en : yojana.title;
    const description = language === 'english' ? yojana.desc_en : yojana.desc;
    const seoDescription = language === 'english'
        ? `${yojana.title_en} - An important initiative by Shri Ram Naam World Bank Committee. Join us and contribute to social service.`
        : `${yojana.title} - श्री राम नाम विश्व बैंक समिति की एक महत्वपूर्ण पहल। हमारे साथ जुड़ें और समाज सेवा में योगदान दें।`;

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title={title}
                description={seoDescription}
                image={yojana.image}
            />
            <Header />
            <main>
                {/* Header Section (Title Only) */}
                <section className="relative py-20 bg-gradient-to-br from-primary/10 via-cream to-accent/10">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-4xl mx-auto animate-fade-in">
                            <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
                                {title}
                            </h1>
                            <div className="w-24 h-1 bg-primary mx-auto"></div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <div className="container mx-auto px-4 py-8 md:py-12">
                    <Button
                        variant="ghost"
                        onClick={() => navigate(-1)}
                        className="mb-6 hover:bg-primary/10 text-secondary"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {language === 'english' ? 'Back' : 'वापस'}
                    </Button>

                    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-primary/10 p-4 md:p-8 animate-fade-in">
                        {/* Full Width Image */}
                        <div className="w-full mb-8 rounded-xl overflow-hidden shadow-md">
                            <img
                                src={yojana.image}
                                alt={title}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Description Content */}
                        <div className="prose max-w-none text-foreground/90 font-hind">
                            {description}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default YojanaDetailPage;
