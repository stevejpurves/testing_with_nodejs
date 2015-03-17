var expect = require('chai').expect


// SOME PRODUCTION CODE COPIED HERE
function startDB(mongoose, config, startTheServerCB) {
	var db = mongoose.connection;
	db.on('error', console.error);
	db.once('open', function() {

	  	var Job = mongoose.model("Job", 
	  		new Schema({
	  			todo: String,
	  			done: Boolean
	  		});

	  	startTheServerCB();
	});

	mongoose.connect( config.mongo_url );
};

describe("Database Service", function() {
	
	it("a failing test", function() {
		expect(false).to.be.true
	});

});