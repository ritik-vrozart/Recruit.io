# Vrozart Recruit Server - Authentication System

A complete authentication system built with Express.js, TypeScript, Prisma, and Zod validation.

## 🏗️ Project Structure

```
server/
├── src/
│   ├── config/
│   │   └── database.ts          # Prisma client configuration
│   ├── controllers/
│   │   └── authController.ts    # Authentication logic
│   ├── middleware/
│   │   └── auth.ts             # JWT authentication middleware
│   ├── routes/
│   │   ├── auth.ts             # Authentication routes
│   │   └── index.ts            # Main routes index
│   ├── validations/
│   │   └── auth.ts             # Zod validation schemas
│   ├── utils/
│   │   └── errorHandler.ts     # Error handling utilities
│   └── index.ts                # Main server file
├── prisma/
│   └── schema.prisma           # Database schema
├── API_DOCUMENTATION.md        # Detailed API documentation
└── README.md                   # This file
```

## 🚀 Features

- **User Registration** with email validation
- **User Login** with password hashing
- **JWT Authentication** for protected routes
- **Zod Validation** for request validation
- **Prisma ORM** for database operations
- **TypeScript** for type safety
- **Error Handling** with proper HTTP status codes
- **CORS** enabled for cross-origin requests

## 📋 Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the server directory:
   ```env
   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

   # Database Configuration
   DATABASE_URL="postgresql://username:password@localhost:5432/vrozart_recruit?schema=public"
   ```

3. **Set up the database:**
   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma migrate dev
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🔐 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server health check |

## 📝 Usage Examples

### Register a new user:
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "picture": "https://example.com/avatar.jpg"
  }'
```

### Login:
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get current user (with JWT token):
```bash
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🔒 Security Features

- **Password Hashing**: Uses bcryptjs with 12 salt rounds
- **JWT Tokens**: Secure token-based authentication
- **Input Validation**: Zod schemas validate all inputs
- **Error Handling**: Proper error responses without exposing sensitive data
- **CORS**: Configured for cross-origin requests

## 🧪 Testing

To test the authentication system:

1. Start the server: `npm run dev`
2. Run the test script: `node test-auth.js`

## 📊 Database Schema

The User model includes:
- `id`: Unique identifier (UUID)
- `name`: User's full name
- `email`: Unique email address
- `password`: Hashed password
- `picture`: Optional profile picture URL
- `credits`: User credits (default: 3)
- `createdAt`: Account creation timestamp
- `updatedAt`: Last update timestamp

## 🛠️ Development

### Available Scripts

- `npm run dev`: Start development server with hot reload
- `npm run build`: Build TypeScript to JavaScript
- `npm start`: Start production server
- `npm run watch`: Start with nodemon for development

### Adding New Routes

1. Create a new controller in `src/controllers/`
2. Create validation schemas in `src/validations/`
3. Add routes in `src/routes/`
4. Import and use in `src/routes/index.ts`

## 📚 Dependencies

### Production Dependencies
- `express`: Web framework
- `@prisma/client`: Database ORM
- `bcryptjs`: Password hashing
- `jsonwebtoken`: JWT authentication
- `zod`: Schema validation
- `cors`: Cross-origin resource sharing
- `dotenv`: Environment variable management

### Development Dependencies
- `typescript`: TypeScript compiler
- `@types/express`: Express type definitions
- `@types/bcryptjs`: bcryptjs type definitions
- `@types/jsonwebtoken`: JWT type definitions
- `@types/cors`: CORS type definitions
- `ts-node`: TypeScript execution
- `nodemon`: Development server with auto-restart

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License. 