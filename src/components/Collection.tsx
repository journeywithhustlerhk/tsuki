import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Collection as CollectionType, ItemStatus } from '../types/content'
import { DreamCard } from './DreamCard'

interface CollectionProps {
  collection: CollectionType
  getStatus: (id: string) => ItemStatus
  onToggleSaved: (id: string) => void
  onComplete: (id: string) => void
  defaultCount?: number
}

export function Collection({
  collection,
  getStatus,
  onToggleSaved,
  onComplete,
  defaultCount = 6,
}: CollectionProps) {
  const [expanded, setExpanded] = useState(collection.items.length <= defaultCount)
  const visibleItems = expanded ? collection.items : collection.items.slice(0, defaultCount)
  const completedCount = collection.items.filter((i) => getStatus(i.id) === 'completed').length

  return (
    <div className="mb-10">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <div>
          <h3 className="font-display text-xl text-maroon">{collection.title}</h3>
          {collection.intro && <p className="mt-0.5 max-w-xl text-sm text-ink/55">{collection.intro}</p>}
        </div>
        <span className="whitespace-nowrap text-xs text-ink/40">
          {completedCount}/{collection.items.length}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {visibleItems.map((it) => (
          <DreamCard
            key={it.id}
            item={it}
            status={getStatus(it.id)}
            onToggleSaved={() => onToggleSaved(it.id)}
            onComplete={() => onComplete(it.id)}
          />
        ))}
      </div>

      {collection.items.length > defaultCount && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 flex items-center gap-1 text-sm text-ink/50 hover:text-ink/80"
        >
          {expanded ? 'Show less' : `Show ${collection.items.length - defaultCount} more`}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      )}

      {collection.achievement && completedCount === collection.items.length && (
        <p className="mt-3 font-hand text-lg text-gold">✦ {collection.achievement} — unlocked</p>
      )}
    </div>
  )
}
