import React from "react";
import "../../index.css";
import headerMan from "../../IMG/headerMan.png";
import navbar from "../../IMG/navbar.jpg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[75vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${navbar})` }}
    >
      <div className="absolute flex flex-col items-center text-center text-white mt-[10vh]">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          src={headerMan}
          alt="header man"
          className="w-[65vh] object-cover mb-4"
        ></motion.img>
      </div>

      <div className="absolute flex flex-col items-center top-[39vh] text-white">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 30, duration: 1.5 }}
          viewport={{ once: true }}
          className="text-3xl mr-[20vw] font-bold text-pColor sm:text-4xl sm:mr-[20vw] md:text-5xl md:mr-[20vw] lg:text-6xl lg:mr-[18vw] 2xl:text-7xl 2xl:mr-[17vw]"
        >
          TRENER
        </motion.h1>
        <motion.h1
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 30, duration: 1.5 }}
          viewport={{ once: true }}
          className="text-3xl ml-[20vw] font-bold sm:text-4xl sm:ml-[20vw] md:text-5xl md:ml-[20vw] lg:text-6xl lg:ml-[18vw] 2xl:text-7xl 2xl:ml-[17vw]"
        >
          PERSONALNY
        </motion.h1>
      </div>
    </div>
  );
};

export default Header;
