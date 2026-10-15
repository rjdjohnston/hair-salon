import type { Metadata } from 'next'
import { CareersPlaylist } from '@/components/careers-playlist'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/home-sections'
import { CareersHero, CareersBenefits, CareersRole, CareersQuestions } from '@/components/careers-content'

export const metadata: Metadata = {
  title: 'Careers at Hair Mechanix | Join the Crew',
  description: 'Explore barber and cosmetologist career opportunities at Hair Mechanix across all five states. Learn about earning potential, shifts, training, and opportunities at your preferred shop.',
}

export default function CareersPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader/><main id="main"><CareersHero/><CareersBenefits/><CareersRole/><CareersPlaylist/><CareersQuestions/></main><SiteFooter/></>
}
