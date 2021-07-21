export default function reverseString (string) {
  if (!string) return null
  let reverse = ''

  while (reverse.length !== string.length) {
    reverse += string[string.length - reverse.length - 1]
  }

  return reverse
}
