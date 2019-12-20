import { useReducer } from 'react'

export function useSetState(initialState: any) {
  const [state, setState] = useReducer(
    (oldState: any, newState: any) => ({ ...oldState, ...newState }),
    initialState,
  )
  return [state, setState]
}
