import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {
  const locales = ['ar', 'en', 'ru']
  const pages = [
    { path: '', changefreq: 'daily', priority: 1.0 },
    { path: 'catalog', changefreq: 'weekly', priority: 0.8 },
    { path: 'catalog/investment', changefreq: 'weekly', priority: 0.8 },
    // Добавьте другие статические страницы здесь
  ]

  const fields = []

  locales.forEach((locale) => {
    pages.forEach((page) => {
      fields.push({
        loc: `https://sadygovestate.com/${locale}/${page.path}`,
        changefreq: page.changefreq,
        priority: page.priority,
        alternateRefs: [
          { href: `https://sadygovestate.com/ar/${page.path}`, hreflang: 'ar' },
          { href: `https://sadygovestate.com/en/${page.path}`, hreflang: 'en' },
          { href: `https://sadygovestate.com/ru/${page.path}`, hreflang: 'ru' },
        ],
      })
    })
  })

  return getServerSideSitemap(ctx, fields)
}

export default function Sitemap() {}
