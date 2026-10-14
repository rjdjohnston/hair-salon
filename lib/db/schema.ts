import { pgTable, uuid, text, boolean, timestamp } from 'drizzle-orm/pg-core'

export const applications = pgTable('job_applications', {
  id: uuid('id').primaryKey(), name: text('name').notNull(), email: text('email').notNull(), phone: text('phone').notNull(),
  location: text('location').notNull(), role: text('role').notNull(), licenseStatus: text('license_status').notNull(),
  experience: text('experience').notNull(), availability: text('availability').notNull(), message: text('message').notNull().default(''),
  consent: boolean('consent').notNull(), createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})
