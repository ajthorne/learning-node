# Node.js
### Docs: https://nodejs.org/dist/latest-v7.x/docs/api/

### What is it?
Node.js is an open source, cross platform JavaScript runtime environment designed to be run outside of browsers (on a server). It can be used for a variety of purposes including asset compilation, scripting, monitoring, and as the basis for web servers.

### Benefits -
* It reuses JavaScript (Front-enders can build a server themselves)
* Extendable with plugins
* Fast implementation
* Asynchronous - Handles multiple requests at once

#### Run node from terminal using command ``node``

### process.argv
- Prints path back to node and to JavaScript file
- Creates an array for any other "arguments" entered
``node arguments.js 'stuff' 34``
- allows you to get the text value/input from terminal

- You can concatenation strings in terminal by adding together your process.argv
`console.log(process.argv[2] + process.argv[3])`

- You can add numbers together with parseFloat (deals with decimals)
`console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]))`

### require
* require grabs variables from other js files to use
* it can also grab built in packages like fs

### exports
???

### fs
* built in, internal package manager
* write files like so: `fs.writeFile("movies.txt", 'Inception, Die Hard')`
* read files with `fs.readFile`
* `fs.appendFile` - better to use because it doesn't overwrite previous file, rather it amends it

### npm
* need to install external npm
* need this to make requests from websites and servers to get response

### request
* The request function takes in a URL and returns three arguments (error, response, body)
  - 1. It provides an error if one exists.
  - 2. It provides a response (usually that the request was successful)  
  - 3. It provides the actual body text from the website
* `var request = require('request');`
* don't forget to `npm install request`
