const isValidSubsequence = (array, sequence) => {
  const length = array.length
  let count = 0
  while (count < length) {
    if (array[count] === sequence[0]) sequence.shift()
    if (sequence.length === 0) return true
    count++
  }
  return false
}

module.exports = { isValidSubsequence }