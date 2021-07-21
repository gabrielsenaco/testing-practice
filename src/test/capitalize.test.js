import capitalize from './../capitalize'

test('Return null/undefined when insert null content', () => {
  expect(capitalize(null)).not.toBeDefined()
})

test('Capitalize first char when this is a small caps', () => {
  expect(capitalize('awesome testing project')).toBe('Awesome testing project')
})

test('Return same string when the string always capitalized', () => {
  expect(capitalize('awesome testing project')).toBe('Awesome testing project')
})

test('Ignore number first', () => {
  expect(capitalize('1awesome testing project')).toBe('1awesome testing project')
})