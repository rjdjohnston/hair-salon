import type { Metadata } from 'next'
import { ServiceShell } from '@/components/service-pages'
import { BlogDirectory } from '@/components/blog-directory'
export const metadata: Metadata = { title: 'Blog | Hair Mechanix', description: 'Haircut inspiration, grooming advice, and maintenance tips from the Hair Mechanix journal.' }
export default function BlogPage() { return <ServiceShell><BlogDirectory/></ServiceShell> }
