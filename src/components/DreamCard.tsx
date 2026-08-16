import { motion } from 'framer-motion'
import { Check, Bookmark, Camera } from 'lucide-react'
import type { DreamItem, ItemStatus } from '../types/content'
import { categoryMeta } from '../content/categoryMeta'

interface DreamCardProps {
  item: DreamItem
  status: ItemStatus
  onToggleSaved: () => void
  onComplete: () => void
}

export function DreamCard({ item, status, onToggleSaved, onComplete }: DreamCardProps) {
  const meta = categoryMeta[item.category]
  const isCompleted = status === 'completed'
  const isSaved = status === 'saved' || status === 'planned'

  return (
    <motion.div
      layout
      whileHover={{ y: -2 }}
      className={`group relative flex flex-col justify-between rounded-xl border p-4 transition-colors ${
        isCompleted
          ? 'border-gold/40 bg-gradient-to-br from-cream to-paper'
          : 'border-ink/[0.08] bg-paper/70 hover:border-ink/[0.16]'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-lg leading-none" aria-hidden>
          {meta.emoji}
        </span>
        <button
          onClick={onToggleSaved}
          aria-pressed={isSaved}
          aria-label={isSaved ? 'Remove from saved' : 'Save this dream'}
          className={`rounded-full p-1.5 transition-colors ${
            isSaved ? 'text-royalred' : 'text-ink/25 hover:text-ink/50'
          }`}
        >
          <Bookmark className="h-3.5 w-3.5" fill={isSaved ? 'currentColor' : 'none'} />
        </button>
      </div>

      <p className="mt-2 text-[0.95rem] leading-snug text-ink/85">{item.title}</p>
      {item.description && <p className="mt-1 text-xs text-ink/50">{item.description}</p>}
      {item.location && <p className="mt-1 text-xs text-ink/40">{item.location}</p>}

      <button
        onClick={onComplete}
        className={`mt-3 flex items-center gap-1.5 self-start rounded-full px-2.5 py-1 text-xs transition-colors ${
          isCompleted
            ? 'bg-emerald/10 text-emerald'
            : 'bg-ink/[0.04] text-ink/50 hover:bg-ink/[0.08] hover:text-ink/70'
        }`}
      >
        {isCompleted ? (
          <>
            <Check className="h-3 w-3" /> Memory saved
          </>
        ) : (
          <>
            <Camera className="h-3 w-3" /> Mark as experienced
          </>
        )}
      </button>
    </motion.div>
  )
}
