import React from 'react';
import baby from './images/baby.jpg';

export default function Home({ onNavigate }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">ROOTED<br />IN<br />SPEECH</h1>
        </div>
        <div
          className="hero-right"
          style={{
            backgroundImage: `url(${baby})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </section>

      <section className="home-more-section">
        <div className="home-more-content">
          <p>We provide home-based speech therapy services at the client's home or at the local library.</p>
          <button className="info-button" onClick={() => onNavigate('more')}>More Information</button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-message">
          Contact Us
        </div>
        <div className="contact-boxes">
          <div className="contact-box">contact@rootedinspeech.com</div>
          <div className="contact-box">(260) 446-5562</div>
        </div>
      </section>
    </div>
  );
}
