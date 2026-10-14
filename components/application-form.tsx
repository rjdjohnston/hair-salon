'use client'

import { useActionState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { submitApplication } from '@/app/apply-now/actions'
import { shops, states } from '@/lib/locations'

export function ApplicationForm({ submissionId }: { submissionId: string }) {
  const [state, action, pending] = useActionState(submitApplication, { success: false })
  if (state.success) return <section className="application-confirmation" role="status"><CheckCircle2 size={40}/><p className="eyebrow">APPLICATION SAVED</p><h2>YOU’RE ON THE LIST.</h2><p>Thank you for your interest in Hair Mechanix. Your application has been saved for review. Keep your reference number for any follow-up with your preferred shop.</p><p>Reference: <code>{state.reference}</code></p><a href="/locations" className="button button-orange">FIND YOUR SHOP <ArrowUpRight size={17}/></a></section>
  return <form action={action} className="application-form">
    <input type="hidden" name="id" value={submissionId}/>
    <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <fieldset disabled={pending}><legend>LET’S GET TO KNOW YOU.</legend><p className="details-note">All fields are required unless marked optional.</p><div className="application-fields">
      <label>Full name<input name="name" autoComplete="name" required minLength={2} maxLength={120}/></label>
      <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254}/></label>
      <label>Phone number<input name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={30}/></label>
      <label>Preferred shop<select name="location" required defaultValue=""><option value="" disabled>Select your location</option>{states.map(state => <optgroup label={state} key={state}>{shops.filter(shop => shop.state === state).map(shop => <option key={shop.slug} value={shop.slug}>{shop.name}</option>)}</optgroup>)}</select></label>
      <label>Position<select name="role" required defaultValue=""><option value="" disabled>Select a position</option>{['Barber','Cosmetologist','Other'].map(value => <option key={value}>{value}</option>)}</select></label>
      <label>License status<select name="licenseStatus" required defaultValue=""><option value="" disabled>Select your status</option>{['Licensed','License pending','Student','Not licensed'].map(value => <option key={value}>{value}</option>)}</select></label>
      <label>Professional experience<select name="experience" required defaultValue=""><option value="" disabled>Select your experience</option>{['Newly qualified','Less than 1 year','1–3 years','3–5 years','5+ years'].map(value => <option key={value}>{value}</option>)}</select></label>
      <label className="application-wide">Availability<textarea name="availability" required minLength={2} maxLength={1000} rows={3} placeholder="Preferred days, shifts, full-time or part-time, and when you can start."/></label>
      <label className="application-wide">Tell us about yourself <span>(optional)</span><textarea name="message" maxLength={3000} rows={5} placeholder="Your skills, training, and what you would bring to the crew. Please do not include sensitive identification or financial information."/></label>
    </div><label className="application-consent"><input type="checkbox" name="consent" required/><span>I confirm these details are accurate and agree that Hair Mechanix may store my application and contact me about employment. <a href="https://hairmx.com/privacy-policy-2/" target="_blank" rel="noopener noreferrer">Privacy policy</a>.</span></label>
    {state.error && <p role="alert" className="application-error">{state.error}</p>}
    <button className="button button-orange" type="submit" disabled={pending}>{pending ? 'SAVING APPLICATION…' : 'SUBMIT APPLICATION'} <ArrowUpRight size={17}/></button>
    <p className="details-note">Your application is saved securely. Submitting does not guarantee an opening or an offer. Compensation and requirements vary by location.</p></fieldset>
  </form>
}
