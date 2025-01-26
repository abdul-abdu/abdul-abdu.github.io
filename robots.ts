import type { MetadataRoute } from 'next'


export default function robots(): MetadataRoute.Robots {
  const isNoindex = process.env.APP_INDEX_MODE === 'NOINDEX'
  const domain = process.env.NEXT_PUBLIC_APP_DOMAIN

  return {
    rules: isNoindex
      ? {
          userAgent: '*',
          disallow: '/',
        }
      : {
          userAgent: '*',
          allow: '/',
        },
    sitemap: `${domain}/sitemap.xml`,
  }
}