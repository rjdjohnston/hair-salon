import type { Metadata } from 'next'
import { randomUUID } from 'node:crypto'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/home-sections'
import { ApplicationForm } from '@/components/application-form'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = { title: 'Apply Now | Hair Mechanix Careers', description: 'Bring your talent to Hair Mechanix. Apply for barber and cosmetologist opportunities at your preferred shop.' }

export default function ApplyPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader/><main id="main"><section className="service-intro section-wrap"><nav aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/careers">Careers</a><span>/</span><span aria-current="page">Apply now</span></nav><p className="eyebrow">YOUR NEXT CHAIR IS CALLING</p><h1>BRING YOUR TALENT.<br/><em>JOIN THE CREW.</em></h1><p className="service-lead">Great cuts start with great people. Tell us a little about yourself and the shop you&apos;d like to call home.</p></section><section className="section-wrap details-section application-layout"><ApplicationForm submissionId={randomUUID()}/><aside><p className="eyebrow">A CREW IN YOUR CORNER</p><h2>COME AS YOU ARE.<br/>GROW WITH US.</h2><p>Newly licensed or years behind the chair, we&apos;d love to hear about your skills, personality, and goals.</p><h3>BEFORE YOU APPLY</h3><p>Have your contact details, preferred location, license status, and availability ready. No résumé upload is required.</p><a className="text-link" href="/careers">EXPLORE THE PERKS</a><p className="details-note">Questions about a specific shop? <a href="/locations">Find its contact details.</a></p></aside></section></main><SiteFooter/></>
}
