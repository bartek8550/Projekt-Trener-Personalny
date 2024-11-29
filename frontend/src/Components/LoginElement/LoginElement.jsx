import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

const LoginElement = () => {
  return (
    <div className="max-w-6xl min-h-[43.5vh] mx-auto pt-[5vh] pb-[5vh] flex flex-row flex-wrap sm:flex-nowrap">
      <div className="basis-full items-start sm:basis-1/2 mx-4 flex flex-col flex-wrap justify-center sm:items-end mr-5">
        <div className="flex flex-col items-left mb-2">
          <h1 className="mr-2">Adres email:</h1>
          <input
            className="border border-solid border-black w-[200px] md:w-[300px]"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col items-left mb-2">
          <h1 className="mr-2">Hasło:</h1>
          <input
            className="border border-solid border-black w-[200px] md:w-[300px]"
            type="password"
            required
          />
        </div>
        <div className="grid grid-cols-2 justify-items-start w-[200px] md:w-[300px]">
          <button
            type="button"
            className="
          flex items-center justify-center
          motion-safe:hover:-translate-y-0.5 
          motion-safe:transition 
          bg-pColor text-white font-medium shadow-btn rounded-md
          text-[0.72rem] h-[2.1rem] w-[7rem]
          sm:text-[0.85rem] sm:h-[2.3rem] sm:w-[8.5rem]
          lg:text-[0.90rem] lg:h-[2.5rem] lg:w-[10rem]
        "
          >
            Zaloguj
          </button>
        </div>
      </div>
      <div className="basis-full sm:basis-1/2 flex flex-col justify-center ml-5">
        <p>Nie masz konta?</p>
        <Link to="/registration">
          <button
            type="button"
            className=" flex items-center justify-center
    motion-safe:hover:-translate-y-0.5 
    motion-safe:transition 
    bg-pColor text-white font-medium shadow-btn rounded-md mt-1
    text-[0.72rem] h-[2.1rem] w-[7rem]           
    sm:text-[0.85rem] sm:h-[2.3rem] sm:w-[8.5rem]
    lg:text-[0.90rem] lg:h-[2.5rem] lg:w-[10rem]
    "
          >
            Rejestracja
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginElement;
