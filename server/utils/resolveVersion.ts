const VERSION_RE = /^\d+\.\d+\.\d+$/

export async function resolveVersion(record: string) {
  const res = await $fetch<{ Answer?: { data: string }[] }>('https://cloudflare-dns.com/dns-query', {
    query: { name: record, type: 'TXT' },
    headers: { accept: 'application/dns-json' },
  })
  const version = res.Answer?.[0]?.data.replaceAll('"', '').trim()
  if (!version || !VERSION_RE.test(version))
    throw createError({ statusCode: 502, statusMessage: 'Version record missing or invalid' })
  return { version }
}
