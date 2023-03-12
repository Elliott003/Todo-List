const express = require('express');
const todoRoutersPrefix = "/api/todos";
const router = express.Router();
const todo = require('../schema/todo').todo;
const { getAllTodos, getById, createTodo, updateTodo, deleteTodo } = require('../controller/todo')
//get all todos
router.get('/', getAllTodos)

//get a todo by id
router.get('/:id', getById);

//create a todo
router.post('/', createTodo);

//update a todo
router.put('/:id', updateTodo);

//delete a todo
router.delete('/:id', deleteTodo);

module.exports = {
	todoRoutersPrefix,
	router
};