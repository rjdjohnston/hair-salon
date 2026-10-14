import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function OurStoryContent() {
  return <>
    <section className="service-intro section-wrap">
      <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Our Story</span></nav>
      <p className="eyebrow">THE HAIR MECHANIX STORY</p>
      <h1>BUILT FOR CONFIDENCE.<br/><em>POWERED BY A GREAT TEAM.</em></h1>
      <p className="service-lead">A single automotive-inspired concept. More than a decade of great grooming. And a commitment to making every guest feel like their best self.</p>
      <Link className="button button-orange" href="/locations">FIND YOUR SHOP <ArrowUpRight size={18}/></Link>
    </section>
    <section className="story section-wrap">
      <div className="story-image"><Image src="/images/hairmx-home.jpg" alt="Vintage automotive photography and leather lounge chairs inside Hair Mechanix" fill sizes="(max-width: 700px) 100vw, 50vw"/><span className="image-label">NOT YOUR AVERAGE BARBERSHOP.</span></div>
      <div className="story-copy"><p className="eyebrow">EXPERTISE MEETS EXCEPTIONAL SERVICE</p><h2>BUILT AROUND<br/><em>EXCEPTIONAL GROOMING.</em></h2>
        <p>Hair Mechanix is where men&apos;s grooming expertise meets exceptional service. Our talented team delivers precision haircuts, grooming services, and personalized attention in a unique automotive-inspired environment that would make Jack Roush Racing jealous.</p>
        <p>From timeless classics to today&apos;s latest trends, we help every guest find a style that fits their personality and lifestyle. Whether you&apos;re looking for a men&apos;s haircut, beard grooming, a complete style refresh, or routine maintenance, you&apos;ll leave feeling confident and looking your best.</p>
        <Link className="text-link" href="/services">EXPLORE OUR SERVICES <ArrowUpRight size={18}/></Link>
      </div>
    </section>
    <section className="service-body section-wrap">
      <article><p className="eyebrow">ONE CONCEPT. A GROWING COMMUNITY.</p><h2>OUR ROOTS.<br/>OUR ROAD AHEAD.</h2>
        <p>What began as a single automotive-themed grooming concept has grown into a recognized brand serving communities across Michigan and beyond. Built on a foundation of outstanding customer service, professional expertise, and a one-of-a-kind experience, Hair Mechanix has spent more than a decade earning the loyalty of guests who appreciate quality, consistency, and attention to detail.</p>
        <p>Today, Hair Mechanix proudly serves guests throughout Michigan and Florida with our locations expanding into Pennsylvania, West Virginia and Ohio. As the brand continues to grow, our commitment remains the same: deliver exceptional grooming services in an environment unlike any other.</p>
        <p>Looking ahead, Hair Mechanix is focused on expanding its footprint, supporting franchise partners, and continuing to evolve with the latest trends, techniques, and services. We are excited about the future and committed to bringing the Hair Mechanix experience to even more communities in the years ahead.</p>
      </article>
      <aside className="careers-apply"><p className="eyebrow">MORE THAN APPEARANCE</p><h3>A little time.<br/>A lot of confidence.</h3><p>We believe a great haircut is about more than appearance — it&apos;s about confidence, professionalism, and taking time for yourself.</p><p>That&apos;s why every Hair Mechanix location is designed to provide a comfortable, welcoming atmosphere paired with exceptional service from experienced stylists and barbers.</p><Link className="button button-orange" href="/careers">JOIN THE TEAM <ArrowUpRight size={18}/></Link></aside>
    </section>
    <section className="visit-section section-wrap"><div><p className="eyebrow">YOUR CHAIR IS WAITING</p><h2>STOP IN.<br/>RELAX. FEEL THE DIFFERENCE.</h2></div><div><p className="service-lead">Whether you&apos;re a longtime guest or visiting for the first time, we invite you to stop in, relax, and experience the difference for yourself.</p><p className="details-note">Opening hours vary by shop. Find your location for hours, directions, and appointment details.</p><Link className="text-link" href="/locations">PLAN YOUR VISIT <ArrowUpRight size={18}/></Link></div></section>
  </>
}
