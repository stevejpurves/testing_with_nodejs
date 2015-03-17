var api = require('./api');

module.exports = function(app) {

	app.get('/todos', api.listTodos);
	app.post('/todo', api.addTodo);
	app.put('/todo/complete', api.markComplete);

};