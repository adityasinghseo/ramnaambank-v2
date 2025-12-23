import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    // ✅ Made sticky
    <header className="sticky top-0 z-50 w-full bg-white shadow-soft">
      {/* 
      // 🔵 Top Bar (commented out for now)
      <div className="hidden md:block bg-secondary text-white py-1.5 text-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+91-9045000118" className="flex items-center gap-2 hover:text-primary transition-smooth">
              <Phone className="h-4 w-4" />
              <span className="font-poppins">+91-9045000118</span>
            </a>
            <a href="mailto:raamnaambank@gmail.com" className="flex items-center gap-2 hover:text-primary transition-smooth">
              <Mail className="h-4 w-4" />
              <span className="font-poppins">raamnaambank@gmail.com</span>
            </a>
          </div>
          <Button variant="link" className="text-white hover:text-primary font-hind text-base" asChild>
            <a href="#donation">दान करें 🙏</a>
          </Button>
        </div>
      </div>
      */}

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="श्री राम नाम विश्व बैंक समिति" className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              // @ts-ignore
              item.isExternal ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-smooth font-medium text-lg"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium text-lg"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                // @ts-ignore
                item.isExternal ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-smooth font-medium text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-smooth font-medium text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
