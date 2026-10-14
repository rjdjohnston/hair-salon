'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, MapPin, Scissors } from 'lucide-react'
import { shops, states } from '@/lib/locations'

const steps = ['Location', 'Service & extras', 'Artist', 'Date & time', 'Your details']
const services = [['Haircut', 'A fresh cut, finished your way.'], ['Haircut & beard trim', 'The full refresh, from top to bottom.'], ['Beard trim', 'Clean lines. A sharper finish.']]
const extras = ['Scalp massage', 'Facial waxing', 'Hot towel treatment']
const artists = ['First available', 'Artist A', 'Artist B']
const dates = ['Mon, Oct 19', 'Tue, Oct 20', 'Wed, Oct 21', 'Thu, Oct 22', 'Fri, Oct 23', 'Sat, Oct 24']

export function BookingFlow() {
  const router = useRouter()
  const dialog = useRef<HTMLDialogElement>(null)
  function closeBooking() { router.push('/') }
  useEffect(() => {
    const element = dialog.current
    element?.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { element?.close(); document.body.style.overflow = previousOverflow }
  }, [])
  const [step, setStep] = useState(0)
  const [state, setState] = useState('All states')
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [service, setService] = useState('')
  const [addons, setAddons] = useState<string[]>([])
  const [artist, setArtist] = useState('First available')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [complete, setComplete] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)
  const shop = shops.find(item => item.slug === location)
  const canContinue = step === 0 ? !!shop : step === 1 ? !!service : step === 3 ? !!date && !!time : true
  function go(next: number) { setStep(next); requestAnimationFrame(() => { heading.current?.focus(); heading.current?.scrollIntoView({ block: 'center', behavior: 'smooth' }) }) }
  function choice(value: string, selected: boolean, action: () => void, description?: string) {
    return <button type="button" key={value} aria-pressed={selected} onClick={action} className={`flex w-full items-center justify-between gap-4 border p-5 text-left transition-colors ${selected ? 'border-[var(--brand-orange)] bg-[var(--brand-ink)] text-[var(--brand-cream)]' : 'border-current/25 bg-transparent text-[var(--brand-ink)] hover:border-[var(--brand-orange)]'}`}><span className="flex flex-col gap-2"><span className="text-lg font-semibold">{value}</span>{description && <span className="text-sm leading-relaxed opacity-75">{description}</span>}</span>{selected ? <Check size={20} className="shrink-0"/> : <span className="h-5 w-5 shrink-0 rounded-full border border-current/40"/>}</button>
  }
  return <dialog ref={dialog} aria-labelledby="booking-title" onCancel={event => { event.preventDefault(); closeBooking() }} className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 bg-[var(--brand-cream)] p-0 font-sans text-[var(--brand-ink)]">
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-current/20 bg-[var(--brand-ink)] px-6 py-4 text-[var(--brand-cream)] md:px-12">
      <div><h1 id="booking-title" className="!text-2xl !leading-tight">BOOK A CHAIR.</h1><p className="mt-1 text-sm opacity-75">Design preview · No appointments are created</p></div>
      <button autoFocus type="button" onClick={closeBooking} aria-label="Close booking and return home" className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-current/40 text-2xl hover:bg-[var(--brand-orange)] hover:text-[var(--brand-ink)] focus-visible:outline-2 focus-visible:outline-offset-4">×</button>
    </header>
    <section className="section-wrap details-section !py-8">
      <ol aria-label="Booking progress" className="flex flex-wrap gap-3 border-b border-current/20 pb-6">{steps.map((label, index) => <li key={label}><button type="button" disabled={index > step || complete} aria-current={step === index ? 'step' : undefined} onClick={() => go(index)} className={`flex items-center gap-2 px-3 py-2 text-sm disabled:cursor-default ${step === index ? 'bg-[var(--brand-ink)] text-[var(--brand-cream)]' : 'text-[var(--brand-ink)]'}`}><span>{index < step ? <Check size={16}/> : `${index + 1}.`}</span>{label}</button></li>)}</ol>
      <div className="application-layout mt-10">
        <div className="min-w-0">
          {complete ? <div className="application-confirmation"><Check size={40}/><p className="eyebrow">DESIGN PREVIEW COMPLETE</p><h2>LOOKING SHARP.</h2><p className="text-base leading-relaxed">This is the confirmation screen preview. Your appointment has not been booked, and your contact details have not been saved or sent.</p><button className="button button-orange" onClick={() => { setComplete(false); go(0) }}>EXPLORE AGAIN <ArrowRight size={18}/></button><a className="text-link" href="https://hairmx.com/schedule-appointment-now/" target="_blank" rel="noopener noreferrer">Book a real appointment <ArrowRight size={18}/></a></div> : <>
            <p className="eyebrow">STEP {step + 1} OF 5</p><h2 ref={heading} tabIndex={-1} className="mt-4 text-balance outline-none">{['FIND YOUR SHOP.', 'WHAT ARE WE DOING?', 'PICK YOUR ARTIST.', 'MAKE IT YOUR TIME.', 'ONE LAST THING.'][step]}</h2>
            <div className="mt-7 flex flex-col gap-4">
              {step === 0 && <><div className="application-fields !mt-0"><label>Search locations<input value={search} onChange={e => setSearch(e.target.value)} placeholder="City or ZIP code"/></label><label>State<select value={state} onChange={e => setState(e.target.value)}><option>All states</option>{states.map(s => <option key={s}>{s}</option>)}</select></label></div><div className="flex max-h-96 flex-col gap-3 overflow-y-auto pr-2">{shops.filter(s => (state === 'All states' || s.state === state) && `${s.name} ${s.address}`.toLowerCase().includes(search.toLowerCase())).map(s => choice(s.name, location === s.slug, () => setLocation(s.slug), s.address))}{!shops.some(s => (state === 'All states' || s.state === state) && `${s.name} ${s.address}`.toLowerCase().includes(search.toLowerCase())) && <p>No shops match. Try another city or state.</p>}</div></>}
              {step === 1 && <><p className="text-sm leading-relaxed">Sample service menu. Actual services and pricing vary by shop.</p>{services.map(([name, description]) => choice(name, service === name, () => setService(name), description))}</>}
              {step === 1 && <><h3 className="mt-4 text-2xl">MAKE IT YOUR OWN.</h3><p className="text-base leading-relaxed">Optional extras. Pick a little something extra, or continue without them.</p>{extras.map(name => choice(name, addons.includes(name), () => setAddons(current => current.includes(name) ? current.filter(x => x !== name) : [...current, name])))}</>}
              {step === 2 && <><p className="text-sm leading-relaxed">Sample artist options for this design preview.</p>{artists.map(name => choice(name, artist === name, () => setArtist(name), name === 'First available' ? 'A great cut with the next available member of our crew.' : 'Sample stylist profile · Haircuts & grooming'))}</>}
              {step === 3 && <><p className="text-sm leading-relaxed">October 2026 · Sample dates and times, not live availability.</p><div className="grid grid-cols-2 gap-3">{dates.map(d => choice(d, date === d, () => { setDate(d); setTime('') }))}</div><h3 className="mt-4 text-2xl">CHOOSE A TIME</h3><div className="grid grid-cols-2 gap-3">{['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'].map(t => choice(t, time === t, () => setTime(t)))}</div></>}
              {step === 4 && <form className="application-form" onSubmit={event => { event.preventDefault(); setComplete(true) }}><p className="text-sm leading-relaxed">Preview fields only. Please use sample information, not personal details.</p><div className="application-fields"><label>First name<input autoComplete="off" placeholder="Alex"/></label><label>Last name<input autoComplete="off" placeholder="Sample"/></label><label>Email<input type="email" autoComplete="off" placeholder="alex@example.com"/></label><label>Phone<input type="tel" autoComplete="off" placeholder="(555) 010-1234"/></label><label className="application-wide">Anything we should know?<textarea rows={3} placeholder="Optional notes for your artist"/></label></div><label className="application-consent"><input type="checkbox"/>I understand this is a design preview, not an appointment request.</label><button className="button button-orange" type="submit">PREVIEW CONFIRMATION <ArrowRight size={18}/></button></form>}
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-current/20 pt-6"><button type="button" onClick={() => go(step - 1)} disabled={step === 0} className="flex items-center gap-2 text-sm disabled:invisible"><ArrowLeft size={18}/> Back</button>{step < 4 && <button type="button" disabled={!canContinue} onClick={() => go(step + 1)} className="button button-orange disabled:cursor-not-allowed disabled:opacity-40">CONTINUE <ArrowRight size={18}/></button>}</div>
          </>}
        </div>
        <aside className="self-start"><div className="service-shop-image"><img src="/images/social-inside1.jpg" alt="Inside a Hair Mechanix shop" className="h-full w-full object-cover"/></div><div className="careers-apply"><p className="eyebrow">YOUR VISIT</p><h3 className="mt-5">{shop?.name.toUpperCase() || 'A FRESH START.'}</h3>{shop && <p className="flex items-start gap-2 text-sm"><MapPin size={18} className="shrink-0"/>{shop.address}</p>}<dl className="mt-6 flex flex-col gap-5 text-sm">{[['Service', service || 'Choose your service'], ['Extras', addons.join(', ') || 'None selected'], ['Artist', step >= 2 ? artist : 'Choose your artist'], ['When', date && time ? `${date} · ${time}` : 'Choose a date & time']].map(([label, value]) => <div key={label} className="flex flex-col gap-1"><dt className="opacity-60">{label}</dt><dd>{value}</dd></div>)}</dl><div className="mt-7 flex items-center gap-3 border-t border-current/20 pt-5 text-sm"><Scissors size={20}/><span>Good hair. Great company.</span></div></div></aside>
      </div>
    </section>
  </dialog>
}
