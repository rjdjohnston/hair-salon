import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Check, ArrowRight } from 'lucide-react'
import { SiteHeader, bookingUrl } from './site-header'
import { SiteFooter } from './home-sections'
import { services, type Service } from '@/lib/services'

export function ServiceShell({ children }: { children: React.ReactNode }) {
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader/><main id="main">{children}</main><SiteFooter/></>
}

export function ServiceCards({ exclude }: { exclude?: string }) {
  return <div className="service-directory">{services.filter(service => service.slug !== exclude).map((service, index) => <Link className="directory-card" key={service.slug} href={`/services/${service.slug}`}><span className="eyebrow">{String(index + 1).padStart(2, '0')} / MAINTENANCE</span><h3>{service.title}</h3><p>{service.description}</p><span className="text-link">EXPLORE SERVICE <ArrowUpRight size={17}/></span></Link>)}</div>
}

export function ServicesOverview() {
  return <ServiceShell><section className="service-intro section-wrap"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Services</span></nav><p className="eyebrow">PRECISION. PERSONALITY. CONFIDENCE.</p><h1>YOUR LOOK.<br/><em>OUR SPECIALTY.</em></h1><p className="service-lead">From precision cuts to the finishing touches. Explore the full Hair Mechanix service menu and find your next tune-up.</p><a className="button button-orange" href={bookingUrl} aria-haspopup="dialog">BOOK YOUR CHAIR <ArrowUpRight size={18}/></a></section><section className="details-section section-wrap"><div className="section-heading"><div><p className="eyebrow">A LITTLE MAINTENANCE. A BIG DIFFERENCE.</p><h2>THE FULL LINEUP.</h2></div></div><ServiceCards/><p className="details-note">Services, products, prices, and availability vary by location. Choose your shop for current pricing and appointment information.</p></section><section className="visit-section section-wrap"><div><p className="eyebrow">MORE THAN A HAIRCUT</p><h2>THE LITTLE EXTRAS.<br/>INCLUDED.</h2></div><div><p className="service-lead">Every precision haircut includes shampoo, a straight razor neckline clean-up, and a hot towel treatment.</p><Link className="text-link" href="/services/haircuts">EXPLORE PRECISION HAIRCUTS <ArrowRight size={18}/></Link></div></section></ServiceShell>
}

const serviceHeroPhotos: Record<string, { src: string; alt: string; caption: string }> = {
  haircuts: { src: '/images/tuneup-haircut.png', alt: 'Barber using clippers to shape a precision fade', caption: 'PRECISION IN EVERY DETAIL.' },
  'beard-and-shaves': { src: '/images/tuneup-beard.png', alt: 'Barber detailing a beard with a precision trimmer', caption: 'A SHARPER FINISH.' },
  color: { src: '/images/tuneup-color.png', alt: 'Stylist applying hair color with a tint brush and foils', caption: 'COLOR WITH PERSONALITY.' },
  'braids-and-designs': { src: '/images/tuneup-braids.png', alt: 'Stylist creating neatly sectioned cornrow braids', caption: 'CRAFTED TO STAND OUT.' },
  waxing: { src: '/images/tuneup-waxing.png', alt: 'Professional applying wax to shape a client’s eyebrow', caption: 'THE FINISHING TOUCH.' },
  facials: { src: '/images/tuneup-facial.png', alt: 'Client receiving a charcoal sheet mask facial treatment', caption: 'REFRESH YOUR ROUTINE.' },
  'scalp-treatments': { src: '/images/tuneup-scalp.png', alt: 'Stylist massaging a client’s scalp at the shampoo basin', caption: 'RELAX. RESET. RECHARGE.' },
  haircare: { src: '/images/tuneup-haircare.png', alt: 'Barber demonstrating styling cream for use at home', caption: 'YOUR STYLE. EVERY DAY.' },
}

export function ServiceDetail({ service }: { service: Service }) {
  const photo = serviceHeroPhotos[service.slug]
  return <ServiceShell><section className="service-intro section-wrap"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/services">Services</Link><span aria-hidden="true">/</span><span>{service.title}</span></nav><div className={photo ? 'haircut-hero-layout' : undefined}><div className={photo ? 'haircut-hero-copy' : undefined}><p className="eyebrow">{service.title.toUpperCase()}</p><h1>{service.headline}</h1><p className="service-lead">{service.description}</p><a className="button button-orange" href={bookingUrl} aria-haspopup="dialog">FIND YOUR CHAIR <ArrowUpRight size={18}/></a></div>{photo && <figure className="haircut-hero-photo"><Image src={photo.src} alt={photo.alt} width={1024} height={768} sizes="(max-width: 700px) 90vw, 44vw" priority /><figcaption>{photo.caption}</figcaption></figure>}</div></section><section className="service-body section-wrap"><article><p className="eyebrow">YOUR NEXT TUNE-UP</p><h2>{service.title.toUpperCase()}</h2><p>{service.detail}</p><h3>Explore your options</h3><ul className="service-options">{service.options.map(option => <li key={option}><Check size={17} aria-hidden="true"/>{option}</li>)}</ul><p>{service.inclusion}</p></article><aside className="service-aside"><div className="service-shop-image"><Image src="/images/hairmx-home.jpg" alt="The automotive-inspired Hair Mechanix lounge" fill sizes="(max-width: 700px) 90vw, 35vw"/></div><div><p className="eyebrow">GOOD HAIR. GREAT COMPANY.</p><h3>Plan your visit.</h3><p>{service.note}</p><p>Contact your shop for current pricing, available stylists, and appointment details.</p><Link className="button button-orange" href="/locations">FIND YOUR SHOP <ArrowUpRight size={16}/></Link></div></aside></section><section className="details-section section-wrap"><div className="section-heading"><div><p className="eyebrow">KEEP THE GOOD THING GOING</p><h2>MORE MAINTENANCE.</h2></div><Link className="text-link" href="/services">ALL SERVICES <ArrowUpRight size={17}/></Link></div><ServiceCards exclude={service.slug}/></section></ServiceShell>
}
