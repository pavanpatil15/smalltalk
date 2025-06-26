import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-3 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center" to="/">
          <img
            src="/media/images/logo.svg"
            alt="Logo"
            width="30"
            height="30"
            className="inline-block align-text-top"
          />
          <span className="ml-2 font-semibold text-lg">SmallTalk2Me</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Products Dropdown */}
          <div className="relative group">
            <button className="font-bold text-black hover:text-purple-600 focus:outline-none flex items-center">
              Products
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-1 w-48 z-50">
              <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/product/chat">Chat</Link>
              <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/product/voice">Voice</Link>
              <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/product/analytics">Analytics</Link>
            </div>
          </div>

          {/* Other Links */}
          <Link className="font-bold text-black hover:text-purple-600" to="/business">For Business</Link>
          <Link className="font-bold text-black hover:text-purple-600" to="/schools">For Schools</Link>
          <Link className="font-bold text-black hover:text-purple-600" to="/blog">Blog</Link>
          <Link className="font-bold text-black hover:text-purple-600" to="/about">About Us</Link>
        </div>

        {/* Sign In Button */}
        <div className="hidden md:block">
          <Link 
            to="/signup" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="md:hidden hidden bg-white py-2 px-4">
        {/* Mobile menu content would go here */}
      </div>
    </nav>
  );
}

export default Navbar;