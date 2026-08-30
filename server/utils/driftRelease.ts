export interface DriftGithubAsset {
  name: string
  browser_download_url: string
}

export interface DriftGithubRelease {
  tag_name: string
  assets: DriftGithubAsset[]
}

const LATEST_URL = 'https://api.github.com/repos/CutWire-Studios/Drift/releases/latest'
const CACHE_MS = 10 * 60 * 1000

let cache: { expires: number, release: DriftGithubRelease } | null = null

export async function getLatestDriftRelease(): Promise<DriftGithubRelease> {
  if (cache && cache.expires > Date.now())
    return cache.release

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'cutwire.org',
  }

  const token = process.env.GITHUB_TOKEN || process.env.NUXT_GITHUB_TOKEN
  if (token)
    headers.Authorization = `Bearer ${token}`

  const release = await $fetch<DriftGithubRelease>(LATEST_URL, { headers })
  cache = { expires: Date.now() + CACHE_MS, release }
  return release
}
