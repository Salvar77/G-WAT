/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/realizacje",
        destination: "/galeria",
        permanent: true, // 301 – tells Google the page moved permanently
      },
    ];
  },
};

export default nextConfig;

