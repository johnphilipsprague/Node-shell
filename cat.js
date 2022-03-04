module.exports = function (file) {
	const fs = require("fs")
	fs.readFile(`./${file}`, (err, data) => {
		if (err) throw err
		else {
			process.stdout.write(data)
			process.stdout.write("\nprompt > ")
		}
	})
}
