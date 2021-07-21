function getAlphabet (char_code) {
  return {
    start: isDownCase(char_code) ? 97 : 65,
    end: isDownCase(char_code) ? 122 : 90
  }
}

function isDownCase (char_code) {
  return char_code >= 97 && char_code <= 122
}

function isUpCase (char_code) {
  return char_code >= 65 && char_code <= 90
}

function isLetter (char_code) {
  return false || isDownCase(char_code) || isUpCase(char_code)
}

function encryptChar (char, shift) {
  const code = char.charCodeAt(0)
  if (!isLetter(code)) return char
  const alphabet = getAlphabet(code)
  shift %= 26

  let newCode = code + shift
  newCode -= newCode > alphabet.end ? 26 : 0
  newCode += newCode < alphabet.start ? 26 : 0

  return String.fromCharCode(newCode)
}

export default function caesar (text, shift) {
  if (text === null || shift === null || typeof shift != 'number') return null
  let encrypted_text = ''
  for (let char of text) {
    encrypted_text += encryptChar(char, shift)
  }

  return encrypted_text
}
