import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack rooted on this project (avoids picking up a parent package-lock).
  turbopack: { root: process.cwd() },
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: { optimizePackageImports: ["lucide-react", "gsap", "motion"] },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
    deviceSizes: [390, 640, 828, 1080, 1440, 1920],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
