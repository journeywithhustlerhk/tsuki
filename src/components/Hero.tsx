import { motion } from 'framer-motion'
import { heroContent } from '../content/chapters'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* a single quiet decorative arc — the moon TSUKI is named for */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="pointer-events-none absolute -top-24 right-[8%] h-64 w-64 rounded-full opacity-[0.14] blur-[1px] sm:h-80 sm:w-80"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, var(--color-gold), transparent 65%)',
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-hand text-xl text-maroon/70 sm:text-2xl"
      >
        a living scrapbook
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="mt-4 max-w-3xl text-balance text-[2.1rem] font-medium leading-[1.15] text-ink sm:text-5xl"
      >
        {heroContent.title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="mt-8 max-w-md space-y-1.5 font-body text-[0.95rem] italic text-ink/60 sm:text-base"
      >
        {heroContent.opening.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-ink/40"
      >
        <span className="text-xs uppercase tracking-[0.2em]">begin</span>
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
      </motion.div>
    </section>
  )
}
