export default function reverseString (string) {
  return string ? [...string].reverse().join('') : null
}
