import { SiteHeader } from '@/components/site-header'
import { Hero, Services, Story, SiteFooter } from '@/components/home-sections'
import { FullServiceMenu, BusinessDetails } from '@/components/business-details'

export default function Home() {
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader/><main id="main"><Hero/><Services/><FullServiceMenu/><Story/><BusinessDetails/></main><SiteFooter/></>
}
