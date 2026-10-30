import type { Metadata } from 'next'
import { ServiceShell } from '@/components/service-pages'
import { ContactContent } from '@/components/contact-content'

export const metadata: Metadata = { title: 'Contact Us | Hair Mechanix', description: 'Get in touch with Hair Mechanix. Contact your local shop, share feedback, or ask a question.' }
export default function ContactPage() { return <ServiceShell><ContactContent /></ServiceShell> }
