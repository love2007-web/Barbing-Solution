import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <nav className={`sticky ${scrolled ? 'bg-black transition-all duration-700' : ''}`}>
        <div className="flex items-center justify-between px-5">
          <img className="w-[70px]" src={logo} alt="" />
          <div className='md:hidden text-white'>
            <MenuRoundedIcon/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar