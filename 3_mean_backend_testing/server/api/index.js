var mongoose = require("mongoose");
var _ = require('underscore')

exports.listTodos = function(req, res){
	var Todo = mongoose.model("Todo");
	Todo.find(function(err, the_todo_list) {
		the_todo_list = _.map(the_todo_list, function(item) {
			return _.omit(item.toObject(), ['_id','__v'])
		})
		res.send(200, {todos: the_todo_list});
	});
};

exports.addTodo= function(req, res) {
	var Todo = mongoose.model("Todo");
	Todo.find(function(err, the_todo_list) {
		var a_todo = new Todo(req.body); // needs validation in real life!
		a_todo.set({ id: the_todo_list.length});
		a_todo.save(function(err) {
			if (err)
				res.send(400);
			else
				res.send(201, { todo: a_todo });
		});
	});
};

exports.markComplete = function(res, req) {
	res.send(404);
};