import type { Metadata } from 'next'
import { ServiceShell } from '@/components/service-pages'
import { FranchiseContent } from '@/components/franchise-content'
export const metadata: Metadata = { title: 'Franchise Opportunities | Own a Hair Mechanix', description: 'Bring Hair Mechanix to your city. Explore our men’s grooming brand, learn about franchise ownership, and start a conversation about your market.' }
export default function FranchisePage() { return <ServiceShell><FranchiseContent/></ServiceShell> }
