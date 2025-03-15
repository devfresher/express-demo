const express = require('express');
const { getAll, getOne, create } = require('../controllers/books.controller');

const booksRoutes = express.Router();

booksRoutes.get('/', getAll);
booksRoutes.get('/:id', getOne);
booksRoutes.post('/', create);

module.exports = booksRoutes;
