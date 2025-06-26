import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Blog from './components/blog/Blog';
import About from './components/about/About';
import Business from './components/business/Business';
import Product from './components/products/Product';
import School from './components/school/School';

function AppContent() {
  const location = useLocation();

  // These pages will NOT show the navbar
  const hideNavbarRoutes = ["/signup", "/login"];

  return (
    <>
      {/* Show Navbar only if route is not in the hide list */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/business" element={<Business />} />
        <Route path="/product" element={<Product />} />
        <Route path="/school" element={<School />} />
        
        {/* add other routes */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
