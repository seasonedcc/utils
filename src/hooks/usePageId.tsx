import compact from 'lodash/compact'
import { useMemo } from 'react'

export const usePageId = (
  location: Location = window.location,
  home = 'home',
) => {
  const id = useMemo(() => compact(location.pathname.split('/')).join('-'), [
    location.pathname,
  ])
  return id || home
}
