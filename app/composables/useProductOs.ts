export type ProductOs = 'linux' | 'windows' | 'macos' | 'android'

export function detectProductOs(): ProductOs {
  if (import.meta.server)
    return 'linux'

  const ua = navigator.userAgent
  if (/Android/i.test(ua))
    return 'android'
  if (/Mac OS X|Macintosh/i.test(ua) && !/iPhone|iPad|iPod/i.test(ua))
    return 'macos'
  if (/Win/i.test(ua))
    return 'windows'
  return 'linux'
}

export function productHeroSrc(product: 'prism' | 'drift') {
  return product === 'prism' ? '/images/prism-hero.jpg' : '/images/drift-hero.jpg'
}
