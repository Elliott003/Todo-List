const todo = require('../schema/todo').todo;

const getAllTodos = async (req, res) => {
	const todos = await todo.find({});
	res.send(todos);
}

const getById = async (req, res) => {
	const todoOne = await todo.findById(req.params.id);
	if (!todoOne) {
		res.status(404).send('Todo item not found');
	} else {
		res.send(todoOne);
	}
}

const createTodo = async (req, res) => {
	const newTodo = new todo({
		title: req.body.title,
		description: req.body.description,
		dueDate: req.body.dueDate
	});
	await newTodo.save();
	res.send(newTodo);
}

const updateTodo = async (req, res) => {
	const todoOne = await todo.findById(req.params.id);
	todoOne.title = req.body.title;
	todoOne.description = req.body.description;
	todoOne.dueDate = req.body.dueDate;
	await todoOne.save();
	res.send(todoOne);
}

const deleteTodo = async (req, res) => {
	const todoOne = await todo.findByIdAndDelete(req.params.id);
	res.send(todoOne);
}

module.exports = {
	getAllTodos,
	getById,
	createTodo,
	updateTodo,
	deleteTodo,
}