/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Desativa a otimização de imagens para exportação estática
  },
};

module.exports = nextConfig;
