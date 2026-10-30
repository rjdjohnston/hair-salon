'use client'
import { useActionState, useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { submitContact } from '@/app/contact-us/actions'
import { shops } from '@/lib/locations'

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, { success: false })
  const [id, setId] = useState('')
  if (state.success) return <div className="application-confirmation" role="status"><CheckCircle2 size={40} aria-hidden="true"/><p className="eyebrow">MESSAGE SAVED</p><h3>Thanks for reaching out.</h3><p>Your message has been recorded. Keep this reference for your records. For urgent questions or appointment changes, call your shop directly.</p><code>{state.reference}</code></div>
  return <form className="application-form" action={form => { const reference = id || crypto.randomUUID(); setId(reference); form.set('id', reference); action(form) }}>
    <h3>What&apos;s on your mind?</h3><p>All fields required unless marked optional. This form does not book or change an appointment.</p>
    <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <fieldset disabled={pending}><div className="application-fields">
      <label className="application-wide">Full name<input name="name" autoComplete="name" minLength={2} maxLength={120} required/></label>
      <label>Email address<input type="email" name="email" autoComplete="email" maxLength={254} required/></label>
      <label>Phone number (optional)<input type="tel" name="phone" autoComplete="tel" maxLength={30}/></label>
      <label className="application-wide">Your shop (optional)<select name="location" defaultValue=""><option value="">Not shop-specific</option>{shops.map(shop => <option key={shop.slug} value={shop.slug}>{shop.name} · {shop.state}</option>)}</select></label>
      <label className="application-wide">Topic<select name="topic" defaultValue="" required><option value="" disabled>Select a topic</option>{['General question','Visit feedback','Other'].map(topic => <option key={topic}>{topic}</option>)}</select></label>
      <label className="application-wide">Your message<textarea name="message" rows={5} minLength={10} maxLength={3000} required/></label>
    </div><label className="application-consent"><input type="checkbox" name="consent" required/><span>I agree that Hair Mechanix may store my message and contact me using these details. <a href="https://hairmx.com/privacy-policy-2/" target="_blank" rel="noopener noreferrer">Privacy policy</a>.</span></label>
    {state.error && <p role="alert">{state.error}</p>}<button type="submit" className="button button-orange" disabled={pending}>{pending ? 'SAVING YOUR MESSAGE…' : 'SEND MESSAGE'}<ArrowUpRight size={18} aria-hidden="true"/></button></fieldset>
  </form>
}
