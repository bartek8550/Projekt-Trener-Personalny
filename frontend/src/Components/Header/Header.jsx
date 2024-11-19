import React from 'react';
import '../../index.css';
import headerMan from '../../IMG/headerMan.png';
import navbar from '../../IMG/navbar.jpg';

const Header = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[75vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${navbar})` }}
    >
      <div className="absolute flex flex-col items-center text-center text-white mt-[10vh]">
        <img
          src={headerMan}
          alt="header man"
          className="w-[65vh] object-cover mb-4"
        ></img>
      </div>

      <div className="absolute flex flex-col items-center top-[39vh] text-white">
        <h1 className="text-7xl font-bold text-pColor mr-[33vh]">TRENER</h1>
        <h1 className="text-7xl font-bold ml-[31vh]">PERSONALNY</h1>
      </div>
    </div>
  );
};

export default Header;
