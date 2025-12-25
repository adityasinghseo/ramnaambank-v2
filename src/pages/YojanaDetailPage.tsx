import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { yojanas } from "@/data/yojanas";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const YojanaDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

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
                        <h2 className="text-2xl font-bold text-secondary mb-4">योजना नहीं मिली</h2>
                        <Button onClick={() => navigate("/yojana")}>
                            वापस जाएं
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Header Section (Title Only) */}
                <section className="relative py-20 bg-gradient-to-br from-primary/10 via-cream to-accent/10">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-4xl mx-auto animate-fade-in">
                            <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
                                {yojana.title}
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
                        <ArrowLeft className="mr-2 h-4 w-4" /> वापस
                    </Button>

                    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-primary/10 p-4 md:p-8 animate-fade-in">
                        {/* Full Width Image */}
                        <div className="w-full mb-8 rounded-xl overflow-hidden shadow-md">
                            <img
                                src={yojana.image}
                                alt={yojana.title}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Description Content */}
                        <div className="prose max-w-none text-foreground/90 font-hind">
                            {yojana.desc}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default YojanaDetailPage;
