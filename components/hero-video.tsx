'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'
import { useState } from 'react'
import { useCookieConsent } from './cookie-notice'

export function HeroVideo() {
  const [playing, setPlaying] = useState(false)
  const { preferences, manage } = useCookieConsent()

  return <figure className="home-hero-video">
    <div className="home-hero-video-media">
      {playing && preferences.media ? <iframe src="https://www.youtube-nocookie.com/embed/d_CyA3Jm9dY?autoplay=1&rel=0" title="Hair Mechanix — your chair is waiting" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <button type="button" aria-label={preferences.media ? 'Play Hair Mechanix video' : 'Enable embedded videos to watch Hair Mechanix'} onClick={() => { if (!preferences.media) { manage(); return } setPlaying(true) }}>
        <Image src="/images/home-video-poster.jpg" alt="" fill sizes="(max-width: 900px) 90vw, 44vw" priority />
        <span className="home-hero-play"><Play size={28} fill="currentColor" aria-hidden="true" /></span>
        <span className="home-hero-video-label">WATCH HAIR MECHANIX</span>
      </button>}
    </div>
    <figcaption><span>YOUR CHAIR IS WAITING.</span><a href="https://www.youtube.com/watch?v=d_CyA3Jm9dY" target="_blank" rel="noopener noreferrer">Watch on YouTube<span className="sr-only"> (opens in a new tab)</span></a></figcaption>
  </figure>
}
