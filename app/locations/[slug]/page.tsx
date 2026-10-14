import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { shops } from '@/lib/locations'
import { LocationDetail } from '@/components/location-detail'

export function generateStaticParams() { return shops.map(({slug}) => ({slug})) }
export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> { const {slug} = await params; const shop = shops.find(item => item.slug === slug); if (!shop) return {title: 'Shop not found | Hair Mechanix'}; return {title: `${shop.name}, ${shop.state} | Hair Mechanix`, description: `Visit Hair Mechanix ${shop.name} at ${shop.address}. Call ${shop.phone}, check shop hours, get directions, and book your next haircut.`} }
export default async function LocationPage({params}: {params: Promise<{slug: string}>}) { const {slug} = await params; const shop = shops.find(item => item.slug === slug); if (!shop) notFound(); return <LocationDetail shop={shop}/> }
