import React from 'react';
import '../../index.css';
import navbar from '../../IMG/navbar.jpg';
import { useLocation } from 'react-router-dom'; //Dzięki temu wiemy gdzie jesteśmy na jakiej stronie
const HeaderOthers = () => {
  const loc = useLocation();
  const pages = {
    '/shop': 'Plany dietetyczne i treningowe',
    '/cart': 'Zamówienie',
    '/login': 'Logowanie',
    '/registration': 'Rejestracja',
  };

  let title = pages[loc.pathname];

  return (
    <div
      className="relative bg-cover bg-center h-[20rem] flex items-center justify-center"
      style={{ backgroundImage: `url(${navbar})` }}
    >
      <div className="absolute flex flex-col items-center top-[10rem] text-white">
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl  lg:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeaderOthers;
