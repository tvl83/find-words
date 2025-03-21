/**
 * Book model for the e-commerce platform
 */

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage: string;
  categories: string[];
  isbn: string;
  publicationDate: string;
  publisher: string;
  available: boolean;
}

export interface BookSearchQuery {
  title?: string;
  author?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
} 