var app = angular.module("BetabeersTodo");

app.controller("MainController", ["$scope", "TodoServer", function($scope, TodoServer) {
	$scope.todos = [];

	TodoServer.listTodos().then(function(todos) {
		$scope.todos = todos;
	});

	$scope.newTodo = function() {
		if ($scope.title) {
			var the_todo = { title: $scope.title, completed: false};
			TodoServer.addTodo(the_todo, function(todo) {
				$scope.todos.push(todo)
			});	
		}
	};
}]);