export default defineEventHandler(async (event) => {
  const body = await readBody<{ email?: string }>(event)

  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    throw createError({ statusCode: 400, statusMessage: 'Valid email required' })
  }

  // TODO: forward to newsletter provider (Buttondown / ConvertKit / Resend)
  console.info('[newsletter]', body.email)

  return { ok: true }
})
