import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import type { ItemStatus, MemoryDetails } from '../types/content'
import { allItems } from '../content/chapters'

interface ItemState {
  status: ItemStatus
  memory?: MemoryDetails
}

type JourneyState = Record<string, ItemState>

const STORAGE_KEY = 'tsuki:journey:v1'

/**
 * The one piece of shared state TSUKI needs: what's been saved, planned,
 * completed, and the real memory details attached to completed dreams.
 * Never invents a memory — completing an item just marks it; the memory
 * fields stay empty until the visitor actually fills them in.
 */
export function useJourney() {
  const [state, setState] = useLocalStorage<JourneyState>(STORAGE_KEY, {})

  const getStatus = useCallback(
    (id: string): ItemStatus => state[id]?.status ?? 'dream',
    [state],
  )

  const getMemory = useCallback((id: string) => state[id]?.memory, [state])

  const setStatus = useCallback(
    (id: string, status: ItemStatus) => {
      setState((prev) => ({ ...prev, [id]: { ...prev[id], status } }))
    },
    [setState],
  )

  const saveMemory = useCallback(
    (id: string, memory: MemoryDetails) => {
      setState((prev) => ({ ...prev, [id]: { status: 'completed', memory } }))
    },
    [setState],
  )

  const stats = useMemo(() => {
    const completed = allItems.filter((i) => state[i.id]?.status === 'completed').length
    const saved = allItems.filter((i) => state[i.id]?.status === 'saved').length
    const planned = allItems.filter((i) => state[i.id]?.status === 'planned').length
    return { total: allItems.length, completed, saved, planned }
  }, [state])

  return { getStatus, getMemory, setStatus, saveMemory, stats }
}
