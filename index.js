const { spawn } = require('child_process')

module.exports = function openBrowser (moduleOptions) {
    this.nuxt.hook('build:done', async builder => {    
		       const ls = spawn('xdg-open',['http://localhost:3000/'])
		       
		       ls.stdout.on('data', (data) => {
					console.log('Open app in browser')
				    })
			 
		       ls.stderr.on('data', (data) => {
					console.log(data)
				    })
			 
		       ls.on('close', (code) => {
				 console.log(`child process exited with code ${code}`)
			     })
		   })
}

module.exports.meta = require('./package.json')
