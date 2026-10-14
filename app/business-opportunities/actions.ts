'use server'
import { z } from 'zod'
import { db } from '@/lib/db'
import { franchiseInquiries } from '@/lib/db/schema'
export type InquiryState = { success: boolean; error?: string; reference?: string }
const schema = z.object({
  id: z.uuid(), name: z.string().trim().min(2).max(120), email: z.email().max(254),
  phone: z.string().trim().min(7).max(30).regex(/^[+\d\s().-]+$/), market: z.string().trim().min(2).max(200),
  timeline: z.enum(['Exploring my options','Within 6 months','6–12 months','More than a year']),
  message: z.string().trim().max(3000), consent: z.literal(true),
})
export async function submitInquiry(_: InquiryState, form: FormData): Promise<InquiryState> {
  if (form.get('website')) return { success: false, error: 'Unable to submit this inquiry.' }
  const parsed = schema.safeParse({ ...Object.fromEntries(form), consent: form.get('consent') === 'on' })
  if (!parsed.success) return { success: false, error: 'Please check your contact details and complete all required fields.' }
  try {
    // Public insert-only intake. No public endpoint exposes investor contact information.
    await db.insert(franchiseInquiries).values(parsed.data).onConflictDoNothing({ target: franchiseInquiries.id })
    return { success: true, reference: parsed.data.id }
  } catch { return { success: false, error: 'Your inquiry could not be saved. Please try again; your details are still here.' } }
}
