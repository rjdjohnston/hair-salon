"use client"

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { services } from '@/lib/services'
import { shops, states } from '@/lib/locations'

export const bookingUrl = 'https://hairmx.com/schedule-appointment-now/'

export function Wordmark() {
  return <img className="wordmark" src="/images/hair-mechanix-logo.png" alt="Hair Mechanix — Maintenance" width={150} height={76}/>
}

function NavigationItems({ close }: { close: () => void }) {
  const hoverHandlers = {
    onPointerEnter: (event: ReactPointerEvent<HTMLDetailsElement>) => {
      if (event.pointerType === 'mouse' && event.currentTarget.closest('.desktop-nav')) event.currentTarget.open = true
    },
    onPointerLeave: (event: ReactPointerEvent<HTMLDetailsElement>) => {
      if (event.pointerType === 'mouse' && event.currentTarget.closest('.desktop-nav') && !event.currentTarget.contains(document.activeElement)) event.currentTarget.open = false
    },
  }
  return <>
    <details className="nav-dropdown" {...hoverHandlers}><summary>Services <ChevronDown size={14} aria-hidden="true"/></summary><div className="nav-panel"><a className="nav-overview" href="/services" onClick={close}>Explore all services <ArrowUpRight size={16}/></a><div className="nav-service-list">{services.map(service => <a key={service.slug} href={`/services/${service.slug}`} onClick={close}>{service.title}</a>)}</div></div></details>
    <a href="/#our-story" onClick={close}>Our story</a>
    <details className="nav-dropdown nav-locations" {...hoverHandlers}><summary>Locations <ChevronDown size={14} aria-hidden="true"/></summary><div className="nav-panel"><a className="nav-overview" href="/locations" onClick={close}>Find your shop <ArrowUpRight size={16}/></a><div className="nav-state-list">{states.map(state => <section key={state}><h2>{state}</h2>{shops.filter(shop => shop.state === state).map(shop => <a key={shop.slug} href={`/locations/${shop.slug}`} onClick={close}>{shop.name}</a>)}</section>)}</div></div></details>
    <a href="https://hairmx.com/our-stylists/" onClick={close}>Stylists</a>
    <a href="/careers" onClick={close}>Careers</a>
  </>
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLButtonElement>(null)
  const close = () => {
    headerRef.current?.querySelectorAll<HTMLDetailsElement>('details[open]').forEach(detail => { detail.open = false })
    setOpen(false)
  }
  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) close()
    }
    const resize = () => close()
    document.addEventListener('pointerdown', dismiss)
    window.addEventListener('resize', resize)
    return () => { document.removeEventListener('pointerdown', dismiss); window.removeEventListener('resize', resize) }
  }, [])
  return <>
    <div className="announcement"><span>GOOD HAIR. GREAT COMPANY. NO NONSENSE.</span><span>WALK IN. KICK BACK. LEAVE SHARP. <ArrowUpRight size={12}/></span></div>
    <header className="site-header" ref={headerRef} onKeyDown={event => {
      if (event.key !== 'Escape') return
      const expanded = (event.target as HTMLElement).closest('details')
      if (expanded?.open) { expanded.open = false; expanded.querySelector('summary')?.focus() }
      else { close(); menuRef.current?.focus() }
    }} onToggleCapture={event => {
      const target = event.target as HTMLDetailsElement
      if (target.tagName === 'DETAILS' && target.open) headerRef.current?.querySelectorAll<HTMLDetailsElement>('details[open]').forEach(detail => { if (detail !== target) detail.open = false })
    }}>
      <a href="/" aria-label="Hair Mechanix home"><Wordmark /></a>
      <nav className="desktop-nav" aria-label="Main navigation"><NavigationItems close={close}/></nav>
      <a className="button button-orange header-book" href={bookingUrl} target="_blank" rel="noopener noreferrer">BOOK A CHAIR <ArrowUpRight size={16}/></a>
      <button ref={menuRef} className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { if (open) close(); else setOpen(true) }}>{open ? <X/> : <Menu/>}</button>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"><NavigationItems close={close}/></nav>}
    </header>
  </>
}
