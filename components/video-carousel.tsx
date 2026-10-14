'use client'

import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from 'lucide-react'

export function VideoCarousel({ videos, playlistId, commercials = false }: { videos: { id: string; title: string }[]; playlistId: string; commercials?: boolean }) {
  const track = useRef<HTMLUListElement>(null)
  const [playing, setPlaying] = useState<string | null>(null)
  function scroll(direction: number) {
    const element = track.current
    if (!element) return
    const card = element.querySelector('li')
    element.scrollBy({ left: direction * ((card?.getBoundingClientRect().width ?? 320) + 24), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }
  return <section className="section-wrap details-section crew-videos" aria-labelledby="crew-video-heading">
    <div className="crew-video-heading"><div><p className="eyebrow">{commercials ? 'HAIR MECHANIX ON SCREEN' : 'REAL PEOPLE. REAL PERSONALITY.'}</p><h2 id="crew-video-heading">{commercials ? <>THINGS MEN ARE GOOD AT.</> : <>MEET THE <em>CREW.</em></>}</h2><p className="service-lead">{commercials ? 'Our personality. On a bigger screen. Explore the latest Hair Mechanix commercials.' : 'Get to know the people behind the chair.'}</p></div>
      {videos.length > 0 && <div className="crew-video-controls"><button type="button" aria-label="Scroll videos left" aria-controls="crew-video-track" onClick={() => scroll(-1)}><ArrowLeft size={20}/></button><button type="button" aria-label="Scroll videos right" aria-controls="crew-video-track" onClick={() => scroll(1)}><ArrowRight size={20}/></button></div>}
    </div>
    {videos.length ? <ul id="crew-video-track" ref={track} className="crew-video-track" tabIndex={0} aria-label="Hair Mechanix crew videos, scroll horizontally">
      {videos.map((video, index) => <li key={video.id} className="crew-video-card"><div className="crew-video-media">
        {playing === video.id ? <iframe src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&list=${playlistId}`} title={video.title} allow="autoplay; encrypted-media; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <button type="button" onClick={() => setPlaying(video.id)} aria-label={`Play ${video.title}`}><img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" width={480} height={360} loading="lazy"/><span className="crew-video-play"><Play size={24} fill="currentColor" aria-hidden="true"/></span></button>}
      </div><div className="crew-video-caption"><h3>{video.title}</h3><span>{index + 1} / {videos.length}</span></div></li>)}
    </ul> : <p>The video feed is temporarily unavailable. You can still watch the full playlist on YouTube.</p>}
    <a className="text-link" href={`https://www.youtube.com/playlist?list=${playlistId}`} target="_blank" rel="noopener noreferrer">WATCH THE FULL PLAYLIST <ArrowUpRight size={16}/><span className="sr-only"> (opens in a new tab)</span></a>
  </section>
}
