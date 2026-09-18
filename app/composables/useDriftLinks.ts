export const DRIFT_VERSION = '0.6.0'

const latestAsset = (file: string) =>
  `https://github.com/CutWire-Studios/Drift/releases/latest/download/${file}`

// Outbound links shared by the Drift landing page and its layout chrome.
// Asset filenames include the version; bump DRIFT_VERSION when a new release ships.
export function useDriftLinks() {
  return {
    gh: 'https://github.com/CutWire-Studios/Drift',
    releases: 'https://github.com/CutWire-Studios/Drift/releases/latest',
    flathub: 'https://flathub.org/apps/org.cutwire.Drift',
    issues: 'https://github.com/CutWire-Studios/Drift/issues',
    docs: 'https://docs.cutwire.org/drift',
    android: 'https://github.com/CutWire-Studios/Drift-Android',
    downloadWindows: latestAsset(`Drift-Setup-${DRIFT_VERSION}-x64.exe`),
    downloadWindowsPortable: latestAsset(`Drift-Portable-${DRIFT_VERSION}-x64.zip`),
    downloadLinux: latestAsset(`Drift-${DRIFT_VERSION}-x86_64.AppImage`),
    downloadMacos: latestAsset(`Drift-${DRIFT_VERSION}-arm64.dmg`),
    downloadAndroid: latestAsset(`Drift-${DRIFT_VERSION}-arm64-v8a.apk`),
    downloadAndroid32: latestAsset(`Drift-${DRIFT_VERSION}-armeabi-v7a.apk`),
  }
}
