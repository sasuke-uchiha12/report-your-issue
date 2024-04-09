// routes/complaint.js

const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');
const bodyParser = require('body-parser');
const app = express();
const config = require('../config/config');
const authenticate = require('../middleware/authenticate');
const jwt = require('jsonwebtoken');



// Function to generate unique complaint ID
function generateComplaintId() {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
  const randomString = Math.random().toString(36).substr(2, 5); // Generate a random string (5 characters)
  return timestamp + randomString; // Combine timestamp and random string
}
app.use(bodyParser.urlencoded({
  extended: true
}));



// Endpoint for submitting complaints
router.post('/submit',authenticate, async (req, res) => {
  try {
    const { description } = req.body;
    console.log(req.body);
    const id = req.user;
    const complaintId = generateComplaintId();
    console.log(complaintId);
    const newComplaint = new Complaint({ id, complaintId, description });
    await newComplaint.save();
    res.status(201).json({ message: 'Complaint submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
