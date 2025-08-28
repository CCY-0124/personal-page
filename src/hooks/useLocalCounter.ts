'use client'
import { useEffect, useState } from 'react'

export function useLocalCounter(key: string, initial = 0) {
  const [value, setValue] = useState<number>(() => {
    if (typeof window === 'undefined') return initial
    const raw = window.localStorage.getItem(key)
    const n = raw == null ? NaN : Number(raw)
    return Number.isFinite(n) ? n : initial
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, String(value))
    }
  }, [key, value])

  const inc = (delta = 1) => setValue(v => v + delta)
  const reset = () => setValue(initial)

  return { value, inc, reset }
}

