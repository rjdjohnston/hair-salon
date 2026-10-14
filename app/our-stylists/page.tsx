import type { Metadata } from 'next'
import { ServiceShell } from '@/components/service-pages'
import { StylistsContent } from '@/components/stylists-content'

export const metadata: Metadata = {
  title: 'Our Stylists | Hair Mechanix',
  description: 'Meet the Hair Mechanix stylists. Discover our featured team members, find their local shops, and explore careers with the crew.',
}

export default function StylistsPage() {
  return <ServiceShell><StylistsContent /></ServiceShell>
}
