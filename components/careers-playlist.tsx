import { VideoCarousel } from '@/components/video-carousel'

const playlistId = 'PLmt4o0YLVCDM7arzXylkrPI5frRM89B2j'

// Preserve the verified crew lineup when YouTube's public RSS feed fails.
const crewFallback = [
  { id: 'RtGSPJjM_GQ', title: 'Hair Mechanix Stylist Catie!' },
  { id: 'FAl5W1_kc5U', title: 'Hair Mechanix Stylist Renea!' },
  { id: 'vrKAK5-6ovo', title: 'Hair Mechanix Stylist Lashell!' },
  { id: '096aPL2lpZM', title: 'Hair Mechanix Stylist Abby!' },
  { id: 'adFjsSo6zhg', title: "The World's Best Mens Hair Stylist!" },
  { id: 'SQbPmajBsYg', title: 'Looking For The Worlds Best Barbers?' },
  { id: '4SqZRzIyoyw', title: 'How To Style Mens Hair 2021!' },
  { id: 'BX0Z6fDFRsk', title: "Awesome Men's Hair Stylists | 2021" },
  { id: 'dGTTCjAhR_w', title: "Become A Rockin' Stylist for Hair Mechanix! Apply Today!" },
]

function decodeXml(value: string) {
  return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (match, entity: string) => {
    const named: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" }
    if (entity.startsWith('#')) {
      const code = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10)
      return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : match
    }
    return named[entity] ?? match
  })
}

export async function CareersPlaylist({ playlist = playlistId, commercials = false }: { playlist?: string; commercials?: boolean } = {}) {
  let videos: { id: string; title: string }[] = []
  try {
    const response = await fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${playlist}`, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000) })
    if (!response.ok) throw new Error('Playlist unavailable')
    const xml = await response.text()
    videos = Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)).flatMap(([, entry]) => {
      const id = entry.match(/<yt:videoId>([\w-]{11})<\/yt:videoId>/)?.[1]
      const title = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1]
      return id && title ? [{ id, title: decodeXml(title) }] : []
    })
  } catch {
    // Keep the public playlist accessible when YouTube's feed is unavailable.
  }
  return <VideoCarousel videos={videos.length ? videos : playlist === playlistId ? crewFallback : []} playlistId={playlist} commercials={commercials} />
}
