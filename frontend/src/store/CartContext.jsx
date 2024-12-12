import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext(null);

const CartContextProvider = (props) => {
  const [cartItems, setCartitems] = useState({});
  const url = 'http://localhost:3000';
  const [token, setToken] = useState(false);
  const [product_list, setProductList] = useState([]);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartitems((prev) => ({ ...prev, [itemId]: 1 }));
      alert('Dodano do koszyka');
    } else {
      alert('Możesz zamówić tylko jeden produkt tego rodzaju');
    }
  };

  const removeFromCart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    alert('Usunięto z koszyka');
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    product_list,
    cartItems,
    setCartitems,
    addToCart,
    removeFromCart,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
