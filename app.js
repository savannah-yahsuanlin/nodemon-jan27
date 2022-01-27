const randomHelper = require('./randomHelper')
const group = require('./group')
const fs = require('fs');

//process.stdin.on('data', (ev)=> {
//	const count = ev.toString().trim()*1
//	const rs = randomHelper.randomNumbers(count)
//	process.stdout.write(JSON.stringify(group(rs)))
//	process.stdout.write('\n')
//})

//fs.readFile('group.js', (err, data) => {
//	if(err) {
//		console.log(err)
//	} else {
//		console.log(data.toString())
//	}
//})

fs.readdir(__dirname, (err, files)=>{
	if(err) {
		console.log(err)
	} else {
		console.log(files)
	}
})

console.log(__dirname )
//console.log(fs.readdir('group.js', (callback)=>{
//  	console.log(callback);
//}))
//const t = new Date()
//setTimeout(() => {
//	console.log(`${new Date() - t}`)
//}, 1000);

//const rs = randomHelper.randomNumbers(1e6)

//console.log(group(rs))

