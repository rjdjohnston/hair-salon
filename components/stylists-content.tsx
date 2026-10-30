import Image from 'next/image'
import { CareersPlaylist } from '@/components/careers-playlist'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const stylists = [
  { name: 'Jackie', location: 'Rochester Hills', slug: 'rochester', image: 'jackie.jpg' },
  { name: 'Audrey', location: 'Waterford', slug: 'waterford', image: 'audrey.jpg' },
  { name: 'Brittany', location: 'Southgate', slug: 'southgate', image: 'brittany.jpg' },
  { name: 'Amber', location: 'Morgantown, WV', slug: 'morgantown', image: 'amber.png' },
  { name: 'Allison', location: 'Auburn Hills', slug: 'auburn-hills', image: 'allison.jpg' },
  { name: 'Jennifer', location: 'Troy', slug: 'troy', image: 'jennifer.jpg' },
]

export function StylistsContent() {
  return <>
    <section className="service-intro section-wrap">
      <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Our Stylists</span></nav>
      <p className="eyebrow">THE PEOPLE BEHIND THE PRECISION</p>
      <h1>GREAT CUTS.<br/><em>EVEN BETTER PEOPLE.</em></h1>
      <p className="service-lead">Meet the Hair Mechanix rock-stars. A talented crew bringing skill, personality, and a little HMX energy to every chair.</p>
      <a className="button button-orange" href="#meet-the-team">MEET THE CREW <ArrowUpRight size={18} aria-hidden="true"/></a>
    </section>
    <section className="stylist-spotlight section-wrap" aria-labelledby="spotlight-title">
      <div className="stylist-feature-photo"><Image src="/images/stylists/miranda.jpg" alt="Miranda, Hair Mechanix stylist in Morgantown" width={500} height={736} sizes="(max-width: 700px) 100vw, 40vw" priority/></div>
      <div className="stylist-feature-copy">
        <p className="eyebrow">STYLIST SPOTLIGHT / MORGANTOWN, WV</p>
        <h2 id="spotlight-title">MEET<br/><em>MIRANDA.</em></h2>
        <p>Great style, genuine connections, and an atmosphere clients love. That&apos;s what Miranda brings to every visit at our Morgantown location.</p>
        <p>We&apos;re giving her a huge shoutout for bringing the HMX energy and helping every client leave feeling their absolute best. Congratulations on being featured as Stylist of the Month!</p>
        <Link className="button button-orange" href="/locations/morgantown">VISIT MIRANDA&apos;S SHOP <ArrowUpRight size={18} aria-hidden="true"/></Link>
      </div>
    </section>
    <CareersPlaylist />
    <section className="stylist-team section-wrap" id="meet-the-team" aria-labelledby="team-title">
      <p className="eyebrow">HAIR MECHANIX ROCK-STARS</p>
      <h2 id="team-title">FIND YOUR PEOPLE.<br/><em>FIND YOUR STYLE.</em></h2>
      <p className="stylist-team-intro">Get to know a few of the faces behind your favorite cuts. Visit their shop page for hours, directions, and appointment details.</p>
      <div className="stylist-grid">{stylists.map(stylist => <article className="stylist-card" key={stylist.name}>
        <Link href={`/locations/${stylist.slug}`} aria-label={`Visit ${stylist.name}'s shop in ${stylist.location}`}><Image src={`/images/stylists/${stylist.image}`} alt={`${stylist.name}, Hair Mechanix stylist in ${stylist.location}`} width={500} height={737} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"/></Link>
        <div className="stylist-card-info"><div><h3>{stylist.name}</h3><p>{stylist.location}</p></div><Link className="stylist-shop-link" href={`/locations/${stylist.slug}`} aria-label={`${stylist.name}: view ${stylist.location} shop`}><ArrowUpRight size={24} aria-hidden="true"/></Link></div>
      </article>)}</div>
      <p className="details-note">Looking for a specific stylist? Contact your local shop to confirm their availability.</p>
    </section>
    <section className="visit-section section-wrap"><div><p className="eyebrow">YOUR NEXT CHAPTER</p><h2>GOT THE SKILLS?<br/>JOIN THE CREW.</h2></div><div><p className="service-lead">Bring your talent and personality to Hair Mechanix. Explore opportunities to build your career with our team.</p><Link className="text-link" href="/careers">EXPLORE CAREERS <ArrowUpRight size={18} aria-hidden="true"/></Link></div></section>
  </>
}
