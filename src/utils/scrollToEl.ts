type scrollStyle = 'auto' | 'smooth'

export function scrollToEl(el?: HTMLElement, behavior: scrollStyle = 'smooth') {
  const scroll = (top: number = 0) => window.scrollTo({ top, behavior })
  if (el) {
    const top = el.offsetTop
    scroll(top)
  } else {
    scroll(0)
  }
}
