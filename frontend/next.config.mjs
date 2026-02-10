/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // 🔥 MUY IMPORTANTE PARA S3
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
