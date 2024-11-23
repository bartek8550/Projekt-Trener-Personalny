import React from 'react';
import '../../index.css';
import apple from '../../IMG/apple.png';
import biceps from '../../IMG/biceps.png';

function Offer() {
  return (
    <div className="bg-offerBackgroundImg h-max">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-row flex-wrap mb-[3vh]">
          <div className="basis-full flex mt-[10vh] mb-[10vh] justify-center">
            <p className="text-white text-4xl font-bold">W taki sposób pomagam podopiecznym</p>
          </div>
          <div className='basis-full text-white mt-[7vh] mb-[15vh] flex flex-wrap flex-row justify-between gap-x-8'>
            <div className="basis-1/3 flex flex-col items-center">
              <img src={apple} alt="" className="max-h-20 mb-4"></img>
              <h1 className='text-2xl font-semibold mb-2'>Plany dietetyczne</h1>
              <p className='text-center'>
              Każdy plan jest opracowany tak, by dostarczał wszystkich
              składników odżywczych i minerałów niezbędnych do prawidłowego
              funkcjonowania organizmu i lepszego samopoczucia.
              </p>
            </div>
            <div className="basis-1/3 flex flex-col items-center">
              <img src={biceps} alt="" className="max-h-20 mb-4"></img>
              <h1 className='text-2xl font-semibold mb-2'>Plany treningowe</h1>
              <p className='text-center'>
              Trening nie musi być nudny! Każdy plan zawiera starannie dobrane, różnorodne ćwiczenia, dzięki czemu jest niezwykle skuteczny. Realizowanie takiego planu sprawia, że z przyjemnością pokonujesz kolejne kroki na drodze do wymarzonej sylwetki. 
              </p>
            </div>
          </div>
        
          <div className="basis-full flex flex-row justify-center mb-[10vh]">
            <a href="#" className="">
              <button
                type="button"
                className="motion-safe:hover:-translate-y-0.5 motion-safe:transition bg-pColor text-white font-semibold p-4"
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
