import { useEffect } from 'react'

export function useBodyClass(className: string, condition: boolean) {
  useEffect(() => {
    const { classList } = document.body
    const method = condition ? 'add' : 'remove'
    classList[method](className)
  }, [className, condition])
}
