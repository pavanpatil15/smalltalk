// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');

// // const app = express();

// // // Remove deprecated options
// // mongoose.connect('mongodb://localhost:27017/authdb')
// //   .then(() => console.log('MongoDB Connected'))
// //   .catch(err => console.log('MongoDB Connection Error:', err));

// // // Define User model BEFORE using it
// // const User = mongoose.model('User', new mongoose.Schema({
// //   email: String,
// //   password: String
// // }));

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Signup Endpoint
// // app.post('/api/signup', async (req, res) => {
// //   try {
// //     console.log('Received signup data:', req.body);
    
// //     const user = new User({
// //       email: req.body.email,
// //       password: req.body.password
// //     });

// //     const savedUser = await user.save();
// //     console.log('Saved to MongoDB:', savedUser);
    
// //     res.json({ success: true, user: savedUser });
// //   } catch (err) {
// //     console.error('Save error:', err);
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // app.listen(5000, () => console.log('Server ready on http://localhost:5000'));









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

// // Signup Endpoint (your existing code)
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

// // ADD THIS LOGIN ENDPOINT
// app.post('/api/login', async (req, res) => {
//   try {
//     console.log('Received login data:', req.body);
    
//     // Find user with matching email and password
//     const user = await User.findOne({
//       email: req.body.email,
//       password: req.body.password
//     });

//     if (user) {
//       console.log('Login successful for:', user.email);
//       res.json({ success: true, message: 'Login successful', user: user });
//     } else {
//       console.log('Login failed - invalid credentials');
//       res.status(401).json({ success: false, message: 'Invalid email or password' });
//     }
    
//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(5000, () => console.log('Server ready on http://localhost:5000'));































import React, { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log('Attempting to register user:', { email: formData.email });
      
      // Change this URL to your deployed Vercel backend URL
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${API_URL}/api/signup`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      console.log('Response status:', response.status);
      
      const data = await response.json();
      
      if (response.ok) {
        alert('User registered successfully!');
        console.log('User saved:', data.user);
        setFormData({ email: '', password: '' });
        // Redirect to dashboard or home page here
      } else {
        alert(`Registration failed: ${data.message || 'User might already exist'}`);
      }

    } catch (error) {
      console.error('Registration error:', error);
      alert(`Error: ${error.message}\n\nPlease try again later.`);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg">
        {/* Log in */}
        <h2 className="text-left mb-8 text-4xl font-extrabold text-gray-800">
          Sign Up
        </h2>

        {/* Social Buttons */}
        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={() => handleSocialLogin('Google')}
            className="flex items-center justify-center px-8 py-2 border-2 border-gray-300 rounded-md text-sm text-black bg-gray-100 min-w-[120px] h-10 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
              alt="Google"
              className="w-6 h-6 mr-4"
            />
            <span className="font-bold text-base">Google</span>
          </button>

          <button
            onClick={() => handleSocialLogin('Facebook')}
            className="flex items-center justify-center px-8 py-2 border-2 border-gray-300 rounded-md text-sm text-black bg-gray-100 min-w-[120px] h-10 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
              alt="Facebook"
              className="w-6 h-6 mr-4"
            />
            <span className="font-bold text-base">Facebook</span>
          </button>
        </div>

        {/* Divider */}
        <p className="text-center text-sm font-bold my-6">or</p>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Email label */}
          <label htmlFor="email" className="text-base font-bold text-gray-600 mb-3 ml-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
            required
            disabled={loading}
          />

          {/* Password label */}
          <div className="flex justify-between items-center mb-3">
            <label htmlFor="password" className="text-base font-bold text-gray-600 ml-2">
              Password
            </label>
          </div>
          
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
            required
            disabled={loading}
          />

          {/* Register button */}
          <button
            type="submit"
            disabled={loading}
            className={`p-2 h-12 text-white text-lg font-bold border-none rounded cursor-pointer mt-3 transition-colors duration-300 ease-in-out ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gray-800 hover:bg-purple-600'
            }`}
          >
            {loading ? 'Registering...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-base font-semibold mt-5 text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => console.log('Login clicked')}
            className="text-blue-600 no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}