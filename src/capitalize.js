export default function capitalize (string) {
  if (!string) return undefined
  let str = ''
  while (str.length != string.length) {
    if (str.length == 0) {
      str += string[0].toUpperCase()
    } else {
      str += string[str.length]
    }
  }
  return str
}
