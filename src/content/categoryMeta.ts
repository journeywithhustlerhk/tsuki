import type { ItemCategory } from '../types/content'

export const categoryMeta: Record<ItemCategory, { emoji: string; label: string }> = {
  museum: { emoji: '🏛️', label: 'Museum' },
  cafe: { emoji: '☕', label: 'Café' },
  food: { emoji: '🥭', label: 'Food & Drink' },
  animal: { emoji: '🐾', label: 'Animal' },
  place: { emoji: '📍', label: 'Place' },
  activity: { emoji: '✨', label: 'Moment' },
  adventure: { emoji: '🪂', label: 'Adventure' },
  sport: { emoji: '🏸', label: 'Sport' },
  festival: { emoji: '🪔', label: 'Festival' },
  'giving-back': { emoji: '🤍', label: 'Giving Back' },
  home: { emoji: '🏡', label: 'Dream Home' },
  farm: { emoji: '🌾', label: 'Farm' },
  garage: { emoji: '🏍️', label: 'Dream Garage' },
  photography: { emoji: '📷', label: 'Photography' },
  'tiny-dream': { emoji: '🎈', label: 'Tiny Dream' },
}
