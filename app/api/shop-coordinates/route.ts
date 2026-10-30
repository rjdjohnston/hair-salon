import { shops } from '@/lib/locations'

export async function GET() {
 try {
  const coordinates = await Promise.all(shops.map(async shop => {
   const zip = shop.address.match(/\b\d{5}$/)?.[0]
   if (!zip) throw new Error('Missing ZIP')
   const response = await fetch(`https://api.zippopotam.us/us/${zip}`, { next: { revalidate: 604800 }, signal: AbortSignal.timeout(10000) })
   if (!response.ok) throw new Error('ZIP lookup failed')
   const data = await response.json()
   const latitude = Number(data.places?.[0]?.latitude)
   const longitude = Number(data.places?.[0]?.longitude)
   if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) throw new Error('Invalid coordinates')
   return { slug: shop.slug, latitude, longitude }
  }))
  return Response.json(coordinates, { headers: { 'Cache-Control': 'public, max-age=86400' } })
 } catch {
  return Response.json({ error: 'Shop coordinates are temporarily unavailable.' }, { status: 503 })
 }
}
