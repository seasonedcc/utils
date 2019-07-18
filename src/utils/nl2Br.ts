export function nl2Br(content: any) {
  return typeof content === 'string'
    ? content.replace(/(?:\r\n|\r|\n)/g, '<br />')
    : ''
}
