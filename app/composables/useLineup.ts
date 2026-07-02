// The CutWire product lineup — one source of truth for the homepage gallery
// and the products page grid.
export interface Instrument {
  name: string
  domain: string
  tagline: string
  status: 'live' | 'coming-soon'
  slug?: string
  href?: string
  accent: 'live' | 'cue'
}

export function useLineup(): Instrument[] {
  return [
    {
      name: 'SwitchX',
      domain: 'Live media',
      tagline: 'Trigger. Mix. Create. Live.',
      status: 'live',
      slug: 'switchx',
      href: '/switchx',
      accent: 'live',
    },
  ]
}
