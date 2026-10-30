import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/lib/services'
import { ServiceDetail } from '@/components/service-pages'

type Props = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find(item => item.slug === slug)
  if (!service) return { title: 'Service not found | Hair Mechanix' }
  return { title: `${service.title} | Hair Mechanix`, description: service.description }
}
export default async function Page({ params }: Props) {
  const { slug } = await params
  const service = services.find(item => item.slug === slug)
  if (!service) notFound()
  return <ServiceDetail service={service}/>
}
