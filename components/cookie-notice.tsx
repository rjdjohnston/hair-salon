'use client'

import { useEffect, useRef, useState } from 'react'

export function CookieNotice() {
  const [visible, setVisible] = useState(false)
  const [ready, setReady] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)
  const reopen = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setVisible(!document.cookie.split('; ').some(cookie => cookie === 'hairmx_cookie_notice=acknowledged'))
    setReady(true)
  }, [])

  function dismiss() {
    document.cookie = `hairmx_cookie_notice=acknowledged; Max-Age=15552000; Path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`
    setVisible(false)
    requestAnimationFrame(() => reopen.current?.focus())
  }

  function showNotice() {
    setVisible(true)
    requestAnimationFrame(() => heading.current?.focus())
  }

  if (!ready) return null

  return <>
    <div className="sr-only" role="status" aria-live="polite">{visible ? 'Cookie and privacy notice available. Review the notice or dismiss it with the Got it button.' : ''}</div>
    {visible ? <section className="cookie-notice" role="region" aria-labelledby="cookie-popup-title" aria-describedby="cookie-popup-description">
      <h2 id="cookie-popup-title" ref={heading} tabIndex={-1}>COOKIES & PRIVACY</h2>
      <p id="cookie-popup-description">Embedded videos and third-party booking or map services may use cookies and similar technologies when you interact with them. Manage cookies in your browser settings. Selecting Got it saves a necessary cookie for six months to remember that you have seen this notice; it does not grant consent to optional cookies.</p>
      <div className="cookie-notice-actions">
        <a href="https://hairmx.com/privacy-policy-2/">Read our privacy policy</a>
        <button type="button" onClick={dismiss}>Got it</button>
      </div>
    </section> : <button ref={reopen} className="cookie-notice-reopen" type="button" onClick={showNotice}>Cookie notice</button>}
  </>
}
