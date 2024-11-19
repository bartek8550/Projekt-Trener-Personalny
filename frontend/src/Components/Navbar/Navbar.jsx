import React from 'react';
import '../../index.css';
import logoTP from '../../IMG/logoTP.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent p-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="w-10 h-10 ml-5">
            <img src={logoTP} alt="" className="object-contain"></img>
          </span>
          <div className="flex space-x-6 text-white">
            <a href="#">Sklep</a>
            <a href="#">Koszyk</a>
            <a href="#">Login</a>
            <a href="#">Rejestracja</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
