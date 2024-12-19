import React, { useContext, useState } from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../store/CartContext';

const LoginElement = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setToken } = useContext(CartContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios({
        method: 'POST',
        url: 'https://projekt-trener-personalny.onrender.com/api/v1/login', //https://projekt-trener-personalny.onrender.com //http://localhost:3000
        data: {
          email,
          password,
        },
      });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      navigate('/', { replace: true });
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message;

        alert(errorMessage);
      } else if (error.request) {
        alert('Nie udało się nawiązać połączenia z serwerem.');
      } else {
        alert(error);
      }
    }
  };
  return (
    <div className="max-w-6xl min-h-[43.5vh] mx-auto pt-[5vh] pb-[5vh] flex flex-row flex-wrap sm:flex-nowrap">
      <form
        onSubmit={handleSubmit}
        className="basis-full items-start sm:basis-1/2 mx-4 flex flex-col flex-wrap justify-center sm:items-end mr-5"
      >
        <div className="flex flex-col items-left mb-2">
          <h1 className="mr-2">Adres email:</h1>
          <input
            name="email"
            className="border border-solid border-black w-[200px] md:w-[300px] pl-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col items-left mb-2">
          <h1 className="mr-2">Hasło:</h1>
          <input
            name="password"
            className="border border-solid border-black w-[200px] md:w-[300px] pl-1"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 justify-items-start w-[200px] md:w-[300px]">
          <button
            type="submit"
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
      </form>
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
