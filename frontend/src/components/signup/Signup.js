import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg">
        {/* Larger "Log in" text */}
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
          {/* Larger Email label */}
          <label htmlFor="email" className="text-base font-bold text-gray-600 mb-3 ml-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
            required
          />

          {/* Larger Password label */}
          <div className="flex justify-between items-center mb-3">
            <label htmlFor="password" className="text-base font-bold text-gray-600 ml-2">
              Password
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log('Forgot password clicked');
              }}
              className="text-base font-semibold text-blue-600 no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
            >
              Forgot password?
            </button>
          </div>
          
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 mb-4 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
            required
          />

          {/* Bolder Login button */}
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
            onClick={(e) => {
              e.preventDefault();
              console.log('Sign up clicked');
            }}
            className="text-blue-600 no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}