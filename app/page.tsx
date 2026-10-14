import { SiteHeader } from '@/components/site-header'
import { Hero, Services, Story, SiteFooter } from '@/components/home-sections'

export default function Home() {
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader/><main id="main"><Hero/><Services/><Story/></main><SiteFooter/></>
}
