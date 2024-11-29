import React from 'react';
import './../../index.css';
import Footer from './../../Components/Footer/Footer';
import Navbar from './../../Components/Navbar/Navbar';
import HeaderOthers from './../../Components/HeaderOthers/HeaderOthers';
import LoginElement from './../../Components/LoginElement/LoginElement';
const Login = () => {
  return (
    <div>
      <HeaderOthers />
      <Navbar />
      <LoginElement />
      <Footer />
    </div>
  );
};

export default Login;
