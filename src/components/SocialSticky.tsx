import { Facebook, Instagram, Youtube } from "lucide-react";

/**
 * SocialSticky - Displays social media icons fixed on the left side of the screen.
 * Visible ONLY on mobile devices (hidden on tablet/desktop).
 */
const SocialSticky = () => {
    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 md:hidden">
            {/* Facebook */}
            <a
                href="https://www.facebook.com/people/Shriramnaambank/61556191174978/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] text-white rounded-r-md shadow-md w-8 h-8 flex items-center justify-center transition-transform hover:translate-x-1"
                aria-label="Facebook"
            >
                <Facebook className="w-4 h-4" />
            </a>

            {/* Instagram */}
            <a
                href="https://www.instagram.com/ramnaambank/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4405F] text-white rounded-r-md shadow-md w-8 h-8 flex items-center justify-center transition-transform hover:translate-x-1"
                aria-label="Instagram"
            >
                <Instagram className="w-4 h-4" />
            </a>

            {/* YouTube */}
            <a
                href="https://www.youtube.com/@raamnaambank"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF0000] text-white rounded-r-md shadow-md w-8 h-8 flex items-center justify-center transition-transform hover:translate-x-1"
                aria-label="YouTube"
            >
                <Youtube className="w-4 h-4" />
            </a>
        </div>
    );
};

export default SocialSticky;
