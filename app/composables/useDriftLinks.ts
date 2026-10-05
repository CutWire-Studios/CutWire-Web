export const DRIFT_VERSION = '0.7.0'

const releaseAsset = (file: string) =>
  `https://github.com/CutWire-Studios/Drift/releases/download/v${DRIFT_VERSION}/${file}`

// Outbound links shared by the Drift landing page and its layout chrome.
// Asset filenames include the version; bump DRIFT_VERSION when a new release ships.
export function useDriftLinks() {
  return {
    gh: 'https://github.com/CutWire-Studios/Drift',
    releases: 'https://github.com/CutWire-Studios/Drift/releases/latest',
    flathub: 'https://flathub.org/apps/org.cutwire.Drift',
    msStore: 'https://apps.microsoft.com/detail/9PHHBZ07FRSZ',
    issues: 'https://github.com/CutWire-Studios/Drift/issues',
    docs: 'https://docs.cutwire.org/drift',
    android: 'https://github.com/CutWire-Studios/Drift-Android',
    downloadWindows: releaseAsset(`Drift-Setup-${DRIFT_VERSION}-x64.exe`),
    downloadWindowsPortable: releaseAsset(`Drift-Portable-${DRIFT_VERSION}-x64.zip`),
    downloadLinux: releaseAsset(`Drift-${DRIFT_VERSION}-x86_64.AppImage`),
    downloadMacos: releaseAsset(`Drift-${DRIFT_VERSION}-arm64.dmg`),
    downloadAndroid: releaseAsset(`Drift-${DRIFT_VERSION}-arm64-v8a.apk`),
    downloadAndroid32: releaseAsset(`Drift-${DRIFT_VERSION}-armeabi-v7a.apk`),
  }
}
