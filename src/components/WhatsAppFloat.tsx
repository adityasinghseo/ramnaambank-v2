import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
    const whatsappNumber = "919045000108";
    const message = "नमस्ते! मुझे श्री राम नाम विश्व बैंक समिति के बारे में जानकारी चाहिए।"; // Hello! I want information about Shri Ram Naam Vishwa Bank Samiti.

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
            <button
                onClick={handleWhatsAppClick}
                className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
                aria-label="Chat on WhatsApp"
            >
                {/* WhatsApp Icon */}
                <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />

                {/* Notification Dot */}
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>

                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm font-hind rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    WhatsApp पर चैट करें
                </span>
            </button>
        </div>
    );
};

export default WhatsAppFloat;
