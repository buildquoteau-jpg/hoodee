import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { createHmac } from 'crypto'

const CONTENT_PATH = join(process.cwd(), 'data', 'content.json')

function readContent() {
  try {
    return JSON.parse(readFileSync(CONTENT_PATH, 'utf-8'))
  } catch {
    return {}
  }
}

function writeContent(data) {
  const dir = dirname(CONTENT_PATH)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  writeFileSync(CONTENT_PATH, JSON.stringify(data, null, 2))
}

function verifyToken(token) {
  if (!token) return false
  const parts = token.split('.')
  if (parts.length !== 2) return false
  const [timestamp, sig] = parts
  const age = Math.floor(Date.now() / 1000) - parseInt(timestamp, 10)
  if (isNaN(age) || age < 0 || age > 86400 * 30) return false
  const secret = process.env.EDIT_SECRET || 'fallback-secret'
  const expected = createHmac('sha256', secret).update(timestamp).digest('hex')
  return sig === expected
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') || '/'
  const content = readContent()
  return Response.json(content[page] || {})
}

export async function PUT(request) {
  const token = request.headers.get('x-edit-token')
  if (!verifyToken(token)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { page, key, value } = await request.json()
  if (!page || !key || value === undefined) {
    return Response.json({ error: 'Missing fields' }, { status: 400 })
  }

  const content = readContent()
  if (!content[page]) content[page] = {}
  content[page][key] = value
  writeContent(content)

  return Response.json({ success: true })
}
