/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYmhhZ2F2YXRoa3VtYXIiLCJhIjoiY2xqcjR6cWpuMGUzbjNtbWpmMTQ2b2c0ciJ9.Bv6LRn4FWiem8sup5wm7aQ",
      
  },
};
