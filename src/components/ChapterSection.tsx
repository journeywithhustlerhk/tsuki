import { motion } from 'framer-motion'
import type { Chapter, ItemStatus } from '../types/content'
import { Collection } from './Collection'
import { chapterAccent } from '../content/chapterTheme'

interface ChapterSectionProps {
  chapter: Chapter
  getStatus: (id: string) => ItemStatus
  onToggleSaved: (id: string) => void
  onComplete: (id: string) => void
}

export function ChapterSection({ chapter, getStatus, onToggleSaved, onComplete }: ChapterSectionProps) {
  const accent = chapterAccent[chapter.theme]

  return (
    <section id={chapter.id} className="scroll-mt-20 border-t border-ink/[0.06] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span
            className="mb-2 inline-block h-1.5 w-10 rounded-full"
            style={{ backgroundColor: accent.color }}
            aria-hidden
          />
          <h2 className="font-display text-3xl text-ink sm:text-4xl">{chapter.title}</h2>
          {chapter.intro && <p className="mt-2 max-w-xl text-ink/60">{chapter.intro}</p>}
          {chapter.quote && <p className="mt-2 font-hand text-xl text-royalred/80">“{chapter.quote}”</p>}
        </motion.div>

        {chapter.collections.map((collection) => (
          <Collection
            key={collection.id}
            collection={collection}
            getStatus={getStatus}
            onToggleSaved={onToggleSaved}
            onComplete={onComplete}
          />
        ))}
      </div>
    </section>
  )
}
