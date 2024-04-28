const jwt = require('jsonwebtoken');
const config = require('./config/config');

// Sample JWT token
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjEwZTljZTZhY2FlZWI1M2QxODQ4MjciLCJ1c2VybmFtZSI6IlNocmV5YSIsImVtYWlsIjoic2hyZXlhMjNAZ21haWwuY29tIiwiaWF0IjoxNzEyMzg0NDkzLCJleHAiOjE3MTIzODgwOTN9.VElGInFF2PK9BJfbJf1AvUgBzu4BRfG4h_JnB8aZWac';

try {
  // Decode the token (optional)
  const decodedToken = jwt.decode(token, { complete: true });
  console.log('Decoded token:', decodedToken);

  // Obtain the signing key (using symmetric key for example)
  const signingKey = config.jwtSecret;

  // Verify the token signature
  const decodedPayload = jwt.verify(token, signingKey);
  console.log('Decoded payload:', decodedPayload);

  // Extract user information from the decoded payload
  const username = decodedPayload.user.username;
  const email = decodedPayload.user.email;

  console.log('Username:', username);
  console.log('Email:', email);
  // Output the user information or use it as needed
} catch (error) {
  // If verification fails, handle the error
  console.error('Token verification failed:', error);
}
