import type { Metadata } from 'next'
import { ServiceShell } from '@/components/service-pages'
import { SitemapContent } from '@/components/sitemap-content'

export const metadata: Metadata = { title: 'Site Map | Hair Mechanix', description: 'Explore Hair Mechanix locations, services, careers, articles, and contact information in one organized directory.' }
export default function SitemapPage() { return <ServiceShell><SitemapContent/></ServiceShell> }
