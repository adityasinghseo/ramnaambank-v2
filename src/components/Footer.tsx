import { Facebook, Youtube, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import androidIcon from "@/assets/android.png";
import appleIcon from "@/assets/apple.png";

const Footer = () => {
  const quickLinks = [
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
    { label: "संपर्क करें", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/Shriramnaambank/61556191174978/", label: "Facebook" },
    { icon: Youtube, href: "https://www.youtube.com/@raamnaambank", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/ramnaambank/", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/919045000108", label: "WhatsApp" },
  ];

  return (
    <footer id="contact" className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Left Section — Logo + About + Social + App */}
          <div className="md:col-span-2">
            <img src={logo} alt="Logo" className="h-20 mb-4 brightness-0 invert" />
            <p className="text-white/80 mb-4 font-hind leading-relaxed">
              श्री राम नाम विश्व बैंक समिति एक धार्मिक व सामाजिक संस्था है जो राम नाम के प्रचार-प्रसार और समाज सेवा के लिए समर्पित है।
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* App Download Buttons */}
            <div>
              <h3 className="text-lg font-bold mb-3 font-hind">हमारा मोबाइल ऐप डाउनलोड करें</h3>
              <div className="flex flex-wrap gap-3">
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.shri.rnvbs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-smooth"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={androidIcon}
                      alt="Google Play"
                      className="h-6 w-6 object-contain filter invert brightness-200"
                    />
                    <div className="text-left">
                      <div className="text-xs text-white/70 font-poppins">Download on</div>
                      <div className="text-sm font-bold font-poppins">Google Play</div>
                    </div>
                  </div>
                </a>

                {/* Apple App Store */}
                <a
                  href="https://apps.apple.com/in/app/ram-naam/id6746091971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-smooth"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={appleIcon}
                      alt="App Store"
                      className="h-6 w-6 object-contain filter invert brightness-200"
                    />
                    <div className="text-left">
                      <div className="text-xs text-white/70 font-poppins">Download on</div>
                      <div className="text-sm font-bold font-poppins">App Store</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-hind">त्वरित लिंक</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-smooth font-hind"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-hind">संपर्क जानकारी</h3>
            <ul className="space-y-3 text-white/80 font-hind">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>
                  <a href="tel:+91-9045000108" className="hover:text-primary">+91-9045000108</a>,{" "}
                  <a href="tel:+91-8868888601" className="hover:text-primary">+91-8868888601</a>,{" "}
                  <a href="tel:+91-9410110900" className="hover:text-primary">+91-9410110900</a>
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>
                  श्री राम नाम विश्व बैंक समिति आश्रम,<br />
                  बिल्केश्वर बाई पास रोड, निकट वेदाग्रीन बैंकट हाल,<br />
                  ललतारौ पुल हरिद्वार (उत्तराखंड) 249401
                </span>
              </li>
              <li>
                <span>No.7 नई बस्ती रामगढ़ रोड़, खड़खड़ी हरिद्वार (उत्तराखंड) 249401</span>
              </li>
              <li>
                <span>
                  8 गोविंदपुरी, रानीपुर मोड, वुडलैंड शोरूम के ऊपर द्वितीय तल,<br />
                  हरिद्वार उत्तराखंड 249401
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:raamnaambank@gmail.com" className="hover:text-primary font-poppins">
                  raamnaambank@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/70 font-hind text-sm flex flex-col md:flex-row items-center justify-center gap-2">
            <span>© 2025 श्री राम नाम विश्व बैंक समिति। सर्वाधिकार सुरक्षित।</span>
            <span>
              Developed by{" "}
              <a
                href="https://www.marketingwale.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Marketing Wale™
              </a>
            </span>
            <span>जय श्री राम 🙏</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
