const withPWA = require("next-pwa");

module.exports = withPWA({
  reatStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development"
  },
})