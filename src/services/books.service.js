const Book = require('../db/models/book.model');

const create = async (data) => {
	const book = new Book({
		title: data.title,
		author: data.author,
		description: data.description,
		price: data.price,
	});

	await book.save();
	return book;
};

const getAll = async () => {
	const books = await Book.find();
	return books;
};

const getOne = async (id) => {
	const book = await Book.findById(id);

	if (!book) {
		throw new Error('Book not found');
	}
	return book;
};

const update = async (id, data) => {
	const book = await Book.findByIdAndUpdate(id, data, { new: true });

	if (!book) {
		throw new Error('Book not found');
	}
	return book;
};

const deleteBook = async (id) => {
	const book = await Book.findByIdAndDelete(id);

	if (!book) {
		throw new Error('Book not found');
	}
	return book;
};

module.exports = { create, getAll, getOne, update, deleteBook };
