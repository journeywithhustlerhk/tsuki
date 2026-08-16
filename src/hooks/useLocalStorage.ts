import { useEffect, useState } from 'react'

/**
 * Minimal localStorage-backed state. This is the whole persistence layer for
 * v1 — see 09_ENGINEERING.md §7. No backend until TSUKI actually needs one.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(key)
      return raw ? (JSON.parse(raw) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage can fail (private mode, quota). TSUKI should never crash over it.
    }
  }, [key, value])

  return [value, setValue] as const
}
