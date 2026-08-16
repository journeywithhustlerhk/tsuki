// Project TSUKI — content model
// Keep this file boring on purpose: it's the contract between /content data
// and the components that render it. See 09_ENGINEERING.md §3-4.

export type ItemCategory =
  | 'museum'
  | 'cafe'
  | 'food'
  | 'animal'
  | 'place'
  | 'activity'
  | 'adventure'
  | 'sport'
  | 'festival'
  | 'giving-back'
  | 'home'
  | 'farm'
  | 'garage'
  | 'photography'
  | 'tiny-dream'

// A dream's lifecycle. See 07_COMPONENTS.md §7 and 09_ENGINEERING.md §5.
export type ItemStatus = 'dream' | 'saved' | 'planned' | 'completed' | 'locked'

export interface MemoryDetails {
  date?: string
  location?: string
  photoUrls?: string[]
  story?: string
  mood?: string
  favouriteMoment?: string
  notes?: string
}

// A single experience — a museum, a café, a food hunt, a tiny everyday
// dream. This is the atomic unit TSUKI is built from.
export interface DreamItem {
  id: string
  title: string
  category: ItemCategory
  description?: string
  /** Only used for items sourced from real places (museums, cafés, travel). */
  location?: string
  /** Present once the visitor has recorded something real. Never fabricated. */
  memory?: MemoryDetails
}

export interface Collection {
  id: string
  title: string
  intro?: string
  items: DreamItem[]
  /** Optional milestone unlocked when every item here is completed. */
  achievement?: string
}

export type ChapterTheme =
  | 'museum'
  | 'cafe'
  | 'animal'
  | 'rain'
  | 'night'
  | 'farm'
  | 'home'
  | 'adventure'
  | 'tiny'
  | 'travel'
  | 'giving-back'
  | 'garage'
  | 'festival'
  | 'photography'
  | 'sport'
  | 'archive'

export interface Chapter {
  id: string
  title: string
  theme: ChapterTheme
  /** One or two sentences — the chapter's own small opening thought. */
  intro?: string
  quote?: string
  collections: Collection[]
}
