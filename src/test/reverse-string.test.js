import reverseString from './../reverse-string'

test('Return null/undefined when insert null content', () => {
  expect(reverseString(null)).toBeFalsy()
})

test('Return reverse string', () => {
  expect(reverseString('the secret of magic')).toBe('cigam fo terces eht')
})

test('Return reverse string when the first char is upper case', () => {
  expect(reverseString('The secret of magic')).toBe('cigam fo terces ehT')
})

test('Return reverse string when the last char is upper case', () => {
  expect(reverseString('the secret of magiC')).toBe('Cigam fo terces eht')
})