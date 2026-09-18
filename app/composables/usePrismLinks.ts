export const PRISM_VERSION = '0.1.2'

const latestAsset = (file: string) =>
  `https://github.com/CutWire-Studios/Prism/releases/latest/download/${file}`

// Outbound links shared by the Prism landing page and its layout chrome.
// Asset filenames include the version; bump PRISM_VERSION when a new release ships.
export function usePrismLinks() {
  return {
    gh: 'https://github.com/CutWire-Studios/Prism',
    releases: 'https://github.com/CutWire-Studios/Prism/releases/latest',
    flathub: 'https://flathub.org/apps/org.cutwire.Prism',
    issues: 'https://github.com/CutWire-Studios/Prism/issues',
    downloadWindows: latestAsset(`Prism-Setup-${PRISM_VERSION}-x64.exe`),
    downloadLinux: latestAsset(`Prism-${PRISM_VERSION}-x86_64.AppImage`),
  }
}
