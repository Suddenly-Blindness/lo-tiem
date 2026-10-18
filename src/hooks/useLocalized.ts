"use client";

import { useCallback } from "react";

import type { Localized } from "@/types";
import { useLanguage } from "./useLanguage";

/** Trả về hàm chọn đúng ngôn ngữ cho field `Localized` trong data. */
export const useLocalized = () => {
  const { language } = useLanguage();
  return useCallback((value: Localized) => value[language] || value.vi, [language]);
};
