import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight, Scissors, Sparkles, Wind, MapPin, Wrench, Asterisk } from 'lucide-react'
import { bookingUrl, Wordmark } from './site-header'
import { ResourceLinks } from './business-details'

export function Hero() {
  return <>
    <section className="hero" aria-labelledby="hero-heading">
      <Image src="/images/hairmx-home.jpg" alt="Hair Mechanix lounge with a black-and-white vintage automotive photo wall and leather chairs" fill priority sizes="100vw" className="hero-image"/>
      <div className="hero-shade"/>
      <div className="hero-content">
        <div className="eyebrow hero-eyebrow"><span/> PRECISION. PERSONALITY. CONFIDENCE.</div>
        <h1 id="hero-heading">MORE THAN<br/>A HAIRCUT.<br/><em>A TUNE-UP.</em></h1>
        <p>Precision cuts. Good people. A place that gets you.<br className="desktop-break"/> Pull up a chair. We&apos;ll take care of the rest.</p>
        <div className="hero-actions"><a className="button button-orange" href={bookingUrl} aria-haspopup="dialog">BOOK YOUR CHAIR <ArrowUpRight size={18}/></a><a href="/locations" className="location-link"><MapPin size={16}/> FIND YOUR SHOP</a></div>
        <div className="hero-note"><Asterisk className="little-stars" size={15} aria-hidden="true"/> BUILT FOR GUYS. EVERYONE WELCOME.</div>
      </div>
      <div className="heritage-stamp" aria-label="Hair Mechanix, maintenance"><span>LOOK SHARP · FEEL GOOD</span><Scissors size={35} strokeWidth={1.3}/><strong>THE REAL DEAL</strong><span>HAIR MECHANIX</span></div>
      <a href="#services" className="hero-scroll">SCROLL FOR THE GOOD STUFF <ArrowDown size={14}/></a>
      <span className="hero-caption">YOUR CHAIR IS WAITING.</span>
    </section>
    <div className="ticker" aria-label="Precision cuts, hot towel shaves, great vibes, zero pretension">{['PRECISION CUTS', 'HOT TOWEL SHAVES', 'GREAT VIBES', 'ZERO PRETENSION'].map(item => <span key={item}>{item}<Asterisk className="ticker-star" size={25} aria-hidden="true"/></span>)}</div>
  </>
}

const services = [
  { number: '01', title: 'THE CUT', text: 'Fresh fades. Timeless classics. A precision cut that feels like you.', icon: Scissors },
  { number: '02', title: 'THE CLEAN-UP', text: 'Beard detailing and hot lather shaves. It’s all in the details.', icon: Wrench },
  { number: '03', title: 'THE RESET', text: 'Scalp treatments and a little well-earned time to switch off.', icon: Wind },
  { number: '04', title: 'THE EXTRAS', text: 'Color and waxing. The finishing touches to your fresh start.', icon: Sparkles },
]

export function Services() {
  return <section id="services" className="services section-wrap">
    <div className="section-heading"><div><p className="eyebrow">A LITTLE MAINTENANCE. A BIG DIFFERENCE.</p><h2>KEEP YOUR EDGE.</h2></div><a className="text-link" href="/services">EXPLORE ALL SERVICES <ArrowUpRight size={17}/></a></div>
    <div className="service-grid">{services.map(({ number, title, text, icon: Icon }) => <a className="service-card" href={number === '01' ? '/services/haircuts' : number === '02' ? '/services/beard-and-shaves' : number === '03' ? '/services/scalp-treatments' : '/services#main'} key={number}><div className="service-card-top"><Icon size={33} strokeWidth={1.25}/><span>{number}</span></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={21}/></a>)}</div>
    <p className="service-footnote">Every precision haircut includes shampoo, a straight razor neckline clean-up, and a hot towel treatment. Prices, products, and offers vary by location.</p>
  </section>
}

export function Story() {
  return <section id="our-story" className="story section-wrap"><div className="story-image"><Image src="/images/hairmx-home.jpg" alt="Classic car photography and leather seating inside Hair Mechanix" fill sizes="(max-width: 700px) 100vw, 50vw"/><span className="image-label">NOT YOUR AVERAGE BARBERSHOP.</span></div><div className="story-copy"><p className="eyebrow">A LITTLE GRIT. A LOT OF SOUL.</p><h2>BUILT FOR CONFIDENCE.<br/><em>ALL YOUR OWN.</em></h2><p>Born from a single automotive-themed grooming concept, Hair Mechanix has spent more than a decade combining precision haircuts, personalized service, and a one-of-a-kind atmosphere.</p><p>Today, our experienced stylists and barbers serve communities across Michigan, Florida, Pennsylvania, Ohio, and West Virginia. Men&apos;s, women&apos;s, and children&apos;s haircuts—built for confidence, powered by great artists.</p><a className="text-link" href="/our-story">GET TO KNOW US <ArrowUpRight size={18}/></a></div></section>
}

export function SiteFooter() {
  return <><section className="booking-banner section-wrap"><div><p className="eyebrow">SAME YOU. FRESH PERSPECTIVE.</p><h2>LET&apos;S GET YOU DIALED IN.</h2></div><a className="button button-dark" href={bookingUrl} aria-haspopup="dialog">FIND YOUR CHAIR <ArrowRight size={19}/></a></section><footer className="footer section-wrap"><a href="/" aria-label="Hair Mechanix home"><Wordmark/></a><p>Good hair. Real people. Since day one.</p><a href="/locations">FIND A HAIR MECHANIX <ArrowUpRight size={16}/></a><ResourceLinks/><a href="https://hairmx.com/privacy-policy-2/" className="underline underline-offset-4">Privacy Policy</a><div className="footer-bottom"><span>© {new Date().getFullYear()} Hair Mechanix. All rights reserved.</span><span>MAINTENANCE. REIMAGINED.</span></div></footer></>
}
