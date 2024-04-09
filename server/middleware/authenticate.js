// middleware/authenticate.js

const jwt = require('jsonwebtoken');
const config = require('../config/config');
const express = require('express');
const router = express.Router();
const complaintRoutes = require('../routes/complaint');
const app = express();


function authenticate(req, res, next) {
  // Get the token from the Authorization header
  const token = req.headers.authorization.split(' ')[1];
  //console.log(token);
  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    // Verify and decode the token
    data = jwt.verify(token, config.jwtSecret);
    console.log(data);
    req.user = data.userId;
    // res.status(201).json({ message: 'Auth is done' });
    next();
    
    
    
    // Move to the next middleware
  } catch (error) {
    // Check if token has expired
    if (error.name === 'TokenExpiredError') {
       return res.status(401).json({ message: 'Token has expired' });
      //console.log("Token expired");
    }

    // Check if token is invalid
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
      //console.log('Invalid token');
    }

    // Other errors
    console.error('Error verifying token:', error);
    return res.status(500).json({ message: 'Internal server error' });
    //console.log("0");
  }
}

module.exports = authenticate;
