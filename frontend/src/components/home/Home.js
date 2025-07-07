import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  const email = location.state?.email || 'User';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {email}!</h1>
        <p className="text-lg">Your account is now verified and active.</p>
      </div>
    </div>
  );
}