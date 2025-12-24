import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/ramnam-logo.png";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "होम", href: "/" },
    { label: "हमारे बारे में", href: "/about" },
    { label: "राम नाम जमा करें", href: "/ram-naam" },
    { label: "सदस्य बनें", href: "/membership" },
    { label: "लेखन सामग्री", href: "/lekhan" },
    { label: "योजनाएं", href: "/yojana" },
    { label: "ज्योतिष फलादेश", href: "/jyotish" },
    { label: "दान करें", href: "/donation" },
    { label: "गैलरी", href: "/gallery" },
    { label: "लेटेस्ट अपडेट", href: "/news" },
    { label: "Shop", href: "https://shop.clickstraight.com", isExternal: true },
    { label: "संपर्क करें", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md flex flex-col items-center pt-2 pb-1">
      {/* Top Section: Centered Logo */}
      <div className="flex justify-center w-full mb-2">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="श्री राम नाम विश्व बैंक समिति"
            className="h-20 md:h-28 w-auto hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Bottom Section: Navigation */}
      <nav className="w-full border-t border-gray-100">
        <div className="flex overflow-x-auto no-scrollbar py-2 px-4 gap-2 md:justify-center items-center w-full">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;

            // @ts-ignore
            if (item.isExternal) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "font-hind text-sm md:text-base whitespace-nowrap px-4 rounded-full transition-all",
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "text-gray-600 hover:text-primary hover:bg-primary/10"
                    )}
                  >
                    {item.label}
                  </Button>
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                className="shrink-0"
              >
                <Button
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "font-hind text-sm md:text-base whitespace-nowrap px-4 rounded-full transition-all",
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "text-gray-600 hover:text-primary hover:bg-primary/10"
                  )}
                >
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
