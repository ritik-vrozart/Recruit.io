# Vrozart Recruit API Documentation

## Authentication Endpoints

### Base URL
```
http://localhost:3000/api
```

### 1. Register User
**POST** `/auth/register`

Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "picture": "https://example.com/avatar.jpg" // optional
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "picture": "https://example.com/avatar.jpg",
    "credits": 3,
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "token": "jwt-token-here"
}
```

### 2. Login User
**POST** `/auth/login`

Authenticate an existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "picture": "https://example.com/avatar.jpg",
    "credits": 3,
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "token": "jwt-token-here"
}
```

### 3. Get Current User
**GET** `/auth/me`

Get the current authenticated user's information.

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "message": "User data retrieved successfully",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "picture": "https://example.com/avatar.jpg",
    "credits": 3,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## Error Responses

### Validation Error (400)
```json
{
  "message": "Validation error",
  "errors": [
    {
      "code": "invalid_string",
      "message": "Invalid email address",
      "path": ["email"]
    }
  ]
}
```

### Authentication Error (401)
```json
{
  "message": "No token, authorization denied"
}
```

### User Not Found (404)
```json
{
  "message": "User not found"
}
```

### Server Error (500)
```json
{
  "message": "Server error"
}
```

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/vrozart_recruit?schema=public"
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your database and update the DATABASE_URL in `.env`

3. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Testing with cURL

### Register a new user:
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
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

### Get current user (replace TOKEN with actual JWT token):
```bash
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer TOKEN"
``` 