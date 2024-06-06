import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ request }) => {
    const languageHeader = request.headers.get("accept-language");

    if (!languageHeader) {
        return {
            language: "en"
        }
    }

    const languageLocale = languageHeader.split(",")[0];
    return {
        language: languageLocale.split("-")[0]
    }
}