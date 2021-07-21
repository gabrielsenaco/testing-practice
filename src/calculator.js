function invalidNumbers (num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return true
}

const calculator = {
  add: function (num1, num2) {
    if (invalidNumbers(num1, num2)) return null
    return num1 + num2
  },
  subtract: function (num1, num2) {
    if (invalidNumbers(num1, num2)) return null
    return num1 - num2
  },
  divide: function (num1, num2) {
    if (invalidNumbers(num1, num2)) return null
    return num1 / num2
  },
  multiply: function (num1, num2) {
    if (invalidNumbers(num1, num2)) return null
    return num1 * num2
  }
}

export { calculator }
