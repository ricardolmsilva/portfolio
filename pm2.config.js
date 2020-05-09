module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "serve",
      env: {
        PM2_SERVE_PATH: "public",
        PM2_SERVE_PORT: 8007,
        PM2_SERVE_SPA: "true",
        PM2_SERVE_HOMEPAGE: "/index.html",
      },
    },
  ],
}
