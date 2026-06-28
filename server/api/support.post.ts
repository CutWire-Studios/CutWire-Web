export default defineEventHandler(async (event) => {
  const body = await readBody<{ name?: string, email?: string, message?: string }>(event)

  if (!body.name || !body.email || !body.message) {
    throw createError({ statusCode: 400, statusMessage: 'All fields required' })
  }

  // TODO: send via transactional email (Resend) or forward to inbox
  console.info('[support]', body.name, body.email)

  return { ok: true }
})
