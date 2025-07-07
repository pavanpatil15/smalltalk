// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/authdb')
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log('MongoDB Error:', err));

// // Enhanced User Schema (with OTP fields)
// const userSchema = new mongoose.Schema({
//   email: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
//   otp: String,
//   otpExpires: Date,
//   verified: { type: Boolean, default: false }
// });
// const User = mongoose.model('User', userSchema);

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Generate OTP (6 digits, valid for 5 mins)
// function generateOTP() {
//   return {
//     code: Math.floor(100000 + Math.random() * 900000).toString(),
//     expires: new Date(Date.now() + 5*60*1000) // 5 minutes
//   };
// }

// // Send OTP Endpoint
// app.post('/api/send-otp', async (req, res) => {
//   const { email } = req.body;
  
//   try {
//     // Generate OTP
//     const { code, expires } = generateOTP();
    
//     // Save/update OTP in MongoDB
//     await User.findOneAndUpdate(
//       { email },
//       { $set: { otp: code, otpExpires: expires, verified: false } },
//       { upsert: true, new: true }
//     );
    
//     console.log(`OTP for ${email}: ${code}`); // For testing
    
//     res.json({ success: true });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Verify OTP and Complete Signup
// app.post('/api/signup', async (req, res) => {
//   const { email, password, otp } = req.body;
  
//   try {
//     // Find user with matching OTP
//     const user = await User.findOne({ 
//       email,
//       otp,
//       otpExpires: { $gt: new Date() } // Check OTP not expired
//     });

//     if (!user) {
//       return res.status(400).json({ error: 'Invalid/expired OTP' });
//     }

//     // Complete registration
//     user.password = password;
//     user.verified = true;
//     user.otp = undefined;
//     user.otpExpires = undefined;
//     await user.save();

//     res.json({ success: true, user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

































































// otp on email 

// kwgqmrhkjdugmbug

// // index.js - Complete Backend Code
// const express = require('express');
// const mongoose = require('mongoose');
// const nodemailer = require('nodemailer');
// const bcrypt = require('bcrypt');
// const cors = require('cors');
// require('dotenv').config();

// console.log('🚀 Starting server...');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/smalltalk';
// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     console.log('✅ MongoDB Connected Successfully');
//     console.log('📊 Database:', mongoose.connection.name);
//   })
//   .catch(err => {
//     console.log('❌ MongoDB Connection Error:', err);
//   });

// // User Schema
// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     default: null
//   },
//   otp: {
//     type: String,
//     default: null
//   },
//   otpExpires: {
//     type: Date,
//     default: null
//   },
//   isVerified: {
//     type: Boolean,
//     default: false
//   }
// }, {
//   timestamps: true
// });

// const User = mongoose.model('User', userSchema);

// // Email Configuration
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER || 'patilpavan1509@gmail.com',
//     pass: process.env.EMAIL_PASS // Gmail App Password
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// });

// // Test email configuration
// transporter.verify((error, success) => {
//   if (error) {
//     console.log('❌ Email configuration error:', error);
//   } else {
//     console.log('✅ Email service ready');
//     console.log('📧 Email configured for:', process.env.EMAIL_USER || 'patilpavan1509@gmail.com');
//   }
// });

// // Generate 6-digit OTP
// const generateOTP = () => {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// };

// // Send OTP Email
// const sendOTPEmail = async (email, otp) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER || 'patilpavan1509@gmail.com',
//     to: email,
//     subject: 'Your OTP Code - SmallTalk',
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//         <h2 style="color: #333; text-align: center;">Your OTP Code</h2>
//         <div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center; margin: 20px 0;">
//           <h1 style="color: #007bff; font-size: 32px; margin: 0; letter-spacing: 5px;">${otp}</h1>
//         </div>
//         <p style="color: #666; text-align: center;">This OTP will expire in 10 minutes.</p>
//         <p style="color: #666; text-align: center;">If you didn't request this, please ignore this email.</p>
//       </div>
//     `
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('✅ OTP email sent to:', email);
//     return true;
//   } catch (error) {
//     console.log('❌ Send OTP Error:', error);
//     return false;
//   }
// };

// // MAIN ROUTES

