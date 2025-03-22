const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
	},
});

module.exports = mongoose.model('Book', bookSchema);
