import translations from '../assets/translations.json';

export type Lang =
    | 'en'
    | 'fr';

export type Translations = typeof translations[Lang];

export function getTranslations(lang: Lang): Translations {
    return translations[lang] ?? translations['en'];
}