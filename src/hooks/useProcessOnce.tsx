import { useState, useEffect } from 'react'

export const useProcessOnce = (fn: (t: any) => any, value: any) => {
  const [result, setResult] = useState()
  useEffect(() => {
    if (!result) {
      setResult(fn(value))
    }
  }, [])
  return result || value
}
