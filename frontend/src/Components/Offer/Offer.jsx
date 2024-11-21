import React from 'react';
import '../../index.css';
import apple from '../../IMG/apple.png';
import biceps from '../../IMG/biceps.png';

function Offer() {
  return (
    <div className="bg-offerBackgroundImg h-max">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-row flex-wrap mt-[15vh] mb-[3vh]">
          <div className="basis-full flex justify-items-center">
            <p className="text-white">W taki sposób pomagam podopopiecznym</p>
          </div>
          <div className="basis-1/2 text-white">
            <img src={apple} alt="" className="max-h-16"></img>
            <h1>Plany dietetyczne</h1>
            <p>
              Każdy plan jest opracowany tak, by dostarczał wszystkich
              składników odżywczych i minerałów niezbędnych do prawidłowego
              funkcjonowania organizmu i lepszego samopoczucia.
            </p>
          </div>
          <div className="basis-1/2 text-white">
            <img src={biceps} alt="" className="max-h-16"></img>
            <h1>Plany treningowe</h1>
            <p>
              Trening nie musi być nudny! Każdy plan zawiera starannie dobrane,
              różnorodne ćwiczenia, dzięki czemu jest niezwykle skuteczny.
              Realizowanie takiego planu sprawia, że z przyjemnością pokonujesz
              kolejne kroki na drodze do wymarzonej sylwetki.{' '}
            </p>
          </div>
          <div className="basis-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
