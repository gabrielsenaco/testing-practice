function _isNumberArray (array) {
  return array.filter(item => typeof item != 'number').length === 0
}

function _getAverageNumbers (array) {
  return array.reduce((prev, now) => (prev += now), 0) / array.length
}

export default function analyze (array) {
  if (!array || !_isNumberArray(array)) return null
  if (array.length === 0) return {min: 0, max: 0, average: 0, length: 0}
    
  return {
    min: Math.min(...array),
    max: Math.max(...array),
    average: _getAverageNumbers(array),
    length: array.length
  }
}
