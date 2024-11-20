import React from 'react';
import './../../index.css';
import Navbar from './../../Components/Navbar/Navbar';
import Header from './../../Components/Header/Header';
import AboutMe from './../../Components/AboutMe/AboutMe';
import AboutMeFigures from './../../Components/AboutMeFigures/AboutMeFigures';

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutMe />
      <AboutMeFigures />
    </div>
  );
};

export default Home;
