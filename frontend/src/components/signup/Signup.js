// import React, { useState } from 'react';

// export default function SignupForm() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       console.log('Attempting signup:', { email: formData.email });
      
//       // FIXED: Changed to /api/signup to match your backend
//       const response = await fetch('http://localhost:5000/api/signup', {
//         method: 'POST',
//         headers: { 
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password
//         })
//       });

//       console.log('Response status:', response.status);
      
//       const data = await response.json();
      
//       if (response.ok) {
//         alert('Signup successful!');
//         console.log('User data:', data.user);
//         setFormData({ email: '', password: '' });
//         // Redirect to dashboard or login page here
//       } else {
//         alert(`Signup failed: ${data.error}`);
//       }

//     } catch (error) {
//       console.error('Signup error:', error);
//       alert(`Error: ${error.message}\n\nMake sure:\n1. Backend is running on port 5000\n2. MongoDB is connected\n3. Network is available`);
//     }
//   };

//   const handleSocialSignup = (provider) => {
//     console.log(`${provider} signup clicked`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg">
//         {/* Sign up */}
//         <h2 className="text-left mb-8 text-4xl font-extrabold text-gray-800">
//           Sign up
//         </h2>

//         {/* Social Buttons */}
//         <div className="flex gap-4 justify-center mb-6">
//           <button
//             onClick={() => handleSocialSignup('Google')}
//             className="flex items-center justify-center px-8 py-2 border-2 border-gray-300 rounded-md text-sm text-black bg-gray-100 min-w-[120px] h-10 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
//           >
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
//               alt="Google"
//               className="w-6 h-6 mr-4"
//             />
//             <span className="font-bold text-base">Google</span>
//           </button>

//           <button
//             onClick={() => handleSocialSignup('Facebook')}
//             className="flex items-center justify-center px-8 py-2 border-2 border-gray-300 rounded-md text-sm text-black bg-gray-100 min-w-[120px] h-10 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
//           >
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
//               alt="Facebook"
//               className="w-6 h-6 mr-4"
//             />
//             <span className="font-bold text-base">Facebook</span>
//           </button>
//         </div>

//         {/* Divider */}
//         <p className="text-center text-sm font-bold my-6">or</p>

//         {/* Signup Form */}
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           {/* Email label */}
//           <label htmlFor="email" className="text-base font-bold text-gray-600 mb-3 ml-2">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter your email"
//             required
//           />

//           {/* Password label */}
//           <label htmlFor="password" className="text-base font-bold text-gray-600 mb-3 ml-2">
//             Password
//           </label>
          
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter your password"
//             required
//           />

//           {/* Signup button */}
//           <button
//             type="submit"
//             className="p-2 h-12 bg-gray-800 text-white text-lg font-bold border-none rounded cursor-pointer mt-3 transition-colors duration-300 ease-in-out hover:bg-purple-600"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center text-base font-semibold mt-5 text-gray-600">
//           Already have an account?{' '}
//           <button
//             type="button"
//             onClick={() => console.log('Log in clicked')}
//             className="text-blue-600 no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
//           >
//             Log In
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }



















































// otp on terminal



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function SignupForm() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     otp: '' // 👈 Added OTP field
//   });
//   const [showOTPField, setShowOTPField] = useState(false); // 👈 New state
//   const navigate = useNavigate();

