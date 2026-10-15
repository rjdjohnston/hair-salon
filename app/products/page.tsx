import type { Metadata } from 'next'
import { ServiceShell } from '@/components/service-pages'
import { ProductsContent } from '@/components/products-content'

export const metadata: Metadata = {
  title: 'Hair & Beard Products | Hair Mechanix',
  description: 'Explore Hair Mechanix styling products, Billy Jealousy hair and beard care, Layrite styling essentials, and Zenagen. Ask your stylist for a recommendation.',
}

export default function ProductsPage() {
  return <ServiceShell><ProductsContent /></ServiceShell>
}
