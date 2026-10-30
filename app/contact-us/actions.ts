'use server'
import { z } from 'zod'
import { db } from '@/lib/db'
import { contactMessages } from '@/lib/db/schema'
import { shops } from '@/lib/locations'
export type ContactState = { success: boolean; error?: string; reference?: string }
const schema = z.object({
  id: z.uuid(), name: z.string().trim().min(2).max(120), email: z.email().max(254),
  phone: z.string().trim().max(30).regex(/^[+\d\s().-]*$/),
  location: z.string().refine(value => value === '' || shops.some(shop => shop.slug === value)),
  topic: z.enum(['General question', 'Visit feedback', 'Other']), message: z.string().trim().min(10).max(3000), consent: z.literal(true),
})
export async function submitContact(_: ContactState, form: FormData): Promise<ContactState> {
  if (form.get('website')) return { success: false, error: 'Unable to submit this message.' }
  const parsed = schema.safeParse({ ...Object.fromEntries(form), consent: form.get('consent') === 'on' })
  if (!parsed.success) return { success: false, error: 'Please check all required fields. Your message must contain at least 10 characters.' }
  try {
    // Public insert-only intake; messages are never exposed through a public read endpoint.
    await db.insert(contactMessages).values(parsed.data).onConflictDoNothing({ target: contactMessages.id })
    return { success: true, reference: parsed.data.id }
  } catch { return { success: false, error: 'Your message could not be saved. Please try again, or call your local shop.' } }
}
