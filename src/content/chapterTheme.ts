import type { ChapterTheme } from '../types/content'

export const chapterAccent: Record<ChapterTheme, { color: string; bg: string }> = {
  museum: { color: 'var(--color-gold)', bg: 'var(--color-cream)' },
  cafe: { color: 'var(--color-saffron)', bg: 'var(--color-cream)' },
  animal: { color: 'var(--color-mutedpink)', bg: 'var(--color-babypink)' },
  rain: { color: 'var(--color-sky)', bg: 'var(--color-sky)' },
  night: { color: 'var(--color-maroon)', bg: 'var(--color-lavender)' },
  farm: { color: 'var(--color-emerald)', bg: 'var(--color-cream)' },
  home: { color: 'var(--color-gold)', bg: 'var(--color-cream)' },
  adventure: { color: 'var(--color-royalred)', bg: 'var(--color-cream)' },
  tiny: { color: 'var(--color-mutedpink)', bg: 'var(--color-babypink)' },
  travel: { color: 'var(--color-saffron)', bg: 'var(--color-cream)' },
  'giving-back': { color: 'var(--color-emerald)', bg: 'var(--color-cream)' },
  garage: { color: 'var(--color-maroon)', bg: 'var(--color-cream)' },
  festival: { color: 'var(--color-royalred)', bg: 'var(--color-cream)' },
  photography: { color: 'var(--color-maroon)', bg: 'var(--color-lavender)' },
  sport: { color: 'var(--color-emerald)', bg: 'var(--color-cream)' },
  archive: { color: 'var(--color-gold)', bg: 'var(--color-cream)' },
}
