import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';
import MockupContent from'./MockupContent';
import './MockupApp.scss';

const MockupApp = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <MockupContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MockupApp;