const express = require('express');
const bodyParser = require('body-parser');
const todo = require('./db.js').Todo;

const app = express();
const port = 3000;

//parse application/x-www-form-urlencoded and application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//get all todos
app.get('/api/todos', async (req, res) => {
	const todos = await todo.find({});
	res.send(todos);
})

//get a todo by id
app.get('/api/todos/:id', async (req, res) => {
	// const todoId = req.params.id;
	const todoOne = await todo.findById(req.params.id);
	res.send(todoOne);
});

//create a todo
app.post('/api/todos', async (req, res) => {
	const newTodo = new todo({
		title: req.body.title,
		description: req.body.description,
		dueDate: req.body.dueDate
	});
	await newTodo.save();
	res.send(newTodo);
});

//update a todo
app.put('/api/todos/:id', async (req, res) => {
	const todoOne = await todo.findById(req.params.id);
	todoOne.title = req.body.title;
	todoOne.description = req.body.description;
	todoOne.dueDate = req.body.dueDate;
	await todoOne.save();
	res.send(todoOne);
});

//delete a todo
app.delete('/api/todos/:id', async (req, res) => {
	const todoOne = await todo.findByIdAndDelete(req.params.id);
	res.send(todoOne);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))