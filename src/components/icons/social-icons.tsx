import type { SVGProps } from "react";

// Icon đơn giản, 1 màu (currentColor). Thay bằng SVG chính thức của từng nền tảng nếu cần.

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.6 3c.3 2.1 1.6 3.6 3.6 3.8v2.8c-1.3.1-2.6-.3-3.6-1v6.3c0 3.6-3.2 5.9-6.4 5-3.9-1-4.9-6-2-8.4 1-.8 2.3-1.2 3.6-1.1v2.9c-.6-.2-1.3-.1-1.8.2-1.4.8-1.3 3 .2 3.6 1.3.5 2.8-.4 2.8-2V3h3.6Z" />
    </svg>
  );
}

export function ZaloIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 3C6.5 3 2 6.8 2 11.5c0 2.6 1.4 4.9 3.6 6.5L5 21l3.4-1.7c1.1.3 2.3.5 3.6.5 5.5 0 10-3.8 10-8.5S17.5 3 12 3Zm-4.6 10.6H5V13l2.3-2.9H5.1V9.4h3.2V10L6 12.9h2.4v.7Zm3.5 0h-.7v-.3c-.3.2-.6.4-1 .4-.9 0-1.6-.7-1.6-1.8s.7-1.8 1.6-1.8c.4 0 .7.1 1 .4v-.3h.7v3.4Zm1.4 0h-.8V9.2h.8v4.4Zm2.7.1c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8Zm0-2.9c-.6 0-1 .5-1 1.1s.4 1.1 1 1.1 1-.5 1-1.1-.4-1.1-1-1.1Zm-5.6 0c-.6 0-1 .5-1 1.1s.4 1.1 1 1.1 1-.5 1-1.1-.4-1.1-1-1.1Z" />
    </svg>
  );
}

export function ShopeeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.5a4 4 0 0 0-4 3.8H4.3l1 13.6c.1.9.8 1.6 1.7 1.6h10c.9 0 1.6-.7 1.7-1.6l1-13.6H16a4 4 0 0 0-4-3.8Zm0 1.5a2.5 2.5 0 0 1 2.5 2.3h-5A2.5 2.5 0 0 1 12 4Zm.1 5c1.3 0 2.2.5 2.7 1l-.7.9c-.5-.4-1.2-.7-2-.7-.8 0-1.3.4-1.3.9 0 .6.6.8 1.8 1.2 1.4.4 2.6 1 2.6 2.5 0 1.4-1.3 2.4-3.1 2.4-1.3 0-2.5-.5-3.2-1.2l.8-.9c.6.6 1.5 1 2.4 1 1 0 1.6-.5 1.6-1.1 0-.7-.6-.9-1.9-1.3-1.3-.4-2.5-1-2.5-2.4C9.3 9.9 10.4 9 12.1 9Z" />
    </svg>
  );
}
