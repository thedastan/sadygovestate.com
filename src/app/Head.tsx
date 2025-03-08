'use client'

import { useEffect, useState } from 'react'
import { SEO_KEY_WORDS, SITE_NAME, SEO_DESCRIPTION } from '@/constants/seo/seo.constants'

const Head = () => {
  const [currentUrl, setCurrentUrl] = useState<string>('')

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])   

  return (
    <head>
      <meta
        name="google-site-verification"
        content="fQ0IqJz2eTDIDxVnU7cEV8OYPUrHscc9wXzSRQaozgY"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="icon"
        href="/favicon.ico"
        type="image/x-icon"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/icon-192x192.png"
      />

      <meta name="description" content={SEO_DESCRIPTION} />
      <meta name="keywords" content={SEO_KEY_WORDS} />
      <meta name="author" content="Victor Sadygov" />

      <meta property="og:title" content={SITE_NAME} />
      <meta property="og:description" content={SEO_DESCRIPTION} />
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://sadygovestate.com"/>
      <meta property="og:image" content="https://nikaestate.ae/upload/iblock/355/gc78kdwwpfg5p422nc9vmvqyt053gstx.png" />
      {currentUrl && <meta property="og:url" content={currentUrl} />}
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SITE_NAME} />
      <meta name="twitter:description" content={SEO_DESCRIPTION} />
      <meta name="twitter:image" content="https://nikaestate.ae/upload/iblock/355/gc78kdwwpfg5p422nc9vmvqyt053gstx.png" />
      
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="robots" content="noindex, nofollow" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />


      {/* /// */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-LX0WD4LHKC"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LX0WD4LHKC');
        `,
      }} />

      {/* ////// */}

      <script dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s) {
            if(f.fbq)return;
            n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];
            t=b.createElement(e);t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1239094310501637');
          fbq('track', 'PageView');
        `,
      }} />
       <noscript>
        <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1239094310501637&ev=PageView&noscript=1" />
      </noscript>
      
    </head>
  )
}

export default Head
