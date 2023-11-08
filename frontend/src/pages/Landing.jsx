import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';

const Landing = () => {
  return (
    <div>
      <div className="fixed w-full z-[99]">
        <Navbar />
      </div>
      <Hero />
      <Introduction />
    </div>
  );
}

export default Landing