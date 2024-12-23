import React from 'react';
import './MockupApp.scss';
import logo from '../../../public/logo.png'; 

const Header = () => {
  return (
    <header className="header">
     <img src={logo} alt="KPI Dashboard Logo" className="logo" />
     <h2 className='heading'>KPI Dashboard Mockup</h2>
      
    </header>
  );
};

export default Header;