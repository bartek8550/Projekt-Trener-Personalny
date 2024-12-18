import React from 'react';
import './../../index.css';
import Footer from './../../Components/Footer/Footer';
import Navbar from './../../Components/Navbar/Navbar';
import HeaderOthers from './../../Components/HeaderOthers/HeaderOthers';
import VerifyComponent from './../../Components/VerifyComponent/VerifyComponent';

const Verify = () => {
  return (
    <div>
      <HeaderOthers />
      <Navbar />
      <VerifyComponent />
      <Footer />
    </div>
  );
};

export default Verify;
