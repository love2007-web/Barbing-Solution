import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Landing = () => {
  return (
    <div>
      <div className='fixed w-full'>
        <Navbar />
      </div>
      <Hero />
    </div>
  );
}

export default Landing