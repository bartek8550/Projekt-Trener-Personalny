import React from 'react';
import '../../index.css';
import kom1photo from '../../IMG/kom1.png';
import kom2photo from '../../IMG/kom2.png';
import comment1 from '../../IMG/comment1.png';
import comment2 from '../../IMG/comment2.png';
import { motion } from 'framer-motion';

const Rates = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-row flex-wrap mb-[3vh] sm:mb-[10vh]  ">
        <div className="basis-full flex justify-center sm:mt-[3vh] mb-[3vh] lg:mt-[10vh] mb-[3vh] ">
          <motion.p
            initial={{ opacity: 0, y: '-100px' }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 30,
              duration: 1.5,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="font-bold text-center text-3xl lg:text-4xl "
          >
            Tak mnie oceniają podopieczni!
          </motion.p>
        </div>
        <div className="basis-full flex flex-wrap flex-row mb-[2vh] sm:mt-[3vh] mb-[7vh] lg:mt-[7vh] mb-[15vh] ">
          <div className="basis-full flex flex-col items-center p-1 sm:basis-1/2">
            <motion.img
              initial={{ opacity: 0, x: '-150px' }}
              whileInView={{ x: '0', opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 50,
                duration: 2.5,
                delay: 0.3,
              }}
              viewport={{ once: true }}
              src={comment1}
              alt=""
              className="pt-5 w-[20rem] sm:w-[25rem] sm:mb-4"
            ></motion.img>
            <div className="flex flex-row flex-wrap justify-center items-center">
              <motion.h1
                initial={{ opacity: 0, y: '-100px' }}
                whileInView={{ y: '0', opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 30,
                  duration: 1.5,
                  delay: 0.3,
                }}
                viewport={{ once: true }}
                className="font-medium mb-2 mx-2 text-[22px] md:hidden"
              >
                Aleksander
                <br />
                Niesłuchowski
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, x: '-100px' }}
                whileInView={{ x: '0', opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 40,
                  duration: 1.5,
                  delay: 0.3,
                }}
                viewport={{ once: true }}
                className="hidden md:inline font-medium mb-2 mx-2 text-[20px] lg:text-[24px]"
              >
                Aleksander Niesłuchowski
              </motion.h1>
              <motion.img
                initial={{ opacity: 0, x: '100px' }}
                whileInView={{ x: '0', opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 50,
                  duration: 1.5,
                  delay: 0.3,
                }}
                viewport={{ once: true }}
                src={kom1photo}
                alt=""
                className="mb-5 max-h-28"
              />
            </div>
          </div>
          <div className="basis-full flex flex-col items-center p-1 sm:basis-1/2">
            <motion.img
              initial={{ opacity: 0, x: '150px' }}
              whileInView={{ x: '0', opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 50,
                duration: 2.5,
                delay: 0.3,
              }}
              viewport={{ once: true }}
              src={comment2}
              alt=""
              className="mb-4 pt-5 w-[20rem] sm:w-[25rem]"
            ></motion.img>

            <div className="flex flex-row flex-wrap justify-center items-center">
              <motion.h1
                initial={{ opacity: 0, x: '-100px' }}
                whileInView={{ x: '0', opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 40,
                  duration: 1.5,
                  delay: 0.3,
                }}
                viewport={{ once: true }}
                className="font-medium mb-2 mx-2 text-[22px] md:hidden"
              >
                Katarzyna
                <br />
                Zielińska
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, x: '-100px' }}
                whileInView={{ x: '0', opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 40,
                  duration: 1.5,
                  delay: 0.3,
                }}
                viewport={{ once: true }}
                className="hidden md:inline font-medium mb-2 mx-2 text-[20px] lg:text-[24px]"
              >
                Katarzyna Zielińska
              </motion.h1>
              <motion.img
                initial={{ opacity: 0, x: '100px' }}
                whileInView={{ x: '0', opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 50,
                  duration: 1.5,
                  delay: 0.3,
                }}
                viewport={{ once: true }}
                src={kom2photo}
                alt=""
                className="mb-5 max-h-28"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rates;
