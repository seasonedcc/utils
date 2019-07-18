import { useState, useEffect } from 'react'
import debounce from 'lodash/debounce'

export function useWindowDimensions(delay = 300) {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })
  useEffect(() => {
    const update = () =>
      setDimensions({ height: window.innerHeight, width: window.innerWidth })
    const handleResize = debounce(update, delay)
    window.addEventListener('resize', handleResize)
    update()
    return () => window.removeEventListener('resize', handleResize)
  }, [delay])
  return dimensions
}
