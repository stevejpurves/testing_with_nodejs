var config = require('../server/config')
var app_wrapper = require('../server/app')

config.port = 3030
config.url = 'http://localhost:' + config.port
config.mongo_url = 'mongodb://localhost/todo_test'

module.exports = {
	config: config,
	start: function(done) {
		return app_wrapper.start(config, done)
	},
	stop: function() {
		app_wrapper.stop()
	}
}
