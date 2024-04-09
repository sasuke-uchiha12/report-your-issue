// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const complaintRoutes = require('./routes/complaint');
const config = require('./config/config');
const authenticate = require('./middleware/authenticate');


const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://127.0.0.1/eooffice'; 

app.use(bodyParser.urlencoded({
    extended: true
  }));

// Routes
app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);
app.use('/complaint', authenticate);
app.use('/complaint', complaintRoutes );

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
