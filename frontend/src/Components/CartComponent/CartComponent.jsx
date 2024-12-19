import React, { useContext } from 'react';
import { CartContext } from '../../store/CartContext';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const CartComponent = () => {
  const { cartItems, product_list, removeFromCart, getTotalCart, token } =
    useContext(CartContext);

  const hasItemsInCart = Object.values(cartItems).some((count) => count > 0);
  const placeOrder = async () => {
    let orderItems = [];
    product_list.map((product) => {
      if (cartItems[product._id] > 0) {
        orderItems.push({
          ...product,
          quantity: cartItems[product._id],
        });
      }
    });

    if (orderItems.length === 0) {
      alert('Koszyk jest pusty!');
      return;
    }

    try {
      const response = await axios.post(
        'https://projekt-trener-personalny.onrender.com/api/v1/order', //http://localhost:3000 https://projekt-trener-personalny.onrender.com
        {
          userID: jwtDecode(token)._id, // Wydobywanie ID użytkownika z tokena
          products: orderItems,
          count: getTotalCart(),
        },
        { headers: { token } }
      );

      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        console.error('Niepowodzenie:', response.data.message);
        alert('Wystąpił problem przy składaniu zamówienia.');
      }
    } catch (err) {
      console.error('Błąd żądania:', err);
      alert('Błąd podczas przetwarzania zamówienia.');
    }
  };
  return (
    <div className="max-w-5xl min-h-[43.5vh] mx-auto pt-[5vh] pb-[5vh] flex justify-center items-center">
      {hasItemsInCart ? (
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-col">
            <div className="grid grid-cols-[auto,2fr,1fr] text-2xl pb-2">
              <p className="col-start-1 text-left">Produkt</p>
              <p className="col-start-3 text-right mr-1">Cena</p>
            </div>

            <hr className="border-1 border-[#000000] mb-5" />
            {product_list.map((item) => {
              if (cartItems[item._id] > 0) {
                return (
                  <>
                    <div className="grid grid-cols-[auto,2fr,1fr] text-xl mb-5">
                      <p
                        className="text-sm cursor-pointer flex items-center"
                        onClick={() => removeFromCart(item._id)}
                      >
                        x
                      </p>
                      <p className="justify-self-start text-left ml-3">
                        {item.title} {item.detail}
                      </p>
                      <p className="text-pColor text-right mr-1">
                        {item.price} zł
                      </p>
                    </div>
                    <hr className="border-1 border-[#000000] mb-5" />
                  </>
                );
              }
            })}
          </div>

          <div className="flex flex-col justify-center align-center items-center ml-5">
            <div className="flex flex-col border border-[#111111] rounded-md">
              <p className="text-center mt-1 font-bold">PODSUMOWANIE</p>
              <p className="text-center mb-2 mt-5 mx-3 font-bold">
                Łącznie:{' '}
                <span className="text-pColor text-xl">
                  {getTotalCart().toFixed(2)} zł
                </span>
              </p>
            </div>
            <button
              type="button"
              className="
          flex items-center justify-center 
          motion-safe:hover:-translate-y-0.5 
          motion-safe:transition 
          bg-pColor text-white font-medium shadow-btn rounded-md mt-2
          text-[0.72rem] h-[2.1rem] w-[7rem]
          sm:text-[0.85rem] sm:h-[2.3rem] sm:w-[8.5rem]
          lg:text-[0.90rem] lg:h-[2.5rem] lg:w-[10rem]
        "
              onClick={placeOrder}
            >
              Zamawiam i płacę
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-5xl font-bold">Pusty koszyk</div>
      )}
    </div>
  );
};

export default CartComponent;
