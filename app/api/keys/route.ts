// NOTE: Stytch auth integration pending (Daniel to provide STYTCH_PROJECT_ID + STYTCH_SECRET)
// Demo mode: key management uses X-User-Email header — not production-safe
// Replace with stytchClient.sessions.authenticate() once credentials are provided
import { NextRequest, NextResponse } from 'next/server'
import { createHash, randomBytes } from 'crypto'
import sql from '@/lib/db'

async function getOrCreateUser(email: string) {
  if (!email) return null
  const [existing] = await sql`SELECT * FROM chronozone_users WHERE email = ${email} LIMIT 1`
  if (existing) return existing
  const [newUser] = await sql`INSERT INTO chronozone_users (auth_user_id, email) VALUES (${email}, ${email}) RETURNING *`
  return newUser
}

export async function GET(req: NextRequest) {
  const email = req.headers.get('x-user-email')
  if (!email) return NextResponse.json({ error: 'Stytch not configured yet. Provide X-User-Email header for demo.' }, { status: 401 })
  const user = await getOrCreateUser(email)
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })
  const keys = await sql`
    SELECT id, key_prefix, name, daily_limit, created_at, last_used_at,
      (SELECT COUNT(*) FROM chronozone_api_usage WHERE key_id = chronozone_api_keys.id AND created_at >= CURRENT_DATE)::int AS usage_today
    FROM chronozone_api_keys WHERE user_id = ${user.id} AND revoked_at IS NULL ORDER BY created_at DESC
  `
  return NextResponse.json({ keys })
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const email = req.headers.get('x-user-email') || body.email
  if (!email) return NextResponse.json({ error: 'Stytch not configured. Provide X-User-Email or email in body.' }, { status: 401 })
  const user = await getOrCreateUser(email)
  if (!user) return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
  const rawKey = `cz_${randomBytes(20).toString('hex')}`
  const keyHash = createHash('sha256').update(rawKey).digest('hex')
  const keyPrefix = rawKey.slice(0, 10)
  await sql`INSERT INTO chronozone_api_keys (user_id, key_hash, key_prefix, name, daily_limit) VALUES (${user.id}, ${keyHash}, ${keyPrefix}, ${body.name || 'Default'}, 50)`
  return NextResponse.json({ key: rawKey, message: 'Save this — shown once. Add Stytch credentials to secure this endpoint.' })
}
