export function isIOS() {
  return navigator && /iPad|iPhone|iPod/.test(navigator.userAgent)
}
