import { useEffect } from 'react'
import { getElByHash } from '../utils/getElByHash'
import { scrollToEl } from '../utils/scrollToEl'

export const useScrollAfterLoad = (doScroll: boolean) => {
  useEffect(() => {
    if (doScroll) {
      const el = getElByHash()
      scrollToEl(el)
    }
  }, [doScroll])
}
