'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, MapPin, Phone, Search } from 'lucide-react'
import { shops, states, phoneHref } from '@/lib/locations'
import { useShopLocator } from './shop-locator'

export function LocationDirectory() {
 const [query, setQuery] = useState('')
 const [state, setState] = useState('All states')
 const { nearby, reset } = useShopLocator()
 const results = nearby ? nearby.flatMap(result => shops.filter(shop => shop.slug === result.slug)) : shops.filter(shop => (state === 'All states' || shop.state === state) && `${shop.name} ${shop.state} ${shop.address}`.toLowerCase().includes(query.trim().toLowerCase()))
 return <section id="shop-results" className="details-section section-wrap">{nearby ? <div><h2>SHOPS NEAR YOU.</h2><p>Closest shops by approximate straight-line distance to their ZIP-code centers, not driving distance.</p><button type="button" className="text-link" onClick={reset}>SEARCH MANUALLY</button></div> : <div className="location-filters"><div><label htmlFor="shop-search">Search city, shop, or ZIP code</label><div className="shop-search"><Search size={19} aria-hidden="true"/><input id="shop-search" type="search" placeholder="Where are you headed?" value={query} onChange={event => setQuery(event.target.value)}/></div></div><div><label htmlFor="state-filter">Choose your state</label><select id="state-filter" value={state} onChange={event => setState(event.target.value)}>{['All states', ...states].map(name => <option key={name}>{name}</option>)}</select></div></div>}<p className="details-note" role="status">{results.length} {results.length === 1 ? 'shop' : 'shops'} found</p><div className="service-directory">{results.map(shop => <article className="directory-card location-card" key={shop.slug}><p className="eyebrow">{shop.state.toUpperCase()}</p>{nearby && <p>Approximately {nearby.find(result => result.slug === shop.slug)?.miles.toFixed(1)} miles away</p>}<h2><Link href={`/locations/${shop.slug}`}>{shop.name}</Link></h2><address><MapPin size={18} aria-hidden="true"/>{shop.address}</address><a href={phoneHref(shop.phone)} className="shop-phone"><Phone size={16} aria-hidden="true"/>{shop.phone}</a><Link className="text-link" href={`/locations/${shop.slug}`}>SHOP DETAILS & HOURS <ArrowUpRight size={18}/></Link></article>)}</div>{results.length === 0 && <div className="empty-shops"><h2>LET’S FIND YOUR SHOP.</h2><p>Try another city or ZIP code, or select a different state.</p><button className="button button-orange" onClick={() => {setQuery(''); setState('All states')}}>SHOW ALL LOCATIONS</button></div>}</section>
}
