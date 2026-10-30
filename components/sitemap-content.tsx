import { ArrowUpRight } from 'lucide-react'
import { shops, states } from '@/lib/locations'
import { services } from '@/lib/services'
import { articles } from '@/lib/articles'

type Entry = { title: string; href: string }
function LinkGroup({ title, entries }: { title: string; entries: Entry[] }) {
  return <section className="min-w-0"><h3 className="mb-4 text-2xl">{title}</h3><ul className="flex flex-col">{entries.map(entry => <li key={entry.href} className="border-b border-current/15"><a href={entry.href} className="group flex items-center justify-between gap-4 py-4 text-base leading-relaxed hover:text-[var(--brand-orange)] focus-visible:outline-2 focus-visible:outline-offset-4"><span>{entry.title}</span><ArrowUpRight size={16} className="shrink-0" aria-hidden="true"/></a></li>)}</ul></section>
}
export function SitemapContent() {
  return <>
    <section className="service-intro section-wrap"><nav aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Site map</span></nav><p className="eyebrow">FIND YOUR WAY</p><h1>THE WHOLE<br/><em>LINEUP.</em></h1><p className="service-lead">Every shop. Every service. Everything Hair Mechanix, all in one place.</p><nav aria-label="Sitemap sections" className="flex flex-wrap gap-6 text-sm font-semibold uppercase tracking-wider"><a href="#explore">Explore</a><a href="#shops">Our locations</a><a href="#reading">From the blog</a></nav></section>
    <section id="explore" className="section-wrap details-section scroll-mt-28"><p className="eyebrow">YOUR SHORTCUTS</p><h2>GET TO KNOW US.</h2><div className="grid gap-12 md:grid-cols-3">
      <LinkGroup title="Explore" entries={[{title:'Home',href:'/'},{title:'Our story',href:'/our-story'},{title:'Our stylists',href:'/our-stylists'},{title:'Social',href:'/social'},{title:'Contact us',href:'/contact-us'},{title:'Book a chair',href:'/schedule-appointment-now'}]}/>
      <LinkGroup title="Services" entries={[{title:'All services',href:'/services'},...services.map(s=>({title:s.title,href:`/services/${s.slug}`}))]}/>
      <LinkGroup title="Work with us & resources" entries={[{title:'Careers',href:'/careers'},{title:'Apply now',href:'/apply-now'},{title:'Franchise opportunities',href:'/business-opportunities'},{title:'Contact us',href:'/contact-us'},{title:'Privacy policy',href:'https://hairmx.com/privacy-policy-2/'},{title:'Main RSS feed',href:'https://hairmx.com/feed/'},{title:'Comment feed',href:'https://hairmx.com/comments/feed/'}]}/>
    </div></section>
    <section id="shops" className="section-wrap details-section scroll-mt-28"><div className="section-heading"><div><p className="eyebrow">GOOD HAIR IS CLOSER THAN YOU THINK</p><h2>FIND YOUR SHOP.</h2></div><a className="text-link" href="/locations">ALL LOCATIONS <ArrowUpRight size={16}/></a></div><div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">{states.map(state=><LinkGroup key={state} title={state} entries={shops.filter(shop=>shop.state===state).map(shop=>({title:shop.name,href:`/locations/${shop.slug}`}))}/>)}</div></section>
    <section id="reading" className="section-wrap details-section scroll-mt-28"><div className="section-heading"><div><p className="eyebrow">A LITTLE KNOW-HOW</p><h2>FROM THE BLOG.</h2></div><a className="text-link" href="/blog">ALL ARTICLES <ArrowUpRight size={16}/></a></div><div className="grid gap-12 md:grid-cols-2">{[...new Set(articles.map(a=>a.category))].map(category=><LinkGroup key={category} title={category} entries={articles.filter(a=>a.category===category).map(a=>({title:a.title,href:`/blog/${a.slug}`}))}/>)}</div></section>
  </>
}
