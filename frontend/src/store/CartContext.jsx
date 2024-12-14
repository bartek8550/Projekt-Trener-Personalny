import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const CartContext = createContext(null);

const CartContextProvider = (props) => {
  const [cartItems, setCartitems] = useState({});
  const url = 'http://localhost:3000';
  const [token, setToken] = useState('');
  const [product_list, setProductList] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartitems((prev) => ({ ...prev, [itemId]: 1 }));
      alert('Dodano do koszyka');
    } else {
      alert('Możesz zamówić tylko jeden produkt tego rodzaju');
    }
    if (token) {
      await axios.post(url + '/api/v1/add', { itemId }, { headers: { token } });
    }
  };

  const removeFromCart = async (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    alert('Usunięto z koszyka');
    if (token) {
      await axios.post(
        url + '/api/v1/remove',
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getTotalCart = () => {
    let sum = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemI = product_list.find((product) => product._id === item);
        if (itemI) {
          sum += itemI.price;
        }
      }
    }
    return sum;
  };

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(url + '/api/v1/products');

      const products = await res.json();
      setProductList(products.data.products);
    }

    fetchProducts();
  }, []);

  const loadCart = async (token) => {
    const res = await axios.post(
      url + '/api/v1/getCart',
      {},
      { headers: { token } }
    );
    setCartitems(res.data.cartData);
  };

  useEffect(() => {
    async function load() {
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
        await loadCart(localStorage.getItem('token'));
      }
    }
    load();
  }, []);

  const contextValue = {
    product_list,
    cartItems,
    setCartitems,
    addToCart,
    removeFromCart,
    getTotalCart,
    token,
    setToken,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
