import React from 'react';
import './App.css';
import { LanguageProvider, useLanguage } from './LanguageContext';

function LanguageToggle() {
  const { language, setLanguageToFrench, setLanguageToEnglish } = useLanguage();

  return (
    <div>
      <button onClick={setLanguageToFrench} disabled={language === 'fr'}>
        FR
      </button>
      <button onClick={setLanguageToEnglish} disabled={language === 'en'}>
        EN
      </button>
    </div>
  );
}

function AppContent() {
  const { language, translations } = useLanguage();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{translations[language].header}</h1>
        <LanguageToggle />
      </header>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
