import caesar from './../caesar-cipher'

test('Encrypt basic text with 16 shift', () => {
  expect(caesar('hello world', 16)).toBe('xubbe mehbt')
})

test('Decrypt encrypted text with -16 shift', () => {
  expect(caesar('xubbe mehbt', -16)).toBe('hello world')
})

test('Return falsy value if string or shift is falsy value', () => {
  expect(caesar(null, 16)).toBeFalsy()
})

test('Encrypt value when text is valid string with setences "null"', () => {
  expect(caesar('null', 16)).toBe('dkbb')
})

test('Wrapping from z to a', () => {
  expect(caesar('abc', 1)).toBe('bcd')
})

test('Keeping the same case', () => {
  expect(caesar('Each Word Capitalized', 13)).toBe('Rnpu Jbeq Pncvgnyvmrq')
})

test('Pontuation', () => {
  expect(caesar('This feature is new. Try test today... Ok?', 13)).toBe('Guvf srngher vf arj. Gel grfg gbqnl... Bx?')
})
