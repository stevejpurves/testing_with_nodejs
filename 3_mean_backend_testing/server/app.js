var express = require('express');
var bodyParser = require('body-parser');
var api = require('./api');
var mongoose = require('mongoose');
var path = require('path');

var Schema = mongoose.Schema;

function startDB(config, startTheServer) {
	var db = mongoose.connection;
	db.on('error', console.error);
	db.once('open', function() {

	  	mongoose.model("Todo", 
	  		new Schema({
	  				id: Number,
		 			title: String,
		 			complete: Boolean
				})
	  		);

	  	startTheServer();
	});

	mongoose.connect( config.mongo_url );
};

function createStaticApp() {
	var STATIC_PATH = path.join(__dirname, '..', 'assets');
	var staticApp = express.static(STATIC_PATH);
	return staticApp;
}

function createApiApp() {
	var apiApp = express();
	apiApp.use(bodyParser.urlencoded({ extended: false }))
	apiApp.use(bodyParser.json())
	apiApp.use(express.favicon());
	apiApp.use(express.logger('dev'));
	apiApp.use(express.methodOverride());
	apiApp.use(express.cookieParser("TODO*YD(AHSOA*2KA(K£NAIO"));
	apiApp.use(express.session()); // not sure this is the right place for session mw
	return apiApp;
};

module.exports = { 
	app: null,
	server_instance: null,
	start: function(config, done) {
		var app = express();
		app.set('port', process.env.PORT || config.port);

		startDB(config, function() { 
			var staticApp = createStaticApp()

			var apiApp = createApiApp();
			require('./routes')( apiApp ); // move this to api

			app.use(app.router);
			app.use('/api', apiApp);
			app.use('/', staticApp);

			server_instance = app.listen(app.get('port'), function(){
				var msg = 'Express server listening on port ' + app.get('port')
				console.log(msg)
		  		if (done) done()
			});
		});

		return app;
	},
	stop: function() {
		if (server_instance) server_instance.close();
	}
}