"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./LanguageToggle";

const NAV = [
  { href: "/", key: "nav.home" },
  { href: "/san-pham/", key: "nav.products" },
  { href: "/custom/", key: "nav.custom" },
];

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* TODO: thay bằng logo trong public/images/brand */}
        <Link href="/" className="text-xl font-extrabold uppercase tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-semibold uppercase tracking-wider",
                isActive(href) ? "text-ink" : "text-muted hover:text-ink",
              )}
            >
              {t(key)}
            </Link>
          ))}
          <LanguageToggle />
        </nav>

        <button
          type="button"
          aria-label={t(open ? "nav.closeMenu" : "nav.openMenu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open && (
        <nav className="border-t border-line bg-paper md:hidden">
          <Container className="flex flex-col py-2">
            {NAV.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-line py-4 font-semibold uppercase tracking-wider last:border-b-0",
                  isActive(href) ? "text-ink" : "text-muted",
                )}
              >
                {t(key)}
              </Link>
            ))}
            <LanguageToggle className="py-4" />
          </Container>
        </nav>
      )}
    </header>
  );
}
