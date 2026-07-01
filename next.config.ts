import type { NextConfig } from "next";

// Security headers applied to every response. These are the low-risk set:
// they harden the site without affecting rendering (no CSP here — that's a
// separate, deliberate change because a nonce-based CSP disables static
// rendering on Next 16).
const securityHeaders = [
  // Block MIME-type sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't leak full URLs (paths/queries) to cross-origin destinations.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Clickjacking protection. Allows same-origin framing; tighten to DENY if
  // the site never embeds itself.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Opt out of powerful features the site doesn't use.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Force HTTPS on subsequent visits. Ignored by browsers over plain HTTP,
  // so it's safe to always send. `includeSubDomains`/`preload` omitted for now.
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
