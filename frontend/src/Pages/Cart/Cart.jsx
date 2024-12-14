import React from 'react';
import './../../index.css';
import Footer from './../../Components/Footer/Footer';
import Navbar from './../../Components/Navbar/Navbar';
import HeaderOthers from './../../Components/HeaderOthers/HeaderOthers';
import CartComponent from '../../Components/CartComponent/CartComponent';

const Cart = () => {
  return (
    <div>
      <HeaderOthers />
      <Navbar />
      <CartComponent />
      <Footer />
    </div>
  );
};

export default Cart;
