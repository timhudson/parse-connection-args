var net = require('net')
var parseArgs = require('./')

function listen() {
  var params = parseArgs(arguments)
  console.log(params)
}

listen(3000)
// {port: 3000}

listen(3000, 'localhost')
// {port: 3000, host: 'localhost'}

listen('localhost:3000')
// {port: 3000, host: 'localhost'}

listen(1010, function() {
  console.log('listening on port 1010')
})

listen({host: 'localhost', port: '1010'})
// {port: 1010, host: 'localhost'}
