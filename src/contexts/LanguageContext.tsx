import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'hindi' | 'english';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        try {
            const saved = localStorage.getItem('language');
            return (saved === 'hindi' || saved === 'english') ? saved : 'english';
        } catch (e) {
            return 'english';
        }
    });

    React.useEffect(() => {
        document.documentElement.lang = language === 'english' ? 'en' : 'hi';
        try {
            localStorage.setItem('language', language);
        } catch (e) {
            // Ignore
        }
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'hindi' ? 'english' : 'hindi');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
