import isArray from 'lodash/isArray'

export function useQueryParam(param: string | Array<string>) {
  const params = new URLSearchParams(window.location.search)
  return isArray(param) ? param.reduce((pv, current) => ({...pv, [current]: params.get(current)}), {}) : params.get(param)
}
