import React, { useEffect, useState } from 'react';
import '../../index.css';
import logoTP from '../../IMG/logoTP.png';

const Navbar = () => {
  const [roll, setRoll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const value = 0.2 * window.innerHeight;
      if (window.scrollY >= value) {
        setRoll(true);
      } else {
        setRoll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        roll
          ? 'fixed top-0 left-0 w-full z-50 bg-mainColor p-4 transition duration-500'
          : 'fixed top-0 left-0 w-full z-50 bg-transparent p-4 transition duration-500'
      }
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="w-10 h-10 ml-5">
            <img src={logoTP} alt="" href="#" className="pb-[15px]"></img>
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
