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
      name: 'Prism',
      domain: 'Live media',
      tagline: 'Trigger. Mix. Create. Live.',
      status: 'live',
      slug: 'prism',
      href: '/prism',
      accent: 'live',
    },
    {
      name: 'Drift',
      domain: 'Video editing',
      tagline: 'Create polished videos fast.',
      status: 'live',
      slug: 'drift',
      href: '/drift',
      accent: 'cue',
    },
  ]
}
