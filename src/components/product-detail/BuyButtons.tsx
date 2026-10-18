"use client";

import { ShopeeIcon, TikTokShopIcon } from "@/components/icons";
import { ChannelLink, ChannelRow, SocialLinks } from "@/components/layout/SocialLinks";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";
import { Price, PriceNote } from "@/components/ui/Price";
import { ShopPolicies } from "./ShopPolicies";

/**
 * Cách mua, 2 khung:
 * - Ship COD qua tin nhắn (giá tốt nhất, mọi sản phẩm): nền đen, nút trắng đặc, nổi bật nhất để khách ưu tiên chọn.
 * - Mua trên sàn: Shopee / TikTok Shop nếu sản phẩm có bán, không thì ghi chỉ bán qua tin nhắn.
 * Chính sách của shop nằm dưới phần mua trên sàn.
 * `wide`: dùng khi đứng thành section riêng (tiêu đề do <Section> lo). Desktop: trái khung COD,
 * phải là mua trên sàn (không khung) + chính sách.
 */
export function BuyButtons({ product, wide = false }: { product: Product; wide?: boolean }) {
  const { t } = useLanguage();
  const { shopeeUrl, tiktokShopUrl } = product;
  const onMarketplace = Boolean(shopeeUrl || tiktokShopUrl);

  return (
    <div className={cn(!wide && "border-t border-line pt-6")}>
      {!wide && <p className="text-h3 mb-4">{t("product.buyTitle")}</p>}

      <div className={cn("grid gap-4", wide && "lg:grid-cols-2 lg:gap-6")}>
        <div className="bg-ink p-5 text-paper md:p-6">
          <p className="font-semibold">{t("product.buyCodTitle")}</p>
          <Price price={product.price} className="mt-2 text-2xl font-bold" />
          <PriceNote className="mt-1 text-gray-300" />
          <p className="mb-5 mt-1 text-sm text-gray-300">
            {t(product.deposit ? "product.buyCodBodyDeposit" : "product.buyCodBody")}
          </p>
          <SocialLinks
            labeled
            keys={["zalo", "facebook", "tiktok"]}
            linkClassName="border-paper bg-paper text-ink hover:opacity-85"
          />
        </div>

        <div>
          {onMarketplace ? (
            /* Mobile: khung riêng cho cân với khung COD. Desktop (wide): bỏ khung, chính sách nằm ngay dưới */
            <div
              className={cn(
                "border border-line p-5 md:p-6",
                wide ? "bg-paper lg:border-0 lg:bg-transparent lg:p-0" : "bg-surface",
              )}
            >
              <p className="font-semibold">{t("product.buyMarketplace")}</p>
              <ChannelRow className="mt-4">
                {shopeeUrl && <ChannelLink href={shopeeUrl} icon={ShopeeIcon} label={t("social.shopee")} labeled />}
                {tiktokShopUrl && (
                  <ChannelLink href={tiktokShopUrl} icon={TikTokShopIcon} label={t("social.tiktokShop")} labeled />
                )}
              </ChannelRow>
            </div>
          ) : (
            // Không bán trên sàn: chỉ một dòng ghi chú, không tiêu đề, không khung
            <p className="text-sm text-gray-600">{t("product.buyMessageOnly")}</p>
          )}
          {/* Đường kẻ ngăn chính sách: luôn có khi chỉ có dòng ghi chú; có link sàn thì chỉ desktop (mobile đã có khung) */}
          <ShopPolicies
            className={cn(
              "mt-6",
              !onMarketplace ? "border-t border-gray-300 pt-5" : wide && "lg:border-t lg:border-gray-300 lg:pt-5",
            )}
          />
        </div>
      </div>
    </div>
  );
}
