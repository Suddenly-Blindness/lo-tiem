import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Web tĩnh: `next build` xuất ra thư mục out/, deploy lên bất kỳ static host nào.
  output: "export",
  trailingSlash: true,
  // Cho phép mở bản `npm run dev` qua ngrok (chỉ có tác dụng ở chế độ dev)
  allowedDevOrigins: ["*.ngrok-free.dev", "*.ngrok-free.app"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
