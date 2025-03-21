/**
 * Book service for the e-commerce platform
 */

import { Book, BookSearchQuery } from '../models/book';
import { books } from '../data/books';

export class BookService {
  /**
   * Get all books
   * @returns Array of all books
   */
  getAllBooks(): Book[] {
    return books;
  }

  /**
   * Get book by ID
   * @param id Book ID
   * @returns Book if found, undefined otherwise
   */
  getBookById(id: string): Book | undefined {
    return books.find(book => book.id === id);
  }

  /**
   * Search books based on query parameters
   * @param query Search query parameters
   * @returns Array of books matching the query
   */
  searchBooks(query: BookSearchQuery): Book[] {
    return books.filter(book => {
      let match = true;
      
      if (query.title && !book.title.toLowerCase().includes(query.title.toLowerCase())) {
        match = false;
      }
      
      if (query.author && !book.author.toLowerCase().includes(query.author.toLowerCase())) {
        match = false;
      }
      
      if (query.category && !book.categories.some(cat => cat.toLowerCase().includes(query.category!.toLowerCase()))) {
        match = false;
      }
      
      if (query.minPrice !== undefined && book.price < query.minPrice) {
        match = false;
      }
      
      if (query.maxPrice !== undefined && book.price > query.maxPrice) {
        match = false;
      }
      
      return match;
    });
  }
} 