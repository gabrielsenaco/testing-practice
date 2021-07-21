const createAnalyzeObject = (average = 0, min = 0, max = 0, length = 0) => {
  return { average, min, max, length }
}

function _isNumberArray (array) {
  return array.filter(item => typeof item != 'number').length === 0
}

function _getAverageNumbers (array) {
  return array.reduce((prev, now) => (prev += now), 0) / array.length
}

export default function analyze (array) {
  if (!array) return null
  if (array.length === 0) return createAnalyzeObject()
  if (!_isNumberArray(array)) return null
  let sorted = array.sort((num1, num2) => (num1 > num2 ? 1 : -1))

  let length = sorted.length
  let min = sorted[0]
  let max = sorted[sorted.length - 1]
  let average = _getAverageNumbers(sorted)

  return createAnalyzeObject(average, min, max, length)
}
