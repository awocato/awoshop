/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'links.papareact.com',
          },
          {
            protocol: 'https',
            hostname: 'i.postimg.cc',
          },
          {
            protocol: 'https',
            hostname: 'i.imgur.com',
          }

        ],
      },
};

export default nextConfig;
