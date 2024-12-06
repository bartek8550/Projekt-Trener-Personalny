import React from 'react';
import '../../index.css';
import { motion } from 'framer-motion';
const Ready = () => {
  return (
    <div className="bg-gymBackgroundImg bg-center h-max">
      <div className="max-w-3xl mx-auto px-4">
        <div className="basis-full flex justify-center pt-[10vh] pb-[7vh]">
          <motion.p
            initial={{ opacity: 0, y: '-150px' }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 20,
              duration: 4,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="font-bold text-white text-center text-4xl lg:text-5xl "
          >
            Gotowy, by zrobić pierwszy
            <br /> krok w stronę lepszej wersji
            <br /> siebie?
          </motion.p>
        </div>
        <div className="basis-full flex flex-row justify-center items-center pb-[10vh]">
          <a href="#" className="">
            <button
              type="button"
              className=" flex items-center justify-center
    motion-safe:hover:-translate-y-0.5 
    motion-safe:transition 
    bg-white text-black font-medium
    text-[1rem] h-[3.5rem] w-[9rem]           
    lg:text-[1.10rem] lg:h-[3.2rem] lg:w-[12.0rem]
    "
            >
              ZACZYNAJMY!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ready;
