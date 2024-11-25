import React from "react";
import "./../../index.css";
import Navbar from "./../../Components/Navbar/Navbar";
import Header from "./../../Components/Header/Header";
import AboutMe from "./../../Components/AboutMe/AboutMe";
import AboutMeFigures from "./../../Components/AboutMeFigures/AboutMeFigures";
import Offer from "./../../Components/Offer/Offer";
import Rates from "./../../Components/Rates/Rates";
import Transitions from "./../../Components/Transitions/Transitions";
import Ready from "./../../Components/Ready/Ready";
import Footer from "./../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutMe />
      <AboutMeFigures />
      <Offer />
      <Rates />
      <Transitions />
      <Ready />
      <Footer />
    </div>
  );
};

export default Home;
