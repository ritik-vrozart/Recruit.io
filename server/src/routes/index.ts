import { Router } from 'express';
import authRoutes from './auth';
import categoryRoutes from './category';

const router = Router();

// API routes
router.use('/auth', authRoutes);
router.use('/category', categoryRoutes);

// Health check route
router.get('/health', (req, res) => {
  res.json({ message: 'Server is running', status: 'success' });
});

export default router; 