// src/App.js
import React from 'react';
import './App.css';
import NameForm from './NameForm';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import LanguageSwitcher from './components/LanguageSwitcher'; // Import the LanguageSwitcher component


function App() {
    const { t } = useTranslation(); // Hook for translation

    return (
        <div className="App">
            <h1>{t('appTitle')}</h1> {/* Use translation for title */}
            <LanguageSwitcher /> {/* Include the LanguageSwitcher component */}
            <NameForm />
        </div>
    );
}

export default App;
