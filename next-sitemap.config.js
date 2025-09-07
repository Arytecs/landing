module.exports = {
  siteUrl: process.env.SITE_URL || 'https://araceliteruel.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  sitemapSize: 7000,
  exclude: [], // Añade rutas a excluir si hiciera falta
// trailingSlash: false,
  };
