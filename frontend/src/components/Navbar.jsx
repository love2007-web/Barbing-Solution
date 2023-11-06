import React from 'react'
import logo from '../images/logo.png'
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Navbar = () => {
  return (
    <>
      <nav className="sticky">
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