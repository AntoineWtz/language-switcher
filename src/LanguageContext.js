import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
    en: {
        header: "Welcome to our website",
        toggleLanguage: "FR",
    },
    fr: {
        header: "Bienvenue sur notre site web",
        toggleLanguage: "EN",
    },
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const setLanguageToFrench = () => {
        setLanguage('fr');
    };

    const setLanguageToEnglish = () => {
        setLanguage('en');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguageToFrench, setLanguageToEnglish, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
