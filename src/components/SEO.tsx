import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

interface SEOProps {
    titleHi: string;      // Hindi title
    titleEn: string;      // English title
    descriptionHi: string; // Hindi description
    descriptionEn: string; // English description
    image?: string;
    path?: string;        // page path, e.g. "/about"
    type?: string;
}

const BASE_URL = "https://shriramnaambank.com";

const SEO = ({
    titleHi,
    titleEn,
    descriptionHi,
    descriptionEn,
    image = `${BASE_URL}/og-image.png`,
    path = "",
    type = "website"
}: SEOProps) => {
    const { language } = useLanguage();
    const { t } = useTranslation();

    const isHindi = language === "hindi";

    const title = isHindi ? titleHi : titleEn;
    const description = isHindi ? descriptionHi : descriptionEn;
    const siteTitle = t.header.organizationName;
    const fullTitle = `${title} | ${siteTitle}`;
    const lang = isHindi ? "hi" : "en";
    const canonicalUrl = `${BASE_URL}${path}`;

    return (
        <Helmet>
            {/* Language */}
            <html lang={lang} />

            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="language" content={lang} />

            {/* Multilingual hreflang */}
            <link rel="alternate" hrefLang="hi" href={`${BASE_URL}${path}`} />
            <link rel="alternate" hrefLang="en" href={`${BASE_URL}${path}`} />
            <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${path}`} />

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content={isHindi ? "hi_IN" : "en_IN"} />
            <meta property="og:locale:alternate" content={isHindi ? "en_IN" : "hi_IN"} />
            <meta property="og:site_name" content="श्री राम नाम विश्व बैंक समिति" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
