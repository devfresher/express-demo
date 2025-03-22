const express = require('express');
const { getAll, getOne, create, update, deleteBook } = require('../controllers/books.controller');

const booksRoutes = express.Router();

booksRoutes.get('/', getAll);
booksRoutes.get('/:id', getOne);
booksRoutes.post('/', create);
booksRoutes.put('/:id', update);
booksRoutes.delete('/:id', deleteBook);

module.exports = booksRoutes;
