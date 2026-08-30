export const DRIFT_VERSION = '0.5.0'

export const DRIFT_FEATURE_LIST = [
  'Multi-track timeline',
  'GPU effects and transitions',
  'Stickers, titles and shapes',
  'Auto captions from speech',
  'Subject cutouts, masks and green screen',
  'Speed ramps, reverse and beat snap',
  'Audio mixing and noise cleanup',
  'Multicam and scene detection',
  'MCP agent access for Cursor and Claude Code',
  'Export without a watermark',
] as const

export function useDriftProduct() {
  const { gh, releases, flathub, issues, docs } = useDriftLinks()

  return {
    name: 'CutWire Drift',
    version: DRIFT_VERSION,
    gh,
    releases,
    flathub,
    issues,
    docs,
    featureList: [...DRIFT_FEATURE_LIST],
    operatingSystem: 'Linux, Windows, macOS, Android',
    license: 'https://www.gnu.org/licenses/gpl-3.0.html',
  }
}
