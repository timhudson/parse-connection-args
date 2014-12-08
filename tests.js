var test = require('tape')
var net = require('net')
var parseArgs = require('./')

test('port', function(t) {
  t.plan(1)
  var params = parseArgs([3000])
  t.equal(params.port, 3000)
})

test('host', function(t) {
  t.plan(1)
  var params = parseArgs(['test.example.com'])
  t.equal(params.host, 'test.example.com')
})

test('port, host', function(t) {
  t.plan(2)
  var params = parseArgs([3000, 'localhost'])
  t.equal(params.port, 3000)
  t.equal(params.host, 'localhost')
})

test('host:port', function(t) {
  t.plan(2)
  var params = parseArgs(['localhost:3000'])
  t.equal(params.host, 'localhost')
  t.equal(params.port, 3000)
})

test('obj', function(t) {
  t.plan(2)
  var params = parseArgs([{
    port: '1010',
    host: 'localhost'
  }])
  t.equal(params.port, 1010)
  t.equal(params.host, 'localhost')
})

test('callback', function(t) {
  t.plan(1)
  var callback = function() {}
  var params = parseArgs([callback])
  t.equal(params.callback, callback)
})
