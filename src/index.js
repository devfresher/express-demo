const express = require('express');
const indexRoutes = require('./routes/index.route');
const connectDB = require('./db');

const app = express();
app.use(express.json());
app.use('/', indexRoutes);

connectDB()
	.then(() => {
		console.log('Connected to DB');
		app.listen(3000);
		console.log('Server listening on port 3000...');
	})
	.catch((error) => console.log(error));
