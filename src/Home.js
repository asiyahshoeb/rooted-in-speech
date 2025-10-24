import React from 'react';
import baby from './images/baby.jpg'; 

export default function Home() {
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

      {/* Quadrant Section */}
      <section className="quadrant-section">
        <div className="quadrant-left">
          <div className="phrase">
            "Providing services in the home, at libraries, or in private schools"
          </div>
          <div className="flowers">🌸 🌺 🌼</div>
        </div>
        <div className="quadrant-right">
          <div className="flowers">🌻 🌷 🌹</div>
          <div className="phrase">
            "Committed to providing well-rounded approaches of therapy for the child"
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-message">
          Contact me for any advice! No question is too small
        </div>
        <div className="contact-boxes">
          <div className="contact-box">contact@rootedinspeech.com</div>
          <div className="contact-box">(555) 123-4567</div>
        </div>
      </section>
    </div>
  );
}
