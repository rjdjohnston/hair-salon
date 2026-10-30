'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { MapPin } from 'lucide-react'

type Nearby = { slug: string; miles: number }
const LocatorContext = createContext<{ nearby: Nearby[] | null; reset: () => void; locate: () => void; busy: boolean; error: string }>({ nearby: null, reset: () => {}, locate: () => {}, busy: false, error: '' })
export const useShopLocator = () => useContext(LocatorContext)
export function ShopLocator({ children }: { children: ReactNode }) {
 const [nearby, setNearby] = useState<Nearby[] | null>(null)
 const [busy, setBusy] = useState(false)
 const [error, setError] = useState('')
 function locate() {
  if (busy) return
  setError('')
  if (!navigator.geolocation) { setError('Location is unavailable in this browser. Please search manually below.'); return }
  setBusy(true)
  navigator.geolocation.getCurrentPosition(async ({ coords }) => {
   try {
    const response = await fetch('/api/shop-coordinates')
    if (!response.ok) throw new Error('Coordinates unavailable')
    const shops: { slug: string; latitude: number; longitude: number }[] = await response.json()
    const radians = (value: number) => value * Math.PI / 180
    const results = shops.map(shop => {
     const a = Math.sin(radians(shop.latitude - coords.latitude) / 2) ** 2 + Math.cos(radians(coords.latitude)) * Math.cos(radians(shop.latitude)) * Math.sin(radians(shop.longitude - coords.longitude) / 2) ** 2
     return { slug: shop.slug, miles: 3958.8 * 2 * Math.asin(Math.sqrt(Math.min(1, a))) }
    }).sort((a, b) => a.miles - b.miles).slice(0, 6)
    setNearby(results)
    document.getElementById('shop-results')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
   } catch { setError('Nearby shops could not be loaded. Please try again or search manually below.') }
   finally { setBusy(false) }
  }, (failure) => { setBusy(false); setError(failure.code === 1 ? 'Location permission was denied. Allow location access in your browser settings to retry, or search manually below.' : 'Your location could not be determined. Please try again or search manually below.') }, { timeout: 15000, maximumAge: 60000, enableHighAccuracy: false })
 }
 return <LocatorContext.Provider value={{ nearby, reset: () => setNearby(null), locate, busy, error }}>{children}</LocatorContext.Provider>
}
export function LocateShopsButton() {
 const { locate, busy, error } = useShopLocator()
 return <div className="mt-8"><div className="flex flex-wrap items-center gap-4"><button type="button" className="button button-orange" onClick={locate} disabled={busy} aria-busy={busy}><MapPin size={18} aria-hidden="true"/>{busy ? 'LOCATING SHOPS…' : 'LOCATE SHOPS NEAR ME'}</button><a className="button button-orange" href="/schedule-appointment-now">BOOK YOUR CHAIR</a></div><p className="mt-4 max-w-xl text-sm leading-relaxed">Only requests your location when clicked. Your coordinates stay in your browser. Nearby results use approximate ZIP-code distances.</p><p role="status" className="text-sm leading-relaxed">{error}</p></div>
}
