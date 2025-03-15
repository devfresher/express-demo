const booksRoutes = require('./books.route');
const express = require('express');

const indexRoutes = express.Router();

indexRoutes.use('/books', booksRoutes);

module.exports = indexRoutes;
