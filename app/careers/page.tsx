import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/home-sections'
import { CareersHero, CareersBenefits, CareersRole, CareersQuestions } from '@/components/careers-content'

export const metadata: Metadata = {
  title: 'Careers at Hair Mechanix | Join the Crew',
  description: 'Explore full-time Michigan barber and cosmetologist opportunities at Hair Mechanix. Competitive earning potential, flexible shifts, training, and a supportive team.',
}

export default function CareersPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader/><main id="main"><CareersHero/><CareersBenefits/><CareersRole/><CareersQuestions/></main><SiteFooter/></>
}
