import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

const globalDb = globalThis as unknown as { applicationPool?: Pool }
export const pool = globalDb.applicationPool ?? new Pool({ connectionString: process.env.DATABASE_URL, max: 3 })
if (process.env.NODE_ENV !== 'production') globalDb.applicationPool = pool
export const db = drizzle(pool, { schema })
