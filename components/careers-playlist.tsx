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

const socialPlaylistId = 'PLmt4o0YLVCDPNSv5GfxdNw-MPn1EG0afK'
const socialFallback = [
  { id: 'XLZEsayV3zE', title: 'We Discovered Things Men Are Good At | Hair Mechanix' },
  { id: '32TZHdFKdAU', title: 'Things Men Are Good At..' },
  { id: 'GYgxmgKHxpc', title: "When You've Spent Far Too Long Playing Video Games.." },
  { id: 'uPPqCWy7dPs', title: 'Best Mens Hair Styles For 2020 & Death-Defying Stunts At Hair Mechanix' },
  { id: 'BlrmAeJu9jc', title: 'Go To Your Happy Place With Darren McCarty!' },
  { id: 'hWJJolRcoyM', title: 'First Impressions Matter, See One Of The Artists At Hair Mechanix!' },
  { id: '1XSFcaOiTXg', title: 'Two Men Finally Find Out If A Bear Poops In The Woods | Hair Mechanix' },
  { id: 'mgy7grnM5hk', title: "The Evolution of Men's Haircuts! 1920s to Present Day - Hair Mechanix Cuts for Men!" },
  { id: 'AZnnMmh2-Zc', title: "Why Hair Mechanix Is The Best Place For Men's Haircuts!" },
  { id: 'd_CyA3Jm9dY', title: 'BREAKING NEWS Are You Tired Of Looking Like An Idiot?' },
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
  const fallback = playlist === playlistId ? crewFallback : playlist === socialPlaylistId ? socialFallback : []
  return <VideoCarousel videos={videos.length ? videos : fallback} playlistId={playlist} commercials={commercials} />
}
