
// You should implement your task here.

module.exports = function towelSort (matrix) {
  result = []
  for(i in matrix) {
    i%2==0 ? result.push(matrix[i]): result.push(matrix[i].reverse())
  }
  return result.flat()
}
