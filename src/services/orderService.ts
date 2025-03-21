/**
 * Order service for the e-commerce platform
 */

import { v4 as uuidv4 } from 'uuid';
import { Order, OrderItem, OrderStatus } from '../models/order';

// In-memory storage for orders
const orders: Order[] = [];

export class OrderService {
  /**
   * Create a new order
   * @param items Array of order items
   * @param customerName Customer name
   * @param customerEmail Customer email
   * @returns The created order
   */
  createOrder(items: OrderItem[], customerName: string, customerEmail: string): Order {
    // Calculate total amount
    const totalAmount = items.reduce((total, item) => {
      return total + (item.book.price * item.quantity);
    }, 0);
    
    // Create new order
    const order: Order = {
      id: uuidv4(),
      items,
      customerName,
      customerEmail,
      totalAmount,
      status: OrderStatus.PENDING,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Save order
    orders.push(order);
    
    return order;
  }
  
  /**
   * Get all orders
   * @returns Array of all orders
   */
  getAllOrders(): Order[] {
    return orders;
  }
  
  /**
   * Get order by ID
   * @param id Order ID
   * @returns Order if found, undefined otherwise
   */
  getOrderById(id: string): Order | undefined {
    return orders.find(order => order.id === id);
  }
  
  /**
   * Get orders by customer email
   * @param email Customer email
   * @returns Array of orders for the customer
   */
  getOrdersByCustomerEmail(email: string): Order[] {
    return orders.filter(order => order.customerEmail.toLowerCase() === email.toLowerCase());
  }
  
  /**
   * Update order status
   * @param id Order ID
   * @param status New order status
   * @returns Updated order if found, undefined otherwise
   */
  updateOrderStatus(id: string, status: OrderStatus): Order | undefined {
    const order = this.getOrderById(id);
    
    if (order) {
      order.status = status;
      order.updatedAt = new Date();
    }
    
    return order;
  }
} 