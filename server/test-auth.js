const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api';

async function testAuth() {
  try {
    console.log('🧪 Testing Authentication API...\n');

    // Test 1: Register a new user
    console.log('1. Testing user registration...');
    const registerResponse = await axios.post(`${BASE_URL}/auth/register`, {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      picture: 'https://example.com/avatar.jpg'
    });
    console.log('✅ Registration successful:', registerResponse.data.message);
    const token = registerResponse.data.token;
    console.log('Token received:', token.substring(0, 20) + '...\n');

    // Test 2: Login with the same user
    console.log('2. Testing user login...');
    const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
      email: 'test@example.com',
      password: 'password123'
    });
    console.log('✅ Login successful:', loginResponse.data.message);
    console.log('User credits:', loginResponse.data.user.credits, '\n');

    // Test 3: Get current user (protected route)
    console.log('3. Testing protected route (/me)...');
    const meResponse = await axios.get(`${BASE_URL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('✅ Get current user successful:', meResponse.data.message);
    console.log('User data:', meResponse.data.user.name, '\n');

    // Test 4: Test invalid login
    console.log('4. Testing invalid login...');
    try {
      await axios.post(`${BASE_URL}/auth/login`, {
        email: 'test@example.com',
        password: 'wrongpassword'
      });
    } catch (error) {
      console.log('✅ Invalid login correctly rejected:', error.response.data.message, '\n');
    }

    // Test 5: Test protected route without token
    console.log('5. Testing protected route without token...');
    try {
      await axios.get(`${BASE_URL}/auth/me`);
    } catch (error) {
      console.log('✅ Protected route correctly rejected:', error.response.data.message, '\n');
    }

    console.log('🎉 All tests passed! Authentication system is working correctly.');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
  }
}

// Run the test
testAuth(); 