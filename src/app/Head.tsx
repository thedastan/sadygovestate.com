'use client'

import { useEffect, useState } from 'react'
import { SEO_KEY_WORDS, SITE_NAME, SEO_DESCRIPTION } from '@/constants/seo/seo.constants'

const Head = () => {
  const [currentUrl, setCurrentUrl] = useState<string>('')

  useEffect(() => {
    // Обновляем URL только на клиенте
    setCurrentUrl(window.location.href)
  }, [])  // Пустой массив зависимостей означает, что этот код выполнится только один раз после рендеринга на клиенте

  return (
    <head>
      {/* Google Site Verification */}
      <meta
        name="google-site-verification"
        content="fQ0IqJz2eTDIDxVnU7cEV8OYPUrHscc9wXzSRQaozgY"
      />
      {/* Web App Manifest */}
      <link rel="manifest" href="/manifest.json" />
      {/* Favicon */}
      <link
        rel="icon"
        href="/favicon.ico"
        type="image/x-icon"
      />
      {/* Apple Touch Icon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/icon-192x192.png"
      />

      {/* SEO meta tags */}
      <meta name="description" content={SEO_DESCRIPTION} />
      <meta name="keywords" content={SEO_KEY_WORDS} />
      <meta name="author" content="Viktor Sadygov" />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={SITE_NAME} />
      <meta property="og:description" content={SEO_DESCRIPTION} />
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://sadygovestate.com"/>
      <meta property="og:image" content="https://nikaestate.ae/upload/iblock/355/gc78kdwwpfg5p422nc9vmvqyt053gstx.png" />
      {/* Добавляем только после рендеринга на клиенте */}
      {currentUrl && <meta property="og:url" content={currentUrl} />}
      <meta property="og:type" content="website" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SITE_NAME} />
      <meta name="twitter:description" content={SEO_DESCRIPTION} />
      <meta name="twitter:image" content="https://nikaestate.ae/upload/iblock/355/gc78kdwwpfg5p422nc9vmvqyt053gstx.png" />
      
      {/* Mobile web app settings */}
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      {/* SEO robots meta tag */}
      <meta name="robots" content="noindex, nofollow" />

      {/* Viewport settings */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
  )
}

export default Head
