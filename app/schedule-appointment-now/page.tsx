import type { Metadata } from 'next'
import { ServiceShell } from '@/components/service-pages'
import { BookingFlow } from '@/components/booking-flow'

export const metadata: Metadata = { title: 'Book a Chair | Hair Mechanix', description: 'Explore the Hair Mechanix appointment booking experience. Design preview only.' }
export default function BookingPage() { return <ServiceShell><BookingFlow /></ServiceShell> }
