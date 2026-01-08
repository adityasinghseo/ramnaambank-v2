import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Crown, Star, HeartHandshake, Users } from "lucide-react";
import offlineForm from "../assets/ऑफ़लाइन-फार्म.pdf";
import { useTranslation } from "@/hooks/useTranslation";

const Activities = () => {
  const { t } = useTranslation();

  const memberships = [
    {
      icon: Crown,
      title: t.activities.lifetime.title,
      description: t.activities.lifetime.description,
      color: "from-primary to-accent",
    },
    {
      icon: Star,
      title: t.activities.yearly.title,
      description: t.activities.yearly.description,
      color: "from-secondary to-sacred-light",
    },
    {
      icon: HeartHandshake,
      title: t.activities.monthly.title,
      description: t.activities.monthly.description,
      color: "from-accent to-golden",
    },
    {
      icon: Users,
      title: t.activities.volunteer.title,
      description: t.activities.volunteer.description,
      color: "from-primary to-devotional-dark",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            {t.activities.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-hind">
            {t.activities.subtitle}<br />
            {t.activities.description}
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {memberships.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-devotional transition-smooth border-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center flex flex-col items-center justify-between h-full">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-soft`}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 font-hind">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-hind leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
          <Button
            size="lg"
            className="gradient-devotional text-white hover:opacity-90 shadow-devotional font-hind text-lg"
            asChild
          >
            <a href="/membership">{t.activities.onlineButton}</a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 font-hind text-lg"
            asChild
          >
            <a href={offlineForm} target="_blank" rel="noopener noreferrer">
              {t.activities.offlineButton}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
