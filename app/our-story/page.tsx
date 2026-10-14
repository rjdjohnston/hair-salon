import type { Metadata } from 'next'
import { ServiceShell } from '@/components/service-pages'
import { OurStoryContent } from '@/components/our-story-content'

export const metadata: Metadata = {
  title: 'Our Story | Hair Mechanix',
  description: 'Discover the Hair Mechanix story: more than a decade of exceptional grooming, automotive-inspired spaces, and a great team. Built for confidence.',
}

export default function OurStoryPage() {
  return <ServiceShell><OurStoryContent/></ServiceShell>
}
