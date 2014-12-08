# parse-connection-args

Parse host, port and/or path arguments for listen and connect methods

Extracted from https://github.com/substack/dnode/blob/master/lib/parse_args.js

[![build status](http://img.shields.io/travis/timhudson/parse-connection-args.svg?style=flat)](http://travis-ci.org/timhudson/parse-connection-args)

## Example

``` js
var net = require('net')
var parseArgs = require('parse-connection-args')

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
```

## License

MIT
