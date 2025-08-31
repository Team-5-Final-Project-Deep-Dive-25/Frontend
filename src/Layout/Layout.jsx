import React from 'react'
import './layout.css'
import { Outlet } from "react-router-dom";
import Header from './../common/Header/Header'
import Footer from './../common/Footer/Footer'

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Footer/>
      
    </div>
  );
}

export default Layout