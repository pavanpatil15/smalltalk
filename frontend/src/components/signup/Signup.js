// import React, { useState } from 'react';

// export default function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login submitted:', { email, password });
//   };

//   const handleSocialLogin = (provider) => {
//     console.log(`${provider} login clicked`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg">
//         {/* Log in */}
//         <h2 className="text-left mb-8 text-4xl font-extrabold text-gray-800">
//           Log in
//         </h2>

//         {/* Social Buttons */}
//         <div className="flex gap-4 justify-center mb-6">
//           <button
//             onClick={() => handleSocialLogin('Google')}
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
//             onClick={() => handleSocialLogin('Facebook')}
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

//         {/* Login Form */}
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           {/* Larger Email label */}
//           <label htmlFor="email" className="text-base font-bold text-gray-600 mb-3 ml-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter your email"
//             required
//           />

//           {/* Larger Password label */}
//           <div className="flex justify-between items-center mb-3">
//             <label htmlFor="password" className="text-base font-bold text-gray-600 ml-2">
//               Password
//             </label>
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 console.log('Forgot password clicked');
//               }}
//               className="text-base font-semibold text-blue-600 no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
//             >
//               Forgot password?
//             </button>
//           </div>
          
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter your password"
//             required
//           />

//           {/* Bolder Login button */}
//           <button onClick={() => handleSocialLogin(loginData)}
//             type="submit"
//             className="p-2 h-12 bg-gray-800 text-white text-lg font-bold border-none rounded cursor-pointer mt-3 transition-colors duration-300 ease-in-out hover:bg-purple-600"
//           >
//             Log In
//           </button>
//         </form>

//         <p className="text-center text-base font-semibold mt-5 text-gray-600">
//           Don't have an account?{' '}
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               console.log('Sign up clicked');
//             }}
//             className="text-blue-600 no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
//           >
//             Sign Up
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }












// import React, { useState } from 'react';

// export default function LoginForm() {
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
//       console.log('Attempting to save login data:', { email: formData.email, password: formData.password });
      
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
      
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(errorText || 'Save failed');
//       }

//       alert('Login data saved successfully!');
//       setFormData({ email: '', password: '' });

//     } catch (error) {
//       console.error('Full error:', error);
//       alert(`Error: ${error.message}\n\nMake sure:\n1. Backend is running\n2. No CORS errors\n3. Network is connected`);
//     }
//   };

//   const handleSocialLogin = (provider) => {
//     console.log(`${provider} login clicked`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg">
//         {/* Log in */}
//         <h2 className="text-left mb-8 text-4xl font-extrabold text-gray-800">
//           Log in
//         </h2>

//         {/* Social Buttons */}
//         <div className="flex gap-4 justify-center mb-6">
//           <button
//             onClick={() => handleSocialLogin('Google')}
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
//             onClick={() => handleSocialLogin('Facebook')}
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

//         {/* Login Form */}
//         <div className="flex flex-col">
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

//           {/* Password label with forgot password */}
//           <div className="flex justify-between items-center mb-3">
//             <label htmlFor="password" className="text-base font-bold text-gray-600 ml-2">
//               Password
//             </label>
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 console.log('Forgot password clicked');
//               }}
//               className="text-base font-semibold text-blue-600 no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
//             >
//               Forgot password?
//             </button>
//           </div>
          
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             placeholder="Enter your password"
//             required
//           />

//           {/* Login button */}
//           <button
//             onClick={handleSubmit}
//             type="submit"
//             className="p-2 h-12 bg-gray-800 text-white text-lg font-bold border-none rounded cursor-pointer mt-3 transition-colors duration-300 ease-in-out hover:bg-purple-600"
//           >
//             Log In
//           </button>
//         </div>

//         <p className="text-center text-base font-semibold mt-5 text-gray-600">
//           Don't have an account?{' '}
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               console.log('Sign up clicked');
//             }}
//             className="text-blue-600 no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
//           >
//             Sign Up
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }









































































import React, { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log('Attempting login:', { email: formData.email });
      
      // FIXED: Changed from /api/signup to /api/login
      const response = await fetch('http://localhost:5000/api/login', {
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
        alert('Login successful!');
        console.log('User data:', data.user);
        setFormData({ email: '', password: '' });
        // Redirect to dashboard or home page here
      } else {
        alert(`Login failed: ${data.message}`);
      }

    } catch (error) {
      console.error('Login error:', error);
      alert(`Error: ${error.message}\n\nMake sure:\n1. Backend is running on port 5000\n2. MongoDB is connected\n3. Network is available`);
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
          Log in
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

        {/* Login Form */}
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
          />

          {/* Password label with forgot password */}
          <div className="flex justify-between items-center mb-3">
            <label htmlFor="password" className="text-base font-bold text-gray-600 ml-2">
              Password
            </label>
            <button
              type="button"
              onClick={() => console.log('Forgot password clicked')}
              className="text-base font-semibold text-blue-600 no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
            >
              Forgot password?
            </button>
          </div>
          
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
            required
          />

          {/* Login button */}
          <button
            type="submit"
            className="p-2 h-12 bg-gray-800 text-white text-lg font-bold border-none rounded cursor-pointer mt-3 transition-colors duration-300 ease-in-out hover:bg-purple-600"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-base font-semibold mt-5 text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={() => console.log('Sign up clicked')}
            className="text-blue-600 no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}