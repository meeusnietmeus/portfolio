import type { JSONObject, JSONValue } from "$lib/global-types";
import en from "./lang/freedom_of_speech.json"
import nl from "./lang/frieten.json"

let translations: JSONObject | null = null;

export function createTranslator(language: string) {
    if (!translations) {
        setNewTranslations(language);
    }

    return {
        get(key: string) {
            if (!translations) {
                return "no translations set";
            }

            if (!key.includes('.')) {
                return translations[key] as string ?? "does not exist";
            }

            return getNestedKey(key, translations);
        },
        changeLanguage(language: string) {
            setNewTranslations(language);
        }
    }
}

function getNestedKey(key: string, jsonObject: JSONObject) {
    if (!jsonObject) {
        return "no object";
    }

    const dotIndex = key.indexOf('.')
    if (dotIndex !== -1) {
        const nestedObj = jsonObject[key.substring(0, dotIndex)] as JSONObject
        return getNestedKey(key.substring(dotIndex + 1), nestedObj)
    }

    return jsonObject[key] as string ?? "does not exist"
}

function setNewTranslations(language: string) {
    if (language === "nl") {
        translations = nl;
    } else {
        translations = en;
    }
}