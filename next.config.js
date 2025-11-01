/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // output: "export", // ❌ comment or remove this
  turbopack: {}, // ✅ enable turbopack mode
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     config.externals.push({ canvas: "commonjs canvas" });
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;
