// Outbound links shared by the Drift landing page and its layout chrome.
// Platform download paths resolve the current GitHub release asset server-side
// so a click starts the file instead of opening the releases page.
export function useDriftLinks() {
  return {
    gh: 'https://github.com/CutWire-Studios/Drift',
    releases: 'https://github.com/CutWire-Studios/Drift/releases/latest',
    flathub: 'https://flathub.org/apps/org.cutwire.Drift',
    issues: 'https://github.com/CutWire-Studios/Drift/issues',
    docs: 'https://docs.cutwire.org/drift',
    android: 'https://github.com/CutWire-Studios/Drift-Android',
    downloadWindows: '/api/drift/download/windows',
    downloadWindowsPortable: '/api/drift/download/windows-portable',
    downloadLinux: '/api/drift/download/linux',
    downloadMacos: '/api/drift/download/macos',
    downloadAndroid: '/api/drift/download/android',
    downloadAndroid32: '/api/drift/download/android-32',
  }
}
