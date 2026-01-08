import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { yojanas } from "@/data/yojanas";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "@/hooks/useTranslation";

const SocialInitiatives = () => {
  const { t } = useTranslation();
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section id="initiatives" className="py-20 bg-gradient-to-b from-cream to-[#fff7ef]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            {t.socialInitiatives.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        {/* Carousel */}
        <div className="max-w-7xl mx-auto px-4 sm:px-12 animate-fade-in-up">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {yojanas.map((item) => (
                <CarouselItem key={item.slug} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Link to={`/yojana/${item.slug}`} className="block h-full">
                    <div className="group h-full bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-lg font-bold text-secondary font-hind line-clamp-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 opacity-0 hover:opacity-100 transition-opacity bg-white/80 hover:bg-white text-primary" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 opacity-0 hover:opacity-100 transition-opacity bg-white/80 hover:bg-white text-primary" />
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Link
            to="/yojana"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white font-hind text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500"
          >
            {t.socialInitiatives.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialInitiatives;
