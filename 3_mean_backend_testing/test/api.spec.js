var mongoose = require('mongoose')

module.exports = function() { 
	describe("API", function() {
		var Todo;
		before(function() {
			// get our Todo db object from mongoose
			Todo = mongoose.model("Todo") // why does this work?
		})

		afterEach(function(done) {
			// clear out the collection after each test
			Todo.remove({}, done)
		})

		describe("GET /todos", function() {
			it("returns json with todos", function(done) {
				request(app)
					.get('/api/todos')
					.expect(200)
					.expect('Content-Type', /json/)
					.end(function(err, res) {
						if (err) throw err
						expect(res.body.todos).to.exist
						done()
					})				
			});

			describe("when there are no todos", function() {
				it("returns an empty list", function(done) {
					// some refactoring here?
					request(app)
						.get('/api/todos')
						.expect(200)
						.expect('Content-Type', /json/)
						.end(function(err, res) {
							if (err) throw err
							expect(res.body.todos).to.be.empty
							done()
						})
				})
			})

			describe("when there are todos", function() {

				beforeEach(function(done) {
					var a_todo = new Todo({ id:0, title:"drink some beer", complete: false });
					a_todo.save(done)
				})

				it("returns the list containing 1 todo item", function(done) {
					request(app)
						.get('/api/todos')
						.expect(200)
						.expect('Content-Type', /json/)
						.end(function(err, res) {
							if (err) throw err
							var todos = res.body.todos
							expect(todos.length).to.equal(1)
							expect(todos[0].id).to.equal(0)
							expect(todos[0].title).to.contain("drink some beer")
							expect(todos[0].complete).to.be.false
							done()
						})
				})

				it.skip("returns a list containing 2 todos", function(done) {})
			})
		})

		describe("POST /todo", function() {
			
			it("should add a todo", function(done) {
				var example_todo = {title: "do something else", complete: false}
				request(app)
					.post('/api/todo')
					.send(example_todo)
					.expect(201)
					.expect('Content-Type', /json/)
					.end(function(err, res) {
						if (err) throw err
						expect(res.body.todo.id).to.equal(0)
						expect(res.body.todo.title).to.contain(example_todo.title)
						Todo.find({}, function(err, todos_in_db) {
							expect(todos_in_db[0].id).to.equal(0)
							expect(todos_in_db[0].title).to.contain(example_todo.title)
							done()
						})
					})
			});

		});
	})
}