//   // Keep your original handleChange
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Modified handleSubmit for OTP flow
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!showOTPField) {
//       // Step 1: Send OTP
//       try {
//         const response = await fetch('http://localhost:5000/api/send-otp', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email: formData.email })
//         });
        
//         if (response.ok) {
//           alert('OTP sent to your email!');
//           setShowOTPField(true); // 👈 Show OTP field
//         } else {
//           alert('Failed to send OTP');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       // Step 2: Verify OTP and Signup
//       try {
//         const response = await fetch('http://localhost:5000/api/signup', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             email: formData.email,
//             password: formData.password,
//             otp: formData.otp
//           })
//         });

//         const data = await response.json();
//         if (response.ok) {
//           alert('Signup successful!');
//           navigate('/home'); // 👈 Redirect on success
//         } else {
//           alert(data.error || 'Signup failed');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   // Your original JSX (only add OTP field conditionally)
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg">
//         {/* Keep all your original UI elements exactly as is */}
//         <h2 className="text-left mb-8 text-4xl font-extrabold text-gray-800">
//           Sign up
//         </h2>

//         {/* Social Buttons (unchanged) */}
//         <div className="flex gap-4 justify-center mb-6">
//           <button
//             onClick={() => console.log('Google signup clicked')}
//             className="flex items-center justify-center px-8 py-2 border-2 border-gray-300 rounded-md text-sm text-black bg-gray-100 min-w-[120px] h-10 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
//           >
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
//               alt="Google"
//               className="w-6 h-6 mr-4"
//             />
//             <span className="font-bold text-base">Google</span>
//           </button>

//           <button
//             onClick={() => console.log('Facebook signup clicked')}
//             className="flex items-center justify-center px-8 py-2 border-2 border-gray-300 rounded-md text-sm text-black bg-gray-100 min-w-[120px] h-10 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
//           >
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
//               alt="Facebook"
//               className="w-6 h-6 mr-4"
//             />
//             <span className="font-bold text-base">Facebook</span>
//           </button>
//         </div>

//         <p className="text-center text-sm font-bold my-6">or</p>

//         <form onSubmit={handleSubmit} className="flex flex-col">
//           {/* Email field (unchanged) */}
//           <label htmlFor="email" className="text-base font-bold text-gray-600 mb-3 ml-2">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter your email"
//             required
//             disabled={showOTPField}
//           />

//           {/* Password field (unchanged) */}
//           <label htmlFor="password" className="text-base font-bold text-gray-600 mb-3 ml-2">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter your password"
//             required
//             disabled={showOTPField}
//           />

//           {/* 👇 Only add this OTP field when needed */}
//           {showOTPField && (
//             <>
//               <label htmlFor="otp" className="text-base font-bold text-gray-600 mb-3 ml-2">
//                 OTP
//               </label>
//               <input
//                 type="text"
//                 name="otp"
//                 value={formData.otp}
//                 onChange={handleChange}
//                 className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="Enter 6-digit OTP"
//                 required
//               />
//             </>
//           )}

//           {/* Your original signup button (now dynamic) */}
//           <button
//             type="submit"
//             className="p-2 h-12 bg-gray-800 text-white text-lg font-bold border-none rounded cursor-pointer mt-3 transition-colors duration-300 ease-in-out hover:bg-purple-600"
//           >
//             {showOTPField ? 'Verify OTP' : 'Sign Up'}
//           </button>
//         </form>

//         {/* Keep your existing "Already have an account?" link */}
//         <p className="text-center text-base font-semibold mt-5 text-gray-600">
//           Already have an account?{' '}
//           <button
//             type="button"
//             onClick={() => console.log('Log in clicked')}
//             className="text-blue-600 no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
//           >
//             Log In
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }








































































































// otp on email

// import React, { useState } from 'react';

// export default function SignupForm() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     otp: ''
//   });
//   const [showOTPField, setShowOTPField] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setMessage(''); // Clear any previous messages
//   };

// // Replace your handleSubmit function with this fixed version

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setMessage('');
  
//   if (!showOTPField) {
//     // Step 1: Send OTP (FIXED - only send email)
//     try {
//       const response = await fetch('http://localhost:5000/api/send-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: formData.email }) // Only email
//       });
      
//       const data = await response.json();
      
//       if (response.ok) {
//         setMessage('✅ OTP sent to your email! Check your inbox.');
//         setShowOTPField(true);
//       } else {
//         setMessage(`❌ ${data.error || 'Failed to send OTP'}`);
//       }
//     } catch (error) {
//       console.error('Send OTP error:', error);
//       setMessage('❌ Network error. Please check if backend is running.');
//     }
//   } else {
//     // Step 2: Verify OTP and Complete Signup (FIXED - send all required fields)
//     try {
//       const response = await fetch('http://localhost:5000/api/verify-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//           otp: formData.otp
//         })
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         setMessage('✅ Account created successfully! Redirecting...');
//         setTimeout(() => {
//           alert('Welcome! You would be redirected to home page now.');
//           // In real app: window.location.href = '/home' or use React Router
//         }, 1500);
//       } else {
//         setMessage(`❌ ${data.error || 'Verification failed'}`);
//       }
//     } catch (error) {
//       console.error('Verify OTP error:', error);
//       setMessage('❌ Network error. Please try again.');
//     }
//   }
  
//   setLoading(false);
// };

// // Also fix the handleResendOTP function
// const handleResendOTP = async () => {
//   setLoading(true);
//   setMessage('');
//   try {
//     const response = await fetch('http://localhost:5000/api/send-otp', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email: formData.email }) // Only email
//     });
    
//     const data = await response.json();
    
