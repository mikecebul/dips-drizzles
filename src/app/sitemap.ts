import type { MetadataRoute } from 'next'
import { unstable_cache } from 'next/cache'
import { baseUrl } from '@/lib/baseUrl'

const getSitemap = unstable_cache(
  async (): Promise<MetadataRoute.Sitemap> => {
    if (process.env.NEXT_PUBLIC_IS_LIVE === 'false') {
      return []
    }

    const dateFallback = new Date().toISOString()
    const marketingRoutes = ['', '/menu', '/contact']

    const marketingEntries = marketingRoutes.map((route) => ({
      lastModified: dateFallback,
      url: `${baseUrl}${route}`,
    }))

    return marketingEntries
  },
  ['sitemap'],
  {
    tags: ['sitemap'],
  },
)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return getSitemap()
}
