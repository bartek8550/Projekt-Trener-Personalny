import React from 'react';
import '../../index.css';
import face from '../../IMG/face.jpeg';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="sm:flex flex-row flex-wrap mt-[15vh] mb-[3vh]">
        <div className="hidden sm:block sm:basis-1/2 pr-5 pl-5">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            viewport={{ once: true }}
            src={face}
            alt=""
            className="hidden sm:block sm:max-h-full sm:shadow-3xl"
          ></motion.img>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
          className="basis-1/2 pl-5 pr-5"
        >
          <h1 className="text-3xl font-bold mb-10">
            Dlaczego warto mi zaufać?
          </h1>
          <p className="text-justify font-small">
            Jestem trenerem personalnym z ponad 10-letnim doświadczeniem, który
            pomaga swoim podopiecznym osiągać cele, o jakich marzą. Specjalizuję
            się w treningu siłowym, poprawie kondycji i treningach
            funkcjonalnych. <br />
            <br />
            Każdy plan treningowy zawiera ćwiczenia, które bez problemu będziesz
            w stanie wykonać po zapoznaniu się z moimi instrukcjami. Nie musisz
            martwić się jeśli coś będzie nie jasne, ponieważ możesz zawsze
            skontaktować się ze mną poprzez komunikator Messenger. <br />
            <br />
            Moje plany dietetyczne są oparte na precyzyjnie obliczonej liczbie
            kalorii, dzięki czemu wspierają fizjologiczne procesy organizmu.
            Każdy jadłospis jest skonstruowany tak, aby dostarczał niezbędnych
            składników odżywczych, był smaczny i łatwy w przygotowaniu.
            <br />
            <br /> Moja wiedza i pasja sprawiają, że jestem tu, aby motywować i
            wspierać Cię na każdym kroku – Twoje sukcesy są dla mnie największą
            satysfakcją.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 w-full h-[15vh]">
          <div className="flex justify-center items-center col-start-2">
            <a href="#" className="col-start-2 pl-5">
              <button
                type="button"
                className=" flex items-center justify-center
    motion-safe:hover:-translate-y-0.5 
    motion-safe:transition 
    bg-pColor text-white font-medium
    text-[0.8rem] h-[3.3rem] w-[8rem]           
    sm:text-[0.85rem] sm:h-[3.3rem] sm:w-[8.5rem]
    lg:text-[1.10rem] lg:h-[4.5rem] lg:w-[11.5rem]
    "
              >
                ROZPOCZNIJ WSPÓŁPRACE
              </button>
            </a>
          </div>
        </div>
        <div className="basis-full flex justify-center px-5 py-5 sm:hidden">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            viewport={{ once: true }}
            src={face}
            alt=""
            className="max-h-80 shadow-3xl sm:hidden"
          ></motion.img>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
