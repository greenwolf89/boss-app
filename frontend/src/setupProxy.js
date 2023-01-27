const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_BOSS_APP_API_HOST || "http://localhost:8081",
      changeOrigin: true,
    })
  );
};
