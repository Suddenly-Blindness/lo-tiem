"use client";

import { RefreshCw, Wrench } from "lucide-react";

import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const POLICIES = [
  { icon: Wrench, key: "policy.freeInstall" },
  { icon: RefreshCw, key: "policy.defectReturn" },
];

/** Chính sách chung của shop, hiện dưới phần mua hàng */
export function ShopPolicies({ className }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <ul className={cn("space-y-2.5", className)}>
      {POLICIES.map(({ icon: Icon, key }) => (
        <li key={key} className="flex items-center gap-3 text-sm">
          <Icon className="size-5 shrink-0" strokeWidth={1.5} />
          {t(key)}
        </li>
      ))}
    </ul>
  );
}
