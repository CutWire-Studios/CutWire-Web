const RELEASES_PAGE = 'https://github.com/CutWire-Studios/Drift/releases/latest'

const ASSET_MATCHERS = {
  windows: (name: string) => /Drift-Setup-.*\.exe$/i.test(name),
  'windows-portable': (name: string) => /Drift-Portable-.*\.zip$/i.test(name),
  linux: (name: string) => /Drift-.*\.AppImage$/i.test(name),
  macos: (name: string) => /Drift-.*-arm64\.dmg$/i.test(name),
} as const

type DriftDownloadAsset = keyof typeof ASSET_MATCHERS

export default defineEventHandler(async (event) => {
  const asset = getRouterParam(event, 'asset') as DriftDownloadAsset | undefined
  const match = asset ? ASSET_MATCHERS[asset] : undefined

  if (!match) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Unknown Drift download',
    })
  }

  setHeader(event, 'Cache-Control', 'public, max-age=300')

  try {
    const release = await getLatestDriftRelease()
    const file = release.assets.find(item => match(item.name))
    if (!file) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Latest Drift release has no matching file',
      })
    }
    return sendRedirect(event, file.browser_download_url, 302)
  }
  catch (error) {
    const status = (error as { statusCode?: number })?.statusCode
    if (status && status < 500)
      throw error
    return sendRedirect(event, RELEASES_PAGE, 302)
  }
})
