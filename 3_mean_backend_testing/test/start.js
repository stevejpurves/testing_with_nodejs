global.server = require('./test_server')
global.expect = require('chai').expect
global.request = require('supertest')
var mongoose = require('mongoose');

before(function(done) {
	global.app = server.start(function() {
		expect(mongoose.connection.readyState).to.equal(1)
		done()
	})
})

after(function() {
	server.stop()
})

describe("Canarias IO", function() {
	describe("Backend", require('./api.spec'))
})