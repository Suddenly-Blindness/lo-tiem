import vi from "@/i18n/locales/vi.json";
import en from "@/i18n/locales/en.json";

export const languages = [
  { code: "vi", name: "Tiếng Việt" },
  { code: "en", name: "English" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const DEFAULT_LANG: LanguageCode = "vi";

export const isLanguageCode = (value: unknown): value is LanguageCode => value === "vi" || value === "en";

export const translations: Record<LanguageCode, Record<string, string>> = { vi, en };

export function getTranslation(key: string, languageCode: LanguageCode = DEFAULT_LANG): string {
  return translations[languageCode]?.[key] || translations[DEFAULT_LANG]?.[key] || key;
}
