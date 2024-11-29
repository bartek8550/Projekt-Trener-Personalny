import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

const RegisterElement = () => {
  return (
    <div className="max-w-6xl min-h-[43.5vh] mx-auto pt-[5vh] pb-[5vh] flex flex-row flex-wrap justify-center">
      <div className="flex flex-row flex-wrap items-center justify-center">
        <div className="basis-full grid grid-cols-2 content-center ">
          <div className="flex justify-end mr-2 mb-2">
            <div className="flex flex-col">
              <h1 className="mr-2">Imię:</h1>
              <input
                className="border border-solid border-black w-[150px] md:w-[300px] pl-1"
                type="text"
                required
              />
            </div>
          </div>

          <div className="ml-2 mb-2">
            <div className="flex flex-col">
              <h1 className="mr-2">Nazwisko:</h1>
              <input
                className="border border-solid border-black w-[150px] md:w-[300px] pl-1"
                type="text"
                required
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex justify-center">
              <div className="grid grid-cols-2">
                <div className="flex flex-col mr-2">
                  <h1 className="mr-2">Adres email:</h1>
                  <input
                    className="border border-solid border-black w-[150px] md:w-[300px] pl-1"
                    type="email"
                    required
                  />
                </div>
                <div className="flex flex-col ml-2">
                  <h1 className="mr-2">Hasło:</h1>
                  <input
                    className="border border-solid border-black w-[150px] md:w-[300px] pl-1"
                    type="password"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex justify-end mt-2">
              <div className="flex flex-col">
                <button
                  type="button"
                  className="
          flex items-center justify-center
          motion-safe:hover:-translate-y-0.5 
          motion-safe:transition 
          bg-pColor text-white font-medium shadow-btn rounded-md mb-1
          text-[0.72rem] h-[2.1rem] w-[7rem]
          sm:text-[0.85rem] sm:h-[2.3rem] sm:w-[8.5rem]
          lg:text-[0.90rem] lg:h-[2.5rem] lg:w-[10rem]
        "
                >
                  Zarejestruj
                </button>
                <Link className="underline text-center" to="/login">
                  Masz już konto?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterElement;
