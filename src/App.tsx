import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark text-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
    </div>
  );
}

export default App;