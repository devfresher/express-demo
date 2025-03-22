const bookService = require('../services/books.service');

const getAll = async (req, res) => {
	try {
		const books = await bookService.getAll();

		res.status(200).send({
			message: 'Books retrieved successfully.',
			data: books,
		});
	} catch (error) {
		res.status(500).send({
			message: 'Error retrieving books.',
			error,
		});
	}
};

const getOne = async (req, res) => {
	try {
		const { id } = req.params;

		const book = await bookService.getOne(id);

		res.status(200).send({
			message: 'Book retrieved successfully.',
			data: book,
		});
	} catch (error) {
		res.status(500).send({
			message: 'Error retrieving book.',
			error,
		});
	}
};

const create = async (req, res) => {
	const { body: data } = req;

	const book = await bookService.create(data);
	res.status(201).send({
		message: 'Book created successfully.',
		data: book,
	});
};

const update = async (req, res) => {
	const {
		params: { id },
		body,
	} = req;

	const book = await bookService.update(id, body);
	res.status(200).send({
		message: 'Book updated successfully.',
		data: book,
	});
};

const deleteBook = async (req, res) => {
	const { id } = req.params;

	const book = await bookService.deleteBook(id);
	res.status(200).send({
		message: 'Book deleted successfully.',
		data: book,
	});
};

module.exports = { getAll, getOne, create, update, deleteBook };
