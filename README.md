#Node.js

###What is it?
Node.js is an open source, cross platform JavaScript runtime environment designed to be run outside of browsers (on a server). It can be used for a variety of purposes including asset compilation, scripting, monitoring, and as the basis for web servers.

###Benefits -
* It reuses JavaScript (Front-enders can build a server themselves)
* Extendable with plugins
* Fast implementation
* Asynchronous - Handles multiple requests at once

###Run node from terminal using command ``node``

###process.argv
- Prints path back to node and to JavaScript file
- Creates an array for any other "arguments" entered
``node arguments.js 'stuff' 34``

- You can concatenation strings in terminal by adding together your process.argv
`console.log(process.argv[2] + process.argv[3])`

- You can add numbers together with parseFloat (deals with decimals)
`console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]))`

###require and exports
* require grabs variables from other js files to use