//     if (response.ok) {
//       setMessage('✅ New OTP sent to your email!');
//     } else {
//       setMessage(`❌ ${data.error || 'Failed to resend OTP'}`);
//     }
//   } catch (error) {
//     setMessage('❌ Network error. Please try again.');
//   }
//   setLoading(false);
// };

//   const handleBackToEmail = () => {
//     setShowOTPField(false);
//     setFormData({ ...formData, otp: '' });
//     setMessage('');
//   };

//   const handleSocialSignup = (provider) => {
//     alert(`${provider} signup clicked - implement OAuth integration`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg">
//         <h2 className="text-left mb-8 text-4xl font-extrabold text-gray-800">
//           Sign up
//         </h2>

//         {/* Social Buttons */}
//         <div className="flex gap-4 justify-center mb-6">
//           <button
//             onClick={() => handleSocialSignup('Google')}
//             className="flex items-center justify-center px-8 py-2 border-2 border-gray-300 rounded-md text-sm text-black bg-gray-100 min-w-[120px] h-10 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
//             disabled={loading}
//           >
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
//               alt="Google"
//               className="w-6 h-6 mr-4"
//             />
//             <span className="font-bold text-base">Google</span>
//           </button>

//           <button
//             onClick={() => handleSocialSignup('Facebook')}
//             className="flex items-center justify-center px-8 py-2 border-2 border-gray-300 rounded-md text-sm text-black bg-gray-100 min-w-[120px] h-10 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
//             disabled={loading}
//           >
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
//               alt="Facebook"
//               className="w-6 h-6 mr-4"
//             />
//             <span className="font-bold text-base">Facebook</span>
//           </button>
//         </div>

//         <p className="text-center text-sm font-bold my-6">or</p>

//         {/* Status Message */}
//         {message && (
//           <div className={`p-3 mb-4 rounded border text-sm ${
//             message.includes('✅') 
//               ? 'bg-green-50 border-green-200 text-green-700' 
//               : 'bg-red-50 border-red-200 text-red-700'
//           }`}>
//             {message}
//           </div>
//         )}

//         <div className="flex flex-col">
//           {/* Email field */}
//           <label htmlFor="email" className="text-base font-bold text-gray-600 mb-3 ml-2">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
//             placeholder="Enter your email"
//             required
//             disabled={showOTPField || loading}
//           />

//           {/* Password field */}
//           <label htmlFor="password" className="text-base font-bold text-gray-600 mb-3 ml-2">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
//             placeholder="Enter your password"
//             required
//             disabled={showOTPField || loading}
//             minLength={6}
//           />

//           {/* OTP field (conditional) */}
//           {showOTPField && (
//             <>
//               <label htmlFor="otp" className="text-base font-bold text-gray-600 mb-3 ml-2">
//                 OTP Code
//               </label>
//               <input
//                 type="text"
//                 name="otp"
//                 value={formData.otp}
//                 onChange={handleChange}
//                 className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="Enter 6-digit OTP"
//                 required
//                 maxLength={6}
//                 disabled={loading}
//               />
              
//               {/* OTP Helper buttons */}
//               <div className="flex gap-2 mb-4">
//                 <button
//                   type="button"
//                   onClick={handleResendOTP}
//                   className="text-sm text-blue-600 hover:underline disabled:text-gray-400"
//                   disabled={loading}
//                 >
//                   Resend OTP
//                 </button>
//                 <span className="text-gray-300">|</span>
//                 <button
//                   type="button"
//                   onClick={handleBackToEmail}
//                   className="text-sm text-gray-600 hover:underline disabled:text-gray-400"
//                   disabled={loading}
//                 >
//                   Change Email
//                 </button>
//               </div>
//             </>
//           )}

//           {/* Submit button */}
//           <button
//             onClick={handleSubmit}
//             className="p-2 h-12 bg-gray-800 text-white text-lg font-bold border-none rounded cursor-pointer mt-3 transition-colors duration-300 ease-in-out hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
//             disabled={loading}
//           >
//             {loading 
//               ? '⏳ Processing...' 
//               : showOTPField 
//                 ? '✅ Verify OTP' 
//                 : '📧 Send OTP'
//             }
//           </button>
//         </div>

//         {/* Login link */}
//         <p className="text-center text-base font-semibold mt-5 text-gray-600">
//           Already have an account?{' '}
//           <button
//             type="button"
//             onClick={() => alert('Navigate to login page')}
//             className="text-blue-600 no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
//           >
//             Log In
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }


































































































































