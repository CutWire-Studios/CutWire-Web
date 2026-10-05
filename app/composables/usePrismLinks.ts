export const PRISM_VERSION = '0.1.2'

// Fallback used until /api/prism/version (the prism-version.cutwire.org TXT record) responds.
// Pages are prerendered, so the live version is fetched client-side only.
export function usePrismLinks() {
  const { data } = useFetch('/api/prism/version', {
    key: 'prism-version',
    server: false,
    default: () => ({ version: PRISM_VERSION }),
  })
  const latestAsset = (file: (version: string) => string) =>
    `https://github.com/CutWire-Studios/Prism/releases/latest/download/${file(data.value.version)}`

  return {
    gh: 'https://github.com/CutWire-Studios/Prism',
    releases: 'https://github.com/CutWire-Studios/Prism/releases/latest',
    flathub: 'https://flathub.org/apps/org.cutwire.Prism',
    issues: 'https://github.com/CutWire-Studios/Prism/issues',
    get downloadWindows() { return latestAsset(version => `Prism-Setup-${version}-x64.exe`) },
    get downloadLinux() { return latestAsset(version => `Prism-${version}-x86_64.AppImage`) },
  }
}
