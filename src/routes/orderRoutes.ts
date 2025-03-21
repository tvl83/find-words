/**
 * Order routes for the e-commerce platform
 */

import { Router } from 'express';
import { OrderController } from '../controllers/orderController';

const router = Router();
const orderController = new OrderController();

// POST /api/orders - Create a new order
router.post('/', orderController.createOrder.bind(orderController));

// GET /api/orders - Get all orders
router.get('/', orderController.getAllOrders.bind(orderController));

// GET /api/orders/:id - Get order by ID
router.get('/:id', orderController.getOrderById.bind(orderController));

// GET /api/orders/customer/:email - Get orders by customer email
router.get('/customer/:email', orderController.getOrdersByCustomerEmail.bind(orderController));

export default router; 