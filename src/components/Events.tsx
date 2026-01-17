import { Card, CardContent } from "./ui/card";
import { Calendar, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "@/services/wordpressService";

const Events = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const { data: events, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p>Loading events...</p>
        </div>
      </section>
    );
  }

  // Fallback if no events found
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            {t.events.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-hind">
            {t.events.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => {
            // Safe access to ACF fields (handle array or object)
            const acf = Array.isArray(event.acf) ? {} : event.acf || {};

            // Language logic
            let title = event.title.rendered;
            let date = acf.event_date__day || ""; // Updated to use double underscore
            let location = acf.event_location || "";
            let description = acf.event_description || "";

            if (language === 'english') {
              // Try English fields, fallback to Hindi/Default
              title = acf.event_title_en || event.title.rendered;
              date = acf.event_date__day_en || date;  // Updated to use double underscore
              location = acf.event_location_en || location;
              description = acf.event_description_en || description;
            }

            return (
              <Card
                key={event.id}
                className="group hover:shadow-devotional transition-smooth border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2 font-hind" dangerouslySetInnerHTML={{ __html: title }} />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-hind">{date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-hind">{location}</span>
                    </div>
                    <p className="text-foreground pt-2 font-hind font-medium">
                      {description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
