import type { Metadata } from 'next'
import { ServicesOverview } from '@/components/service-pages'

export const metadata: Metadata = { title: 'Services | Hair Mechanix', description: 'Explore Hair Mechanix haircuts, beard grooming, color, braids, waxing, facials, scalp treatments, and haircare.' }
export default function Page() { return <ServicesOverview/> }
