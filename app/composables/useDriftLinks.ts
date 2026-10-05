export const DRIFT_VERSION = '0.7.5'

// Fallback used until /api/drift/version (the drift-version.cutwire.org TXT record) responds.
// Pages are prerendered, so the live version is fetched client-side only.
export function useDriftLinks() {
  const { data } = useFetch('/api/drift/version', {
    key: 'drift-version',
    server: false,
    default: () => ({ version: DRIFT_VERSION }),
  })
  const releaseAsset = (file: (version: string) => string) =>
    `https://github.com/CutWire-Studios/Drift/releases/download/v${data.value.version}/${file(data.value.version)}`

  return {
    gh: 'https://github.com/CutWire-Studios/Drift',
    releases: 'https://github.com/CutWire-Studios/Drift/releases/latest',
    flathub: 'https://flathub.org/apps/org.cutwire.Drift',
    msStore: 'https://apps.microsoft.com/detail/9PHHBZ07FRSZ',
    issues: 'https://github.com/CutWire-Studios/Drift/issues',
    docs: 'https://docs.cutwire.org/drift',
    android: 'https://github.com/CutWire-Studios/Drift-Android',
    get downloadWindows() { return releaseAsset(version => `Drift-Setup-${version}-x64.exe`) },
    get downloadWindowsPortable() { return releaseAsset(version => `Drift-Portable-${version}-x64.zip`) },
    get downloadLinux() { return releaseAsset(version => `Drift-${version}-x86_64.AppImage`) },
    get downloadMacos() { return releaseAsset(version => `Drift-${version}-arm64.dmg`) },
    get downloadAndroid() { return releaseAsset(version => `Drift-${version}-arm64-v8a.apk`) },
    get downloadAndroid32() { return releaseAsset(version => `Drift-${version}-armeabi-v7a.apk`) },
    get downloadAndroidX86() { return releaseAsset(version => `Drift-${version}-x86_64.apk`) },
  }
}
