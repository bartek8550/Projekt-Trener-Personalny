import React, { useEffect, useState } from 'react';
import '../../index.css';
import logoTP from '../../IMG/logoTP3.png';

const Navbar = () => {
  const [roll, setRoll] = useState(false);

  //służy do sprawdzenia czy kliknięte menu, jeśli tak to uruchamia jedne właściwości,
  //czyli włącza navbar dla mobile a jeśli nie było kliknięte to nie włącza dla mobile.
  const [menuOpen, setMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 p-4 transition duration-300 ${
        roll || menuOpen ? 'bg-mainColor' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="w-12 h-12 ml-5">
            <a href="#">
              <img
                src={logoTP}
                alt=""
                href="#"
                className="pt-1 hover:scale-105 transition-all"
              ></img>
            </a>
          </span>
          <ul className="hidden sm:flex space-x-6 text-white">
            <a href="#">
              <li className="p-2 hover:bg-pColor rounded-sm transition-all">
                Sklep
              </li>
            </a>
            <a href="#">
              <li className="p-2 hover:bg-pColor rounded-sm transition-all">
                Koszyk
              </li>
            </a>
            <a href="#">
              <li className="p-2 hover:bg-pColor rounded-sm transition-all">
                Login
              </li>
            </a>
            <a href="#">
              <li className="p-2 hover:bg-pColor rounded-sm transition-all">
                Rejestracja
              </li>
            </a>
          </ul>
          <i
            className="bx bx-menu !block pr-4 sm:!hidden text-white text-5xl  cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>
          <div
            className={`absolute xl:hidden top-20 left-0 w-full bg-mainColor mb-5 flex flex-col items-center gap-5 font-medium text-lg transform transistion-transform ${
              menuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transition: 'transform 0.4s ease, opacity 0.3s ease' }}
          >
            <a href="#">
              <li className="list-none w-full text-center p-3 hover:bg-pColor text-white transition-all">
                Sklep
              </li>
            </a>
            <a href="#">
              <li className="list-none w-full text-center p-3 hover:bg-pColor text-white transition-all">
                Koszyk
              </li>
            </a>
            <a href="#">
              <li className="list-none w-full text-center p-3 hover:bg-pColor text-white transition-all">
                Login
              </li>
            </a>
            <a href="#">
              <li className="list-none w-full text-center p-3 hover:bg-pColor text-white transition-all">
                Rejestracja
              </li>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
