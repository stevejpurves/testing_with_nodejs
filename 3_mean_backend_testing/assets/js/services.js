var app = angular.module("BetabeersTodo", []);
app.factory("TodoServer", ["$http", function($http) {
	var server = {};

	server.listTodos = function() {
		return $http.get('/api/todos')
			.then(function(resp) {
				return resp.data.todos;
			}, function(resp, status){
				console.log(status, resp);
			});
	};

	server.addTodo = function(data, cb) {
		return $http.post('/api/todo', data)
			.then(function(resp) {
				return cb(resp.data.todo);
			},
			function() {
				console.log(status, resp);
			});
	};

	return server;
}]);