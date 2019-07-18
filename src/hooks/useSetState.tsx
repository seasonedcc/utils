import { useReducer } from 'react'

export function useSetState(initialState: any) {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    initialState,
  )
  return [state, setState]
}
