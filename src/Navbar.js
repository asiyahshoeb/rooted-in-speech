// src/components/Nav.js
import React from 'react';

export default function Nav({ setActivePage }) {
  return (
    <nav className="navbar">
      <svg
        className="logo"
        onClick={() => setActivePage('home')}
        viewBox="0 0 120 160"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="10" width="100" height="140" fill="#4A1A4A" rx="5" />
        <text x="60" y="50" fontSize="20" fontWeight="bold" fill="#F5E6D3" textAnchor="middle">ROOTED</text>
        <text x="60" y="80" fontSize="16" fontWeight="bold" fill="#9CAF88" textAnchor="middle">IN</text>
        <text x="60" y="110" fontSize="20" fontWeight="bold" fill="#F5E6D3" textAnchor="middle">SPEECH</text>
        <path d="M 40 120 Q 60 135 80 120" stroke="#9CAF88" strokeWidth="3" fill="none" />
      </svg>

      <div className="nav-links">
        <button onClick={() => setActivePage('about')}>ABOUT</button>
        <button onClick={() => setActivePage('more')}>MORE</button>
        <button onClick={() => setActivePage('behavior')}>BEHAVIOR CONSULTATION</button>  
        <button onClick={() => alert('Payment')}>PAYMENT</button>
    </div>
    </nav>
  );
}
