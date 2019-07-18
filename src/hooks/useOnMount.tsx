import { useEffect } from 'react'

export function useOnMount(callback: () => void) {
  useEffect(() => {
    callback()
  }, [])
}
