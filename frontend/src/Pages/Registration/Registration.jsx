import React from 'react';
import './../../index.css';
import Footer from './../../Components/Footer/Footer';
import Navbar from './../../Components/Navbar/Navbar';
import HeaderOthers from './../../Components/HeaderOthers/HeaderOthers';
import RegisterElement from './../../Components/RegisterElement/RegisterElement';
const Registration = () => {
  return (
    <div>
      <HeaderOthers />
      <Navbar />
      <RegisterElement />
      <Footer />
    </div>
  );
};

export default Registration;
