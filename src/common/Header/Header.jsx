import React from 'react'
import './header.css'
import Info from './Info/Info'
import Navbar from './Navbar/Navbar'
const Header = () => {
  return <div className="Header">
    <Info/>
    <Navbar/>
  </div>;
}

export default Header