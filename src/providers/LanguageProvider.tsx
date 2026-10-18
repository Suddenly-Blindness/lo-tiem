"use client";

import { useCallback, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";

import { LanguageContext } from "@/contexts/language-context";
import { DEFAULT_LANG, getTranslation, isLanguageCode, type LanguageCode } from "@/i18n/translations";

const STORAGE_KEY = "lotiem-lang";

// Store nhỏ để đọc localStorage qua useSyncExternalStore: server và lần render
// đầu ở client đều dùng DEFAULT_LANG nên không lệch hydration.
const listeners = new Set<() => void>();

function readStored(): LanguageCode {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLanguageCode(stored) ? stored : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) onChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function writeStored(lang: LanguageCode) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Trình duyệt chặn storage: vẫn đổi ngôn ngữ trong phiên hiện tại
  }
  listeners.forEach((fn) => fn());
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, readStored, () => DEFAULT_LANG);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: LanguageCode) => writeStored(lang), []);
  const t = useCallback((key: string) => getTranslation(key, language), [language]);
  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
