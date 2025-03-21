/**
 * Email service for the e-commerce platform
 */

import * as nodemailer from 'nodemailer';
import { Order } from '../models/order';
import { generateEbook } from './ebookService';

// Configure nodemailer with test account (ethereal)
// In a production environment, use your actual SMTP settings
let transporter: nodemailer.Transporter;

// Initialize transporter
async function initializeTransporter() {
  if (!transporter) {
    // Create test account for demo purposes
    const testAccount = await nodemailer.createTestAccount();
    
    // Create reusable transporter
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
    
    console.log('Ethereal email account created:', testAccount.user);
    console.log('Ethereal email password:', testAccount.pass);
  }
  
  return transporter;
}

export class EmailService {
  /**
   * Send order confirmation email with eBook attachment
   * @param order The order
   * @returns Information about the sent email
   */
  async sendOrderConfirmation(order: Order): Promise<{ success: boolean; previewUrl?: string; error?: any }> {
    try {
      // Initialize transporter
      const emailTransporter = await initializeTransporter();
      
      // Generate eBook for each book in the order
      const attachments = [];
      
      for (const item of order.items) {
        const book = item.book;
        const ebookBuffer = await generateEbook(book);
        
        attachments.push({
          filename: `${book.title.replace(/[^a-zA-Z0-9]/g, '_')}_ebook.pdf`,
          content: ebookBuffer
        });
      }
      
      // Prepare email content
      const mailOptions = {
        from: '"Book eCommerce" <bookstore@example.com>',
        to: order.customerEmail,
        subject: `Order Confirmation #${order.id}`,
        html: `
          <h1>Thank you for your order!</h1>
          <p>Dear ${order.customerName},</p>
          <p>Your order has been received and is being processed.</p>
          <h2>Order Details:</h2>
          <p><strong>Order ID:</strong> ${order.id}</p>
          <p><strong>Date:</strong> ${order.createdAt.toLocaleString()}</p>
          <p><strong>Total Amount:</strong> $${order.totalAmount.toFixed(2)}</p>
          
          <h3>Items:</h3>
          <ul>
            ${order.items.map(item => `
              <li>
                <strong>${item.book.title}</strong> by ${item.book.author}<br>
                Quantity: ${item.quantity}<br>
                Price: $${item.book.price.toFixed(2)}<br>
                Subtotal: $${(item.quantity * item.book.price).toFixed(2)}
              </li>
            `).join('')}
          </ul>
          
          <p>Your eBooks are attached to this email. Thank you for shopping with us!</p>
        `,
        attachments
      };
      
      // Send email
      const info = await emailTransporter.sendMail(mailOptions);
      
      // Get test email preview URL (for demo purposes)
      const previewUrl = nodemailer.getTestMessageUrl(info) as string | undefined;
      
      return {
        success: true,
        previewUrl
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        error
      };
    }
  }
} 