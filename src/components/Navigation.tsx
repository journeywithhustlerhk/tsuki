import { useEffect, useState } from 'react'
import type { Chapter } from '../types/content'
import { ProgressMoon } from './ProgressMoon'

interface NavigationProps {
  chapters: Chapter[]
  completed: number
  total: number
}

export function Navigation({ chapters, completed, total }: NavigationProps) {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>(chapters[0]?.id ?? '')

  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [chapters])

  return (
    <header className="sticky top-0 z-40 border-b border-ink/[0.06] bg-ivory/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="font-display text-lg tracking-wide text-maroon">
          TSUKI
        </a>

        <nav className="hidden flex-1 items-center gap-1 overflow-x-auto lg:flex">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors ${
                activeId === c.id
                  ? 'bg-maroon/[0.08] text-maroon'
                  : 'text-ink/55 hover:text-ink/85'
              }`}
            >
              {c.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ProgressMoon completed={completed} total={total} />
          <button
            className="rounded-full border border-ink/10 px-3 py-1.5 text-sm text-ink/70 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-chapter-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Chapters
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-chapter-nav" className="flex flex-col gap-1 border-t border-ink/[0.06] px-5 py-3 lg:hidden">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-2 py-2 text-sm ${
                activeId === c.id ? 'bg-maroon/[0.08] text-maroon' : 'text-ink/70'
              }`}
            >
              {c.title}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
