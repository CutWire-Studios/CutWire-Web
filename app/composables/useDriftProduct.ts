import { DRIFT_VERSION } from './useDriftLinks'

export { DRIFT_VERSION }

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

export async function useDriftProduct() {
  const { gh, releases, flathub, issues, docs } = useDriftLinks()
  const { data } = await useFetch('/api/drift/version', {
    key: 'drift-version-page',
    default: () => ({ version: DRIFT_VERSION }),
  })

  return {
    name: 'CutWire Drift',
    version: data.value.version,
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
