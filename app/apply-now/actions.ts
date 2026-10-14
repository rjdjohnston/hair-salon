'use server'

import { z } from 'zod'
import { db } from '@/lib/db'
import { applications } from '@/lib/db/schema'
import { shops } from '@/lib/locations'

export type ApplicationState = { success: boolean; error?: string; reference?: string }
const schema = z.object({
  id: z.uuid(), name: z.string().trim().min(2).max(120), email: z.email().max(254),
  phone: z.string().trim().min(7).max(30).regex(/^[+\d\s().-]+$/),
  location: z.string().refine(value => shops.some(shop => shop.slug === value)),
  role: z.enum(['Barber', 'Cosmetologist', 'Other']),
  licenseStatus: z.enum(['Licensed', 'License pending', 'Student', 'Not licensed']),
  experience: z.enum(['Newly qualified', 'Less than 1 year', '1–3 years', '3–5 years', '5+ years']),
  availability: z.string().trim().min(2).max(1000), message: z.string().trim().max(3000), consent: z.literal(true),
})

export async function submitApplication(_: ApplicationState, form: FormData): Promise<ApplicationState> {
  if (String(form.get('website') ?? '')) return { success: false, error: 'Unable to submit. Please try again.' }
  const parsed = schema.safeParse({ ...Object.fromEntries(form), consent: form.get('consent') === 'on' })
  if (!parsed.success) return { success: false, error: 'Please check all required fields, select a location, and confirm your consent.' }
  try {
    // Public, insert-only intake: never expose applicant records through a public read endpoint.
    await db.insert(applications).values(parsed.data).onConflictDoNothing({ target: applications.id })
    return { success: true, reference: parsed.data.id }
  } catch {
    return { success: false, error: 'Your application could not be saved. Please try again. Your details are still in the form.' }
  }
}
