'use client'

import { useRef, useState, type ReactNode, type MouseEvent } from 'react'
import dynamic from 'next/dynamic'

const BookingFlow = dynamic(() => import('./booking-flow').then(module => module.BookingFlow), { ssr: false })

export function BookingModalHost({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const trigger = useRef<HTMLElement | null>(null)

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href]')
    if (!link) return
    const url = new URL(link.href, window.location.href)
    if (url.origin !== window.location.origin || url.pathname.replace(/\/$/, '') !== '/schedule-appointment-now') return
    event.preventDefault()
    trigger.current = link
    setOpen(true)
  }

  function close() {
    setOpen(false)
    requestAnimationFrame(() => trigger.current?.focus({ preventScroll: true }))
  }

  return <div onClickCapture={handleClick}>
    {children}
    {open && <BookingFlow onClose={close} />}
  </div>
}
