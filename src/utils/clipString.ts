export function clipString(text: string, size = 35) {
  const { length } = text
  const first = Math.max(0, Math.floor((size - 3) / 2))
  const last = Math.max(0, Math.ceil(length - first))
  return length < size ? text : `${text.slice(0, first)}...${text.slice(last)}`
}
