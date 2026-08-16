import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { hiddenLetter } from '../content/chapters'

/**
 * A quiet, optional discovery — not a popup, not a trick. See
 * 10_AI_GUIDE.md §31 and PRODUCT_REQUIREMENTS "Hidden Content".
 */
export function HiddenLetter() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex justify-center px-6 py-10">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="font-hand text-lg text-ink/35 underline decoration-dotted underline-offset-4 transition-colors hover:text-ink/60"
        >
          a folded note, tucked between the pages
        </button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 12, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.6 }}
            className="paper-shadow max-w-sm rounded-lg bg-cream px-6 py-6 text-center"
          >
            {hiddenLetter.lines.map((line) => (
              <p key={line} className="font-hand text-xl leading-relaxed text-maroon/85">
                {line}
              </p>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
