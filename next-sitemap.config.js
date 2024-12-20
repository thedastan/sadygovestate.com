/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://sadygovestate.com',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 7000,
    exclude: ['/server-sitemap.xml'], // Исключите любые страницы, которые не должны быть в карте сайта
    alternateRefs: [
      { href: 'https://sadygovestate.com/ar', hreflang: 'ar' },
      { href: 'https://sadygovestate.com/en', hreflang: 'en' },
      { href: 'https://sadygovestate.com/ru', hreflang: 'ru' },
    ],
  }
  