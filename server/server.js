const express = require('express');
const bodyParser = require('body-parser');
const { todoRoutersPrefix, router: todoRouter, } = require('./module/router/todo.js');
const { setUpDB } = require('./db.js');
require('dotenv').config();

const setUpApplication = async (app) => {
	//parse application/x-www-form-urlencoded and application/json
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	try {
		await setUpDB();
		app.use(todoRoutersPrefix, todoRouter);
		app.listen(`${process.env.PORT}`, () => console.log(`Todo app listening on port ${process.env.PORT}!`))
	} catch (err) {
		throw (err);
	}
}

const app = express();
setUpApplication(app);