// // Route 1: Send OTP
// app.post('/api/send-otp', async (req, res) => {
//   try {
//     const { email } = req.body;
    
//     console.log('📨 Send OTP Request:', { email });

//     if (!email) {
//       return res.status(400).json({ error: 'Email is required' });
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ error: 'Please enter a valid email' });
//     }

//     // Generate OTP
//     const otp = generateOTP();
//     const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

//     console.log('🔐 Generated OTP for', email, ':', otp);

//     // Save/Update user with OTP
//     const user = await User.findOneAndUpdate(
//       { email },
//       { 
//         email,
//         otp,
//         otpExpires,
//         isVerified: false
//       },
//       { upsert: true, new: true }
//     );

//     console.log('💾 User saved to database:', {
//       id: user._id,
//       email: user.email,
//       hasOTP: !!user.otp,
//       otpExpires: user.otpExpires
//     });

//     // Send OTP email
//     const emailSent = await sendOTPEmail(email, otp);

//     if (emailSent) {
//       res.json({ 
//         message: 'OTP sent successfully',
//         email: email,
//         debug: {
//           otp: otp, // Remove this in production
//           expires: otpExpires
//         }
//       });
//     } else {
//       res.status(500).json({ error: 'Failed to send OTP email' });
//     }

//   } catch (error) {
//     console.error('❌ Send OTP Error:', error);
//     res.status(500).json({ error: 'Server error: ' + error.message });
//   }
// });

// // Route 2: Verify OTP
// app.post('/api/verify-otp', async (req, res) => {
//   try {
//     const { email, password, otp } = req.body;
    
//     console.log('🔍 Verify OTP Request:', { email, otp, hasPassword: !!password });

//     if (!email || !password || !otp) {
//       return res.status(400).json({ error: 'Email, password, and OTP are required' });
//     }

//     if (password.length < 6) {
//       return res.status(400).json({ error: 'Password must be at least 6 characters' });
//     }

//     // Find user
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: 'User not found. Please request OTP first.' });
//     }

//     console.log('👤 User found:', {
//       email: user.email,
//       hasOTP: !!user.otp,
//       otpExpires: user.otpExpires,
//       isExpired: user.otpExpires ? user.otpExpires < new Date() : null
//     });

//     // Check if OTP exists
//     if (!user.otp) {
//       return res.status(400).json({ error: 'No OTP found. Please request OTP first.' });
//     }

//     // Check if OTP expired
//     if (user.otpExpires < new Date()) {
//       return res.status(400).json({ error: 'OTP has expired. Please request a new one.' });
//     }

//     // Check OTP
//     if (user.otp !== otp) {
//       return res.status(400).json({ error: 'Invalid OTP. Please check and try again.' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     console.log('🔐 Password hashed successfully');

//     // Update user with password and clear OTP
//     user.password = hashedPassword;
//     user.otp = null;
//     user.otpExpires = null;
//     user.isVerified = true;
//     await user.save();

//     console.log('✅ User account created successfully:', {
//       id: user._id,
//       email: user.email,
//       isVerified: user.isVerified,
//       hasPassword: !!user.password
//     });

//     res.json({ 
//       message: 'Account created successfully',
//       user: {
//         id: user._id,
//         email: user.email,
//         isVerified: user.isVerified,
//         createdAt: user.createdAt
//       }
//     });

//   } catch (error) {
//     console.error('❌ Verify OTP Error:', error);
//     res.status(500).json({ error: 'Server error: ' + error.message });
//   }
// });

// // DEBUG ROUTES (Remove in production)

// // Get all users
// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await User.find({}, { password: 0 }); // Don't return passwords
//     res.json({
//       count: users.length,
//       users: users
//     });
//   } catch (error) {
//     console.error('Get users error:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Debug route to see all users (including passwords)
// app.get('/debug/users', async (req, res) => {
//   try {
//     const users = await User.find({});
//     console.log('🔍 All users in database:', users);
//     res.json({
//       count: users.length,
//       users: users.map(user => ({
//         id: user._id,
//         email: user.email,
//         hasPassword: !!user.password,
//         passwordLength: user.password ? user.password.length : 0,
//         hasOTP: !!user.otp,
//         isVerified: user.isVerified,
//         createdAt: user.createdAt,
//         updatedAt: user.updatedAt
//       }))
//     });
//   } catch (error) {
//     console.error('Debug users error:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Check specific user
// app.get('/debug/user/:email', async (req, res) => {
//   try {
//     const email = req.params.email;
//     const user = await User.findOne({ email });
    
