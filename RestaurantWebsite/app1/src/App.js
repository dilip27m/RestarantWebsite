import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Menu from './components/Menu';
import ChefSection from './components/Chefs';
import About from './components/About';
import Reviews from './components/Reviews';
import Locations from './components/Locations';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      
      <Offer />
      <Menu />
      <ChefSection />
      <About />
      <Reviews />
      <Locations />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
