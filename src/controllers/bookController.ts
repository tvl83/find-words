/**
 * Book controller for the e-commerce platform
 */

import { Request, Response } from 'express';
import { BookService } from '../services/bookService';
import { BookSearchQuery } from '../models/book';

const bookService = new BookService();

export class BookController {
  /**
   * Get all books
   */
  getAllBooks(req: Request, res: Response): void {
    try {
      const books = bookService.getAllBooks();
      res.json(books);
    } catch (error) {
      console.error('Error getting all books:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  /**
   * Get book by ID
   */
  getBookById(req: Request, res: Response): void {
    try {
      const id = req.params.id;
      const book = bookService.getBookById(id);
      
      if (!book) {
        res.status(404).json({ error: 'Book not found' });
        return;
      }
      
      res.json(book);
    } catch (error) {
      console.error('Error getting book by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  /**
   * Search books
   */
  searchBooks(req: Request, res: Response): void {
    try {
      const query: BookSearchQuery = {
        title: req.query.title as string | undefined,
        author: req.query.author as string | undefined,
        category: req.query.category as string | undefined,
        minPrice: req.query.minPrice ? parseFloat(req.query.minPrice as string) : undefined,
        maxPrice: req.query.maxPrice ? parseFloat(req.query.maxPrice as string) : undefined
      };
      
      const books = bookService.searchBooks(query);
      res.json(books);
    } catch (error) {
      console.error('Error searching books:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
} 