//     if (!user) {
//       res.json({ message: 'User not found', email });
//     } else {
//       res.json({
//         user: {
//           id: user._id,
//           email: user.email,
//           hasPassword: !!user.password,
//           passwordLength: user.password ? user.password.length : 0,
//           hasOTP: !!user.otp,
//           otp: user.otp, // Remove in production
//           otpExpires: user.otpExpires,
//           isVerified: user.isVerified,
//           createdAt: user.createdAt,
//           updatedAt: user.updatedAt
//         }
//       });
//     }
//   } catch (error) {
//     console.error('Debug user error:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Database info
// app.get('/debug/db-info', async (req, res) => {
//   try {
//     const dbName = mongoose.connection.name;
//     const collections = await mongoose.connection.db.listCollections().toArray();
    
//     res.json({
//       databaseName: dbName,
//       collections: collections.map(c => c.name),
//       connectionState: mongoose.connection.readyState,
//       connectionString: MONGODB_URI.replace(/\/\/.*@/, '//***:***@')
//     });
//   } catch (error) {
//     console.error('Debug db-info error:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Health check
// app.get('/health', (req, res) => {
//   res.json({ 
//     status: 'OK', 
//     message: 'Server is running',
//     timestamp: new Date().toISOString(),
//     database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
//   });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
//   console.log(`📡 API endpoints available:`);
//   console.log(`   POST http://localhost:${PORT}/api/send-otp`);
//   console.log(`   POST http://localhost:${PORT}/api/verify-otp`);
//   console.log(`   GET  http://localhost:${PORT}/api/users`);
//   console.log(`   GET  http://localhost:${PORT}/debug/users`);
//   console.log(`   GET  http://localhost:${PORT}/debug/db-info`);
//   console.log(`   GET  http://localhost:${PORT}/health`);
// });

// // Error handling
// process.on('unhandledRejection', (err) => {
//   console.error('Unhandled Promise Rejection:', err);
// });

// process.on('uncaughtException', (err) => {
//   console.error('Uncaught Exception:', err);
//   process.exit(1);
// });

// module.exports = app;










































































































// TRY TO MODIFY

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (simplified logging)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/smalltalk', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
.then(() => {
  console.log('MongoDB Connected');
})
.catch(err => {
  console.error('MongoDB Connection Error:', err.message);
  process.exit(1);
});

// User Schema with field order: email, password, __v
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: 'Invalid email format'
    }
  },
  password: String,
  otp: String,
  otpExpires: Date
});

const User = mongoose.model('User', userSchema);

// Email transporter (simplified)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Generate 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// API Endpoints

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// Send OTP endpoint
app.post('/api/send-otp', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const user = await User.findOneAndUpdate(
      { email },
      { otp, otpExpires },
      { upsert: true, new: true }
    );

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}. It expires in 10 minutes.`,
      html: `<p>Your OTP code is <strong>${otp}</strong>. It expires in 10 minutes.</p>`
    });

    res.json({ 
      success: true,
      message: 'OTP sent successfully'
    });

  } catch (error) {
    console.error('Send OTP Error:', error.message);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
});

// Verify OTP endpoint
app.post('/api/verify-otp', async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    if (!email || !otp || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // OTP verification
    if (!user.otp || user.otp !== otp) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    if (user.otpExpires < new Date()) {
      return res.status(400).json({ error: 'OTP has expired' });
    }

    // Save password and clean up OTP fields, ensuring field order
    await User.findOneAndUpdate(
      { email },
      { 
        $set: { password: password },
        $unset: { otp: 1, otpExpires: 1 }
      },
      { new: true }
    );

    res.json({ 
      success: true,
      message: 'Account verified successfully'
    });

  } catch (error) {
    console.error('Verify OTP Error:', error.message);
    res.status(500).json({ error: 'Failed to verify OTP' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Error handling
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err.message);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err.message);
  process.exit(1);
});