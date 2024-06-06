import en from "./lang/freedom_of_speech.json"
import nl from "./lang/frieten.json"

let translations: Record<string, string> | null = null;

export function createTranslator(language: string) {
    if (!translations) {
        setNewTranslations(language);
    }

    return {
        get(key: string) {
            if (!translations) {
                return key;
            }

            return translations[key] || key;
        },
        changeLanguage(language: string) {
            setNewTranslations(language);
        }
    }
}

function setNewTranslations(language: string) {
    if (language === "nl") {
        translations = nl;
    } else {
        translations = en;
    }
}