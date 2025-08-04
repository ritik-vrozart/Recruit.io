import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import routes from './routes';
import { errorHandler } from './utils/errorHandler';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Root route
app.get('/', (req: express.Request, res: express.Response) => {
  res.json({ 
    message: 'Hello from Vrozart Recruit API!', 
    status: 'success',
    version: '1.0.0'
  });
});

// Error handling middleware
app.use(errorHandler);

// 404 handler - catch all unmatched routes
app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({ 
    message: 'Route not found', 
    status: 'error' 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 API Documentation: http://localhost:${PORT}/api`);
});