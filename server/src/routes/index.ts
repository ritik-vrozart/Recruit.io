import { Router } from 'express';
import authRoutes from './auth';

const router = Router();

// API routes
router.use('/auth', authRoutes);

// Health check route
router.get('/health', (req, res) => {
  res.json({ message: 'Server is running', status: 'success' });
});

export default router; 