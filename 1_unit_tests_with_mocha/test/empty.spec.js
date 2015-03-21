var expect = require('chai').expect


var multiplyBy2 = function(x) {
	return 2*x;
}


var dbconnect = function(url, cb) {
	// connect to the DB
	setTimeout(function() {
		var err = null
		return cb(err, {connected: true})
	}, 3000);
}


describe("Server Unit Tests", function() {
	
	describe("a simple test", function() {

		it("2x2 equals 4", function() {
			expect(multiplyBy2(2)).to.equal(4)
		});
	});

	describe("an async test", function() {
		this.timeout(5000)

		it("very slow aysnc test", function(done) {
			expect(dbconnect('mydb',function(err, resp) {
				expect(err).to.be.null
				expect(resp.connected).to.be.true
				done()
			}))
		})
	})

	describe("the required system", function() {
		it.skip("set schema")
		it.skip("import data")
		it.skip("start application server")
		it.skip("GET /status")
	});

});