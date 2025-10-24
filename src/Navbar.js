import React from 'react';
import risLogo from './images/ris_logo.png';

export default function Nav({ setActivePage }) {
  return (
    <nav className="navbar">
      {/* ✅ Replace SVG with clickable image */}
      <img
        src={risLogo}
        alt="Rooted in Speech Logo"
        className="logo"
        onClick={() => setActivePage('home')}
      />

      <div className="nav-links">
        <button onClick={() => setActivePage('about')}>ABOUT</button>
        <button onClick={() => setActivePage('more')}>MORE</button>
        <button onClick={() => setActivePage('behavior')}>BEHAVIOR CONSULTATION</button>
        <button onClick={() => alert('Payment page coming soon!')}>PAYMENT</button>
      </div>
    </nav>
  );
}
