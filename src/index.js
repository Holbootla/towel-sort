module.exports = function towelSort (matrix) {
	if (!Array.isArray(matrix) || matrix.length === 0) {
		return []
	}
  return (matrix.map((el, ind) => ind % 2 !== 0 ? el.reverse() : el)).flat()
}
