// src/NameForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const NameForm = () => {
    const [name, setName] = useState('');
    const { t } = useTranslation(); // Hook for translation

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/add-name', { name });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    {t('name')}: {/* Use translation for label */}
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <button type="submit">{t('addName')}</button> {/* Use translation for button */}
            </form>
        </div>
    );
};

export default NameForm;
