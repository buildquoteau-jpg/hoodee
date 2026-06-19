import { createHmac } from 'crypto'

export async function POST(request) {
  const { password } = await request.json()

  if (!password || password !== process.env.EDIT_PASSWORD) {
    return Response.json({ success: false, error: 'Incorrect password' }, { status: 401 })
  }

  const secret = process.env.EDIT_SECRET || 'fallback-secret'
  const timestamp = Math.floor(Date.now() / 1000)
  const sig = createHmac('sha256', secret).update(String(timestamp)).digest('hex')
  const token = `${timestamp}.${sig}`

  return Response.json({ success: true, token })
}
