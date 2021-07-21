import {calculator} from './../calculator'

test('Calculator object needs to be four functions: add, subtract, divide and multiply', () => {
  expect(calculator).toHaveProperty('add', expect.any(Function))
  expect(calculator).toHaveProperty('subtract', expect.any(Function))
  expect(calculator).toHaveProperty('divide', expect.any(Function))
  expect(calculator).toHaveProperty('multiply', expect.any(Function))
})

test('Add 1 + 3 returns 4', () => {
  expect(calculator.add(1, 3)).toBe(4)
})

test('Add 1 + 3.5 returns 4.5', () => {
  expect(calculator.add(1, 3.5)).toBeCloseTo(4.5)
})

test('Add null + 3 returns falsy value', () => {
  expect(calculator.add(null, 3)).toBeFalsy()
})

test('Add 1 + any value that is not a Number returns a falsy value', () => {
  expect(calculator.add(1, true)).toBeFalsy()
})

test('Subtract 3 - 3 returns 0', () => {
  expect(calculator.subtract(3, 3)).toBe(0)
})

test('Subtract 3 - any value that is not a Number returns a falsy value', () => {
  expect(calculator.subtract(3, "true")).toBeFalsy()
})

test('Subtract null - 5 returns falsy value', () => {
  expect(calculator.subtract(null, 5)).toBeFalsy()
})

test('Subtract 6.2 - 3.5 returns 2.7', () => {
  expect(calculator.subtract(6.2, 3.5)).toBeCloseTo(2.7)
})

test('Divide 10 / 5 returns 2', () => {
  expect(calculator.divide(10, 5)).toBe(2)
})

test('Divide 6 / any value that is not a Number returns a falsy value', () => {
  expect(calculator.divide(6, false)).toBeFalsy()
})

test('Divide 10 / 0 returns Infinity', () => {
  expect(calculator.divide(10, 0)).toBe(Infinity)
})

test('Divide 8.7 / 3.2 returns 2.71875', () => {
  expect(calculator.divide(8.7, 3.2)).toBeCloseTo(2.71875)
})

test('Divide 10 / null returns falsy value', () => {
  expect(calculator.divide(10, null)).toBeFalsy()
})

test('Multiply 3 * 3 returns 9', () => {
  expect(calculator.multiply(3, 3)).toBe(9)
})

test('Multiply 9 * any value that is not a Number returns a falsy value', () => {
  expect(calculator.multiply(9, "5")).toBeFalsy()
})

test('Multiply 15.36 * 6.4 returns 98.304', () => {
  expect(calculator.multiply(15.36, 6.4)).toBeCloseTo(98.304)
})

test('Multiply 3 * undefined returns falsy value', () => {
  expect(calculator.multiply(3, undefined)).toBeFalsy()
})