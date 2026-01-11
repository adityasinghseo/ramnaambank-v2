import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/ramnam-logo.png";
import headerTitleLogo from "@/assets/header-title-logo.png";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Facebook, Instagram, Youtube, Languages } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* ROW 1: Social Media (Left) + Logo (Center) + Language Toggle (Right) - Orange Background */}
      <div className="w-full bg-[#FF7E26] px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center gap-4">
          {/* Social Media Icons - Left */}
          <div className="flex items-center gap-2 md:gap-3 justify-start">
            <a
              href="https://www.facebook.com/people/Shriramnaambank/61556191174978/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://www.instagram.com/ramnaambank/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://www.youtube.com/@raamnaambank"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          {/* Logo - Center */}
          <div className="flex items-center justify-center">
            <Link to="/" className="flex items-center justify-center">
              <img
                src={logo}
                alt={t.header.organizationName}
                className="h-16 md:h-20 w-auto bg-white p-1 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Language Toggle - Right */}
          <div className="flex items-center justify-end">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 md:gap-2 text-white hover:text-white/80 transition-colors text-xs md:text-sm bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md font-hind"
              aria-label="Toggle Language"
            >
              <Languages className="w-4 h-4 md:w-5 md:h-5" />
              <span>{t.header.language}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ROW 2: Organization Name - White Background, Logo Image */}
      <div className="w-full bg-white py-4">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={headerTitleLogo}
            alt="श्री राम नाम विश्व बैंक समिति - काम से राम की ओर..."
            className="h-12 md:h-16 lg:h-20 w-auto"
          />
        </div>
      </div>

      {/* ROW 3: Navigation Menu - As it is */}
      <nav className="w-full bg-[#FF7E26] border-t border-white/20">
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
                      className={cn(
                        "text-white hover:bg-white/20 hover:text-white font-hind text-xs md:text-sm whitespace-nowrap transition-all duration-300",
                        isActive && "bg-white/20 font-bold"
                      )}
                    >
                      {item.label}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white shadow-lg border border-primary/20">
                    <DropdownMenuItem asChild>
                      <Link
                        to="/membership"
                        className="font-hind text-sm hover:bg-primary/10 cursor-pointer"
                      >
                        {t.header.onlineMembership}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href={offlineForm}
                        download
                        className="font-hind text-sm hover:bg-primary/10 cursor-pointer"
                      >
                        {t.header.offlineMembership}
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            // Regular nav items
            if (item.isExternal) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-white hover:bg-white/20 px-3 py-2 rounded-md font-hind text-xs md:text-sm whitespace-nowrap transition-all duration-300",
                    isActive && "bg-white/20 font-bold"
                  )}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "text-white hover:bg-white/20 px-3 py-2 rounded-md font-hind text-xs md:text-sm whitespace-nowrap transition-all duration-300",
                  isActive && "bg-white/20 font-bold"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
