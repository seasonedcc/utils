import { useEffect } from 'react'

export function useHtmlClass(className: string, condition: boolean) {
  useEffect(() => {
    const { classList } = document.documentElement
    const method = condition ? 'add' : 'remove'
    classList[method](className)
  }, [className, condition])
}
