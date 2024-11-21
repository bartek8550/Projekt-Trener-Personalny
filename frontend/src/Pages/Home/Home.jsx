import React from 'react';
import './../../index.css';
import Navbar from './../../Components/Navbar/Navbar';
import Header from './../../Components/Header/Header';
import AboutMe from './../../Components/AboutMe/AboutMe';
import AboutMeFigures from './../../Components/AboutMeFigures/AboutMeFigures';
import Offer from './../../Components/Offer/Offer';

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutMe />
      <AboutMeFigures />
      <Offer />
    </div>
  );
};

export default Home;
