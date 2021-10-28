import isArray from 'lodash/isArray'
import isNull from 'lodash/isNull'
import isUndefined from 'lodash/isUndefined'

export function useQueryParam(param: string | Array<string>) {
  if (isNull(param) || isUndefined(param)) throw new Error('Missing param for useQueryParam')
  const params = new URLSearchParams(window.location.search)
  return isArray(param) ? param.reduce((pv, current) => ({...pv, [current]: params.get(current)}), {}) : params.get(param)
}
