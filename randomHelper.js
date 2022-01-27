const randomNumber = (min=1, max=10) =>{
	return min + Math.floor((max - min+1) * Math.random()) 
}

const randomNumbers = (count = 3, min, max) => {
	const results = []
	while(results.length < count) {
		results.push(randomNumber( )) 
	}
	return results
}


module.exports = {
	randomNumber,
	randomNumbers
}