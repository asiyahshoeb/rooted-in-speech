// src/App.js
import React, { useState } from 'react';
import Nav from './Navbar';
import Home from './Home';
import About from './About';
import More from './MoreInfo';
import Behavior from './BehaviorConsultation';  // <-- new page
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About />;
      case 'more':
        return <More />;
      case 'behavior':
        return <Behavior />;   // <-- new tab
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="App">
      <Nav setActivePage={setActivePage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
