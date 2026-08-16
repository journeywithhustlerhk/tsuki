import { useState } from 'react'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { ChapterSection } from './components/ChapterSection'
import { HiddenLetter } from './components/HiddenLetter'
import { Footer } from './components/Footer'
import { MemorySheet } from './components/MemorySheet'
import { chapters, allItems } from './content/chapters'
import { useJourney } from './hooks/useJourney'
import type { DreamItem, ItemStatus } from './types/content'

function App() {
  const { getStatus, setStatus, saveMemory, stats } = useJourney()
  const [activeMemoryItem, setActiveMemoryItem] = useState<DreamItem | null>(null)

  function handleToggleSaved(id: string) {
    const current = getStatus(id)
    setStatus(id, current === 'saved' ? 'dream' : 'saved')
  }

  function handleComplete(id: string) {
    const item = allItems.find((i) => i.id === id)
    if (item) setActiveMemoryItem(item)
  }

  function handleSaveMemory(memory: Parameters<typeof saveMemory>[1]) {
    if (activeMemoryItem) saveMemory(activeMemoryItem.id, memory)
  }

  const getStatusTyped = (id: string): ItemStatus => getStatus(id)

  return (
    <div id="top">
      <Navigation chapters={chapters} completed={stats.completed} total={stats.total} />
      <Hero />

      {chapters.map((chapter) => (
        <ChapterSection
          key={chapter.id}
          chapter={chapter}
          getStatus={getStatusTyped}
          onToggleSaved={handleToggleSaved}
          onComplete={handleComplete}
        />
      ))}

      <HiddenLetter />
      <Footer />

      <MemorySheet item={activeMemoryItem} onClose={() => setActiveMemoryItem(null)} onSave={handleSaveMemory} />
    </div>
  )
}

export default App
