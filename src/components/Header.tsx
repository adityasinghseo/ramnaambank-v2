import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/ramnam-logo.png";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Facebook, Instagram, Twitter, Youtube, Languages } from "lucide-react";
import offlineForm from "../assets/ऑफ़लाइन-फार्म.pdf";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const Header = () => {
  const location = useLocation();
  const { toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  const navItems = [
    { label: t.header.home, href: "/" },
    { label: t.header.aboutUs, href: "/about" },
    { label: t.header.submitRamNaam, href: "/ram-naam" },
    { label: t.header.becomeMember, href: "/membership" },
    { label: t.header.writingMaterial, href: "/lekhan" },
    { label: t.header.schemes, href: "/yojana" },
    { label: t.header.astrology, href: "/jyotish" },
    { label: t.header.donate, href: "/donation" },
    { label: t.header.gallery, href: "/gallery" },
    { label: t.header.latestUpdate, href: "/news" },
    { label: t.header.shop, href: "https://shop.clickstraight.com", isExternal: true },
    { label: t.header.contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FF7E26] shadow-md flex flex-col items-center pt-2 pb-1">
      {/* Top Section: Social Media (Left) + Logo (Center) + Contact (Right) */}
      <div className="w-full px-4 md:px-8 py-2">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center gap-4">
          {/* Social Media Icons - Left */}
          <div className="flex items-center gap-2 md:gap-3 justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          {/* Logo and Name - Center */}
          <div className="flex flex-col items-center justify-center">
            <Link to="/" className="flex flex-col items-center gap-1">
              <img
                src={logo}
                alt={t.header.organizationName}
                className="h-16 md:h-20 w-auto bg-white p-1 rounded-full shadow-sm hover:scale-105 transition-transform duration-300"
              />
              <h1 className="font-hind text-[#FF7E26] bg-white px-3 py-1 rounded-md text-sm md:text-lg font-bold text-center tracking-wide shadow-sm whitespace-nowrap">
                {t.header.organizationName}
              </h1>
            </Link>
          </div>

          {/* Language Toggle - Right */}
          <div className="flex items-center justify-end">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 md:gap-2 text-white hover:text-white/80 transition-colors text-xs md:text-sm bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md"
              aria-label="Toggle Language"
            >
              <Languages className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-hind">
                {t.header.language}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Navigation */}
      <nav className="w-full border-t border-white/20">
        <div className="flex overflow-x-auto no-scrollbar py-2 px-4 gap-2 md:justify-center items-center w-full">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;

            // Handle Membership Dropdown
            if (item.label === t.header.becomeMember) {
              return (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-hind text-sm md:text-base whitespace-nowrap px-4 rounded-full transition-all text-white hover:text-white hover:bg-white/20"
                    >
                      {item.label}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link to="/membership" className="font-hind cursor-pointer w-full">
                        {t.header.onlineForm}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href={offlineForm} target="_blank" rel="noopener noreferrer" className="font-hind cursor-pointer w-full">
                        {t.header.offlineForm}
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            // @ts-ignore
            if (item.isExternal) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="shrink-0"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "font-hind text-sm md:text-base whitespace-nowrap px-4 rounded-full transition-all",
                      isActive
                        ? "bg-white text-[#FF7E26] shadow-md"
                        : "text-white hover:text-white hover:bg-white/20"
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
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "font-hind text-sm md:text-base whitespace-nowrap px-4 rounded-full transition-all",
                    isActive
                      ? "bg-white text-[#FF7E26] shadow-md"
                      : "text-white hover:text-white hover:bg-white/20"
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
