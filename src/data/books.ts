/**
 * Sample book data for the e-commerce platform
 */

import { Book } from '../models/book';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
    price: 9.99,
    coverImage: 'great-gatsby.jpg',
    categories: ['Fiction', 'Classic', 'Literary Fiction'],
    isbn: '978-0743273565',
    publicationDate: '1925-04-10',
    publisher: 'Scribner',
    available: true
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. "To Kill A Mockingbird" became both an instant bestseller and a critical success when it was first published in 1960.',
    price: 12.99,
    coverImage: 'to-kill-a-mockingbird.jpg',
    categories: ['Fiction', 'Classic', 'Historical Fiction'],
    isbn: '978-0061120084',
    publicationDate: '1960-07-11',
    publisher: 'HarperCollins',
    available: true
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    description: 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real.',
    price: 10.99,
    coverImage: '1984.jpg',
    categories: ['Fiction', 'Classic', 'Dystopian'],
    isbn: '978-0451524935',
    publicationDate: '1949-06-08',
    publisher: 'Signet Classic',
    available: true
  },
  {
    id: '4',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep.',
    price: 14.99,
    coverImage: 'the-hobbit.jpg',
    categories: ['Fiction', 'Fantasy', 'Adventure'],
    isbn: '978-0547928227',
    publicationDate: '1937-09-21',
    publisher: 'Houghton Mifflin Harcourt',
    available: true
  },
  {
    id: '5',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language.',
    price: 8.99,
    coverImage: 'pride-and-prejudice.jpg',
    categories: ['Fiction', 'Classic', 'Romance'],
    isbn: '978-0141439518',
    publicationDate: '1813-01-28',
    publisher: 'Penguin Classics',
    available: true
  },
  {
    id: '6',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description: 'The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days.',
    price: 11.99,
    coverImage: 'catcher-in-the-rye.jpg',
    categories: ['Fiction', 'Classic', 'Coming of Age'],
    isbn: '978-0316769488',
    publicationDate: '1951-07-16',
    publisher: 'Little, Brown and Company',
    available: true
  },
  {
    id: '7',
    title: 'Lord of the Flies',
    author: 'William Golding',
    description: 'At the dawn of the next world war, a plane crashes on an uncharted island, stranding a group of schoolboys. At first, with no adult supervision, their freedom is something to celebrate; this far from civilization the boys can do anything they want.',
    price: 9.49,
    coverImage: 'lord-of-the-flies.jpg',
    categories: ['Fiction', 'Classic', 'Allegory'],
    isbn: '978-0399501487',
    publicationDate: '1954-09-17',
    publisher: 'Penguin Books',
    available: true
  },
  {
    id: '8',
    title: 'Animal Farm',
    author: 'George Orwell',
    description: 'A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality.',
    price: 7.99,
    coverImage: 'animal-farm.jpg',
    categories: ['Fiction', 'Classic', 'Political Satire'],
    isbn: '978-0451526342',
    publicationDate: '1945-08-17',
    publisher: 'Signet Classic',
    available: true
  },
  {
    id: '9',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    description: 'Paulo Coelho\'s enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids.',
    price: 13.99,
    coverImage: 'the-alchemist.jpg',
    categories: ['Fiction', 'Fantasy', 'Philosophical'],
    isbn: '978-0061122415',
    publicationDate: '1988-01-01',
    publisher: 'HarperOne',
    available: true
  },
  {
    id: '10',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    description: 'Aldous Huxley\'s profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order.',
    price: 10.49,
    coverImage: 'brave-new-world.jpg',
    categories: ['Fiction', 'Classic', 'Dystopian'],
    isbn: '978-0060850524',
    publicationDate: '1932-01-01',
    publisher: 'Harper Perennial',
    available: true
  }
]; 