const mongoose = require('mongoose');

const setUpDB = async () => {
	mongoose.connect(`mongodb+srv://elliottjing:${process.env.MONGODB_PASSWORD}@cluster0.oejpbuf.mongodb.net/test`, { useNewUrlParser: true });
	mongoose.connection.once('connected', () => {
		console.log('Connected to MongoDB');
	});
	mongoose.connection.on('error', (err) => {
		console.log('Error connecting to MongoDB', err);
	});
	// mongoose.model('Todo', todoSchema);
}

exports.setUpDB = setUpDB;
// exports.Todo = mongoose.model('Todo', todoSchema);