// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// // Remove deprecated options
// mongoose.connect('mongodb://localhost:27017/authdb')
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log('MongoDB Connection Error:', err));

// // Define User model BEFORE using it
// const User = mongoose.model('User', new mongoose.Schema({
//   email: String,
//   password: String
// }));

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Signup Endpoint
// app.post('/api/signup', async (req, res) => {
//   try {
//     console.log('Received signup data:', req.body);
    
//     const user = new User({
//       email: req.body.email,
//       password: req.body.password
//     });

//     const savedUser = await user.save();
//     console.log('Saved to MongoDB:', savedUser);
    
//     res.json({ success: true, user: savedUser });
//   } catch (err) {
//     console.error('Save error:', err);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(5000, () => console.log('Server ready on http://localhost:5000'));









const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Remove deprecated options
mongoose.connect('mongodb://localhost:27017/authdb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Error:', err));

// Define User model BEFORE using it
const User = mongoose.model('User', new mongoose.Schema({
  email: String,
  password: String
}));

// Middleware
app.use(cors());
app.use(express.json());

// Signup Endpoint (your existing code)
app.post('/api/signup', async (req, res) => {
  try {
    console.log('Received signup data:', req.body);
    
    const user = new User({
      email: req.body.email,
      password: req.body.password
    });

    const savedUser = await user.save();
    console.log('Saved to MongoDB:', savedUser);
    
    res.json({ success: true, user: savedUser });
  } catch (err) {
    console.error('Save error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ADD THIS LOGIN ENDPOINT
app.post('/api/login', async (req, res) => {
  try {
    console.log('Received login data:', req.body);
    
    // Find user with matching email and password
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });

    if (user) {
      console.log('Login successful for:', user.email);
      res.json({ success: true, message: 'Login successful', user: user });
    } else {
      console.log('Login failed - invalid credentials');
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log('Server ready on http://localhost:5000'));