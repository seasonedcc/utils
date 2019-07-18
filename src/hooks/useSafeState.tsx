import { useRef, useEffect } from 'react'
import { useSetState } from './useSetState'

export function useSafeState(initialState: any) {
  const [state, setState] = useSetState(initialState)
  const mountedRef = useRef(false)
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])
  const safeSetState = (newState: any) =>
    mountedRef.current && setState(newState)
  return [state, safeSetState]
}
