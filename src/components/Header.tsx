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
import offlineForm from "../assets/ऑफ़लाइन-फार्म.pdf";

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
    <header className="sticky top-0 z-50 w-full bg-[#FF7E26] shadow-md flex flex-col items-center pt-2 pb-1">
      {/* Top Section: Centered Logo */}
      <div className="flex justify-center w-full mb-2">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="श्री राम नाम विश्व बैंक समिति"
            className="h-20 md:h-28 w-auto bg-white p-1 rounded-full shadow-sm hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Bottom Section: Navigation */}
      <nav className="w-full border-t border-white/20">
        <div className="flex overflow-x-auto no-scrollbar py-2 px-4 gap-2 md:justify-center items-center w-full">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;

            // Handle Membership Dropdown
            if (item.label === "सदस्य बनें") {
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
                        ऑनलाइन फॉर्म
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href={offlineForm} target="_blank" rel="noopener noreferrer" className="font-hind cursor-pointer w-full">
                        ऑफलाइन फॉर्म
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
                  target="_blank"
                  rel="noopener noreferrer"
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
