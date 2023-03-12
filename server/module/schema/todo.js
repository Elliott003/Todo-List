const mongoose = require('mongoose')
// const autoIncrement = require('mongoose-auto-increment');

const todoSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: String,
	status: {
		type: String,
		enum: ['pending', 'in-progress', 'done'],
		default: 'pending'
	},
	dueDate: {
		type: Date,
		default: Date.now
	},
	todoId: Number
});

;
// not working
// autoIncrement.initialize(mongoose.connection);
// todoSchema.plugin(autoIncrement.plugin, 'Todo');

exports.todo = mongoose.model('Todo', todoSchema);
