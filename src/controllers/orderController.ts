/**
 * Order controller for the e-commerce platform
 */

import { Request, Response } from 'express';
import { OrderService } from '../services/orderService';
import { BookService } from '../services/bookService';
import { EmailService } from '../services/emailService';
import { OrderItem, OrderStatus } from '../models/order';

const orderService = new OrderService();
const bookService = new BookService();
const emailService = new EmailService();

export class OrderController {
  /**
   * Create a new order
   */
  async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const { items, customerName, customerEmail } = req.body;
      
      // Validate request body
      if (!items || !Array.isArray(items) || items.length === 0) {
        res.status(400).json({ error: 'Invalid items' });
        return;
      }
      
      if (!customerName || !customerEmail) {
        res.status(400).json({ error: 'Customer information is required' });
        return;
      }
      
      // Prepare order items with book details
      const orderItems: OrderItem[] = [];
      
      for (const item of items) {
        const book = bookService.getBookById(item.bookId);
        
        if (!book) {
          res.status(400).json({ error: `Book with ID ${item.bookId} not found` });
          return;
        }
        
        if (!item.quantity || item.quantity <= 0) {
          res.status(400).json({ error: `Invalid quantity for book ${book.title}` });
          return;
        }
        
        orderItems.push({
          book,
          quantity: item.quantity
        });
      }
      
      // Create order
      const order = orderService.createOrder(orderItems, customerName, customerEmail);
      
      // Send order confirmation email
      const emailResult = await emailService.sendOrderConfirmation(order);
      
      // Update order status based on email result
      if (emailResult.success) {
        orderService.updateOrderStatus(order.id, OrderStatus.PROCESSING);
      }
      
      // Return order with email information
      res.status(201).json({
        order,
        email: {
          success: emailResult.success,
          previewUrl: emailResult.previewUrl // For testing purposes
        }
      });
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  /**
   * Get all orders
   */
  getAllOrders(_req: Request, res: Response): void {
    try {
      const orders = orderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      console.error('Error getting all orders:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  /**
   * Get order by ID
   */
  getOrderById(req: Request, res: Response): void {
    try {
      const id = req.params.id;
      const order = orderService.getOrderById(id);
      
      if (!order) {
        res.status(404).json({ error: 'Order not found' });
        return;
      }
      
      res.json(order);
    } catch (error) {
      console.error('Error getting order by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  /**
   * Get orders by customer email
   */
  getOrdersByCustomerEmail(req: Request, res: Response): void {
    try {
      const email = req.params.email;
      
      if (!email) {
        res.status(400).json({ error: 'Email is required' });
        return;
      }
      
      const orders = orderService.getOrdersByCustomerEmail(email);
      res.json(orders);
    } catch (error) {
      console.error('Error getting orders by customer email:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
} 