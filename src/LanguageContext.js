import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
    en: {
        header: "Welcome to our website",
        text: "This is an example of text in English, click the button below to change the language",
        toggleLanguage: "FR",
    },
    fr: {
        header: "Bienvenue sur notre site web",
        text: "Ceci est un exemple de texte en français, cliquez sur le bouton ci-dessous pour changer de langue",
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
