import React from "react";
import "../../index.css";
import apple from "../../IMG/apple.png";
import biceps from "../../IMG/biceps.png";
import { motion } from "framer-motion";

function Offer() {
  return (
    <div className="bg-offerBackgroundImg h-max">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-row flex-wrap mb-[3vh]">
          <div className="basis-full flex mt-[10vh] mb-[10vh] justify-center">
            <motion.p
              initial={{ opacity: 0, y: "-50px" }}
              whileInView={{ y: "0", opacity: 1 }}
              transition={{ type: "spring", stiffness: 30, duration: 2.5 }}
              viewport={{ once: true }}
              className="text-center text-white text-3xl font-bold lg:text-4xl"
            >
              W taki sposób pomagam podopiecznym
            </motion.p>
          </div>
          <div className="basis-full text-white mt-[3vh] mb-[15vh] flex flex-wrap flex-row justify-between gap-x-8">
            <motion.div
              initial={{ opacity: 0, x: "-150px" }}
              whileInView={{ x: "0", opacity: 1 }}
              transition={{ type: "spring", stiffness: 30, duration: 2 }}
              viewport={{ once: true }}
              className="basis-full sm:basis-1/3 flex flex-col items-center"
            >
              <img src={apple} alt="" className="max-h-20 mb-4"></img>
              <h1 className="text-2xl font-semibold mb-2">Plany dietetyczne</h1>
              <p className="text-center">
                Każdy plan jest opracowany tak, by dostarczał wszystkich
                składników odżywczych i minerałów niezbędnych do prawidłowego
                funkcjonowania organizmu i lepszego samopoczucia.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "150px" }}
              whileInView={{ x: "0", opacity: 1 }}
              transition={{ type: "spring", stiffness: 30, duration: 2 }}
              viewport={{ once: true }}
              className="basis-full pt-[5vh] sm:basis-1/3 sm:pt-0 flex flex-col items-center"
            >
              <img src={biceps} alt="" className="max-h-20 mb-4"></img>
              <h1 className="text-2xl font-semibold mb-2">Plany treningowe</h1>
              <p className="text-center">
                Trening nie musi być nudny! Każdy plan zawiera starannie
                dobrane, różnorodne ćwiczenia, dzięki czemu jest niezwykle
                skuteczny. Realizowanie takiego planu sprawia, że z
                przyjemnością pokonujesz kolejne kroki na drodze do wymarzonej
                sylwetki.
              </p>
            </motion.div>
          </div>

          <div className="basis-full flex flex-row justify-center mb-[10vh]">
            <a href="#" className="">
              <button
                type="button"
                className=" flex items-center justify-center
    motion-safe:hover:-translate-y-0.5 
    motion-safe:transition 
    bg-pColor text-white font-medium
    text-[0.8rem] h-[3.3rem] w-[9.5rem]           
    sm:text-[0.85rem] sm:h-[3.5rem] sm:w-[10rem]
    lg:text-[1rem] lg:h-[4rem] lg:w-[11rem]
    "
              >
                ZOBACZ PRODUKTY
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
