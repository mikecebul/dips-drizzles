import { MetadataRoute } from 'next'
import { baseUrl } from '@/lib/baseUrl'

const blockedRoutes = ['/admin', '/next']

export default async function robots(): Promise<MetadataRoute.Robots> {
  if (process.env.NEXT_PUBLIC_IS_LIVE === 'false') {
    return {
      rules: {
        userAgent: '*',
        disallow: ['/'],
      },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: blockedRoutes,
    },
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
