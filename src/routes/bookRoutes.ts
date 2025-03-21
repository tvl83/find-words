/**
 * Book routes for the e-commerce platform
 */

import { Router } from 'express';
import { BookController } from '../controllers/bookController';

const router = Router();
const bookController = new BookController();

// GET /api/books - Get all books
router.get('/', bookController.getAllBooks.bind(bookController));

// GET /api/books/search - Search books
router.get('/search', bookController.searchBooks.bind(bookController));

// GET /api/books/:id - Get book by ID
router.get('/:id', bookController.getBookById.bind(bookController));

export default router; 