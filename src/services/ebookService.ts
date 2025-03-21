/**
 * EBook service for generating placeholder eBooks
 */

import PDFDocument from 'pdfkit';
import { Book } from '../models/book';

/**
 * Generate a placeholder eBook PDF for a book
 * @param book The book to generate an eBook for
 * @returns Promise with the eBook as a Buffer
 */
export async function generateEbook(book: Book): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      // Create a PDF document
      const doc = new PDFDocument();
      const buffers: Buffer[] = [];
      
      // Collect PDF data chunks
      doc.on('data', (chunk: Buffer) => buffers.push(chunk));
      
      // Resolve promise with the complete PDF data
      doc.on('end', () => {
        const pdfData = Buffer.concat(buffers);
        resolve(pdfData);
      });
      
      // Add content to the PDF
      doc.fontSize(25).text('eBook Sample', { align: 'center' });
      doc.moveDown();
      
      // Book title and author
      doc.fontSize(20).text(book.title, { align: 'center' });
      doc.fontSize(16).text(`by ${book.author}`, { align: 'center' });
      doc.moveDown(2);
      
      // Book details
      doc.fontSize(14).text(`ISBN: ${book.isbn}`);
      doc.fontSize(14).text(`Published by: ${book.publisher}`);
      doc.fontSize(14).text(`Publication Date: ${book.publicationDate}`);
      doc.moveDown(2);
      
      // Book description
      doc.fontSize(12).text('Description:', { underline: true });
      doc.fontSize(12).text(book.description);
      doc.moveDown(2);
      
      // Sample content
      doc.fontSize(12).text('Sample Content:', { underline: true });
      doc.fontSize(12).text(
        'This is a sample eBook generated for demonstration purposes only. ' +
        'In a real e-commerce platform, this would be the actual eBook content. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat.'
      );
      
      // Add a footer
      doc.fontSize(10).text(
        `© ${new Date().getFullYear()} Book eCommerce Platform. All rights reserved.`,
        { align: 'center' }
      );
      
      // Finalize the PDF
      doc.end();
    } catch (error) {
      reject(error);
    }
  });
} 