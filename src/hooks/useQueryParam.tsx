export function useQueryParam(param: string) {
  const params = new URLSearchParams(window.location.search)
  return params.get(param)
}
