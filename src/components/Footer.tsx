import { motion } from 'framer-motion'
import { footerContent } from '../content/chapters'

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.06] px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-lg"
      >
        <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">{footerContent.title}</p>
        <div className="mt-6 space-y-1 font-hand text-xl text-ink/55">
          {footerContent.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-ink/30">Project TSUKI</p>
      </motion.div>
    </footer>
  )
}
