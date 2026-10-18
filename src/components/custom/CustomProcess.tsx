"use client";

import { Fragment } from "react";
import { ChevronRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";

const STEPS = [1, 2, 3, 4, 5];

/**
 * Quy trình custom: mỗi bước là một ô, tên bước ở chính giữa, số thứ tự to màu trắng ở góc phải dưới.
 * Mobile 2 cột (ô lẻ hàng cuối căn trái), từ sm 3 cột (hàng cuối căn giữa), không có mũi tên.
 * Desktop: một hàng ngang, nối bằng mũi tên sang phải.
 */
export function CustomProcess() {
  const { t } = useLanguage();
  return (
    <Section title={t("custom.processTitle")}>
      <ol className="flex flex-wrap gap-3 sm:justify-center lg:flex-nowrap lg:items-stretch">
        {STEPS.map((n, i) => (
          <Fragment key={n}>
            <li className="relative flex h-28 w-[calc((100%-0.75rem)/2)] items-center justify-center overflow-hidden bg-surface p-4 text-center sm:w-[calc((100%-1.5rem)/3)] lg:h-auto lg:min-h-40 lg:w-auto lg:flex-1">
              {/* Số to màu trắng ở góc phải dưới, bị cắt bớt ở mép ô */}
              <span
                aria-hidden
                className="absolute -bottom-3 right-1 select-none text-7xl font-extrabold leading-none tracking-tighter text-paper lg:-bottom-4 lg:right-2 lg:text-8xl"
              >
                {String(n).padStart(2, "0")}
              </span>
              <h3 className="relative text-balance text-lg font-normal leading-snug lg:text-xl">{t(`custom.step${n}`)}</h3>
            </li>
            {i < STEPS.length - 1 && (
              <li aria-hidden className="hidden shrink-0 items-center text-gray-400 lg:flex">
                <ChevronRight className="size-5" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </Section>
  );
}
