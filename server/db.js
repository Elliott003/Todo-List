require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://elliottjing:${process.env.MONGODN_PASSWORD}@cluster0.oejpbuf.mongodb.net/test`, { useNewUrlParser: true });
mongoose.connection.once('connected', () => {
	console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
	console.log('Error connecting to MongoDB', err);
});

exports.mongoose = mongoose;