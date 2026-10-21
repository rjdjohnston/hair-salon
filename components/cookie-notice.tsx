'use client'

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'

type Preferences = { analytics: boolean; media: boolean }
const denied: Preferences = { analytics: false, media: false }
const ConsentContext = createContext({ preferences: denied, manage: () => {} })
export const useCookieConsent = () => useContext(ConsentContext)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState(denied)
  const [draft, setDraft] = useState(denied)
  const [visible, setVisible] = useState(false)
  const [editing, setEditing] = useState(false)
  const [ready, setReady] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)
  const reopen = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    try {
      const value = document.cookie.split('; ').find(c => c.startsWith('hairmx_consent_v1='))?.split('=')[1]
      const saved = value ? JSON.parse(decodeURIComponent(value)) : null
      if (saved && typeof saved.analytics === 'boolean' && typeof saved.media === 'boolean') {
        setPreferences(saved); setDraft(saved)
      } else setVisible(true)
    } catch { setVisible(true) }
    setReady(true)
  }, [])
  function manage() {
    setDraft(preferences); setEditing(true); setVisible(true)
    requestAnimationFrame(() => heading.current?.focus())
  }
  function save(value: Preferences) {
    document.cookie = `hairmx_consent_v1=${encodeURIComponent(JSON.stringify(value))}; Max-Age=15552000; Path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`
    if (preferences.analytics && !value.analytics) {
      // Reload to stop an analytics script that has already initialized.
      window.location.reload()
      return
    }
    setPreferences(value); setDraft(value); setVisible(false); setEditing(false)
    requestAnimationFrame(() => reopen.current?.focus())
  }
  return <ConsentContext.Provider value={{ preferences, manage }}>
    {children}
    {ready && (visible ? <section className="cookie-notice" aria-labelledby="cookie-popup-title">
      <h2 id="cookie-popup-title" ref={heading} tabIndex={-1}>COOKIES &amp; PRIVACY</h2>
      <p>Necessary cookies remember your choices for six months. Optional analytics help us understand site use; embedded videos connect to YouTube. Both stay off until you allow them. External booking and map websites have their own privacy policies.</p>
      {editing && <fieldset className="cookie-preferences"><legend>Manage preferences</legend>
        <label><input type="checkbox" checked disabled/> Necessary — always on</label>
        <label><input type="checkbox" checked={draft.analytics} onChange={e => setDraft({ ...draft, analytics: e.target.checked })}/> Analytics</label>
        <label><input type="checkbox" checked={draft.media} onChange={e => setDraft({ ...draft, media: e.target.checked })}/> Embedded videos (YouTube)</label>
      </fieldset>}
      <div className="cookie-notice-actions">
        <button type="button" onClick={() => save({ analytics: true, media: true })}>Accept all</button>
        <button type="button" onClick={() => save(denied)}>Reject optional</button>
        {editing ? <button type="button" onClick={() => save(draft)}>Save preferences</button> : <button type="button" onClick={manage}>Manage preferences</button>}
        <a href="https://hairmx.com/privacy-policy-2/">Read our privacy policy</a>
      </div>
    </section> : <button ref={reopen} className="cookie-notice-reopen" type="button" onClick={manage}>Cookie preferences</button>)}
    {process.env.NODE_ENV === 'production' && preferences.analytics && <Analytics />}
  </ConsentContext.Provider>
}
