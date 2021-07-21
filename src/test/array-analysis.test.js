import analyze from './../array-analysis'

test('Return correct object', () => {
  const object = analyze([1, 8, 3, 4, 2, 6])
  const expectObject = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  }
  expect(object).toMatchObject(expectObject)
})

test('Return null when send null element', () => {
  const object = analyze(null)
  expect(object).toBeFalsy()
})

test('Return null when send non number in array', () => {
  const object = analyze([1, 'ff', 2])
  expect(object).toBeFalsy()
})

test('Return empty object when send empty array', () => {
  const object = analyze([])
  const expectObject = {
    average: 0,
    min: 0,
    max: 0,
    length: 0
  }
  expect(object).toMatchObject(expectObject)
})
