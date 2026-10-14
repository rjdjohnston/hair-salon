import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const profiles = [
  ['Instagram', '@hairmx', 'Fresh looks. Shop life. Inspiration for your next visit.', 'https://www.instagram.com/hairmx/'],
  ['Facebook', 'Hair Mechanix', 'Stay connected with the Hair Mechanix community.', 'https://www.facebook.com/HairMXUS/'],
  ['YouTube', 'Hair Mechanix', 'Get a closer look at life around the shop.', 'https://www.youtube.com/channel/UC2n1cQ4Zl1ET6huwtpzdN9g/featured'],
  ['X', '@hairmx', 'Follow along with Hair Mechanix.', 'https://twitter.com/hairmx'],
  ['Pinterest', 'Hair Mechanix', 'Save a little inspiration for your next look.', 'https://www.pinterest.com/hairmx/'],
]
export function SocialContent() {
  return <>
    <section className="service-intro section-wrap"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Social</span></nav><p className="eyebrow">INSIDE OUR SHOPS. PART OF YOUR EVERYDAY.</p><h1>THIS IS<br/><em>#HAIRMXLIFE.</em></h1><p className="service-lead">Great cuts. Good company. A place to kick back and be yourself. Get to know the people and personality behind Hair Mechanix.</p><a className="button button-orange" href="https://www.instagram.com/hairmx/" target="_blank" rel="noopener noreferrer">FOLLOW @HAIRMX <ArrowUpRight size={18}/></a></section>
    <section className="story section-wrap"><div className="story-image"><img src="/images/hairmx-home.jpg" alt="Automotive-inspired Hair Mechanix lounge with leather seating" className="social-shop-photo"/><span className="image-label">NOT JUST A CUT. A PLACE TO HANG OUT.</span></div><div className="story-copy"><p className="eyebrow">WELCOME TO THE SHOP</p><h2>COME FOR THE CUT.<br/><em>STAY FOR THE COMPANY.</em></h2><p>With talented stylists and great services, Hair Mechanix is more than a stop on your to-do list. It&apos;s a place to relax, catch up, and leave looking your best.</p><p>Looking for a new look? Bring your inspiration. Our stylists can help you find a style that feels right for you.</p><Link className="text-link" href="/locations">FIND YOUR LOCAL SHOP <ArrowUpRight size={18}/></Link></div></section>
    <section className="section-wrap social-follow"><p className="eyebrow">KEEP UP WITH THE CREW</p><h2>YOUR FEED. A LITTLE FRESHER.</h2><p className="social-intro">See the latest photos and updates on our official channels. Tag your next look with #HAIRMXLIFE.</p><div className="social-profile-list">{profiles.map(([platform, handle, description, url]) => <a key={platform} href={url} target="_blank" rel="noopener noreferrer"><div><span className="eyebrow">{handle}</span><h3>{platform}</h3></div><p>{description}</p><ArrowUpRight size={24} aria-hidden="true"/><span className="sr-only">Opens in a new tab</span></a>)}</div></section>
    <section className="visit-section section-wrap"><div><p className="eyebrow">MAKE #HAIRMXLIFE YOUR EVERYDAY</p><h2>GOOD PEOPLE.<br/>GREAT OPPORTUNITIES.</h2></div><div><p className="service-lead">A fun working environment, friendly clientele, and a team that takes pride in its craft. Discover what a career at Hair Mechanix could look like for you.</p><Link className="button button-orange" href="/careers">EXPLORE CAREERS <ArrowUpRight size={18}/></Link><p className="details-note">Ready to visit instead? <Link href="/locations">Check your shop&apos;s hours and directions.</Link></p></div></section>
  </>
}
