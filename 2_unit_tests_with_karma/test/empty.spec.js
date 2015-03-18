
var multiplyBy2 = function(x) {
	return 2*x;
}


var dbconnect = function(url, cb) {
	// connect to the DB
	setTimeout(function() {
		var err = null
		return cb(err, {connected: true})
	}, 2000);
}


describe("Server Unit Tests", function() {
	
	describe("a simple test", function() {
		it("fails", function() {
			expect(true).to.be.false
		});
	});

	describe("an async test", function() {
		
		it.skip("connect to db", function(done) {

		})
	})

	describe("the required system", function() {
		it.skip("set schema")
		it.skip("import data")
		it.skip("start application server")
		it.skip("GET /status")
	});

});