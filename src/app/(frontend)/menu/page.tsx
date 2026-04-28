import { MarketingMenuPage } from '@/components/marketing/marketing-pages'
import { createMarketingMetadata } from '@/lib/marketing-metadata'
import { websiteContent } from '@/lib/website-content'

export const metadata = createMarketingMetadata({
  description: websiteContent.seo.services.description,
  keywords: websiteContent.seo.services.keywords,
  pathname: '/menu',
  title: websiteContent.seo.services.title,
})

export default function MenuPage() {
  return <MarketingMenuPage />
}
