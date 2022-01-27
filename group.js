module.exports = (arr) => {
	return arr.reduce((acc, num) => {
		if(acc [num] === undefined) {
			acc[num] = 0
		}
		acc[num]++;
		return acc
	}, {})
}