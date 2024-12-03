import React from "react";
import "../../index.css";
import { motion } from "framer-motion";

const AboutMeFigures = () => {
  return (
    <div>
      <div>
        <hr className="border-1 border-[#000000]"></hr>
      </div>
      <div className="flex flex-row max-w-6xl mx-auto px-1 mt-[3vh] mb-[3.5vh]">
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ y: "0", opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, duration: 1.5 }}
          viewport={{ once: true }}
          className="basis-1/3 flex flex-col justify-center items-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold lg:text-4xl xl:text-5xl"
          >
            10
          </motion.p>
          <p className="text-center text-pColor font-bold text-[10px] mt-1 px-1 sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
            LAT DOŚWIADCZENIA TRENINGOWEGO
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ y: "0", opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, duration: 1.5 }}
          viewport={{ once: true }}
          className="basis-1/3 flex flex-col justify-center items-center"
        >
          <p className="text-3xl font-semibold lg:text-4xl xl:text-5xl">676</p>
          <p className="text-center text-pColor font-bold text-[10px] mt-1 px-1 sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
            PODOPIECZNYCH KTÓRZY MI ZAUFALI
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ y: "0", opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, duration: 1.5 }}
          viewport={{ once: true }}
          className="basis-1/3 flex flex-col justify-center items-center"
        >
          <p className="text-3xl font-semibold lg:text-4xl xl:text-5xl">100%</p>
          <p className="text-center text-pColor font-bold text-[10px] mt-1 px-1 sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
            ZADOWOLENIA PODOPIECZNYCH
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeFigures;
