process.stdout.write("prompt > ")

process.stdin.on("data", (data) => {
	const cmd = data.toString().trim().split(" ")
	if (cmd[0] === "pwd") {
		const pwd = require("./pwd")
		pwd()
	} else if (cmd[0] === "ls") {
		const fs = require("./ls")
		fs()
	} else if (cmd[0] === "cat") {
		const cat = require("./cat")
		cat(cmd[1])
	} else {
		process.stdout.write("you typed: " + cmd)
	}
})
