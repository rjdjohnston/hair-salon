import type { Metadata } from 'next'
import Link from 'next/link'
import { ShopLocator, LocateShopsButton } from '@/components/shop-locator'
import { ServiceShell } from '@/components/service-pages'
import { LocationDirectory } from '@/components/location-directory'

export const metadata: Metadata = { title: 'Find Your Shop | Hair Mechanix Locations', description: 'Find your Hair Mechanix in Michigan, Florida, Ohio, Pennsylvania, or West Virginia. Explore shop hours, addresses, phone numbers, and booking.' }
export default function LocationsPage() { return <ServiceShell><ShopLocator><section className="service-intro section-wrap"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Locations</span></nav><p className="eyebrow">27 SHOPS. 5 STATES. ONE HAIR MECHANIX.</p><h1>YOUR NEIGHBORHOOD.<br/><em>YOUR MECHANIX.</em></h1><p className="service-lead">Find your crew, reserve your chair, and leave feeling like yourself. Just a little sharper. Walk-ins welcome.</p><LocateShopsButton/></section><LocationDirectory/></ShopLocator></ServiceShell> }
