import React, { useState } from 'react';

import Navbar from './Navbar';
import Hero from './hero';
import Services from './Services';
import About from './About';
import Testimonials from './Testmonials';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;