import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart } from 'lucide-react'
import type { DreamItem, MemoryDetails } from '../types/content'

interface MemorySheetProps {
  item: DreamItem | null
  onClose: () => void
  onSave: (memory: MemoryDetails) => void
}

export function MemorySheet({ item, onClose, onSave }: MemorySheetProps) {
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [story, setStory] = useState('')
  const [mood, setMood] = useState('')
  const [favouriteMoment, setFavouriteMoment] = useState('')

  if (!item) return null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSave({
      date: date || undefined,
      location: location || undefined,
      story: story || undefined,
      mood: mood || undefined,
      favouriteMoment: favouriteMoment || undefined,
    })
    onClose()
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 backdrop-blur-sm sm:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.form
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSubmit}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="paper-shadow max-h-[85vh] w-full max-w-md overflow-y-auto rounded-t-2xl bg-paper p-6 sm:rounded-2xl"
        >
          <div className="mb-4 flex items-start justify-between">
            <div>
              <p className="font-hand text-lg text-royalred">a new memory</p>
              <h3 className="font-display text-2xl text-ink">{item.title}</h3>
            </div>
            <button type="button" onClick={onClose} aria-label="Close" className="text-ink/40 hover:text-ink/70">
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="mb-4 text-xs text-ink/50">
            Fill in only what actually happened. Anything left blank simply stays blank — TSUKI never invents a
            memory.
          </p>

          <div className="space-y-3">
            <label className="block text-sm text-ink/70">
              Date
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 w-full rounded-lg border border-ink/15 bg-ivory px-3 py-2 text-sm text-ink"
              />
            </label>
            <label className="block text-sm text-ink/70">
              Location
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Where did it happen?"
                className="mt-1 w-full rounded-lg border border-ink/15 bg-ivory px-3 py-2 text-sm text-ink placeholder:text-ink/30"
              />
            </label>
            <label className="block text-sm text-ink/70">
              Story
              <textarea
                value={story}
                onChange={(e) => setStory(e.target.value)}
                rows={3}
                placeholder="What do you want to remember about it?"
                className="mt-1 w-full resize-none rounded-lg border border-ink/15 bg-ivory px-3 py-2 text-sm text-ink placeholder:text-ink/30"
              />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="block text-sm text-ink/70">
                Mood
                <input
                  type="text"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  placeholder="Happy, calm..."
                  className="mt-1 w-full rounded-lg border border-ink/15 bg-ivory px-3 py-2 text-sm text-ink placeholder:text-ink/30"
                />
              </label>
              <label className="block text-sm text-ink/70">
                Favourite moment
                <input
                  type="text"
                  value={favouriteMoment}
                  onChange={(e) => setFavouriteMoment(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-ink/15 bg-ivory px-3 py-2 text-sm text-ink placeholder:text-ink/30"
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-royalred py-2.5 text-sm font-medium text-ivory transition-opacity hover:opacity-90"
          >
            <Heart className="h-4 w-4" /> Save this memory
          </button>
        </motion.form>
      </motion.div>
    </AnimatePresence>
  )
}
