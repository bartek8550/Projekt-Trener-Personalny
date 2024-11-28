import React from 'react';
import './../../index.css';
import Footer from './../../Components/Footer/Footer';
import Navbar from './../../Components/Navbar/Navbar';
import HeaderOthers from './../../Components/HeaderOthers/HeaderOthers';
import Products from './../../Components/Products/Products';

const Shop = () => {
  return (
    <div>
      <HeaderOthers />
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
};

export default Shop;
