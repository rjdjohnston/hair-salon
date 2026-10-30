import type { Metadata } from 'next'
import { ServiceShell } from '@/components/service-pages'
import { SocialContent } from '@/components/social-content'
export const metadata: Metadata = { title: '#HAIRMXLIFE | Hair Mechanix', description: 'Meet the Hair Mechanix community. Follow our official social channels for shop life, haircut inspiration, and the people behind the chairs.' }
export default function SocialPage() { return <ServiceShell><SocialContent/></ServiceShell> }
