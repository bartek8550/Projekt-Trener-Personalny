import React, { useState, useContext } from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../store/CartContext';

const RegisterElement = () => {
  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setToken } = useContext(CartContext);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios({
        method: 'POST',
        url: 'https://projekt-trener-personalny.onrender.com/api/v1/signup', //https://projekt-trener-personalny.onrender.com //http://localhost:3000
        data: {
          username,
          surname,
          email,
          password,
        },
      });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      navigate('/', { replace: true });
    } catch (error) {
      if (error.response) {
        const errorMessage =
          error.response.data.errors || error.response.data.message;
        if (errorMessage.includes('Users validation failed')) {
          alert('Hasło musi mieć co najmniej 8 znaków');
        } else if (errorMessage) {
          alert(errorMessage);
        }
      } else if (error.request) {
        alert('Nie udało się nawiązać połączenia z serwerem.');
      }
    }
  };
  return (
    <div className="max-w-6xl min-h-[43.5vh] mx-auto pt-[5vh] pb-[5vh] flex flex-row flex-wrap justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row flex-wrap items-center justify-center"
      >
        <div className="basis-full grid grid-cols-2 content-center ">
          <div className="flex justify-end mr-2 mb-2">
            <div className="flex flex-col">
              <h1 className="mr-2">Imię:</h1>
              <input
                className="border border-solid border-black w-[150px] md:w-[300px] pl-1"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                name="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
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
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col ml-2">
                  <h1 className="mr-2">Hasło:</h1>
                  <input
                    className="border border-solid border-black w-[150px] md:w-[300px] pl-1"
                    value={password}
                    name="pasword"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
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
                  type="submit"
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
      </form>
    </div>
  );
};

export default RegisterElement;
