"use client"

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export const bookingUrl = 'https://hdev.hairmx.com/schedule-appointment-now/'

export function Wordmark() {
  return <img className="wordmark" src="/images/hair-mechanix-logo.png" alt="Hair Mechanix — Man Maintenance" width={150} height={76}/>
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const links = [{ name: 'Services', href: '#services' }, { name: 'Our story', href: '#our-story' }, { name: 'Locations', href: 'https://hdev.hairmx.com/locations/' }, { name: 'Careers', href: 'https://hdev.hairmx.com/careers/' }]
  return <>
    <div className="announcement"><span>GOOD HAIR. GREAT COMPANY. NO NONSENSE.</span><span>WALK IN. KICK BACK. LEAVE SHARP. <ArrowUpRight size={12}/></span></div>
    <header className="site-header">
      <a href="#" aria-label="Hair Mechanix home"><Wordmark /></a>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <a key={link.name} href={link.href}>{link.name}</a>)}</nav>
      <a className="button button-orange header-book" href={bookingUrl} target="_blank" rel="noopener noreferrer">BOOK A CHAIR <ArrowUpRight size={16}/></a>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <a key={link.name} href={link.href} onClick={() => setOpen(false)}>{link.name}<ArrowUpRight size={18}/></a>)}<a href={bookingUrl} target="_blank" rel="noopener noreferrer">Book a chair<ArrowUpRight size={18}/></a></nav>}
    </header>
  </>
}
