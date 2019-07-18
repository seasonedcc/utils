import last from 'lodash/last'

export function getElByHash() {
  if (window && window.location.hash && window.location.hash.length > 1) {
    const id = last(window.location.hash.split('#'))
    return document.getElementById(id!)
  }
  return null
}
