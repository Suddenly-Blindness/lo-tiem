import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/data/site";
import { LanguageProvider } from "@/providers/LanguageProvider";
import "@/styles/globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  // TODO: đổi sang domain thật
  metadataBase: new URL("https://lotiem.vn"),
  title: { default: `${site.name} — ${site.slogan.vi}`, template: `%s | ${site.name}` },
  description:
    "Lỏ Tiệm thiết kế, custom handmade ốp chắn bùn hông, ốp máy, combo scrambler cho XSR, MT-15, Exciter, Winner và nhận custom theo yêu cầu.",
  openGraph: { siteName: site.name, type: "website", locale: "vi_VN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