// TRY TO MODIFY // Working 


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    otp: ''
  });
  const [showOTPField, setShowOTPField] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (!showOTPField) {
      // Step 1: Send OTP
      try {
        const response = await fetch('http://localhost:5000/api/send-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          setMessage('OTP sent to your email!');
          setShowOTPField(true);
        } else {
          setMessage(`${data.error || 'Failed to send OTP'}`);
        }
      } catch (error) {
        console.error('Send OTP error:', error);
        setMessage('error');
      }
    } else {
      // Step 2: Verify OTP and Complete Signup
      try {
        const response = await fetch('http://localhost:5000/api/verify-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            otp: formData.otp
          })
        });

        const data = await response.json();
        
        if (response.ok) {
          setTimeout(() => {
            navigate('/home');
          }, 1500);
        } else {
          setMessage(`${data.error || 'Verification failed'}`);
        }
      } catch (error) {
        console.error('Verify OTP error:', error);
        setMessage('Please try again.');
      }
    }
    
    setLoading(false);
  };

  const handleResendOTP = async () => {
    setLoading(true);
    setMessage('');
    try {
      const response = await fetch('http://localhost:5000/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage('New OTP sent to your email!');
      } else {
        setMessage(`${data.error || 'Failed to resend OTP'}`);
      }
    } catch (error) {
      setMessage('Please try again.');
    }
    setLoading(false);
  };

  const handleBackToEmail = () => {
    setShowOTPField(false);
    setFormData({ ...formData, otp: '' });
    setMessage('');
  };

  const handleSocialSignup = (provider) => {
    alert(`${provider} signup clicked - implement OAuth integration`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg">
        <h2 className="text-left mb-8 text-4xl font-extrabold text-gray-800">
          Sign up
        </h2>

        {/* Social Buttons */}
        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={() => handleSocialSignup('Google')}
            className="flex items-center justify-center px-8 py-2 border-2 border-gray-300 rounded-md text-sm text-black bg-gray-100 min-w-[120px] h-10 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
            disabled={loading}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
              alt="Google"
              className="w-6 h-6 mr-4"
            />
            <span className="font-bold text-base">Google</span>
          </button>

          <button
            onClick={() => handleSocialSignup('Facebook')}
            className="flex items-center justify-center px-8 py-2 border-2 border-gray-300 rounded-md text-sm text-black bg-gray-100 min-w-[120px] h-10 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
            disabled={loading}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
              alt="Facebook"
              className="w-6 h-6 mr-4"
            />
            <span className="font-bold text-base">Facebook</span>
          </button>
        </div>

        <p className="text-center text-sm font-bold my-6">or</p>

        {/* Status Message */}
        {message && (
          <div className={`p-3 mb-4 rounded border text-sm ${
            message.includes('✅') 
              ? 'bg-green-50 border-green-200 text-green-700' 
              : 'bg-red-50 border-red-200 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Email field */}
          <label htmlFor="email" className="text-base font-bold text-gray-600 mb-3 ml-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
            placeholder="Enter your email"
            required
            disabled={showOTPField || loading}
          />

          {/* Password field */}
          <label htmlFor="password" className="text-base font-bold text-gray-600 mb-3 ml-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
            placeholder="Enter your password"
            required
            disabled={showOTPField || loading}
            minLength={6}
          />

          {/* OTP field (conditional) */}
          {showOTPField && (
            <>
              <label htmlFor="otp" className="text-base font-bold text-gray-600 mb-3 ml-2">
                OTP Code
              </label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter 6-digit OTP"
                required
                maxLength={6}
                disabled={loading}
              />
              
              <div className="flex gap-2 mb-4">
                <button
                  type="button"
                  onClick={handleResendOTP}
                  className="text-sm text-blue-600 hover:underline disabled:text-gray-400"
                  disabled={loading}
                >
                  Resend OTP
                </button>
                <span className="text-gray-300">|</span>
                <button
                  type="button"
                  onClick={handleBackToEmail}
                  className="text-sm text-gray-600 hover:underline disabled:text-gray-400"
                  disabled={loading}
                >
                  Change Email
                </button>
              </div>
            </>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="p-2 h-12 bg-gray-800 text-white text-lg font-bold border-none rounded cursor-pointer mt-3 transition-colors duration-300 ease-in-out hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading 
              ? 'Processing...' 
              : showOTPField 
                ? 'Verify OTP' 
                : 'Sign Up'
            }
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-base font-semibold mt-5 text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-blue-600 no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}