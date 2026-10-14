'use client'
import { useActionState, useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { submitInquiry } from '@/app/business-opportunities/actions'
export function FranchiseForm() {
  const [state, action, pending] = useActionState(submitInquiry, { success: false })
  const [id, setId] = useState('')
  if (state.success) return <div className="franchise-form franchise-success" role="status"><CheckCircle2 size={40}/><p className="eyebrow">INQUIRY SAVED</p><h3>Your next chapter starts here.</h3><p>Your interest in a Hair Mechanix franchise has been recorded. Keep this reference for your records.</p><code>{state.reference}</code></div>
  return <form className="franchise-form" action={form => { const reference = id || crypto.randomUUID(); setId(reference); form.set('id', reference); action(form) }}>
    <h3>Start the conversation.</h3><p>All fields required unless marked optional.</p>
    <input type="hidden" name="id" value={id}/><div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <fieldset disabled={pending}><div className="franchise-fields">
      <label className="franchise-full">Full name<input name="name" autoComplete="name" required minLength={2} maxLength={120}/></label>
      <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254}/></label>
      <label>Phone number<input name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={30}/></label>
      <label className="franchise-full">Preferred city &amp; state<input name="market" required minLength={2} maxLength={200} placeholder="e.g. Columbus, Ohio"/></label>
      <label className="franchise-full">Your timeline<select name="timeline" defaultValue="" required><option value="" disabled>Select a timeline</option>{['Exploring my options','Within 6 months','6–12 months','More than a year'].map(x => <option key={x}>{x}</option>)}</select></label>
      <label className="franchise-full">What would you like us to know? (optional)<textarea name="message" rows={3} maxLength={3000} placeholder="Your background, ownership goals, or questions"/></label>
    </div><label className="franchise-consent"><input type="checkbox" name="consent" required/><span>I agree to be contacted about my franchise inquiry using the details provided.</span></label>
    {state.error && <p role="alert">{state.error}</p>}<button className="button button-orange" type="submit" disabled={pending}>{pending ? 'SAVING YOUR INQUIRY…' : 'REQUEST A CONVERSATION'}<ArrowUpRight size={18}/></button></fieldset>
  </form>
}
