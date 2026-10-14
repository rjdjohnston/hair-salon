import { ArrowUpRight } from 'lucide-react'

const menu = [
  ['Precision haircuts', 'Classic clipper cuts, scissor cuts, zero fades, skin fades, buzz cuts, and complete head shaves.'],
  ['Face maintenance', 'Classic straight razor shaves, beard clean-ups, detailed beard trims, goatee and mustache grooming, and Beardtopia treatments.'],
  ['Coloring', 'Natural and permanent color, highlights, brow tint, and facial hair tint.'],
  ['Braids & detail work', 'Braid services for men and women, line art, detailed designs, hairline detailing, and hard parts.'],
  ['Waxing', 'Eyebrow, ear, nose, and centerbrow waxing for men and women.'],
  ['Facials', 'Skin rejuvenation and exfoliation, plus detoxifying, tightening, and hydrating charcoal sheet masks.'],
  ['Scalp treatments', '5- or 10-minute scalp massages with conditioning treatments, plus relaxing shampoo and conditioner services.'],
  ['Take-home haircare', 'Billy Jealousy, Layrite, Zenagen, and Hair Mechanix matte cream and texturizing powders. Ask your stylist for recommendations.'],
]
const locations = [
  { state: 'Michigan', shops: [['Auburn Hills','auburn-hills'],['Brighton','brighton'],['Davison','davison'],['Grand Blanc','grand-blanc'],['Howell','howell'],['Livonia','livonia'],['Macomb','clinton-township'],['Monroe','monroe'],['Rochester','rochester'],['Shelby','shelby'],['Southgate','southgate'],['Sterling Heights','sterling-heights'],['Troy','troy'],['Waterford','waterford'],['Westland','westland']] },
  { state: 'Florida', shops: [['Jacksonville · Beach Blvd.','jacksonville'],['Jacksonville · Mandarin','san-jose-blvd-jacksonville'],['Clearwater','/hair-mechanix-clearwater/'],['Middleburg','middleburg'],['Palm Harbor','/hair-mechanix-palm-harbor/'],['St. Augustine','st-augustine'],['World Golf Village','world-golf'],['Yulee','yulee']] },
  { state: 'Ohio', shops: [['Centerville','centerville']] },
  { state: 'Pennsylvania', shops: [['Bethel Park','bethel-park'],['Washington','washington-pennsylvania']] },
  { state: 'West Virginia', shops: [['Morgantown','morgantown']] },
]

export function FullServiceMenu() {
  return <section className="details-section section-wrap" aria-labelledby="full-menu"><div className="section-heading"><div><p className="eyebrow">THE COMPLETE TUNE-UP</p><h2 id="full-menu">MORE WAYS TO LOOK SHARP.</h2></div></div><div className="detail-menu">{menu.map(([title, text]) => <details key={title}><summary>{title}<span aria-hidden="true">+</span></summary><p>{text}</p></details>)}</div><p className="details-note">Services and availability vary by shop. Contact your location for pricing and details.</p><a className="text-link" href="/services">FULL SERVICE & PRODUCT DETAILS <ArrowUpRight size={16}/></a></section>
}

export function BusinessDetails() {
  return <>
    <section id="locations" className="details-section section-wrap" aria-labelledby="locations-heading"><div className="section-heading"><div><p className="eyebrow">YOUR NEIGHBORHOOD. YOUR CHAIR.</p><h2 id="locations-heading">FIND YOUR MECHANIX.</h2></div><a className="text-link" href="/locations">ALL LOCATIONS <ArrowUpRight size={16}/></a></div><p className="details-note">Walk-ins welcome. Select a shop for its address, phone number, local hours, and appointment information.</p><div className="location-groups">{locations.map(({state, shops}) => <details key={state} open={state==='Michigan'}><summary>{state}<span>{shops.length} locations <span aria-hidden="true">+</span></span></summary><div className="shop-links">{shops.map(([name, slug]) => <a key={slug} href={`/locations/${slug.replace('/hair-mechanix-', '').replaceAll('/', '')}`}>{name}<ArrowUpRight size={14}/></a>)}</div></details>)}</div></section>
    <section className="visit-section section-wrap" aria-label="Plan your visit"><div><p className="eyebrow">MAKE TIME FOR YOURSELF</p><h2>SHOP HOURS.</h2><dl className="shop-hours">{[['Monday – Thursday','10 am – 8 pm'],['Friday','9 am – 8 pm'],['Saturday','9 am – 5 pm'],['Sunday','9 am – 3 pm']].map(([day,hours])=><div key={day}><dt>{day}</dt><dd>{hours}</dd></div>)}</dl><p className="details-note">General hours from Hair Mechanix. Individual shops may differ—check your location before visiting.</p><a className="text-link" href="https://hairmx.com/holiday-hours/">HOLIDAY HOURS <ArrowUpRight size={16}/></a></div><div className="visit-extras"><div><p className="eyebrow">A LITTLE EXTRA, ON US</p><h3>THE FULL TREATMENT.</h3><p>Precision haircuts include a shampoo, straight razor neck clean-up, and hot towel treatment. Ask your stylist for details.</p><a className="text-link" href="https://hairmx.com/daily-specials/">SEE DAILY SPECIALS <ArrowUpRight size={16}/></a></div><div><p className="eyebrow">YOUR NEXT CUT, IN YOUR POCKET</p><h3>GET THE APP.</h3><div className="app-links"><a href="https://itunes.apple.com/us/app/hair-mechanix-detroits-best-barbershop/id1255252244?mt=8">App Store <ArrowUpRight size={16}/></a><a href="https://play.google.com/store/apps/details?id=com.vrmetro.hairmx">Google Play <ArrowUpRight size={16}/></a></div></div></div></section>
    <section className="opportunities section-wrap" aria-label="Join Hair Mechanix"><article><p className="eyebrow">GREAT ARTISTS. GREAT OPPORTUNITIES.</p><h3>JOIN THE CREW.</h3><p>Hair Mechanix is looking for qualified stylists at all locations. Bring your talent to the family.</p><a className="text-link" href="/careers">APPLY NOW <ArrowUpRight size={16}/></a></article><article><p className="eyebrow">BUILD SOMETHING OF YOUR OWN</p><h3>OWN A HAIR MECHANIX.</h3><p>Explore franchise opportunities with a recognized brand and full franchise support.</p><a className="text-link" href="https://hairmx.com/business-opportunities/">FRANCHISE OPPORTUNITIES <ArrowUpRight size={16}/></a></article></section>
  </>
}

export function ResourceLinks() {
  const resources = [['Our stylists','https://hairmx.com/our-stylists/'],['Blog','https://hairmx.com/blog/'],['Media gallery','https://hairmx.com/hairmxlife/'],['Feedback','https://www.hairmx.com/feedback/'],['Careers','/careers'],['Privacy policy','https://hairmx.com/privacy-policy-2/'],['Site map','https://hairmx.com/site-map/']]
  const socials = [['Instagram','https://www.instagram.com/hairmx/'],['Facebook','https://www.facebook.com/HairMXUS/'],['YouTube','https://www.youtube.com/channel/UC2n1cQ4Zl1ET6huwtpzdN9g/featured'],['X','https://twitter.com/hairmx'],['Pinterest','https://www.pinterest.com/hairmx/']]
  return <div className="resource-links"><nav aria-label="More from Hair Mechanix">{resources.map(([name,url])=><a key={name} href={url}>{name}</a>)}</nav><nav aria-label="Social media">{socials.map(([name,url])=><a key={name} href={url} target="_blank" rel="noopener noreferrer">{name}<ArrowUpRight size={12}/></a>)}</nav></div>
}
