/**
 * Main routes file for the e-commerce platform
 */

import { Router } from 'express';
import bookRoutes from './bookRoutes';
import orderRoutes from './orderRoutes';

const router = Router();

// API routes
router.use('/api/books', bookRoutes);
router.use('/api/orders', orderRoutes);

export default router; 