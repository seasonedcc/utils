import { useState } from 'react'

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial)
  const toggler = () => setValue(!value)
  return [value, toggler]
}
